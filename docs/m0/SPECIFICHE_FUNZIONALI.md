# M0 — Specifiche funzionali dei corsi di perfezionamento

Versione 1, 22 settembre 2026. M0 completata per la progettazione e l'avvio di M1; configurazioni accademiche preparatorie, da riconciliare con il bando quando sarà pubblicato. Nessun codice applicativo, modifica ai servizi o attivazione di account realizzata in M0.

## 1. Risultato e documenti di lavoro

La piattaforma gestirà due corsi distinti, per medici e infermieri, con edizioni annuali, cinque ruoli e interfaccia italiana, inglese e spagnola. Il percorso ordinario sarà: domanda verificata → valutazione e colloquio → ammissione → perfezionamento dell'iscrizione → moduli e attività pratiche → verifica finale del percorso.

Le fonti consentono di definire il prodotto e di procedere con gli ambienti di sviluppo. La pubblicazione del bando, i dettagli delle attività pratiche e alcune condizioni economiche rimangono dipendenze delle milestone successive, con responsabilità e scadenze nel registro. Non occorre attendere queste informazioni per M1.

Consegne M0:

- Questo documento: specifica, catalogo iniziale, permessi, processi e criteri di accettazione.
- [Campi e documenti](CAMPI_E_DOCUMENTI.md): obbligatorietà, fase di raccolta, fonte e accessibilità.
- [Percorsi e bozzetti](PERCORSI_E_SCHERMATE.md): flussi e schermate essenziali per ogni ruolo.
- [Fonti e decisioni](FONTI_E_DECISIONI.md): inventario, precedenza delle versioni, contraddizioni, scelte adottate e questioni rinviate.

Etichette usate: **U** requisito esplicito dell'utente; **F** dato ricavato dalle fonti, preparatorio finché manca il bando definitivo; **D** decisione progettuale adottata su delega dell'utente; **A** punto aperto con termine di risoluzione. Gli identificativi delle fonti, per esempio C14, rimandano al registro.

## 2. Corsi ed edizione iniziale

| Parametro | Medici | Infermieri | Fonte / stato |
| --- | --- | --- | --- |
| Titolo italiano | Salute pediatrica e neonatale nei Paesi a basso e medio reddito: approcci clinici e di sanità pubblica | Assistenza infermieristica in area pediatrica e neonatale nei Paesi a basso e medio reddito | C10, C12, C14, C16; F |
| Codice interno proposto | MED | INF | D; non codice universitario ufficiale |
| Anno accademico | 2026/2027 | 2026/2027 | C20 e calendari C14/C16; F |
| Titolo di accesso ordinario | Laurea in Medicina e Chirurgia o titolo estero equipollente | Laurea in Infermieristica o Infermieristica pediatrica o titolo estero equipollente | C10/C12; F |
| Durata | 1 anno | 1 anno | C45/C46, art. 4; F |
| Crediti | 20 CFU | 20 CFU | C33/C22 e C45/C46; F |
| Moduli nel piano didattico completo | 10 | 9 | C33/C22; F; distinta verifica della bozza docenti C01 |
| Ore frontali / e-learning | 149 / 91 | 148 / 92 | C33/C22, foglio Tabella; somme verificate |
| Totale ore didattiche tabellate | 240 | 240 | F; non equivale alle ore di pratica clinica |
| Partecipanti ordinari | Minimo 5, massimo 20 | Minimo 5, massimo 20 | C45/C46, art. 13; F |
| Quota ordinaria documentata | € 2.000, due rate | € 2.016, due rate | C45/C46; F; quota INF diversa dalle precedenti schede economiche |
| Lingua della didattica negli statuti | Inglese | Inglese | C45/C46, art. 1; distinta dalle tre lingue dell'interfaccia, U |
| Presenza minima documentata | 80% | 80% | C45/C46, art. 14; denominatore da definire prima di M8 |
| Verifica di modulo | Prova scritta, voto in trentesimi, minimo 18/30, eventuale lode | Come medici | C45/C46, art. 6; F |
| Prova finale | Elaborato scritto e presentazione orale in presenza; minimo 66/110, eventuale lode | Come medici | C45/C46, art. 6; F |

Il titolo inglese del corso medici non è uniforme tra statuto e manifestazione di interesse successiva: il registro conserva entrambe le versioni e indica quella più recente come riferimento provvisorio. Nessuna traduzione è presentata come denominazione ufficiale senza riscontro nel bando.

### Calendario preparatorio comune

Negli Allegati B PDF firmati del 2 settembre 2026, **l'opzione B è selezionata visivamente** in entrambi i corsi (C14 e C16):

- Domande di ammissione: 15 gennaio 2027.
- Immatricolazioni: 19 febbraio 2027.
- Inizio lezioni: 15 marzo 2027.
- Seconda rata: 19 maggio 2027.

Queste date sostituiscono ai fini della progettazione il precedente avvio del 1° novembre 2026 in C20. L'orario di chiusura delle domande non è specificato: non assumere automaticamente le 23:59. Le scadenze pubbliche restano disattivate fino alla conferma del bando e delle condizioni di attivazione; il calendario dei moduli è ancora da comporre.

### Perimetro della prima versione

**U, precisazione successiva durante M0:** realizzare esclusivamente il percorso standard del corso completo. Uditori e iscrizioni a singoli insegnamenti, pur presenti nelle fonti, sono rinviati a quando saranno necessari. Non realizzare ora schermate, regole, tariffe operative, tipi di iscrizione o migrazioni dedicate a tali modalità. La scelta del corso medici o infermieri rimane obbligatoria.

## 3. Catalogo didattico iniziale

Fonte più recente completa e coerente per ore/crediti: C33 e C22, foglio **Tabella**, aggiornati il 5 agosto 2026. Confermati dalle tabelle degli statuti. Identificativi sotto proposti internamente, non codici ufficiali. La bozza successiva dei docenti C01 contiene un elenco medici parziale e dati divergenti: nomine e catalogo vanno riconciliati prima della pubblicazione M4, senza perdere quella revisione più recente.

### Medici

| Codice | Modulo | SSD | Frontali | Online | CFU |
| --- | --- | --- | --- | --- | --- |
| MED-01 | Pediatria e Neonatologia | MEDS-20/A | 28 | 20 | 4 |
| MED-02 | Terapia intensiva neonatale | MEDS-20/A | 15 | 9 | 2 |
| MED-03 | Chirurgia pediatrica d’Urgenza | MEDS-18/A | 15 | 9 | 2 |
| MED-04 | Anestesiologia e rianimazione pediatrica | MEDS-23/A | 15 | 9 | 2 |
| MED-05 | Pediatria e neonatologia d’urgenza | MEDS-20/A | 15 | 9 | 2 |
| MED-06 | Epidemiologia e Sanità Pubblica | MEDS-24/B | 15 | 9 | 2 |
| MED-07 | Bioetica in area pediatrica | MEDS-25/A | 8 | 4 | 1 |
| MED-08 | Antropologia medica | PHIL-01/A | 8 | 4 | 1 |
| MED-09 | Chirurgia Neonatale | MEDS-18/A | 15 | 9 | 2 |
| MED-10 | Chirurgia urologica pediatrica | MEDS-26/D | 15 | 9 | 2 |
| Totale | | | 149 | 91 | 20 |

### Infermieri

| Codice | Modulo | SSD | Frontali | Online | CFU |
| --- | --- | --- | --- | --- | --- |
| INF-01 | Neonatologia | MEDS-20/A | 22 | 14 | 3 |
| INF-02 | Terapia intensiva neonatale | MEDS-20/A | 15 | 9 | 2 |
| INF-03 | Infermieristica pediatrica e neonatale | MEDS-22/B | 28 | 20 | 4 |
| INF-04 | Anestesiologia e rianimazione pediatrica | MEDS-23/A | 15 | 9 | 2 |
| INF-05 | Pediatria e neonatologia d’urgenza | MEDS-20/A | 15 | 9 | 2 |
| INF-06 | Epidemiologia e Sanità Pubblica | MEDS-24/B | 15 | 9 | 2 |
| INF-07 | Bioetica in area pediatrica | MEDS-25/A | 15 | 9 | 2 |
| INF-08 | Antropologia medica | PHIL-01/A | 8 | 4 | 1 |
| INF-09 | Scienze infermieristiche cliniche in area critica | MEDS-22/C | 15 | 9 | 2 |
| Totale | | | 148 | 92 | 20 |

La riga «Tesi Finale» nelle fonti non attribuisce ore o CFU: mantenerli non definiti, senza aggiungere crediti ai 20 tabellati. Moduli omonimi fra i due corsi restano distinti per iscritti, ore, docenti ed esiti; è possibile riutilizzare una risorsa didattica tramite collegamento esplicito, senza fondere le classi.

## 4. Selezione e ammissioni

### Griglia più recente

Gli Allegati A C10/C12 prevedono colloquio obbligatorio per tutti gli aspiranti ordinari. Questa disposizione più recente sostituisce il colloquio solo in caso di esubero descritto negli statuti precedenti. Tutti i punteggi restano preparatori e versionati fino al bando.

| Voce | Regola documentata | Massimo |
| --- | --- | --- |
| Voto titolo di accesso | 110 e lode/massimo con distinzione: 20; 110: 18; 106–109: 15; 101–105: 12; 96–100: 8; 66–95: 4; non documentato: 0 | 20 |
| Titoli ulteriori pertinenti | Specializzazione/qualifica avanzata o dottorato pertinente: 3; master/CdP pertinente: 2; altro titolo universitario pertinente: 1; cumulabili fino al tetto | 5 |
| Formazione certificata | Con verifica finale: almeno 50 ore: 2 per corso; 20–49 ore: 1; cumulabili fino al tetto | 5 |
| Situazione professionale | Impiego pubblico: 6; privato accreditato/non profit: 4; privato: 3; altra attività sanitaria: 1; non occupato: 0 | 6 |
| Anzianità post-laurea | Almeno 5 anni: 4; da 3 a meno di 5: 3; da 1 a meno di 3: 2; meno di 1: 0 | 4 |
| Pertinenza professionale | Diretta: 5; parziale: 2; non pertinente: 0 | 5 |
| Esperienza LMIC/contesti fragili | Attuale o almeno 24 mesi: 10; 12–23 mesi: 8; 6–11 mesi: 5; 1–5 mesi: 2; nessuna: 0; documentata e pertinente | 10 |
| Lingue | Una lingua ufficiale UE diversa dalla madrelingua; livello documentato più alto: C1/C2: 5; B2: 4; B1: 2; A2: 1; inferiore/non documentato: 0 | 5 |
| Colloquio | Motivazione 0–15; competenze 0–15; utilità e trasferimento 0–10 | 40 |
| Totale | Titoli/esperienze/lingue 60 + colloquio 40 | 100 |

Per l'idoneità al colloquio devono valere **tutte** le condizioni: totale almeno 24/40, motivazione almeno 8/15, competenze almeno 8/15, utilità almeno 5/10. Il superamento della sola soglia totale non basta. In caso di pari merito prevale il più giovane; parità anche di nascita rinviata a decisione motivata della commissione, senza inventare un ulteriore criterio.

**D:** il software propone somme, controlli e ordinamento, ma il manager registra la valutazione della commissione e pubblica l'esito. Docente e tutor non acquisiscono accesso alle candidature per il solo ruolo didattico. Le componenti discrezionali non sono assegnate da un algoritmo.

Per voti esteri conservare voto originale, scala, distinzione e documenti; il valore convertito e il metodo vengono verificati dallo staff. La fonte cita una formula MUR senza riportarla: non implementare una conversione presunta. Regole di arrotondamento, gestione intervalli/periodi sovrapposti e classificazione dei Paesi alla data limite sono punti A prima di M6. L'esperienza attuale qualificante vale 10 secondo la fonte anche se inferiore a 24 mesi: non sostituire silenziosamente tale regola.

### Flusso operativo scelto

1. Il manager prepara l'edizione e pubblica la candidatura soltanto con bando e requisiti validati.
2. Il candidato verifica la propria email e sceglie una password; dispone di un accesso limitato al proprio fascicolo di candidatura. Nessun ruolo staff selezionabile.
3. Compila e salva la bozza; il software distingue campi obbligatori, dati utili al punteggio e adempimenti successivi. Invio unico per persona/edizione secondo regola configurata; una seconda candidatura identica riapre quella esistente.
4. All'invio vengono congelati risposte, allegati, versione del bando e dichiarazioni. Sono generati identificativo e ricevuta applicativa, che non viene presentata come protocollo universitario.
5. Il manager controlla la completezza e richiede eventuali integrazioni; una finestra di integrazione non cambia la scadenza generale. Nuove versioni non cancellano gli originali.
6. Lo staff registra punteggi e colloquio, verifica l'idoneità, ordina gli idonei e distingue ammissione, lista d'attesa, non idoneità e mancata ammissione per posti.
7. L'esito resta interno fino a pubblicazione esplicita. Lo studente vede il proprio esito e le informazioni pubblicabili; non vede le note interne sugli altri candidati.
8. L'ammesso completa gli adempimenti; il manager conferma l'iscrizione solo dopo la verifica richiesta. Riutilizzo della medesima identità, senza duplicazioni.

Il rapporto con l'immatricolazione ufficiale dell'Ateneo va verificato sul bando. Scelta D: conservare un identificativo/riferimento di verifica esterna e una checklist manuale; nessuna integrazione automatica né pretesa che il nostro account sostituisca la matricola universitaria.

## 5. Ruoli e limiti dei dati

La matrice del [piano generale](../../PIANO_DI_LAVORO.md#41-matrice-dei-permessi) resta il riferimento; M0 conferma i cinque ruoli e il cumulo docente + tutor richiesto dall'utente.

| Area | Studente/candidato | Docente | Tutor | Manager e admin |
| --- | --- | --- | --- | --- |
| Domanda, titoli, CV, dati amministrativi | Propri, nelle fasi abilitate | No | No | Tutti |
| Iscritti e attività di modulo | Propri | Iscritti ai propri moduli, dati didattici pertinenti | Propri affidati in tutti i moduli del percorso | Tutti |
| Materiali e test | Fruizione dei moduli abilitati | Gestione dei moduli assegnati | Lettura dei materiali pubblicati dei moduli dei propri affidati; nessuna gestione | Tutti |
| Soluzioni riservate e bozze dei test | No; feedback secondo regole | Propri moduli | No accesso alla banca risposte o alle bozze; può consultare tentativi consegnati e risultati degli affidati | Tutti |
| Voti, giudizi, esiti | Propri pubblicati | Gestione dei propri moduli | Lettura lungo il percorso dei propri affidati | Tutti |
| Diario | Proprio | Nessun accesso per sola docenza | Lettura e validazione degli affidati | Tutti con audit |
| Logistica, pagamenti, pratica documentale | Propri dati pertinenti | No | No documenti amministrativi; solo stato operativo di accesso alla pratica quando necessario | Tutti |
| Ruoli staff | No | No | No | Solo admin |

**D:** manager e admin gestiscono abbinamenti docente-modulo e tutor-studente fra persone già abilitate al rispettivo ruolo. Un tutor principale per iscrizione/percorso; eventuale sostituto ha affidamento esplicito con periodo. L'affidamento copre l'intero percorso dell'iscrizione, non tutte le altre iscrizioni della persona. La fine dell'incarico chiude l'accesso; lo storico conserva l'autore.

**D:** l'admin può nominare un ulteriore admin; impedire rimozione/sospensione dell'ultimo admin attivo. Nessun account viene creato adesso. Gli altri cumuli di ruoli non sono necessari alla prima versione e non vanno abilitati implicitamente.

Annotazioni interne, motivazioni istruttorie, costi organizzativi e audit non sono mostrati allo studente. Feedback didattico e richieste di integrazione hanno un campo esplicitamente destinato allo studente, separato dalle note interne. Lo studente può consultare la propria quota, copertura riconosciuta, pagamenti e informazioni di soggiorno; non la contabilità complessiva del progetto.

## 6. Iscrizione, permanenza e pratica clinica

### Fascicolo e adempimenti

Mantenere separati: ammissione accademica; immatricolazione verificata; situazione economica; disponibilità dei documenti; autorizzazione all'attività clinica; alloggio e permanenza. L'ammissione e il completamento dei caricamenti non producono un'autorizzazione professionale.

Le fonti C02–C08/C18 elencano documenti per l'attività clinica e i modelli differiscono per professione. La piattaforma gestirà una checklist per corso e profilo, con stato, referente, scadenza e riferimento al documento verificato. I requisiti correnti saranno confermati dall'ufficio competente prima dell'uso reale; M0 non verifica né interpreta la normativa vigente.

**D:** mantenere attiva la formazione teorica quando mancano documenti clinici, salvo diversa regola del bando. Per una pratica clinica soggetta ad autorizzazione verificare stato valido e periodo; impedire che sia presentata come autorizzata o validata con documenti mancanti/scaduti. Attività osservazionali, simulazioni e pratica clinica hanno tipologie separate. Non cancellare eventi storici: anomalie e rettifiche devono restare tracciabili.

### Logistica e spese

Le categorie iniziali sono alloggio, vitto, viaggio, visto, assicurazione, riconoscimento titoli e altre spese motivate; derivano dal perimetro utente e dall'accordo C28, art. 2.3. Registrare periodo, soggetto pagatore, beneficiario, valuta, importo, stato e giustificativo. Nessuna tariffa o diaria viene inventata.

**D:** ogni soggiorno può avere più assegnazioni successive di alloggio; date e capacità controllate. Eventi di arrivo/partenza non modificano automaticamente le presenze didattiche. La quota ordinaria, una copertura da progetto, una vera esenzione e un pagamento effettivo sono dati diversi.

Le schede C23/C34 riportano copertura per partecipanti provenienti da El Salvador. Non dedurla automaticamente dalla cittadinanza: lo staff identifica il beneficiario del progetto e documenta la copertura. La quota nominale resta visibile; la parte a carico dello studente dipende dalla copertura registrata. Importo delle singole rate e inclusione di eventuali oneri nella quota infermieri restano A. Nessun incasso online è previsto.

## 7. Presenze, diario e apprendimento

**D — Diario minimo:** data, sede/reparto formativo, tipo attività, obiettivo/competenza, descrizione senza dati dei pazienti, durata in minuti, eventuale quantità, tutor assegnato e stato. Bozza → inviata → validata / da correggere / respinta. Il tutor aggiunge feedback; una variazione di data, durata o contenuto dopo la validazione genera una revisione da rivalidare. No autovalidazione; durate positive; sovrapposizioni segnalate e risolte con motivazione.

Le fonti non forniscono un monte ore obbligatorio della pratica: conservarlo non definito. Non riutilizzare le 250 ore del corso sulle radiazioni e non ricavare ore cliniche dai CFU. I semestri/rotazioni del progetto C07/C19 sono un livello diverso dai 10/9 insegnamenti universitari.

**D — Presenze:** inizialmente registrazione staff per lezione, con ore riconosciute e prova/rettifica; docente solo nei propri moduli, manager in tutti. Lo studente consulta, il tutor monitora gli affidati. La soglia documentata dell'80% non causa espulsione automatica: segnala il caso allo staff, che registra la decisione prevista dal regolamento. Denominatore, assenze giustificate e recuperi saranno definiti prima di M8.

**D — E-learning:** moduli assegnati dall'iscrizione; per il corso completo vengono predisposti tutti i moduli dell'edizione, senza prerequisiti automatici non documentati. Il manager può programmare date di apertura. Versioni e abilitazioni non cambiano i risultati storici. Download, visione e superamento sono stati distinti; il completamento tecnico di una risorsa non dimostra da solo una competenza.

**D — Test:** supporto a scelta singola, multipla e risposta libera. Per ogni prova docente imposta modalità, punteggio, disponibilità, tentativi e feedback prima della pubblicazione; limite proposto di un tentativo valutativo e riapertura motivata dello staff, mentre gli esercizi formativi possono essere ripetuti. Nessuna penalità o soglia percentuale di quiz viene equiparata automaticamente al 18/30.

La valutazione ufficiale iniziale prevista dalle fonti è in trentesimi; il software supporta anche giudizi/idoneità richiesti dall'utente per le attività che li prevedono. Il docente assegna e pubblica voto/giudizio del proprio modulo, distinto dalla correzione dei singoli quiz. Per risultati numerici la lode è ammissibile solo al massimo previsto. Il tutor legge, non modifica.

**D — Chiusura:** registrazione da manager/admin dell'elaborato, data della prova finale, giudizio/voto e riferimento al verbale; niente emissione automatica di attestato ufficiale. Corso concluso solo dopo verifica di moduli richiesti, frequenza, pratica secondo piano individuale, prova finale e adempimenti. Il follow-up al rientro è separabile dall'edizione conclusa, con incarico tutor esplicito e scadenza.

## 8. Multilingua e scelte operative trasversali

**U:** italiano, inglese e spagnolo per pubblico, aree riservate e comunicazioni. **D:** italiano predefinito, scelta persistente e modificabile; email nella preferenza salvata, compresa quella del candidato prima dell'iscrizione. I contenuti didattici mantengono la loro lingua originale, dichiarata; i manager ne revisionano le traduzioni editoriali, i docenti quelle delle proprie prove. Le denominazioni ufficiali restano riconoscibili. Non si promette una traduzione integrale di video e dispense non ancora disponibili.

**D:** domanda con salvataggio bozza e account verificato; ricevute applicative; notifiche transazionali per invito, recupero, invio domanda, integrazione, esito, iscrizione, richiesta di correzione e pubblicazione valutazione. Il tutor usa un elenco delle attività pendenti e un riepilogo, evitando un'email per ogni evento di visione. Invio reale e destinatari saranno configurati nelle milestone autorizzate.

**D — Base di dimensionamento:** due corsi fino a 20 iscritti ordinari ciascuno per edizione (F); collaudo con 200 candidature per corso, 40 studenti contemporanei e 10 operatori (ipotesi tecnica, non previsione di domanda). File documentali fino a 20 MB ciascuno come limite iniziale configurabile; video separati, capacità/banda da misurare in M9. Obiettivo operativo iniziale proposto: perdita massima dati di 24 ore e ripristino entro 8 ore, da verificare in M1, non SLA già garantito.

Il codice identificativo universitario del corso, gli account nominativi, i tempi di conservazione e i testi privacy non sono inventati. Le relative decisioni sono registrate come A con responsabile e milestone. Il modello dati resta configurabile per le edizioni successive.

### Glossario iniziale per interfaccia

| Italiano | Inglese | Spagnolo |
| --- | --- | --- |
| Domanda di ammissione | Application for admission | Solicitud de admisión |
| Ammesso | Admitted | Admitido |
| Iscrizione | Enrolment | Matrícula |
| Docente | Instructor | Docente |
| Tutor | Tutor | Tutor |
| Diario delle attività pratiche | Practical activity log | Registro de actividades prácticas |
| Da correggere | Changes requested | Requiere correcciones |
| Validata | Validated | Validada |
| Modulo superato | Module passed | Módulo aprobado |
| Idoneo / non idoneo | Eligible / not eligible | Apto / no apto |

I termini di idoneità vanno contestualizzati: ammissione, pratica e superamento didattico non devono condividere uno stato ambiguo. Le traduzioni saranno revisionate nelle rispettive milestone.

## 9. Condizioni di accettazione per le fasi successive

| ID | Caso di riferimento | Risultato atteso | Milestone |
| --- | --- | --- | --- |
| AC01 | Candidato cambia lingua e riprende una bozza | Dati e allegati conservati; nessuna seconda domanda | M3–M5 |
| AC02 | Colloquio 15 + 4 + 10 = 29 | Non idoneo: competenze sotto 8, anche se totale oltre 24 | M6 |
| AC03 | Colloquio 8 + 8 + 8 = 24 | Soglie del colloquio soddisfatte; ammissione subordinata agli altri requisiti/posti | M6 |
| AC04 | Due idonei a pari punti | Ordinamento per età più giovane; ulteriore parità segnalata allo staff | M6 |
| AC05 | Candidato ammesso senza adempimenti verificati | Nessuna iscrizione definitiva automatica | M6 |
| AC06 | Beneficiario coperto dal progetto | Quota nominale distinta da debito personale e da incasso | M7 |
| AC07 | Docente A e tutor di X apre modulo B | Legge il percorso di X; non gestisce B e non legge gli altri studenti | M2–M4, M12 |
| AC08 | Revoca affidamento tutor, docenza mantenuta | Cessa accesso trasversale; resta la docenza nei moduli assegnati | M3, M12 |
| AC09 | Attività validata viene rettificata | Storico conservato, nuova revisione da validare, nessun doppio conteggio | M8 |
| AC10 | Iscritto teorico senza autorizzazione clinica richiesta | Teoria accessibile; attività clinica non attestata come autorizzata | M6–M8 |
| AC11 | Nuova candidatura | Disponibile solo il corso completo medici o infermieri; nessuna modalità uditore o singolo insegnamento | M4–M5 |
| AC12 | Documento amministrativo richiesto dal tutor | Accesso negato; eventuale solo stato operativo minimo | M2, M12 |
| AC13 | Modulo esistente nei due corsi | Classi e valutazioni distinte, anche se una risorsa è condivisa | M4, M10 |
| AC14 | Cambia lingua durante un test | Stesso tentativo e risposte; nessun azzeramento del limite | M10 |
| AC15 | Moduli terminati ma prova finale assente | Corso non marcato come concluso | M10–M11 |
| AC16 | Configurazione senza bando definitivo/scadenza oraria | Nessuna apertura pubblica della raccolta | M4–M5, rilascio A |

## 10. Chiusura M0

Sono definiti i percorsi, i campi, i ruoli, le scelte progettuali delegate e i punti rinviati. Sono verificati i totali degli insegnamenti e le soglie della griglia di selezione. Le immagini dei quattro Allegati A/B sono state controllate, comprese firme e selezione del calendario, senza attribuire alle firme un'approvazione dell'Ateneo non documentata.

**Esito:** M0 completata come specifica preparatoria; M1 può iniziare. Non è stato pubblicato nulla e nessun dato istituzionale provvisorio è stato trasformato in regola operativa di produzione. Le questioni aperte non richiedono risposta immediata per predisporre gli ambienti; vanno risolte ai termini indicati in [Fonti e decisioni](FONTI_E_DECISIONI.md).
