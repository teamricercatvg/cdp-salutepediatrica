# CDP Salute Pediatrica Globale

Pagina provvisoria dei corsi di perfezionamento sulla salute pediatrica globale
dell’Università degli Studi di Roma Tor Vergata, per medici e infermieri.
Il gestionale completo sarà definito in una successiva sessione.

## Sviluppo della pagina

```bash
npm ci
npm run dev
```

`npm run build` verifica e compila la versione di produzione. La pagina è statica
e non richiede credenziali Supabase.

Stack: Next.js, React, Supabase self-hosted su Netcup con Coolify, GitHub e Vercel.

## Strumenti locali

- `bash scripts/server.sh`: SSH al server con chiave e identita verificate.
- `bash scripts/github.sh`: GitHub CLI con l'account dedicato.
- `bash scripts/vercel.sh`: Vercel CLI con account e scope dedicati.
- `python3 scripts/supabase-cli.py query 'select current_database();'`: query Supabase tramite tunnel SSH temporaneo.

La configurazione del Mac e i segreti rimangono fuori dalla repository.
Dettagli operativi e stato dei servizi in [INFRASTRUCTURE.md](INFRASTRUCTURE.md).
