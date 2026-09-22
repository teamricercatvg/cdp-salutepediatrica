# M0 — Campi e documenti da gestire

Versione 1, 22 settembre 2026. Specifica preparatoria collegata alle [specifiche funzionali](SPECIFICHE_FUNZIONALI.md) e al [registro delle fonti](FONTI_E_DECISIONI.md).

## 1. Come leggere il dizionario

**O:** necessario per completare la fase nella configurazione proposta. **C:** necessario solo nella condizione indicata. **F:** facoltativo, oppure utile ad attribuire un punteggio; l'assenza non va convertita in esclusione senza una regola esplicita. **S:** prodotto o compilato dal sistema/staff. L'obbligatorietà progettuale D non viene presentata come prescrizione del bando, che non è ancora disponibile.

Per ogni documento memorizzare tipo, proprietario/iscrizione, nome originale, identificativo privato, lingua, dimensione, tipo effettivo, data caricamento, versione, esito dei controlli tecnici e stato di verifica amministrativa. Il caricamento non equivale a verifica. Date di emissione/scadenza e traduzione/legalizzazione si raccolgono solo per le categorie che le richiedono. Identità e campi comuni sono riutilizzati, ma ogni domanda inviata conserva una fotografia della dichiarazione.

Visibilità: **P** proprio candidato/studente; **M** manager e admin; **D** docente del modulo; **T** tutor dello studente. Dove compare P, le modifiche sono limitate allo stato consentito, non sempre libere. D/T ricevono solo i campi didattici necessari, non tutto il profilo.

## 2. Account e candidatura

| ID | Campo o gruppo | Tipo / controllo | Obbligo e momento | Visibilità | Fonte |
| --- | --- | --- | --- | --- | --- |
| A01 | Email | Indirizzo verificato; normalizzazione coerente; cambio con nuova verifica | O, accesso candidatura | P/M; contatto D/T solo se necessario | U, scelta D |
| A02 | Password | Gestita da Auth; mai leggibile da staff | O, attivazione account | Solo titolare tramite flusso Auth | U |
| A03 | Lingua preferita | it/en/es | O con valore predefinito, modificabile | P/M | U, D |
| A04 | Nome e cognome | Testo Unicode, supporto cognomi multipli | O, invio domanda | P/M; D/T negli ambiti assegnati | D; C03/C04 |
| A05 | Data di nascita | Data valida; nessun limite d'età inventato | O, invio per criterio di pari merito | P/M | C10/C12 |
| A06 | Luogo e Paese di nascita | Testo + Paese | O, perfezionamento; anticipabile se bando lo richiede | P/M | D; C03/C04 |
| A07 | Cittadinanza, Paese di residenza | Una o più cittadinanze, Paese | O, invio per percorso documentale | P/M | D; C45/C46 art. 3 |
| A08 | Indirizzo di residenza | Paese, città, indirizzo; CAP/provincia condizionali al Paese | O, perfezionamento | P/M | D |
| A09 | Telefono | Prefisso internazionale; non solo numeri italiani | O, perfezionamento; F in domanda | P/M | D |
| A10 | Corso ed edizione | Catalogo pubblicato; solo corso completo | O, creazione domanda | P/M; D/T per iscritti assegnati | U; C45/C46 |
| A11 | Curriculum | PDF come formato iniziale, limite 20 MB configurabile | O, invio nella configurazione proposta | P/M | U; D sull'obbligatorietà |
| A12 | Documento di identità | Tipo, numero, Paese emittente, scadenza e file | O al perfezionamento; anticipare solo se richiesto dal bando | P/M | D; C02–C04 per pratica clinica |
| A13 | Codice fiscale italiano | Testo validato se presente | C, se posseduto o richiesto dal processo di immatricolazione | P/M | D; nessun obbligo generalizzato per stranieri |
| A14 | Dichiarazioni finali | Testo versionato, accettazione e timestamp | O, invio; testo da validare prima di M5 | P/M | D; testo ufficiale A |
| A15 | Presa visione informativa | Versione, lingua e timestamp | O, invio dopo approvazione del testo | P/M | D; non consenso generico a ogni trattamento |
| A16 | Identificativo domanda e ricevuta | Generati dal sistema; non protocollo universitario | S, invio | P/M | D |
| A17 | Stato domanda, date, storico | Transizioni autorizzate | S | P/M; note interne solo M | U, D |
| A18 | Richiesta integrazione | Campi/documenti richiesti, motivo pubblico, termine, esito | C, istruttoria | P/M | D |

Non raccogliere sesso, dati sanitari o informazioni penali nel form ordinario per il solo fatto che compaiono in un modello ministeriale. La loro eventuale necessità appartiene al distinto processo documentale da confermare. Non raccogliere dati di familiari o pazienti.

## 3. Titoli e informazioni per la selezione

I criteri si applicano al solo percorso standard; uditori e singoli insegnamenti sono esclusi dalla configurazione corrente per indicazione dell'utente. Le qualifiche aggiuntive e le esperienze sono ripetibili, senza un tetto arbitrario al numero di voci dichiarabili; il punteggio rispetta i massimali.

| ID | Campo o gruppo | Tipo / controllo | Obbligo e momento | Visibilità | Fonte |
| --- | --- | --- | --- | --- | --- |
| T01 | Titolo di accesso | Denominazione originale, tipo, professione, università, Paese, data conseguimento | O, invio ordinario | P/M | C10/C12, C45/C46 |
| T02 | Prova del titolo | Documento secondo forma ammessa dal bando; file/versione | O, verifica ammissione ordinaria; forma precisa A | P/M | C10/C12: titoli documentati |
| T03 | Voto originale e scala | Voto, minimo/massimo della scala, lode/distinzione; opzione non documentato | C se si richiede il relativo punteggio | P/M | C10/C12 |
| T04 | Voto convertito | Valore, criterio di conversione, arrotondamento, verificatore e fonte | S, valutazione titolo estero | M; dato validato P se pubblicabile | C10/C12; metodo A |
| T05 | Riconoscimento titolo estero | Tipo documento, stato, riferimento e file | C prima dell'immatricolazione secondo istruzioni definitive | P/M | C45/C46 art. 3: CIMEA |
| T06 | Titoli ulteriori | Categoria, denominazione, ente, Paese, data, prova documentale | F; documento C per ottenere punti | P/M | C10/C12 punto 2 |
| T07 | Formazione certificata | Corso, ente, data, ore, verifica finale sì/no, attestato | F; ore/esito/documento C per punti | P/M | C10/C12 punto 3 |
| T08 | Impiego attuale | Stato occupazionale, ente, natura pubblico/privato/non profit, ruolo, Paese | O come dichiarazione, ammesso non occupato | P/M | C10/C12 punto 4 |
| T09 | Esperienze professionali | Ente, ruolo, settore, date inizio/fine o in corso, tempo/periodo documentato, prova | F; C per punteggio esperienza | P/M | C10/C12 punti 4–5 |
| T10 | Pertinenza al corso | Diretta/parziale/non pertinente e motivazione | S, valutazione | M | C10/C12 punto 4 |
| T11 | Esperienza LMIC/fragilità | Paese, contesto, mansione, periodi, attività attuale, evidenza | F; C per punteggio | P/M | C10/C12 punto 5 |
| T12 | Qualificazione esperienza LMIC | Classificazione e versione alla scadenza, contesto fragile motivato, mesi riconosciuti | S, valutazione; periodi senza doppi conteggi | M | C10/C12; dettagli applicativi A |
| T13 | Madrelingua/e | Testo/codifica coerente | O, invio per valutazione lingue | P/M | C10/C12 punto 6 |
| T14 | Altre lingue | Lingua, livello QCER, ente/data, certificato/prova | F; documentazione C per punti | P/M | C10/C12 punto 6 |
| T15 | Motivazione e progetto di applicazione | Testo breve con limite configurabile | F in domanda; supporto al colloquio | P/M | D su C10/C12 punto 7 |
| T16 | Colloquio | Data, valutatori, tre punteggi, motivazioni, esito | O prima di idoneità ordinaria | M; esito pubblicato P | C10/C12 punto 7 |
| T17 | Griglia di valutazione | Punteggi per voce, documenti di riscontro, versione regole | S; massimo 100 | M; riepilogo P secondo regole di pubblicazione | C10/C12 |
| T18 | Graduatoria/esito | Idoneità, posizione, ammissione/lista attesa, data pubblicazione, autore | S | M; posizione/esito propri P | C10/C12, D |

La mancanza del voto documentato comporta zero punti nella relativa voce, non automaticamente invalidità del titolo. Mancanza del titolo richiesto e mancata prova del voto sono condizioni diverse. Le verifiche di pertinenza e riconoscimento non sono demandate a classificazioni automatiche non validate.

## 4. Perfezionamento e fascicolo amministrativo

| ID | Campo o gruppo | Obbligo e controllo | Visibilità | Fonte |
| --- | --- | --- | --- | --- |
| I01 | Accettazione dell'ammissione e dati integrativi | O entro termine configurato, versione e timestamp | P/M | D |
| I02 | Matricola/riferimento immatricolazione esterna | C se attribuito dall'Ateneo; verifica manuale tracciata | P/M; D/T solo se necessario | D, istruzioni bando A |
| I03 | Stato documenti di ingresso | Richiesto / ricevuto / in verifica / verificato / da integrare / scaduto / non applicabile | P/M | D |
| I04 | Permesso/visto o adempimenti ingresso | C per profilo e permanenza; non obbligo per tutti | P/M | C45/C46; procedura corrente A |
| I05 | Quota nominale e rate | S da regola versionata; importi rate non presunti uguali | P/M | C45/C46; ripartizione A |
| I06 | Copertura/esenzione | Tipo, ente finanziatore, quota coperta, riferimento, validità, verificatore | P/M per proprio beneficio; note interne M | C23/C34, D |
| I07 | Pagamento | Importo, valuta, data, soggetto pagatore, riferimento, ricevuta, verifica | P/M; conferma solo M | U, D |
| I08 | Iscrizione attiva | Data, autore, controlli superati | P/M; D/T per ambito | U, D |
| I09 | Moduli assegnati | Collegamento iscrizione-modulo, accesso dal/al, requisiti/esito | P/M/D/T nei rispettivi ambiti | U |
| I10 | Tutor e incarico | Tutor principale, eventuale sostituto, ambito, validità, autore | P/M/T; D solo se pertinente | U, D |

### Checklist distinta per la pratica clinica

Le fonti locali riportano: istanza tramite ente ospitante, documento di identità, titolo con certificazione degli studi/esami, abilitazione e iscrizione professionale ove previste, dichiarazione di valore, good standing, documentazione sugli impedimenti professionali/penali, assicurazione, dichiarazione dell'ente e bollo. Le sintesi spagnole includono un percorso infermieristico, mentre l'Allegato S PDF C02 è espressamente medico: **non estendere automaticamente al corso infermieri i requisiti del modello medico**.

**D:** partire da metadati e stato della pratica; caricare documenti ulteriori soltanto quando l'ufficio responsabile conferma necessità, destinatari e modalità di conservazione. Per certificati particolarmente delicati preferire riferimento e stato di verifica quando il file non deve essere conservato dalla piattaforma. Le durate di validità riportate nelle fonti storiche non sono assunte come verifica della normativa attuale.

| ID | Dato | Controllo | Visibilità |
| --- | --- | --- | --- |
| C01 | Tipo di procedimento e professione | Modello pertinente e versione approvata dall'ufficio | P/M |
| C02 | Ente ospitante, referente, sede, periodo e supervisore | Distinti dall'assegnazione applicativa del ruolo tutor | P/M; T solo dati operativi pertinenti |
| C03 | Checklist documentale specifica | Necessità, ricevuto, verifica, eventuale scadenza; niente equiparazione upload/autorizzazione | P/M |
| C04 | Esito dell'autorizzazione | Stato, autorità/ente, riferimento, dal/al, verificatore | P/M; T solo stato, ambito e periodo necessari |
| C05 | Blocco o limitazione pratica | Motivo operativo minimo e validità; documento amministrativo separato | P/M/T pertinente |

## 5. Logistica ed economia della permanenza

| ID | Campo o gruppo | Obbligo | Visibilità | Fonte |
| --- | --- | --- | --- | --- |
| L01 | Periodo soggiorno e arrivi/partenze | C se permanenza gestita | P/M | U, C28 art. 2.3 |
| L02 | Struttura, camera/posto, assegnazione dal/al | C se alloggio gestito; capacità e sovrapposizioni controllate | P/M | U, D |
| L03 | Viaggio e stato organizzativo | C se gestito; riferimenti essenziali e date | P/M | C28 art. 2.3 |
| L04 | Categoria di spesa | Alloggio/vitto/viaggio/visto/assicurazione/riconoscimento titoli/altro motivato | M; riepilogo proprio P se pertinente | U, C28 art. 2.3 |
| L05 | Importo, valuta, data, periodo, pagatore, beneficiario | O per movimento; valori esatti | M; componente personale P | D |
| L06 | Stato e giustificativo | Previsto / da pagare / pagato / stornato; evidenza e verificatore | M; ricevute personali P | D |
| L07 | Rettifica/rimborso | Riferimento movimento originale e motivazione | M; esito personale P | D |

Le spese del progetto non diventano automaticamente debiti dello studente. Non sommare valute diverse; non memorizzare dati di carte di pagamento. Tariffe, diaria e politiche di rimborso restano configurazioni da acquisire prima dell'uso della sezione.

## 6. Didattica, diario e valutazioni

| ID | Campo o gruppo | Obbligo / regola | Visibilità | Fonte |
| --- | --- | --- | --- | --- |
| D01 | Modulo dell'edizione | Titolo e varianti linguistiche, SSD, ore per modalità, CFU, docenti, pubblicazione | P se abilitato; D/T pertinenti; M | C22/C33, U |
| D02 | Lezione/sessione | Modulo, data, orari/fuso, modalità, docente, durata prevista | P/D/T pertinenti, M | U, D |
| D03 | Presenza | Studente, sessione, durata riconosciuta, esito, autore, prova e rettifiche | P/D/T pertinenti, M | C45/C46 art. 14, D |
| D04 | Attività pratica | Data, sede/reparto, tipo, obiettivo, descrizione, minuti, quantità se applicabile | O per invio; P/T/M | U, D |
| D05 | Validazione | Stato, tutor, data, feedback allo studente, versione, motivo rettifica | O per decisione; P/T/M | U, D |
| D06 | Piano individuale | Obiettivi, rotazioni, periodo, eventuali quantità/ore da concordare | C prima della pratica; P/T/M | C19, C28 art. 2.4; D |
| D07 | Risorsa didattica | Modulo, tipo, titolo, lingua, file/riferimento, versione, ordinamento | O per pubblicazione; P/D/T pertinenti, M | U |
| D08 | Fruizione | Risorsa/versione, studente, progressi, ripresa, eventi e completamento tecnico | S; P/D/T pertinenti, M | U, D |
| D09 | Test e domande | Versione, lingua, tipo, opzioni/risposta libera, punti, soluzione riservata | O per prova pubblicata; gestione D/M | U; C45/C46 art. 6 |
| D10 | Tentativo e risposte | Avvio/consegna, versione, lingua, risposte, autosalvataggio | S/P; D/M; T degli affidati solo dopo consegna | U, D |
| D11 | Valutazione modulo | Voto/giudizio, scala, lode, esito, autore, data pubblicazione | D/M scrittura; P/T lettura pertinente | U; C45/C46 |
| D12 | Prova finale | Elaborato, data presentazione, voto /110, lode, verbale/riferimento, esito | M scrittura; P/T lettura pertinente | C45/C46 art. 6; D |
| D13 | Conclusione e follow-up | Requisiti verificati, autore, data, esito, eventuale periodo tutor successivo | M; P/T pertinenti | C45/C46 art. 15; C28 art. 2.4 |

Nessun dato identificativo del paziente è ammesso nel diario. La quantità di procedure è facoltativa se la tipologia non la richiede; non deriva dal numero di pazienti nominativi. Il tutor non modifica i voti dei docenti; il docente non riceve il diario per la sola appartenenza a un modulo.

## 7. Regole comuni sui dati

- Scelta D: PDF per documenti amministrativi; PDF e DOCX per dispense, video con percorso dedicato. Estensioni, firme del contenuto e scansione sono verificate; nessuna esecuzione di macro o contenuti attivi caricati.
- Allegati mai pubblici; download controllati per proprietario/ambito; registrare sostituzioni senza sovrascrivere le copie inviate o valutate.
- Numero/versione dei documenti istituzionali e preferenze linguistiche devono essere conservati insieme alle dichiarazioni pertinenti.
- Note interne separate dai feedback visibili; esportazioni rispettano le stesse restrizioni di schermate e API.
- Politica di conservazione e cancellazione da definire con il referente competente prima di dati reali. M0 non attribuisce una durata arbitraria agli archivi universitari o alle pratiche cliniche.
- Non creare dati personali, documenti o contatti nominativi nei seed di test. I nomi presenti nelle bozze dei docenti non autorizzano inviti automatici.
