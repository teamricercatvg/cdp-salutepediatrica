# CDP Salute Pediatrica — infrastruttura

## Account e vincoli

- Netcup: account personale autorizzato; anche il dominio Aruba usa l’account personale già acquistato.
- GitHub, Vercel e altri servizi: teamricercatvg@gmail.com; usare piani gratuiti compatibili.
- Repository: https://github.com/teamricercatvg/cdp-salutepediatrica (pubblica).
- Vercel: spazio `tor-vergata-igiene`, piano Hobby; progetto `cdp-salutepediatrica` creato e collegato alla CLI.
- Pagina provvisoria Next.js/React autorizzata; gestionale completo da definire con l’utente.
- L'utente completa personalmente login, registrazioni e autorizzazioni richieste.

## Stato verificato il 5 settembre 2026

- Netcup RS 4000 G12 attivo a Vienna: 12 CPU, 32 GiB RAM, disco 1024 GiB.
- Server `v2202609409793513503`, SCP ID `932453`, IPv4 `89.58.61.66`.
- GitHub CLI autenticata come `teamricercatvg`, configurazione dedicata in `/Users/stefanolaptop/.config/gh-teamricercatvg`.
- Checkout locale collegato alla repository; identita Git e helper credenziali configurati solo per questo checkout.
- Supabase CLI disponibile, versione 2.109.1.
- Chiave SSH dedicata in `/Users/stefanolaptop/.ssh/id_ed25519_cdp_netcup`, installata e verificata.
- Impronta ED25519 del server verificata con quella fornita dall'utente: `SHA256:XRP8vYmJr8PdvYr3G3TenOcvB4HoOFMMhTJoCcfpmzM`.
- SSH usa il file dedicato `/Users/stefanolaptop/.ssh/config_cdp_netcup` e un known_hosts dedicato con controllo rigoroso.
- Debian 13.6, filesystem root esteso al disco intero; timezone Europe/Rome.
- Firewall nftables `cdp_guard`: ingresso pubblico TCP 22/80/443, ICMP e DHCPv6; nuovi ingressi verso container limitati a 80/443. Pannello Coolify accessibile tramite tunnel SSH.
- Coolify 4.3.17 installato dal programma ufficiale; tutti e quattro i container healthy. Log sul server `/root/cdp-install/coolify-install.log`.
- Verificato: HTTP locale attraverso tunnel restituisce 302 alla registrazione; porta pubblica 8000 non raggiungibile.
- Vercel CLI 59.11.7 autenticata e verificata come `teamricercatvg-8749`, con configurazione dedicata `/Users/stefanolaptop/.config/vercel-teamricercatvg`. Wrapper `bash scripts/vercel.sh` vincolato allo scope `tor-vergata-igiene` e senza VERCEL_TOKEN ereditati.
- Account amministratore Coolify creato con teamricercatvg@gmail.com; registrazioni ulteriori disabilitate.
- Supabase installato nel servizio `nbjf4rky9szio1wij3hlyphb`, progetto Coolify `cdp-salutepediatrica`.
- API Auth e REST verificate via tunnel SSH; Studio protetto da autenticazione. Registrazione pubblica e utenti anonimi disabilitati.
- Database pubblicato solo su loopback server `127.0.0.1:15432`; query CLI verificata. Nessuna tabella applicativa creata.
- Endpoint predisposti: `https://supabase.salutepediatricaglobale.it` e `https://coolify.salutepediatricaglobale.it`. Record A inseriti in Aruba verso 89.58.61.66; propagazione DNS e HTTPS da verificare.
- Primo backup locale completato in `/var/backups/cdp-salutepediatrica/20260905T095205Z`; include database, configurazione e Storage. Verifica completa del ripristino e pianificazione ancora da completare.

## Accessi da terminale

Per GitHub usare sempre il profilo dedicato, senza token ereditati:

```bash
env -u GH_TOKEN -u GITHUB_TOKEN GH_CONFIG_DIR=/Users/stefanolaptop/.config/gh-teamricercatvg gh auth status
```

Supabase è self-hosted su Netcup: usare CLI con connessione al database, psql e Docker via SSH secondo le operazioni supportate. Non creare o collegare per errore un progetto Supabase Cloud.

Accesso al server: `bash scripts/server.sh`, oppure `ssh -F /Users/stefanolaptop/.ssh/config_cdp_netcup cdp-netcup`.

Il tunnel iniziale Coolify pubblica sul Mac `http://127.0.0.1:18000`, inoltrato alla porta 8000 del server; inoltra anche 6001 e 6002 su loopback. Avviare il tunnel quando necessario con `ssh -F /Users/stefanolaptop/.ssh/config_cdp_netcup -NT -L 127.0.0.1:18000:127.0.0.1:8000 cdp-netcup`.

Non inserire password, token o chiavi private nella repository. Non riutilizzare account o scope Vercel dei precedenti progetti.
