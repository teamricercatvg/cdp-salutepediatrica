# Piano di lavoro — Gestionale dei corsi di perfezionamento

Data: 22 settembre 2026. Stato: M0 completata come specifica preparatoria; M1 e successive da avviare. Nessuna implementazione applicativa avviata. Consegne e decisioni: [Specifiche M0](docs/m0/SPECIFICHE_FUNZIONALI.md).

## 1. Istruzioni generali per tutte le fasi di sviluppo

Queste regole aprono il piano e si applicano a ogni milestone.

1. **Una milestone alla volta.** All'inizio dichiarare obiettivo, dipendenze, criteri di accettazione e confini della fase. Completare e verificare il risultato prima di iniziare la successiva; suddividere le milestone grandi in incrementi dimostrabili.
2. **Diff minimi e mirati.** Modificare solo i file necessari alla funzione in corso. Evitare refactoring, aggiornamenti di dipendenze, riformattazioni o cambiamenti grafici estranei. Ogni commit deve avere uno scopo comprensibile.
3. **Preservare il lavoro esistente.** Leggere `AGENTS.md`, controllare `git status` e il diff prima di intervenire. Non cancellare o includere nei propri commit modifiche altrui. Quando l'utente chiede commit e push, pubblicare direttamente su `main` con l'account `teamricercatvg`, salvo sua esplicita indicazione diversa. Il deployment automatico conseguente è accettato dall'utente; verificarne l'esito.
4. **Rispettare lo stack predisposto.** Frontend Next.js/React/TypeScript su Vercel; Supabase self-hosted su Netcup con Coolify. Non introdurre un backend Supabase Cloud o nuovi servizi a pagamento senza una decisione esplicita. Usare account e wrapper dedicati del progetto.
5. **Requisiti prima delle regole applicative.** Non inventare campi obbligatori del bando, criteri di ammissione, vincoli economici, soglie di frequenza o regole di valutazione. Registrare le decisioni mancanti e risolverle prima della funzione interessata.
6. **Autorizzazioni su ogni livello.** Verificare identità, ruolo e ambito nel backend; proteggere tabelle e file con policy. Nascondere un pulsante non protegge i dati. Accesso negato per impostazione predefinita; testare anche chiamate dirette alle API.
7. **Separare i dati secondo chi può leggerli.** Docente e tutor hanno ambiti distinti: moduli assegnati per il docente, intero percorso formativo dei soli studenti affidati per il tutor. Nessuno dei due deve ricevere dati logistici o economici tramite risposte API, esportazioni o query didattiche. La RLS limita le righe: la separazione delle colonne sensibili richiede anche progettazione delle tabelle, privilegi e risposte dedicate.
8. **Segreti esclusivamente lato server.** Non esporre service role, password, token, documenti personali o dump in codice, log, repository e bundle browser. La repository è pubblica. Limitare l'uso della service role a operazioni amministrative circoscritte con controlli espliciti, perché può aggirare la RLS. [Riferimento Supabase](https://supabase.com/docs/guides/database/postgres/row-level-security).
9. **Dati di prova fittizi.** Sviluppo, collaudo, screenshot e test automatici usano persone e documenti sintetici. Separare anche Auth, Storage, email e credenziali tra collaudo e produzione; una preview Vercel non costituisce da sola un ambiente isolato.
10. **Migrazioni versionate.** Ogni modifica al database deve essere riproducibile, esaminata e provata su un ambiente isolato. Preferire modifiche additive compatibili con la versione precedente. Preparare backup e strategia di recupero prima delle migrazioni in produzione.
11. **Test proporzionati e significativi.** Testare regole di dominio, permessi, transizioni di stato, calcoli e flussi critici; non aggiungere test che ripetono banalmente il codice. Per ogni bug rilevante introdurre una verifica che ne prevenga il ritorno.
12. **Nessun rilascio senza verifiche.** Eseguire controllo TypeScript, build, test pertinenti e prova dei flussi interessati in collaudo. Per modifiche all'interfaccia verificare desktop, mobile, tastiera, messaggi di errore e caricamenti. Un controllo fallito o non eseguito va dichiarato.
13. **Operazioni ripetibili senza duplicazioni.** Invii di domande, iscrizioni, pagamenti registrati, validazioni e consegne di test devono resistere a doppio clic, ritentativi e accessi concorrenti. Usare vincoli e transazioni per gli aggiornamenti correlati.
14. **Tracciabilità delle azioni rilevanti.** Conservare autore, data, oggetto, esito e motivazione delle rettifiche per selezioni, ruoli, validazioni e registrazioni economiche. Non rendere il registro di audit modificabile dai normali flussi applicativi; evitare copie superflue di dati personali nei log.
15. **Interfaccia coerente e accessibile.** Riutilizzare componenti semplici, etichette esplicite e stili comuni. Gestire salvataggi, sessioni scadute, errori di rete, stati vuoti e ripresa del lavoro. Non riscrivere la pagina pubblica senza includerlo nel perimetro della milestone.
16. **Elenchi completi e prestazioni prevedibili.** Prevedere ricerca, filtri, indici e paginazione deterministica. Esportazioni e totali devono coprire tutte le pagine; un errore di lettura non deve produrre un risultato parziale presentato come completo.
17. **Documentazione insieme alle modifiche.** Aggiornare istruzioni di avvio, configurazioni, permessi e procedure operative quando cambiano. Documentare comandi realmente disponibili: oggi il progetto ha `typecheck` e `build`, ma non ha ancora script di test o lint.
18. **Rilascio e recupero pianificati.** Prima del rilascio identificare versione, migrazioni, responsabile, controlli successivi e procedura di rollback. Tornare al frontend precedente non annulla automaticamente una migrazione o i dati già inseriti.
19. **Multilingua fin dall'inizio.** Ogni funzione deve prevedere italiano, inglese e spagnolo. Separare i testi dell'interfaccia dalla logica, usare identificativi stabili per stati e ruoli e mantenere completi i cataloghi di traduzione. Includere etichette, errori, conferme, testi accessibili ed email; non rinviare la traduzione a una fase finale.

### Criterio comune di completamento

Una milestone è completata quando i suoi criteri sono soddisfatti, le verifiche pertinenti sono passate, il diff è stato riesaminato, il risultato è dimostrabile e la documentazione è aggiornata. Per le funzioni visibili agli utenti, verificare anche completezza e funzionamento nelle tre lingue. Registrare separatamente «completata in collaudo» e «rilasciata in produzione». Ogni limitazione residua deve avere un impatto descritto e una fase di risoluzione.

Questo documento pianifica il lavoro futuro: non autorizza da solo implementazioni, invii di email, attivazioni di account o pubblicazioni. L'esecuzione di M0 è stata richiesta e completata esclusivamente sul piano documentale; non comporta avvio automatico di M1.

## 2. Punto di partenza e vincoli

Sono stati letti i file locali `AGENTS.md`, `README.md`, `INFRASTRUCTURE.md` e `package.json`. Il manifesto dichiara Next.js 16.3.4, React 19.2.8 e TypeScript. La documentazione descrive una pagina statica provvisoria e l'infrastruttura iniziale, non un gestionale già implementato.

| Componente | Base da mantenere |
| --- | --- |
| Applicazione web | Next.js App Router, React, TypeScript; CSS esistente |
| Hosting frontend | Vercel, progetto `cdp-salutepediatrica`, scope `tor-vergata-igiene` |
| Backend | Supabase self-hosted su Netcup, gestito da Coolify |
| Dati e identità | PostgreSQL, Supabase Auth, Supabase Storage/MinIO |
| Distribuzione | Repository GitHub dedicata e collegamento automatico a Vercel |
| Accesso tecnico | Wrapper `scripts/github.sh`, `scripts/vercel.sh`, `scripts/server.sh`, `scripts/supabase-cli.py` |

Le note infrastrutturali riportano registrazioni pubbliche Supabase disabilitate, SMTP ancora da configurare e backup automatici fuori server ancora da predisporre. Questi sono stati documentati in precedenza: in questa sessione non sono stati verificati i servizi live. Saranno ricontrollati in M1.

La configurazione delle variabili Vercel di preview dovrà essere verificata e isolata prima che il frontend inizi a usare dati reali. Il primo rilascio che raccoglie candidature è già una raccolta di dati reali e richiede tutte le relative garanzie operative.

## 3. Perimetro funzionale

### 3.1 Percorso dello studente

1. Consulta corso, edizione e bando aperto.
2. Compila la domanda di ammissione con anagrafica, requisiti, titoli di studio e allegati, compreso il curriculum.
3. Invia la domanda e ne segue lo stato; eventuali integrazioni devono essere distinguibili dalla versione presentata.
4. Se selezionato, completa i dati richiesti per l'iscrizione; il manager ne conferma il perfezionamento secondo le regole del corso.
5. Accede alla propria area: iscrizione, attività didattiche, diario pratico, moduli abilitati, materiali, test e informazioni logistiche/economiche personali previste.
6. Registra attività pratiche e le sottopone al tutor; consulta validazioni, correzioni richieste e avanzamento.

**Candidatura, ammissione e iscrizione sono eventi distinti.** La selezione non deve creare automaticamente un'iscrizione definitiva se mancano adempimenti richiesti. Un account tecnico non equivale a essere uno studente iscritto.

### 3.2 Le quattro aree del prodotto

| Area | Funzioni richieste |
| --- | --- |
| Ammissioni | Form, allegati, stato delle domande, revisione e selezione |
| Iscrizioni | Conversione dei selezionati in iscritti, dati integrativi, fascicolo personale |
| Gestione del corso | Lezioni/presenze, diario pratico, validazioni, alloggio, tassa di iscrizione e spese di permanenza |
| E-learning | Moduli abilitati, video, dispense PDF/Word, test a scelta e a risposta libera, registrazione delle attività |

In tutte le aree servono viste per ruolo, ricerca, storico e gestione degli errori. I report devono ricostruire il percorso del singolo studente senza confondere attività dichiarate, validate e completate.

### 3.3 Confini della prima versione

La prima versione completa include tutte e quattro le aree e soltanto il percorso standard del corso completo, per medici e infermieri. Per esplicita indicazione dell'utente durante M0, uditori e iscrizioni a singoli insegnamenti sono rinviati: non configurare ora schermate, tariffe, regole o strutture dedicate. I rilasci intermedi possono esporre solo sezioni terminate, senza mostrare funzioni non operative.

Non sono requisiti già concordati: pagamenti online, contabilità ufficiale, firma digitale, integrazione con sistemi universitari, riconoscimento automatico di titoli, proctoring, videoconferenza, SCORM/xAPI, applicazioni native o emissione automatica di attestati. Se richiesti, verranno pianificati separatamente. Registrare una tassa e il suo pagamento non implica incassarla tramite la piattaforma.

### 3.4 Piattaforma multilingua: italiano, inglese e spagnolo

La piattaforma deve essere disponibile in **italiano (`it`), inglese (`en`) e spagnolo (`es`)**, sia nel sito pubblico sia nelle aree riservate di tutti e cinque i ruoli. Il requisito vale anche per ogni rilascio intermedio.

- **Interfaccia completa:** navigazione, form, istruzioni, stati, errori, conferme, accesso, recupero password, cruscotti e intestazioni dei report prodotti dalla piattaforma nelle tre lingue.
- **Scelta della lingua:** selettore sempre raggiungibile, preferenza conservata per il visitatore e nel profilo dell'utente autenticato. Proposta: italiano come lingua predefinita; la scelta esplicita dell'utente prevale sul rilevamento del browser. Il cambio lingua conserva pagina, sessione e dati non ancora inviati, senza duplicare domande o tentativi.
- **Struttura comune:** un'unica applicazione con cataloghi di traduzione e URL coerenti per lingua; nessuna duplicazione della logica o dei dati degli studenti. Stati, ruoli, identificativi e regole sono indipendenti dalle etichette tradotte.
- **Formati locali:** date, numeri e importi leggibili nella lingua scelta, mantenendo invariati valore, valuta e fuso orario delle scadenze. Il cambio lingua non deve alterare importi, risposte o termini del bando.
- **Email e notifiche:** inviti, recupero password, conferme e comunicazioni automatiche nella lingua del destinatario. Per un invitato senza profilo, registrare la lingua scelta all'invito; applicare una lingua predefinita documentata se manca la preferenza.
- **Contenuti editoriali e didattici:** predisporre varianti linguistiche di descrizioni di corsi/moduli, istruzioni e test, oltre all'indicazione della lingua di dispense e video e degli eventuali sottotitoli. In M0 definire quali contenuti devono essere disponibili in tutte e tre le lingue e chi ne revisiona le traduzioni; l'interfaccia trilingue è già un requisito confermato.
- **Documenti e testi originali:** non tradurre automaticamente dichiarazioni degli studenti, titoli di studio, allegati o bandi ufficiali. Conservare gli originali e distinguere le eventuali traduzioni approvate. Segnalare chiaramente quando una risorsa formativa non è disponibile nella lingua scelta.
- **Qualità:** prevedere glossario condiviso, revisione delle traduzioni, controlli sulle chiavi mancanti e prove delle schermate nelle tre lingue, inclusi testi lunghi, accenti, plurali ed etichette per tecnologie assistive.

La progettazione linguistica parte in M0; la base tecnica viene predisposta in M1–M3 e integrata nel sito e nella navigazione in M4. Tutte le funzioni successive la utilizzano; M12 verifica i percorsi completi nelle tre lingue.

## 4. Ruoli, ambiti e accesso

### 4.1 Matrice dei permessi

I cinque ruoli applicativi sono **studente, docente, tutor, manager e admin**. «Candidato» descrive una fase del percorso, non un ulteriore ruolo gestionale. L'eventuale accesso prima dell'iscrizione avrà capacità limitate alla propria domanda. Una stessa persona può avere sia il ruolo docente sia il ruolo tutor, con un unico account e assegnazioni indipendenti.

| Operazione / dati | Studente | Docente | Tutor | Manager | Admin |
| --- | --- | --- | --- | --- | --- |
| Domanda e documenti di ammissione | Solo propri; modifiche secondo stato | No | No | Tutti | Come manager |
| Iscrizione e dati personali | Solo propri; campi modificabili definiti | Solo identificativi necessari degli iscritti ai propri moduli | Solo identificativi e dati del percorso necessari degli studenti affidati | Tutti | Come manager |
| Selezione e conferma iscrizione | No | No | No | Sì | Sì |
| Alloggio, tassa e spese | Solo proprie informazioni abilitate | No | No | Tutti | Come manager |
| Materiali e video pubblicati | Solo moduli abilitati | Propri moduli | Lettura nei moduli dei propri studenti affidati; nessuna gestione, accesso a bozze o soluzioni riservate | Tutti | Come manager |
| Caricamento e gestione materiali/test | No | Propri moduli | No | Tutti | Come manager |
| Elenco studenti di un modulo | Nessun elenco degli altri studenti | Iscritti ai propri moduli, con soli dati pertinenti | Solo studenti affidati, anche se frequentano altri moduli | Tutti | Come manager |
| Attività e risultati dei moduli | Solo propri | Studenti dei propri moduli, limitatamente a quei moduli | Intero percorso formativo dei soli studenti affidati, inclusi moduli frequentati e superati | Tutti | Come manager |
| Correzione test, voto/giudizio ed esito del modulo | Consultazione personale | Solo propri moduli | Consultazione per studenti affidati; nessuna modifica | Tutti | Come manager |
| Inserimento diario pratico | Solo proprio | No | Consultazione per studenti affidati | Gestione completa con storico | Come manager |
| Validazione attività pratiche | No | No | Solo studenti affidati | Sì, con tracciabilità | Come manager |
| Gestione lezioni e presenze | Consultazione personale | Nei propri moduli, secondo incarico | Consultazione lungo il percorso degli studenti affidati | Tutte | Come manager |
| Report ed esportazioni | Solo personali se previsti | Solo dati pertinenti ai propri moduli | Solo percorso formativo degli studenti affidati | Tutti | Come manager |
| Autorizzare email staff, assegnare/revocare ruoli | No | No | No | No | Sì |

Manager e admin condividono le medesime funzioni operative. L'unica estensione dell'admin è la gestione degli accessi e dei ruoli. Nessuna approvazione didattica o economica viene riservata all'admin.

L'espressione «creare e gestire ruoli» è qui interpretata come abilitare utenti e assegnare i cinque ruoli previsti. Un editor di ruoli arbitrari non è incluso senza conferma.

### 4.2 Docente e tutor: responsabilità e ambiti distinti

- **Docente → uno o più moduli:** gestisce i materiali della propria materia, consulta gli iscritti e le loro attività pertinenti al modulo, crea i test, li corregge e assegna voto o giudizio ed esito di idoneità/superamento. Non vede il percorso negli altri moduli, né il fascicolo completo degli iscritti.
- **Tutor → uno o più studenti affidati:** segue l'intero percorso formativo di ciascuno studente affidato. Consulta lezioni e presenze, attività pratiche, fruizione online, moduli a cui è iscritto, test, risultati e moduli superati, anche quando appartengono ad altri docenti. Valida le attività pratiche degli studenti affidati.
- Il tutor non ottiene l'elenco completo degli iscritti ai moduli frequentati dai suoi studenti. La consultazione trasversale resta sempre filtrata per gli studenti affidati e non concede modifica di materiali, test, voti o giudizi dei docenti.
- Il docente non può validare attività pratiche in virtù del solo incarico di docenza. Può farlo se ha anche il ruolo tutor e lo studente gli è affidato.
- **Cumulo docente + tutor:** consentito sullo stesso account. I permessi si sommano nei rispettivi ambiti, senza estendersi a nuovi studenti o moduli. Esempio: docente del modulo A e tutor dello studente X può gestire A e consultare il percorso di X nel modulo B; non può gestire B né leggere i dati degli altri iscritti a B.
- Prevedere durata dell'incarico, sostituzione e revoca indipendenti; rimuovere un affidamento non deve eliminare l'incarico di docenza e viceversa. Le valutazioni e validazioni storiche conservano il loro autore.
- Decisione M0 su delega dell'utente: manager e admin gestiscono gli abbinamenti operativi docente-modulo e tutor-studente fra utenti già abilitati ai rispettivi ruoli; soltanto l'admin concede o revoca i ruoli docente e tutor. La separazione dei ruoli e la loro cumulabilità sono requisiti definiti.

### 4.3 Identità e autenticazione

**Docente, tutor e manager:** l'admin autorizza l'indirizzo email e il ruolo; il sistema invia un invito all'indirizzo verificato dal flusso. Dal link valido l'utente imposta la password e attiva l'accesso. Gli accessi successivi avvengono con email e password. Non basta conoscere un'email autorizzata per poterne impostare la password. Supabase fornisce un'operazione amministrativa di invito via email. [Documentazione inviti](https://supabase.com/docs/reference/javascript/auth-admin-inviteuserbyemail).

**Recupero password:** richiesta dall'accesso pubblico, messaggio neutro, link limitato nel tempo e pagina di impostazione della nuova password. Invito e recupero hanno percorsi distinti e non modificano il ruolo. SMTP e URL di ritorno devono essere configurati per l'ambiente corretto. [Documentazione password e recupero](https://supabase.com/docs/guides/auth/passwords).

**Candidati:** decisione M0: account con email verificata, password e accesso limitato alla propria candidatura, per salvare bozze, rispondere alle integrazioni e consultare l'esito. Creazione controllata dell'identità tramite backend, nessuna possibilità di scegliere o ottenere ruoli staff. La registrazione pubblica indiscriminata di Supabase resta disabilitata.

**Studenti selezionati:** mantenere la stessa identità se esiste già; abilitare il percorso di iscrizione e poi i moduli attraverso lo stato dell'iscrizione. Se il candidato non aveva un account, attivarlo tramite invito. Evitare identità duplicate fra candidature a corsi diversi.

**Primo admin:** predisporre una procedura amministrativa iniziale controllata e documentata, senza endpoint pubblico di autoassegnazione. Decisione M0: l'admin può nominare ulteriori admin; impedire la rimozione dell'ultimo admin attivo e documentare il recupero di emergenza in M3.

## 5. Decisioni da raccogliere prima delle relative milestone

Queste domande fanno parte del lavoro previsto; non occorre risolverle tutte per leggere o approvare il piano. Le decisioni vanno registrate con data e responsabile, senza usare valori presunti come regole definitive.

**Aggiornamento dopo M0:** la tabella seguente è la lista originaria delle informazioni da raccogliere. Per le scelte già adottate e per i soli punti ancora aperti prevale il [registro M0](docs/m0/FONTI_E_DECISIONI.md), sezioni 4–5. La [specifica M0](docs/m0/SPECIFICHE_FUNZIONALI.md) contiene i dati preparatori dei due corsi, il calendario B ricavato dagli Allegati firmati e la griglia di selezione più recente. Il bando definitivo resta da acquisire prima dell'apertura pubblica.

| Decisione | Informazioni da acquisire | Necessaria entro |
| --- | --- | --- |
| Corsi ed edizioni | Corsi iniziali, anno/edizione, date, posti, eventuali percorsi medici/infermieri | M0 |
| Bandi | Documenti ufficiali, campi e allegati obbligatori, requisiti, termini e fuso orario | M0, prima di M5 |
| Accesso candidati | Bozze, verifica email, account prima/dopo selezione, integrazioni e ritiro | M0–M3 |
| Identificativi | Dati necessari per persone italiane e straniere, eventuale matricola assegnata dall'ateneo | M0–M2 |
| Selezione | Esiti, graduatoria se richiesta, liste d'attesa, attori e modalità di comunicazione | M0, prima di M6 |
| Iscrizione | Dati integrativi, scadenze, documenti e condizioni di perfezionamento | M0, prima di M6 |
| Ruoli | Cumulo docente + tutor già previsto; definire gestione abbinamenti, eventuali ulteriori cumuli, nomina admin e revoca/sospensione | M0–M3 |
| Didattica | Moduli comuni o specifici, abilitazione, prerequisiti, periodi di accesso; eventuale consultazione dei materiali da parte del tutor, distinta dalla visibilità delle attività e degli esiti | M4 |
| Presenze | Chi le registra, ore previste, assenze, recuperi e soglie se esistono | M8 |
| Diario | Tipi di attività, campi, unità di misura, tutor, deleghe e regole di rettifica | M8 |
| Logistica | Strutture, posti, periodi, arrivi/partenze, responsabili, documenti realmente necessari | M7 |
| Aspetti economici | Importi/valute, rate, esenzioni, pagamenti esterni, rimborsi, categorie di spesa | M7 |
| Video | Quantità, durata, accessi contemporanei, protezione e budget; criterio di completamento | M9 |
| Test | Risposta singola/multipla, punteggi, soglie, tentativi, tempi, feedback, correzione aperte, scala dei voti/giudizi e regole di idoneità del modulo | M10 |
| Multilingua e accessibilità | Italiano, inglese e spagnolo già confermati; definire lingua predefinita, revisori, glossario, copertura delle traduzioni dei contenuti didattici e sottotitoli disponibili | M0, M4 e M9 |
| Gestione dei dati | Informative/testi approvati, campi necessari, conservazione, cancellazione, accesso dello staff | M0 e prima di dati reali |
| Volumi e servizio | Studenti, corsi, allegati, concorrenza; indisponibilità e perdita dati tollerabili | M0–M1 |
| Email | Provider SMTP, mittente, destinatari operativi, modelli e tempi delle notifiche | M1–M3 |

Il diario formativo non deve raccogliere dati identificativi dei pazienti: progettare campi e istruzioni per descrivere attività e competenze senza cartelle cliniche, nomi o immagini riconoscibili.

## 6. Modello funzionale e dati da progettare

Questa è una mappa concettuale, non uno schema SQL approvato. Lo schema verrà definito in M2 e introdotto mediante migrazioni nelle milestone pertinenti, evitando di creare subito strutture speculative.

| Gruppo | Entità concettuali | Vincoli principali |
| --- | --- | --- |
| Identità | Profilo, account Auth, ruoli, inviti, abilitazioni | Identità separata da iscrizioni e incarichi; più ruoli per account, inclusi docente e tutor; ruoli non modificabili dall'utente |
| Offerta formativa | Corso, edizione, bando, modulo dell'edizione | Studente e dati didattici riferiti all'edizione corretta |
| Ammissione | Domanda, titoli, risposte, allegati, valutazione, storico stati | Regole del bando versionate; conservazione della domanda inviata |
| Iscrizione | Iscrizione, dati integrativi, adempimenti, abilitazioni ai moduli | Passaggio controllato da ammissione a iscrizione; nessun duplicato |
| Incarichi | Docente-modulo, tutor-studente nel percorso/edizione, ambito e validità | Relazioni indipendenti: gestione dei propri moduli per il docente; monitoraggio trasversale e validazione pratica per gli studenti affidati al tutor |
| Lezioni | Sessione, calendario essenziale, presenza, ore riconosciute | Presenza collegata a studente e lezione; rettifiche tracciate |
| Diario | Attività, versione, invio al tutor, decisione, osservazioni | Lo studente non può validarsi; modifiche successive richiedono nuova revisione |
| Logistica | Alloggio, posto se necessario, assegnazione, periodo di permanenza | Date coerenti, disponibilità e assenza di sovrapposizioni incompatibili |
| Economia | Importo dovuto, rata, pagamento registrato, esenzione, spesa, rimborso | Importi decimali esatti e valuta; importi attesi distinti da pagati |
| Contenuti | Risorsa, file/video, versione, pubblicazione, ordine | Accesso per modulo; bozze invisibili agli studenti |
| Apprendimento | Eventi di fruizione, avanzamento, completamento | Regole esplicite, eventi duplicati gestiti, versione del contenuto riconoscibile |
| Valutazione | Test, versione, domanda, opzioni, tentativo, risposta, valutazione; voto/giudizio ed esito del modulo | Risposte corrette protette; tentativo legato alla versione assegnata; esito del modulo distinto dai singoli test, attribuito dal docente competente e consultabile dal tutor dello studente |
| Trasversale | Metadati file, audit, notifiche e loro esiti | File privati; riferimenti coerenti; errori notifiche recuperabili |
| Multilingua | Lingua preferita del profilo/invito, traduzioni dei contenuti editoriali, lingua delle risorse e dei test | Identità e dati operativi unici; traduzioni collegate alla stessa entità/versione; cataloghi UI separati dalla logica |

Una persona può presentare domande e iscriversi a più edizioni senza duplicare l'anagrafica. Il fascicolo deve distinguere i dati correnti della persona dalle informazioni dichiarate in una specifica domanda.

### Stati da concordare e implementare

- **Domanda:** bozza → inviata → in valutazione → ammessa / non ammessa / eventuale lista d'attesa. Integrazioni e ritiro sono transizioni esplicite con storico.
- **Iscrizione:** da completare → in verifica → attiva → conclusa; rinuncia e sospensione, se previste, hanno effetti definiti sull'accesso.
- **Attività pratica:** bozza → inviata → validata / da correggere / respinta. Una rettifica non sovrascrive una validazione già avvenuta.
- **Contenuto:** bozza → pubblicato → archiviato. La sostituzione non deve cancellare il significato dei completamenti precedenti.
- **Test:** non iniziato → in corso → consegnato → in valutazione → valutato. Per test solo automatici, la valutazione segue la consegna senza intervento umano.

Per ogni transizione definire chi può eseguirla, prerequisiti, effetti sull'accesso, data, notifica e reversibilità. Non affidarsi soltanto a un campo di stato liberamente modificabile dal client.

## 7. Milestone eseguibili in sequenza

**M0 completata; M1–M13 da avviare.** La sequenza proposta è M0 → M1 → … → M13; le dipendenze sotto indicano i prerequisiti funzionali principali.

### M0 — Specifiche operative e percorsi utente

**Esito del 22 settembre 2026:** completata come specifica preparatoria, con decisioni operative adottate sulla delega dell'utente. Le questioni istituzionali e didattiche rinviate hanno responsabile e termine e non bloccano M1. Consegne: [specifiche](docs/m0/SPECIFICHE_FUNZIONALI.md), [campi e documenti](docs/m0/CAMPI_E_DOCUMENTI.md), [percorsi e bozzetti](docs/m0/PERCORSI_E_SCHERMATE.md), [fonti e decisioni](docs/m0/FONTI_E_DECISIONI.md). Nessun codice o servizio modificato.

**Obiettivo:** trasformare la descrizione in regole verificabili prima di scrivere codice.

**Attività**

- Raccogliere un bando reale, un esempio di domanda, un esempio di diario e le modalità di gestione delle tasse/alloggi.
- Definire corsi/edizioni iniziali, dati necessari e decisioni bloccanti della sezione 5.
- Confermare matrice permessi, assegnazioni, stati e distinzione fra candidato e iscritto.
- Disegnare le schermate essenziali per studente, docente, tutor, manager e admin, con un percorso completo per ciascuno.
- Definire cosa vede lo studente del proprio fascicolo e quali annotazioni sono esclusivamente interne.
- Concordare volumi attesi, criteri di completamento didattico e ordine di apertura al pubblico.
- Progettare i percorsi in italiano, inglese e spagnolo: confermare lingua predefinita, regole di selezione, glossario e responsabili della revisione; definire quali materiali, video e test avranno varianti tradotte.

**Consegne:** specifica funzionale, elenco dei campi con obbligatorietà/fonte, matrice permessi confermata, bozzetti delle schermate e registro delle decisioni.

**Accettazione:** è possibile descrivere senza ambiguità domanda → selezione → iscrizione → attività → completamento; le decisioni rinviate hanno una scadenza e non bloccano la fase successiva.

**Dipendenze:** nessuna. Completata; la prossima milestone da eseguire è M1.

### M1 — Ambienti, qualità del codice e continuità operativa

**Obiettivo:** creare le condizioni per sviluppare e provare senza coinvolgere dati reali.

**Attività**

- Verificare checkout, wrapper, account dedicati, stato dei servizi e versioni effettive.
- Predisporre un ambiente di collaudo self-hosted isolato: database, Auth, Storage, chiavi, host e destinazioni email separati. Definire con quali risorse ospitarlo senza assumere capacità illimitata del server.
- Collegare sviluppo/preview soltanto al backend di prova; controllare anche la service role e impedire fallback verso produzione.
- Introdurre controllo statico/lint e strumenti per test di dominio, integrazione database/policy e flussi browser, scegliendo il minimo necessario.
- Predisporre la base di internazionalizzazione compatibile con lo stack: cataloghi `it`, `en`, `es`, risoluzione della lingua e controlli automatici di completezza delle traduzioni, da usare già nei primi flussi di accesso.
- Predisporre CI per TypeScript, build e verifiche pertinenti; mantenere i segreti fuori dagli output e dai contesti non fidati.
- Configurare backup automatici cifrati fuori server, retention, segnalazione dei fallimenti e prova di ripristino isolata comprendente database e file.
- Definire tempi di recupero e perdita dati tollerabili; documentare ripristino e controlli di coerenza fra database e Storage.
- Scegliere SMTP/mittente e predisporre cattura o restrizione delle email di test. Verificare capacità, limiti e compatibilità dei servizi con l'uso previsto prima del rilascio.

**Consegne:** ambienti documentati, pipeline di verifica, dataset sintetico iniziale, procedura di backup/ripristino e configurazione email di prova.

**Accettazione:** una preview usa esclusivamente risorse di collaudo; una verifica intenzionalmente fallita blocca la pipeline; un backup esterno viene recuperato e verificato in isolamento. Nessuna email di test raggiunge studenti reali.

**Dipendenze:** M0. Backup esterno e recupero verificato sono obbligatori prima di qualsiasi raccolta reale.

### M2 — Schema di base, autorizzazioni e gestione sicura dei file

**Obiettivo:** stabilire i confini dei dati prima di costruire i form.

**Attività**

- Progettare schema e relazioni della sezione 6; implementare la base per identità, ruoli, corsi/edizioni, incarichi e audit.
- Distinguere dati anagrafici minimi, fascicolo amministrativo, dati economici e dati didattici.
- Modellare preferenza linguistica e traduzioni dei contenuti senza duplicare account, iscrizioni o moduli; conservare codici di stato indipendenti dalla lingua e la lingua originale dei testi inseriti dagli utenti.
- Definire policy RLS e privilegi per lettura/scrittura; riesaminare funzioni e viste che potrebbero aggirare le policy.
- Predisporre Storage privato, autorizzazione dei download, URL temporanei, limiti di dimensione, tipi ammessi e controlli effettivi del contenuto dei file.
- Prevedere quarantena/scansione degli allegati prima della disponibilità, nomi di archiviazione non identificativi e pulizia degli upload incompleti.
- Definire migrazioni, vincoli di unicità, indici, date/fusi orari, importi esatti e procedura di generazione dei tipi TypeScript.
- Preparare utenti sintetici: due studenti, due docenti con moduli diversi, due tutor con studenti affidati diversi, un account con entrambi i ruoli docente e tutor, un manager e un admin, su almeno due edizioni.

**Consegne:** schema documentato, migrazioni di base, policy, strategia file e test di isolamento.

**Accettazione:** lo studente A non legge/scrive dati o file di B; docente e tutor non leggono amministrazione/economia; il docente non legge attività di altri moduli; il tutor legge il percorso dei propri studenti attraverso più moduli ma non i dati di studenti non affidati; l'anonimo non elenca domande o documenti; il manager non assegna ruoli, nemmeno via API. Le migrazioni funzionano da database vuoto e da versione precedente di prova.

**Dipendenze:** M0–M1. Le entità delle funzioni successive saranno aggiunte con gli stessi criteri.

### M3 — Accessi, inviti e amministrazione dei ruoli

**Obiettivo:** rendere operativo l'accesso con email e password e l'abilitazione controllata dello staff.

**Attività**

- Implementare login, logout, sessione, protezione delle pagine e controllo dell'identità lato server.
- Creare la procedura iniziale per il primo admin e la schermata admin per autorizzare email, assegnare/revocare ruoli, reinviare o annullare inviti.
- Gestire docente e tutor come ruoli distinti e cumulabili sullo stesso account; assegnare o revocare l'uno senza alterare l'altro e verificare separatamente gli incarichi necessari a ogni operazione.
- Implementare invito → verifica link → scelta password → accesso con permessi corretti; gestire account già esistenti e inviti duplicati.
- Implementare password dimenticata, nuova password, scadenza link e percorsi di errore; verificare consegna SMTP e destinazioni di ritorno.
- Realizzare accesso, invito e recupero password nelle tre lingue, inclusi modelli email e messaggi di errore; verificare sul Supabase self-hosted il meccanismo di scelta del modello linguistico e il mantenimento della lingua nei link di ritorno.
- Collegare l'accesso limitato dei candidati alla soluzione decisa in M0, senza concedere accesso didattico prematuro.
- Gestire sospensione/revoca nelle richieste successive anche con sessioni già aperte; non affidarsi soltanto a ruoli memorizzati in token ancora validi.
- Provare la revoca del solo ruolo tutor su un account anche docente: deve perdere la vista trasversale degli studenti e la validazione pratica, conservando soltanto l'accesso ai propri moduli. Eseguire anche la prova inversa.
- Applicare limitazioni ai tentativi e ai reinvii, evitare enumerazione degli utenti; definire protezione aggiuntiva degli account privilegiati e recupero dell'ultimo admin.

**Consegne:** flussi Auth completi, amministrazione utenti/ruoli e test di accesso per ciascun ruolo.

**Accettazione:** email autorizzata riceve l'invito e imposta la password; link scaduto/usato o invito revocato non concede accesso; il recupero funziona; un manager non promuove sé stesso; una revoca impedisce nuove operazioni privilegiate. La documentazione Auth va verificata rispetto alla versione self-hosted installata, non soltanto alle funzionalità Cloud.

**Dipendenze:** M1–M2 e decisione sull'accesso candidati.

### M4 — Corsi, edizioni, moduli e struttura delle aree riservate

**Obiettivo:** fornire il contesto comune a tutte le funzioni.

**Attività**

- Gestire corsi, edizioni, bandi, date, moduli e loro ordinamento.
- Assegnare docenti a uno o più moduli e affidare studenti ai tutor per l'intero percorso formativo, con incarichi e durate indipendenti.
- Definire abilitazioni ai moduli e comportamento per studenti iscritti a più corsi/edizioni.
- Costruire navigazione e pagine iniziali per ruolo; rendere visibili soltanto funzioni effettivamente disponibili.
- Realizzare sito pubblico e struttura delle aree riservate in italiano, inglese e spagnolo: selettore, preferenza persistente, URL per lingua, metadati delle pagine pubbliche e formattazione locale. Verificare che cambio lingua e navigazione mantengano pagina, sessione e permessi.
- Introdurre componenti condivisi per form, tabelle, filtri, conferme, errori e salvataggi.

**Consegne:** catalogo amministrabile, moduli e incarichi, sito pubblico e struttura navigabile delle aree riservate nelle tre lingue, con selettore e cataloghi di traduzione.

**Accettazione:** due edizioni possono coesistere; il docente vede solo i propri moduli e i dati pertinenti dei loro iscritti; il tutor vede l'intero percorso dei soli studenti affidati; le pagine di gestione di un modulo restano inaccessibili al tutor privo del relativo incarico docente, anche tramite URL diretto; manager e admin hanno la stessa operatività salvo la gestione ruoli.

**Dipendenze:** M2–M3.

### M5 — Domande di ammissione e allegati

**Obiettivo:** permettere a un candidato di presentare una domanda completa e al manager di riceverla.

**Attività**

- Implementare pagina del bando e form per sezioni: dati personali, recapiti, titoli/requisiti, dichiarazioni e allegati richiesti.
- Tradurre istruzioni, etichette, errori e conferme nelle tre lingue; verificare che cambiare lingua durante la compilazione conservi bozza, allegati e valori e che le dichiarazioni restino associate alla versione del testo accettato.
- Gestire nomi, indirizzi, telefoni e titoli esteri; non rendere obbligatorio un identificativo italiano per chi non lo possiede, salvo requisito formalmente definito.
- Implementare bozza/ripresa se previste, validazione lato server, caricamenti con avanzamento ed errori comprensibili.
- Applicare scadenza del bando lato server e regole per duplicati, integrazioni, rettifiche e ritiro.
- Congelare una versione della domanda all'invio, con identificativo, data e versione del bando; generare conferma consultabile e notifica.
- Creare elenco domande per manager/admin con filtri, completezza documentale, dettaglio e download autorizzati.
- Proteggere il form da invii massivi e accessi abusivi; separare registrazione riuscita della domanda dall'eventuale fallimento dell'email.

**Consegne:** candidatura completa dall'apertura del bando alla ricezione da parte della segreteria.

**Accettazione:** invio da mobile e desktop, ripresa di un upload fallito, gestione dei campi mancanti e della scadenza; doppio clic non crea due domande; email fallita non perde l'invio; nessun candidato vede dati altrui. Nessun obbligo di allegato viene inventato rispetto al bando.

**Dipendenze:** M2–M4 e campi del bando definiti in M0.

### M6 — Selezione e perfezionamento dell'iscrizione

**Obiettivo:** convertire le candidature ammesse in iscrizioni effettive con un processo verificabile.

**Attività**

- Gestire valutazione, esiti, motivazioni interne e graduatoria/lista d'attesa solo se previste.
- Separare esito interno da comunicazione al candidato e registrare autore/data di entrambi.
- Abilitare agli ammessi il form dei dati integrativi e la lista degli adempimenti richiesti.
- Consentire al manager di verificare documenti e condizioni, quindi confermare l'iscrizione.
- Creare/riutilizzare l'identità e abilitare moduli, tutor e servizi previsti dall'edizione.
- Gestire rinunce, mancato perfezionamento e correzioni; mantenere la domanda originaria e lo storico.
- Preparare il fascicolo studente con dati di ammissione e iscrizione chiaramente distinti.
- Integrare la checklist separata per l'attività clinica definita in M0, dopo verifica dei requisiti correnti per professione con l'ente competente. L'iscrizione al corso non equivale ad autorizzazione clinica e il tutor vede solo lo stato operativo necessario, non i documenti amministrativi.

**Consegne:** procedura selezione → completamento dati → verifica → iscrizione attiva.

**Accettazione:** un non ammesso non si iscrive tramite API; un ammesso incompleto non risulta automaticamente iscritto; una conversione ripetuta non duplica persona o iscrizione; le rettifiche restano visibili nello storico. Se il pagamento è condizione di iscrizione, l'attivazione reale dipende anche da M7.

**Dipendenze:** M5 e criteri di selezione/iscrizione confermati.

### M7 — Logistica, tassa di iscrizione e spese

**Obiettivo:** gestire la permanenza e la situazione economica individuale.

**Attività**

- Definire strutture/alloggi, periodi, arrivi e partenze; gestire camere/posti soltanto al livello di dettaglio necessario.
- Collegare assegnazioni agli studenti, controllare sovrapposizioni e capacità, registrare variazioni.
- Gestire tassa dovuta, eventuali rate, scadenze, esenzioni, pagamenti registrati e giustificativi.
- Registrare spese di permanenza per categoria, periodo, soggetto pagatore, importo e valuta; distinguere spese sostenute, importi dovuti dallo studente e rimborsi.
- Calcolare saldi da movimenti validi, senza sommare valute diverse; conservare rettifiche/storni invece di cancellare la storia economica.
- Definire quali dati e ricevute vede lo studente e quali annotazioni restano interne.
- Collegare lo stato amministrativo all'iscrizione solo secondo condizioni approvate, senza blocchi didattici impliciti.

**Consegne:** scheda logistica/economica individuale ed elenchi operativi per manager/admin.

**Accettazione:** pagamenti parziali, esenzioni e storni producono saldi corretti; una ricevuta caricata non equivale automaticamente a pagamento verificato; prenotazioni concorrenti non superano la capacità; docenti, tutor e altri studenti non accedono ai dati.

**Dipendenze:** M6; regole economiche e logistiche definite. Nessun incasso online in questa milestone.

### M8 — Lezioni, presenze e diario delle attività pratiche

**Obiettivo:** documentare attività e ore, con validazione del tutor.

**Attività**

- Gestire sessioni didattiche e presenze, modalità di registrazione e rettifica secondo le regole approvate.
- Creare il diario dello studente: data, sede formativa, tipologia, descrizione, durata/quantità e riferimenti didattici necessari.
- Consentire bozza e invio; creare la coda del tutor per validare, chiedere correzioni o respingere con motivazione.
- Consentire al tutor di consultare presenze e attività dell'intero percorso dei soli studenti affidati; il docente consulta e gestisce le presenze dei propri moduli e non acquisisce per questo accesso al diario pratico.
- Verificare l'affidamento al momento della decisione; gestire sostituzione del tutor e attività pendenti.
- Dopo validazione, gestire rettifiche come revisioni da rivalidare; proteggere da doppia validazione e modifiche concorrenti.
- Calcolare distintamente ore dichiarate, in attesa e validate; evitare doppi conteggi fra presenze e diario.
- Consentire interventi del manager con motivazione e audit, senza cancellare l'autore della validazione originale.

**Consegne:** registro lezioni/presenze, diario e pannello di validazione.

**Accettazione:** studente inserisce → invia → tutor corregge/valida → riepilogo si aggiorna; un tutor non assegnato e un utente con il solo ruolo docente non validano; il tutor consulta presenze e attività dei propri studenti anche nei moduli di altri docenti; lo studente non modifica silenziosamente un'attività validata; i totali escludono attività respinte e duplicati.

**Dipendenze:** M4 e M6; regole del diario e delle presenze definite.

### M9 — Materiali formativi, video e tracciamento della fruizione

**Obiettivo:** rendere disponibili i contenuti nei moduli abilitati e registrare le attività online.

**Attività**

- Implementare caricamento, ordinamento, revisione e pubblicazione di dispense PDF/Word e risorse video per modulo.
- Gestire lingua e varianti dei contenuti, descrizioni tradotte e sottotitoli quando disponibili; indicare la lingua effettiva delle risorse e le traduzioni mancanti senza perdere la relazione con lo stesso modulo e il suo avanzamento.
- Permettere al docente di gestire i propri moduli e al manager tutti i moduli; definire eventuale revisione editoriale senza introdurla come vincolo non richiesto.
- Decidere l'archiviazione/distribuzione dei video dopo una prova con file e concorrenza rappresentativi: Storage privato esistente oppure servizio dedicato solo se concordato. Valutare banda, conversione, sottotitoli, costi e backup.
- Progettare upload grandi e ripresa trasferimenti senza assumere che file video possano transitare integralmente nelle funzioni Vercel.
- Gestire player, ripresa della posizione, eventi di visualizzazione e completamento secondo soglie concordate.
- Distinguere apertura/download di una dispensa, visione registrata e apprendimento verificato: un download non dimostra lettura e gli eventi del player non provano da soli l'attenzione.
- Applicare autorizzazioni anche alla consegna dei file/video; rivalutare accesso a ogni nuova richiesta e usare URL temporanei con durata definita. Un URL già emesso può restare valido fino alla sua scadenza: documentare questo limite nella revoca.
- Conservare versioni e definire se una sostituzione richiede nuova fruizione; gestire perdita di rete e sincronizzazione dei progressi.

**Consegne:** area e-learning per moduli, gestione contenuti e avanzamento dello studente.

**Accettazione:** contenuti non pubblicati e moduli non abilitati sono inaccessibili; ripresa video e avanzamento funzionano dopo interruzione; eventi ripetuti non aumentano artificialmente il completamento; il docente vede i progressi nei propri moduli; il tutor vede la fruizione dei soli studenti affidati anche nei moduli di altri docenti, senza diritti editoriali; il manager ha la visione completa.

**Dipendenze:** M2, M4, M6; scelta video e criteri di completamento definiti.

### M10 — Test e valutazione dell'apprendimento

**Obiettivo:** verificare l'apprendimento con domande a scelta e a risposta libera.

**Attività**

- Creare editor dei test per modulo: domande, opzioni, risposta singola/multipla se prevista, risposte aperte e punteggi.
- Definire soglia, tentativi, eventuale tempo massimo, ordine casuale, disponibilità delle soluzioni e politica di feedback.
- Versionare i test pubblicati e associare ciascun tentativo alla versione effettivamente svolta.
- Per i test tradotti, collegare le varianti linguistiche alla medesima versione logica e verificare equivalenza di domande, opzioni e punteggi. Registrare la lingua della prova; il cambio lingua dell'interfaccia non crea nuovi tentativi né modifica le domande assegnate o le risposte salvate.
- Salvare le risposte durante lo svolgimento; gestire ripresa, consegna definitiva e scadenza lato server.
- Correggere le domande chiuse sul server; mantenere soluzioni e criteri riservati fuori dal payload dello studente prima del momento consentito.
- Fornire al docente la coda di correzione delle risposte aperte, con punteggio, feedback e pubblicazione dell'esito.
- Consentire al docente dei moduli assegnati di attribuire il voto o giudizio e l'esito di idoneità/superamento del modulo, secondo la scala e i criteri concordati. Distinguere questa valutazione dai risultati dei singoli test.
- Rendere test svolti, valutazioni ed esiti consultabili dal tutor dello studente lungo tutto il percorso, senza consentirgli di correggere test o cambiare voti/giudizi in virtù del solo ruolo tutor.
- Distinguere consegnato, in valutazione, superato e non superato; applicare al modulo il criterio di completamento concordato.
- Consentire rettifiche motivate senza cancellare tentativi o valutazioni originali.
- Gestire la registrazione della prova finale prevista dagli statuti: elaborato, presentazione, voto in centodecimi ed eventuale lode, con riferimento al verbale inserito dal manager. Il completamento dei moduli non conclude automaticamente il corso e non genera un attestato ufficiale.

**Consegne:** editor, esecuzione, correzione automatica/manuale, risultati personali, voto/giudizio ed esito del modulo; consultazione del percorso valutativo per il tutor assegnato.

**Accettazione:** punteggi verificati su casi noti; limite tentativi e scadenza non aggirabili via client; doppia consegna non duplica il risultato; cambio del test non altera i tentativi passati; docente non corregge né attribuisce voti/giudizi in moduli altrui; il tutor consulta risultati ed esiti dei soli studenti affidati, ma non li modifica; un test con risposte aperte non risulta superato prima della valutazione completa.

**Dipendenze:** M9 e regole di valutazione approvate.

### M11 — Cruscotti, esportazioni e notifiche operative

**Obiettivo:** rendere leggibile l'intero percorso senza ricostruzioni manuali.

**Attività**

- Cruscotto studente: adempimenti, moduli, risultati, presenze, diario e situazione personale autorizzata.
- Cruscotto docente: propri moduli, iscritti e loro attività pertinenti, materiali, test da correggere, voti/giudizi ed esiti.
- Cruscotto tutor: soli studenti affidati, con vista trasversale di presenze, diario e validazioni pendenti, fruizione online, moduli frequentati/superati e risultati.
- Per chi ha entrambi i ruoli, distinguere chiaramente funzioni di docenza e tutoraggio, mantenendo gli stessi controlli di ambito su schermate, API ed esportazioni.
- Cruscotto manager/admin: domande, iscritti, adempimenti, logistica, situazione economica e stato didattico.
- Definire i report necessari e i relativi denominatori: iscritti attivi, ore valide, moduli abilitati, test valutati; non inventare un unico «percentuale di completamento» mescolando misure diverse.
- Esportare elenchi e fascicoli nei formati concordati, con filtri, completezza e permessi identici alle schermate; proteggere eventuali CSV da formule introdotte nei dati.
- Completare le notifiche operative concordate, riutilizzando la base email: integrazioni, iscrizione, attività da correggere, esiti e scadenze. Definire destinatari e frequenza per evitare duplicazioni.
- Rendere visibili allo staff errori di invio e possibilità di ritentativo; minimizzare dati personali nelle email.
- Verificare cruscotti, intestazioni dei report ed email in italiano, inglese e spagnolo; rispettare la lingua di ciascun destinatario senza tradurre automaticamente dati personali, risposte o annotazioni originali.

**Consegne:** cruscotti coerenti per ruolo, esportazioni verificate e notifiche con esiti tracciati.

**Accettazione:** conteggi e saldi coincidono con il dataset di riferimento; esportazioni oltre una pagina sono complete; filtri e ambiti sono rispettati; email ripetute non duplicano operazioni; un errore di invio è distinguibile da un errore del processo principale.

**Dipendenze:** M5–M10. Le notifiche indispensabili ai singoli flussi sono già realizzate nelle rispettive fasi.

### M12 — Collaudo integrato e prova pilota

**Obiettivo:** dimostrare che le funzioni lavorano insieme e rispettano i ruoli.

**Attività**

- Eseguire il percorso completo con almeno due edizioni, più studenti, docenti di moduli diversi, tutor con studenti affidati diversi, un utente sia docente sia tutor, manager e admin.
- Ripetere i test negativi su pagine, API, database, file, esportazioni e sessioni revocate.
- Verificare il caso incrociato: docente del modulo A e tutor di X legge il percorso di X nel modulo B, ma non può modificarne test o voti né vedere gli altri iscritti a B. Verificare che il solo docente di A non legga il percorso di X in B e che il solo tutor di X non gestisca i moduli di X.
- Revocare separatamente ruolo e assegnazione docente-modulo o tutor-studente; verificare la perdita del relativo accesso, il mantenimento degli altri incarichi validi e la conservazione degli autori delle valutazioni storiche.
- Provare scadenze, interruzioni di rete, invii ripetuti, aggiornamenti concorrenti, errori email e file non validi.
- Verificare interfaccia mobile, tastiera, messaggi, allegati, video e fruizione con connessioni lente.
- Collaudare nelle tre lingue candidatura, iscrizione, accesso/recupero password, diario, moduli, test ed email; verificare testi mancanti, impaginazione, formati locali e cambio lingua durante form e prove. Controllare che valori, permessi, scadenze e risultati siano identici a parità di dati.
- Misurare prestazioni su volumi concordati per elenchi, file, progressi e test simultanei; controllare consumo di banda e spazio.
- Verificare migrazioni, recupero backup, monitoraggio e compatibilità di un eventuale ritorno alla versione precedente.
- Condurre una prova guidata con referenti di segreteria, docenza e tutoraggio usando dati sintetici; registrare problemi con gravità e responsabilità.
- Completare guide brevi per ciascun ruolo e procedure di assistenza.

**Consegne:** verbale di collaudo, evidenze dei test, problemi risolti/residui e manuali essenziali.

**Accettazione:** nessuna esposizione fra utenti/ambiti; nessuna perdita di domande, validazioni, movimenti o tentativi nei casi provati; nessun problema bloccante aperto; referenti confermano che i percorsi corrispondono al lavoro reale.

**Dipendenze:** M0–M11.

### M13 — Rilascio graduale e gestione ordinaria

**Obiettivo:** rendere disponibile il software verificato e mantenerlo recuperabile.

**Attività**

- Preparare la versione da rilasciare con note, migrazioni, configurazioni, backup, controlli e responsabilità.
- Verificare in produzione mittente/SMTP, redirect Auth, segreti, Storage privato, backup esterno e allarmi.
- Pubblicare solo le sezioni concluse; attivare account reali e comunicazioni nel perimetro del rilascio concordato.
- Usare il deploy automatico GitHub → Vercel e verificarne l'esito e il dominio, evitando deploy manuali duplicati.
- Eseguire controlli successivi non distruttivi: login autorizzato, accessi negati, collegamenti, risorse pubblicate e integrità dei dati. Usare dati di test soltanto nel collaudo.
- Monitorare errori applicativi, Auth, invio email, spazio, banda e backup; definire chi interviene e con quali priorità.
- Pianificare aggiornamenti di sicurezza, prove periodiche di ripristino, revisione degli accessi e apertura delle edizioni successive.

**Consegne:** versione in esercizio, verifica successiva al deploy e procedura operativa per assistenza/manutenzione.

**Accettazione:** sito e flussi autorizzati funzionano sull'ambiente corretto; allarmi e backup sono attivi e verificati; versione e migrazioni sono identificate; esiste una procedura praticabile di recupero e un referente per gli incidenti.

**Dipendenze:** M12 per il rilascio completo. Per rilasci intermedi applicare comunque M12 e M13 al sottoinsieme concluso, prima di raccogliere dati reali.

## 8. Possibili rilasci intermedi

| Rilascio | Funzioni disponibili | Condizioni |
| --- | --- | --- |
| A — Ammissioni | Bandi, accesso candidato, domande e ricezione staff | M0–M5 concluse; collaudo/rilascio M12–M13 sul perimetro; backup esterno, email e testi pronti |
| B — Iscrizioni e gestione | Selezione, iscrizione, alloggio, tasse/spese, presenze e diario | M6–M8 concluse e verificate; regole economiche integrate ove necessarie |
| C — Piattaforma completa | Moduli online, video/dispense, test, report e notifiche | M9–M11 concluse; collaudo integrato e rilascio completo |

L'ordine consente di ricevere candidature prima del completamento dell'e-learning, se utile alle scadenze reali. L'apertura di un'area non deve far intendere che le altre siano già operative. Ogni rilascio deve rendere disponibili le proprie funzioni in italiano, inglese e spagnolo: il multilingua non viene rinviato al rilascio finale.

Non vengono attribuite date o stime in giorni prima di conoscere bandi, campi, volumi e regole. Al termine di M0 stimare ogni milestone e dividerla, se necessario, in incrementi più piccoli con verifica autonoma.

## 9. Registro di avanzamento

Aggiornare questa tabella dopo ogni milestone; mantenere un registro separato delle decisioni e dei problemi emersi.

| Milestone | Stato | Evidenze / consegne | Rilascio |
| --- | --- | --- | --- |
| M0 — Specifiche | Completata per progettazione; dati istituzionali preparatori | [Consegne e verifiche](docs/m0/SPECIFICHE_FUNZIONALI.md), [punti aperti e termini](docs/m0/FONTI_E_DECISIONI.md) | Non applicabile |
| M1 — Ambienti e continuità | Da avviare | — | — |
| M2 — Dati e autorizzazioni | Da avviare | — | — |
| M3 — Accessi e ruoli | Da avviare | — | — |
| M4 — Corsi e moduli | Da avviare | — | — |
| M5 — Ammissioni | Da avviare | — | — |
| M6 — Selezione e iscrizioni | Da avviare | — | — |
| M7 — Logistica ed economia | Da avviare | — | — |
| M8 — Presenze e diario | Da avviare | — | — |
| M9 — Contenuti e fruizione | Da avviare | — | — |
| M10 — Test | Da avviare | — | — |
| M11 — Report e notifiche | Da avviare | — | — |
| M12 — Collaudo | Da avviare | — | — |
| M13 — Esercizio | Da avviare | — | — |

Per ogni esecuzione registrare: obiettivo effettivo, decisioni adottate, file/migrazioni modificati, verifiche con esito, limitazioni, revisione del diff e prossimo passo. Conservare nelle evidenze soltanto dati sintetici o informazioni prive di contenuti personali.

## 10. Fonti e limiti della pianificazione

- Requisiti funzionali: descrizione dell'utente del 22 settembre 2026 e successive precisazioni sulla separazione dei ruoli docente e tutor e sulla piattaforma in italiano, inglese e spagnolo, recepite in questo piano.
- Configurazione locale: [AGENTS.md](AGENTS.md), [README.md](README.md), [INFRASTRUCTURE.md](INFRASTRUCTURE.md), [package.json](package.json), letti in questa sessione.
- Inviti staff: [Supabase — inviteUserByEmail](https://supabase.com/docs/reference/javascript/auth-admin-inviteuserbyemail), consultato il 22 settembre 2026.
- Password e recupero: [Supabase — Password-based Auth](https://supabase.com/docs/guides/auth/passwords), consultato il 22 settembre 2026.
- Sicurezza dei dati: [Supabase — Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security), consultato il 22 settembre 2026.

Le fonti tecniche supportano l'impostazione generale; la compatibilità concreta delle API, dei flussi Auth e delle configurazioni verrà verificata sulle versioni effettivamente installate nelle milestone interessate. Questo piano non certifica lo stato live dell'infrastruttura e non sostituisce bandi o regole ufficiali del corso.
