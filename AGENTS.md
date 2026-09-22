# Guida per le prossime sessioni — CDP Salute Pediatrica Globale

## Scopo e fonti di verità

Il progetto ospiterà il sito e il gestionale degli studenti iscritti ai corsi di
perfezionamento di Tor Vergata sulla salute pediatrica globale, per medici e
infermieri. Al 5 settembre 2026 è pubblicata soltanto una pagina «work in progress».
I requisiti del gestionale sono stati raccolti in M0 il 22 settembre 2026:
leggere `PIANO_DI_LAVORO.md` e `docs/m0/SPECIFICHE_FUNZIONALI.md`, con il relativo
registro `docs/m0/FONTI_E_DECISIONI.md`, prima dell'implementazione. Sono previsti
cinque ruoli distinti (studente, docente, tutor, manager, admin), interfaccia IT/EN/ES
e soltanto il percorso standard; uditori e singoli insegnamenti sono rinviati.
Il bando definitivo non è ancora disponibile: distinguere configurazioni preparatorie,
decisioni progettuali e conferme istituzionali pendenti. M0 è completata sul piano
documentale; M1 e successive non sono state avviate.

- Checkout: `/Users/stefanolaptop/Documents/codex_new/cdp-software`.
- Repository pubblica: `https://github.com/teamricercatvg/cdp-salutepediatrica`, branch `main`.
- Leggere questo file all’inizio della sessione; consultare `INFRASTRUCTURE.md` per dettagli di server, DNS, backup e ripristino e `README.md` per avvio locale.
- Le versioni qui riportate sono quelle della configurazione iniziale. `package.json`, `package-lock.json`, gli script e lo stato effettivo dei servizi prevalgono sulle note storiche.
- Prima di modificare file, controllare `git status` e preservare eventuale lavoro dell’utente. Aggiornare questa guida e la documentazione quando cambia l’architettura.

## Stack e distribuzione dei servizi

| Componente | Tecnologia e collocazione |
| --- | --- |
| Frontend | Next.js 16.3.4, React/React DOM 19.2.8, TypeScript, App Router nella cartella `app/` |
| Interfaccia attuale | CSS in `app/globals.css`, SVG decorativo inline; nessuna libreria UI o Tailwind configurata |
| Hosting sito | Vercel, progetto `cdp-salutepediatrica`, piano Hobby; deploy automatici da GitHub |
| Backend | Supabase self-hosted su Netcup, gestito da Coolify e Docker Compose; nessun progetto Supabase Cloud |
| Database | PostgreSQL 15, immagine `supabase/postgres:15.8.1.085` |
| Servizi Supabase | Auth, PostgREST, Realtime, Storage con MinIO, Studio, postgres-meta, Edge Runtime, Supavisor, Analytics; Kong come gateway API |
| Gestione server | Coolify 4.3.17, Docker, reverse proxy Traefik e certificati HTTPS |
| Server | Netcup RS 4000 G12 a Vienna: 12 CPU, 32 GiB RAM, disco 1 TiB, Debian 13.6, timezone Europe/Rome |
| DNS | Dominio registrato su Aruba, nameserver Aruba; preservare i record di posta |

Il frontend gira su **Vercel**; **Netcup ospita Coolify e Supabase**.
Non creare un secondo backend cloud o spostare il frontend su Coolify implicitamente.
La pagina provvisoria è statica e non usa ancora il database.

## Account e indirizzi

- Identità operativa: `teamricercatvg@gmail.com`.
- GitHub: `teamricercatvg`.
- Vercel: utente `teamricercatvg-8749`, scope **`tor-vergata-igiene`**, progetto `cdp-salutepediatrica`.
- Netcup e Aruba usano gli account personali già autorizzati dall’utente. Per gli altri servizi usare l’identità dedicata e i piani gratuiti compatibili.
- Sito: `https://www.salutepediatricaglobale.it`, funzionante anche su `https://salutepediatricaglobale.it`.
- API Supabase e Studio: `https://supabase.salutepediatricaglobale.it`.
- Pannello Coolify: `https://coolify.salutepediatricaglobale.it`.
- Server SSH: alias `cdp-netcup`, IPv4 `89.58.61.66`, hostname `v2202609409793513503`.

**Non usare account, token o scope di altri progetti.** Eventuali esempi generici
con scope Vercel personali non si applicano a questa repository. I wrapper sotto
isolano le configurazioni CLI e rimuovono i token ereditati per GitHub e Vercel.

## Comandi da usare

```bash
# Sviluppo locale e verifica del frontend
npm ci
npm run dev
npm run typecheck
npm run build

# Controllo account dedicati
bash scripts/github.sh auth status
bash scripts/vercel.sh whoami

# SSH con chiave e identità del server verificate
bash scripts/server.sh
bash scripts/server.sh 'docker ps'

# Supabase: tunnel SSH temporaneo aperto e chiuso automaticamente
python3 scripts/supabase-cli.py query 'select current_database(), current_user;'

# Stato del deploy associato a un commit
bash scripts/github.sh api repos/teamricercatvg/cdp-salutepediatrica/commits/<SHA>/status
```

- `scripts/supabase-cli.py` supporta `query`, `push`, `dump`, `lint`, `types`. Le migrazioni dovranno essere versionate quando inizierà lo sviluppo del database; non eseguire `push` senza averne esaminato il contenuto.
- Preferire CLI e SSH per le operazioni tecniche. Il browser serve soprattutto per login e autorizzazioni che richiedono l’utente; non richiedere nuovamente autorizzazioni già completate e ancora valide.
- Git e Vercel sono collegati: un push su `main` può pubblicare in produzione. Quando la pubblicazione rientra nella richiesta, verificare il risultato del deploy, non soltanto il successo del push. Evitare un secondo deploy CLI se quello automatico è già riuscito.
- Per un deploy manuale autorizzato usare `bash scripts/vercel.sh deploy --prod --yes`; per una preview omettere `--prod`.
- La configurazione SSH dedicata è `/Users/stefanolaptop/.ssh/config_cdp_netcup`; mantenere il controllo rigoroso della chiave host. Non accettare alla cieca un’impronta cambiata.

## Credenziali e variabili di ambiente

- Configurazioni private sul Mac: `/Users/stefanolaptop/.config/cdp-infra/`, `/Users/stefanolaptop/.config/gh-teamricercatvg/`, `/Users/stefanolaptop/.config/vercel-teamricercatvg/`.
- Il wrapper Supabase legge la configurazione privata locale e raggiunge il database tramite SSH. Il database è pubblicato sul solo loopback del server, porta `15432`; non esporlo su Internet.
- Non stampare, committare o inserire in documenti password, token, chiavi private o dump con dati personali. La repository è pubblica.
- `.env.example` contiene solo nomi e valori pubblici; `.env.local`, `.env.*` e `.vercel/` sono esclusi da Git. `.vercelignore` esclude i file `.env` dai deploy del sorgente.
- Variabili già predisposte su Vercel in production, development e preview: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`.
- La chiave anon è destinata al client; la **service role deve restare esclusivamente server**, senza prefisso `NEXT_PUBLIC_` e senza importazioni nel bundle client. Definire autorizzazioni e RLS prima di esporre dati degli studenti.
- Per gli aggiornamenti env usare il wrapper Vercel con `env add <NOME> <ambiente> --value "$valore" --force --yes`. Specificare `--type config` per la chiave anon pubblica e `--type secret` per la service role. Non stampare le variabili shell.
- `vercel env ls` verifica presenza e ambienti, ma può mostrare valori cifrati: non interpretarli come contenuto reale delle variabili.
- Il token API Coolify iniziale ha durata 90 giorni; verificare la scadenza se una successiva richiesta API restituisce un errore di autenticazione.

## Stato operativo e attività ancora da definire

Al termine della configurazione iniziale del 5 settembre 2026 sono stati verificati:
build e TypeScript, sito HTTPS desktop/mobile, deploy automatico GitHub → Vercel,
API Supabase, query tramite CLI, firewall e ripristino del backup.
Non presentare queste verifiche storiche come nuovi controlli live: ricontrollare
i componenti interessati dalle modifiche della sessione corrente.

- Registrazione pubblica Supabase e utenti anonimi disabilitati; Studio protetto da autenticazione e nuove registrazioni Coolify disabilitate.
- Firewall pubblico limitato a SSH e HTTP/HTTPS; porte amministrative e database non esposte direttamente.
- Backup: `scripts/backup-server.sh`, installato sul server come `/usr/local/sbin/cdp-backup`; timer `cdp-backup.timer` ogni giorno alle 02:30 Europe/Rome, retention 14 giorni.
- Il backup comprende cluster PostgreSQL fisico con WAL, dump logici, database Coolify, configurazione e Storage. Il ripristino fisico è stato verificato in un container isolato; consultare `INFRASTRUCTURE.md` prima di un recupero. Mai usare il database attivo per prove di ripristino.
- Una copia iniziale è sul Mac; **i backup automatici fuori server devono ancora essere configurati** prima di raccogliere dati reali.
- SMTP e mittente restano da configurare; flussi, ruoli e funzioni sono descritti nelle consegne M0, mentre schema SQL e implementazione appartengono alle milestone successive. Consultare il registro M0 per le conferme ancora necessarie. Non creare account studenti o dati di produzione per test.
