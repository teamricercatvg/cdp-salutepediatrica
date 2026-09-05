#!/usr/bin/env bash
# Da installare sul server: backup locali, con retention di 14 giorni.
set -euo pipefail
umask 077
service_id=nbjf4rky9szio1wij3hlyphb
db="supabase-db-$service_id"
backup_root=/var/backups/cdp-salutepediatrica
mkdir -p "$backup_root"
exec 9>"$backup_root/.lock"
flock -n 9 || exit 0
stamp=$(date -u +%Y%m%dT%H%M%SZ)
work="$backup_root/.incomplete-$stamp"
mkdir "$work"
docker exec "$db" pg_dumpall -U postgres --globals-only > "$work/supabase-globals.sql"
mapfile -t databases < <(docker exec "$db" psql -U postgres -d postgres -Atc 'SELECT datname FROM pg_database WHERE NOT datistemplate ORDER BY datname')
for database in "${databases[@]}"; do
  [[ "$database" =~ ^[a-zA-Z0-9_-]+$ ]] || exit 1
  docker exec "$db" pg_dump -U postgres -Fc "$database" > "$work/$database.dump"
  docker exec -i "$db" pg_restore --list < "$work/$database.dump" > /dev/null
done
docker exec coolify-db pg_dump -U coolify -Fc coolify > "$work/coolify.dump"
tar -czf "$work/configuration.tar.gz" -C / data/coolify/source data/coolify/ssh "data/coolify/services/$service_id" etc/nftables.conf
minio_data=$(docker inspect "supabase-minio-$service_id" --format '{{range .Mounts}}{{if eq .Destination "/data"}}{{.Source}}{{end}}{{end}}')
test -d "$minio_data"
tar -czf "$work/storage.tar.gz" -C "$minio_data" .
tar -tzf "$work/configuration.tar.gz" > /dev/null
tar -tzf "$work/storage.tar.gz" > /dev/null
(cd "$work" && sha256sum *.dump *.sql *.tar.gz > SHA256SUMS)
mv "$work" "$backup_root/$stamp"
find "$backup_root" -mindepth 1 -maxdepth 1 -type d -name '20*T*Z' -mtime +14 -exec rm -rf -- {} +
echo "Backup completed: $backup_root/$stamp"
