# M0 — Percorsi utente e bozzetti delle schermate

Versione 1, 22 settembre 2026. Bozzetti funzionali, non progetto grafico definitivo né codice dell'interfaccia. Testi mostrati in italiano come riferimento; tutte le schermate e le email avranno varianti inglese e spagnola.

## 1. Struttura comune

Intestazione: nome della piattaforma, corso/edizione attivi, selettore Italiano / English / Español, profilo e uscita. Menu basato sui ruoli effettivi. Chi è docente e tutor dispone di due sezioni distinte; i permessi sono sempre verificati sui dati, indipendentemente dal menu scelto.

Ogni form mostra salvataggio in corso/completato, campi mancanti, errori associati al campo e possibilità di riprovare. Cambio lingua e sessione rinnovata preservano la bozza. Una ricevuta conferma solo un invio riuscito, mai un salvataggio incompleto.

## 2. Sito pubblico e candidato

Percorso: due corsi → dettaglio corso → bando e stato candidature → verifica email/password → domanda in bozza → riepilogo → invio → ricevuta → stato/integrazioni → eventuale ammissione.

```text
SALUTE PEDIATRICA GLOBALE                         Italiano | English | Español

[Corso per medici]                 [Corso per infermieri]
Titolo e descrizione               Titolo e descrizione
Edizione · durata · modalità       Edizione · durata · modalità
[Scopri il corso]                  [Scopri il corso]

Dettaglio: programma | requisiti | costi | calendario | documenti
Stato bando: in preparazione / candidature aperte / chiuse
[Presenta domanda] solo quando l'edizione è effettivamente aperta
```

```text
LA MIA DOMANDA          Corso ed edizione             Stato: bozza
1 Dati personali → 2 Titoli → 3 Esperienze e lingue → 4 Documenti → 5 Riepilogo

Sezione corrente
Campi con indicazione di obbligo e spiegazione della documentazione
Allegati: nome · tipo · lingua · caricamento · esito controllo

[Salva e continua dopo] [Indietro] [Continua]
Riepilogo finale: informazioni dichiarate + testi da accettare
[Invia domanda] → identificativo e ricevuta, senza promessa di ammissione
```

Caso integrazione: il candidato vede esattamente cosa manca, termine assegnato e nuova versione; non può alterare silenziosamente gli altri dati congelati. Caso esclusione/lista d'attesa: vede soltanto il proprio esito pubblicato e le istruzioni pertinenti.

## 3. Studente iscritto

Percorso: esito ammesso → accettazione → dati integrativi e documenti → verifica staff → iscrizione attiva → moduli e piano individuale → attività e test → conclusione.

```text
IL MIO PERCORSO          Corso · edizione          Tutor assegnato

Da completare: [Adempimenti] [Attività da correggere] [Prossima lezione]

Moduli                   Frequenza              Attività pratiche
Assegnati / superati      Ore riconosciute        In bozza / in attesa / validate
[Apri i moduli]           [Vedi presenze]         [Nuova attività]

Menu: Percorso | Moduli | Diario | Documenti | Soggiorno e quota | Profilo
```

La schermata distingue percentuale di visione, frequenza, test valutati e modulo superato. La prima versione comprende soltanto il corso completo; non espone selettori o percorsi per uditori e singoli insegnamenti.

```text
DIARIO — NUOVA ATTIVITÀ
Data · sede/reparto · tipo attività · obiettivo · durata · quantità se prevista
Descrizione: racconta l'attività senza nomi o altri dati identificativi dei pazienti
Tutor destinatario: ricavato dall'affidamento attivo
[Salva bozza] [Invia al tutor]

Dettaglio attività: versioni | stato | decisione del tutor | feedback
Se già validata: [Richiedi rettifica] → revisione da rivalidare
```

```text
MODULO — AREA DELLO STUDENTE
Materiali e video: titolo · lingua disponibile · avanzamento
Test: disponibile / in corso / consegnato / da valutare / valutato
Valutazione del modulo: voto o giudizio pubblicato · esito · data

TEST IN CORSO
Domanda corrente · risposte · salvataggio · eventuale tempo residuo
[Precedente] [Successiva] [Rivedi e consegna]
Consegna definitiva con conferma; riapertura solo secondo regole della prova
```

## 4. Docente

Percorso: moduli assegnati → contenuti → pubblicazione → iscritti del modulo → test/correzioni → voto o giudizio → pubblicazione esito.

```text
I MIEI MODULI
Corso · edizione | modulo | iscritti | test da correggere | stato pubblicazione
[Apri modulo]

MODULO
Materiali | Lezioni e presenze | Iscritti | Test | Valutazioni
[Carica dispensa/video] [Crea test]

ISCRITTI DEL MODULO
Nome | frequenza nel modulo | fruizione | test | voto/giudizio | esito
Dettaglio studente: solo attività pertinenti a questo modulo
```

Le bozze restano interne; il docente deve poter distinguere salvataggio e pubblicazione. La correzione manuale riporta criteri, punteggio e feedback. Nessuna scheda economica, pratica ministeriale o vista degli altri moduli è accessibile in virtù del solo ruolo docente.

## 5. Tutor

Percorso: studenti affidati → percorso trasversale dello studente → presenze/moduli/test → diario → richiesta correzione o validazione → monitoraggio successivo.

```text
I MIEI STUDENTI
Studente | corso/edizione | moduli superati | attività da validare | attenzione
[Apri percorso]

PERCORSO DELLO STUDENTE
Moduli | Presenze | Attività online e risultati | Diario | Piano individuale

Modulo A: frequenza · attività · voto/giudizio · superato/non superato
Modulo B: frequenza · attività · voto/giudizio · superato/non superato
Pratica: stato operativo · obiettivi · ore dichiarate e validate

ATTIVITÀ IN ATTESA
Descrizione e durata · versione inviata · contesto dell'affidamento
[Valida] [Chiedi correzione] [Respingi] + feedback
```

Il tutor può consultare i materiali pubblicati dei moduli dei propri studenti per seguirne il percorso; non gestisce quei moduli, non consulta la classe intera né la banca delle soluzioni. Uno stato operativo della pratica non apre i documenti amministrativi sottostanti. L'esito clinico amministrativo e la validazione della singola attività sono distinti.

## 6. Manager

Percorso: edizione → domande → istruttoria/griglia/colloquio → graduatoria → pubblicazione esiti → iscrizioni → adempimenti e organizzazione → controllo percorso.

```text
GESTIONE CORSI      Filtro corso · edizione
Domande da verificare | colloqui da registrare | iscrizioni da completare
Alloggi da assegnare | movimenti da verificare | criticità didattiche

Menu: Corsi | Ammissioni | Iscritti | Docenti e tutor: abbinamenti
      Didattica | Logistica | Quote e spese | Report

DOMANDA
Dati | Titoli e prove | Esperienze e lingue | Colloquio | Valutazione | Storico
Griglia: punti per voce + massimali + evidenze
Esito interno distinto da esito pubblicato
[Richiedi integrazione] [Registra valutazione] [Pubblica esito]
```

```text
FASCICOLO STUDENTE
Anagrafica | Domanda | Iscrizione | Documenti | Pratica clinica
Percorso | Tutor | Alloggio e soggiorni | Quota, coperture e movimenti | Storico

Prima di confermare iscrizione: checklist degli adempimenti pertinenti
Prima di aprire pratica: verifica distinta delle condizioni richieste
Ogni rettifica rilevante: motivazione, autore e data
```

Il manager può abbinare personale già abilitato, ma non attribuire nuovi ruoli. L'elenco docenti proveniente dai documenti è un riferimento da verificare, non un elenco di account da creare automaticamente.

## 7. Admin

Percorso operativo identico al manager, con una sola sezione aggiuntiva per identità e ruoli.

```text
UTENTI E RUOLI — SOLO ADMIN
Email | ruoli | stato invito/account | ultima modifica
[Autorizza email]

Invito: email · lingua · ruolo docente / tutor / manager / admin
Account esistente: aggiungi ruolo senza duplicare l'identità
[Invia invito] [Reinvia] [Revoca invito] [Modifica ruoli] [Sospendi]

Docente + tutor: incarichi mostrati separatamente
Revoca: riepilogo accessi che cessano e incarichi che rimangono
```

L'ultimo admin attivo è protetto da rimozione accidentale. Recupero password tramite flusso dedicato, senza visualizzazione o invio di password da parte dello staff.

## 8. Casi dimostrativi per il collaudo

| Persona sintetica | Assegnazione | Dimostrazione |
| --- | --- | --- |
| Studente Alfa | Corso medici, MED-01 e MED-02 | Vede solo il proprio percorso e non i dati di Beta |
| Studente Beta | Corso infermieri | Dati separati anche per modulo omonimo |
| Docente Gamma | MED-01 | Gestisce quel modulo, non MED-02 né il diario |
| Tutor Delta | Alfa | Consulta tutti i moduli di Alfa e valida il suo diario; non vede Beta |
| Docente/tutor Epsilon | Docente MED-02; tutor Beta | Gestisce MED-02 e segue Beta; i due ambiti non si confondono |
| Manager Zeta | Gestione globale | Esegue operazioni su corsi/studenti, senza assegnazione ruoli |
| Admin Eta | Gestione globale e ruoli | Stesse funzioni manager più inviti/ruoli |

Ripetere i percorsi in italiano, inglese e spagnolo, compresi recupero password, errori, integrazione, consegna test e revoca incarichi. Non creare questi account in produzione.
