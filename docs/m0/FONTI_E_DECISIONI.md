# M0 — Fonti, versioni e decisioni

Versione 1, 22 settembre 2026. Questo registro distingue la configurazione preparatoria ricavata dai documenti dalle decisioni di prodotto e dalle conferme necessarie prima dell'uso reale.

## 1. Metodo e limiti

Sono stati censiti **50 file documentali**: tre nella cartella del modello e 47 nella cartella dei corsi. Sono stati estratti testi di PDF e Word e dati/formule dei fogli di calcolo; per le scansioni dell'accordo e delle dichiarazioni è stato usato OCR. Sono state esaminate le sezioni pertinenti a requisiti, selezione, didattica, calendario, logistica e documentazione di ingresso. Non è una revisione giuridica delle convenzioni né una verifica live delle norme ministeriali.

Sono stati controllati visivamente i quattro PDF Allegati A/B recenti, le pagine 2–3 dell'accordo OPBG e le due dichiarazioni del 20 febbraio 2026. La selezione del calendario B è visibile nei PDF e non era riconoscibile nell'estrazione testuale. I totali dei due fogli Tabella sono stati ricalcolati dai valori delle righe e coincidono con i totali salvati. Nessuna macro è stata eseguita e nessun originale modificato.

La gerarchia richiesta dall'utente è applicata **al singolo dato e a documenti comparabili**: prevale la versione più recente. Data esplicita, contenuto, revisione del documento e data del file sono considerate insieme; una data di copia recente non rende recente un modello del 2025. Metadati ereditati da vecchi modelli Word non sono prova della data dei contenuti. Quando un documento successivo è incompleto o tratta un ambito diverso, il conflitto resta esplicito.

Le istruzioni correnti dell'utente prevalgono per le funzioni del software. Una proposta o un documento firmato dal proponente non viene presentato come bando pubblicato o approvazione finale dell'Ateneo. I materiali originali, le scansioni e le firme rimangono nelle cartelle fornite: non vengono copiati nei documenti tecnici né preparati per il commit in questa repository pubblica.

### Cartelle di origine

- **B:** `/Users/stefanolaptop/Documents/codex_new/cdp-software/documenti-materiali`.
- **C:** `/Users/stefanolaptop/Library/CloudStorage/OneDrive-Universita'degliStudidiRomaTorVergata 2/Salvador_AICS/corso formazione tor vergata`.

L'inventario in fondo consente di risalire a ogni file. I riferimenti Cxx/Bxx nei documenti M0 sono stabili per questa revisione.

## 2. Fonti determinanti e precedenza

| Ambito | Fonte scelta | Elementi usati |
| --- | --- | --- |
| Requisiti del prodotto | Conversazione e precisazioni dell'utente | Cinque ruoli, tutor trasversale, docente per modulo, tre lingue, solo percorso standard |
| Selezione | C10/C12, Allegati A PDF recenti, una pagina ciascuno | Griglia 100 punti, colloquio obbligatorio, soglie per componente e precedenza al più giovane |
| Calendario e denominazioni italiane | C14/C16, Allegati B PDF firmati, 02/09/2026, una pagina ciascuno | Opzione B spuntata, inizio 15/03/2027, sito del corso |
| Ore/CFU e insegnamenti | C22/C33, 05/08/2026, foglio Tabella, righe 14–22/23 e 51 | Nove moduli INF, dieci MED, 240 ore e 20 CFU per corso |
| Durata, accesso, tasse, esami e frequenza | C45/C46, statuti, art. 3–6 e 13–15 | Un anno, titoli, CIMEA, quote distinte, 80%, /30 e /110 |
| Copertura dei partecipanti del progetto | C23/C34, Doc. 4, nota sul regime contributivo | Copertura descritta per partecipanti da El Salvador; verifica individuale prima di applicazione |
| Logistica e tutoraggio | C28 (= C40), art. 2.3–2.4, pagine 2–3 | Viaggio, vitto, alloggio, visti, assicurazione, titoli, tutoraggio e follow-up |
| Documentazione clinica | C02–C08/C18 | Processo separato, evidenze e stato documentale; applicabilità corrente da confermare |
| Nominativi docenti | C01, 24/08/2026 | Bozza mista con alternative e incongruenze: non idonea all'attivazione automatica di account |
| Modello di altro corso | B01/B02/B03 | Struttura dei documenti e distinzione ammissione/iscrizione/didattica; nessun trasferimento di quote, ore o soglie |

Nella cartella B sono presenti un elenco generale dei corsi 2025/2026, un Allegato A con criteri e uno statuto del corso sulle radiazioni. **Non è presente il testo integrale del bando generale né un facsimile completo di domanda studente.** Il dizionario dei campi combina quindi requisiti delle fonti proprie dei corsi con decisioni progettuali esplicitamente marcate D.

## 3. Contraddizioni e risoluzioni

| ID | Differenza rilevata | Trattamento adottato |
| --- | --- | --- |
| R01 | C20 riporta avvio 01/11/2026; C14/C16 riportano 15/03/2027 | Prevale il 15/03/2027 degli Allegati B di settembre. Documento OPBG precedente conservato senza modifiche; allineamento istituzionale da verificare prima della pubblicazione |
| R02 | Testo estratto dagli Allegati B non mostra la scelta A/B/C | Verifica visiva: B selezionata in entrambi. Precedenti note di lavoro con calendario non selezionato non sono più usate come stato corrente |
| R03 | Statuti: colloquio se candidati oltre i posti; Allegati A recenti: colloquio obbligatorio con soglie | Prevalgono C10/C12: colloquio per tutti i candidati ordinari, poi graduatoria se necessario |
| R04 | C23 quota infermieri € 2.000; C46 successivo € 2.016 | Prevale € 2.016 come quota preparatoria INF. Non dedurre che € 16 siano un bollo incluso né ripartire automaticamente le due rate |
| R05 | Quota ordinaria negli statuti e copertura El Salvador nelle schede | Non sono alternative equivalenti: quota nominale separata da copertura documentata. Nessuna esenzione automatica basata sulla nazionalità |
| R06 | Statuti inglese e riferimento Teams/Moodle; utente richiede piattaforma propria IT/EN/ES | Interfaccia trilingue e stack corrente sono requisiti software. Lingua didattica resta inglese nelle fonti; eventuale aggiornamento dei testi istituzionali sul mezzo di erogazione è esterno a M0 |
| R07 | C07/C19 descrivono semestri/rotazioni e percorsi sino a due anni; C45/C46 descrivono CdP annuali e C22/C33 i moduli | Distinguere percorso progettuale/clinico e corso universitario. Catalogo iniziale: corso annuale; non trasformare le rotazioni in quattro moduli accademici o raddoppiare i CFU |
| R08 | C01, più recente, include una prima tabella medici di otto righe da 2 CFU e una seconda tabella infermieri di nove righe, con nomi alternativi e SSD diversi | Registrata come revisione docenti da riconciliare. Non dedurre una riduzione ufficiale del CdP a 16 CFU né ignorare la bozza successiva. Catalogo completo C22/C33 usabile per schema/collaudo, non pubblicabile finché l'elenco finale non è confermato |
| R09 | C28 pagina 3: testo italiano 12 medici + 16 infermieri; testo spagnolo 18 + 18; C30 successivo indica 28 totali | Per dimensionamento progettuale il riferimento più recente è 28 complessivi, distinto dal tetto di 20 per ciascun CdP. Ripartizione/edizioni non confermate; non importare automaticamente il 18+18 o il 12+16 |
| R10 | C45 titolo inglese medici “Pediatric and Neonatal Health in Low- and Middle-Income Countries: Clinical and Public Health Approaches”; C20 successivo “Advanced Training in Pediatric and Neonatal Clinical Care in Low- and Middle-Income Countries” | Registrare il titolo di C20 come versione inglese provvisoria più recente; non cambiare il titolo italiano. Denominazione ufficiale EN ed ES da validare prima delle pagine pubbliche |
| R11 | Gli statuti/tabella riportano 240 ore senza monte ore pratico distinto; altro corso B03 prevede 250 ore tirocinio | Monte ore della pratica dei nostri corsi non definito. Nessun trasferimento delle 250 ore o conversione implicita da CFU |
| R12 | C45/C46 richiedono CIMEA per accesso con titolo estero; C02/C08/C18 trattano dichiarazione di valore per attività clinica | Processi separati. Non considerare un documento automaticamente sostitutivo dell'altro |
| R13 | C02 è checklist medici; C04 e sintesi spagnole includono infermieri; C08 omette una dichiarazione dell'ente presente in C18/C02 | Checklist specifica per professione da verificare con ente competente. Una sintesi più recente e abbreviata non è prova dell'abrogazione di un requisito |
| R14 | C26/C37 riportano in calce 25/02/2025 ma file/revisioni sono del febbraio 2026 | Possibile residuo di modello. Non usare quella data per retrodatare gli Allegati A/B o dimostrare approvazione |
| R15 | C29/C41: dichiarazioni del 20/02/2026, con firma/timbro CIFAPPS visibili e spazio del Preside non firmato nell'immagine | Evidenza di documentazione dell'iter, non certificazione di completamento di tutte le approvazioni o di pubblicazione del bando |
| R16 | Fonti prevedono uditori e singoli insegnamenti; utente durante M0 chiede di trascurarli | Prevale l'istruzione corrente: esclusi dalla prima versione, nessuna configurazione o migrazione dedicata ora |

## 4. Decisioni progettuali adottate su delega

Queste sono scelte operative della specifica, non decisioni formali dell'Università. Possono essere modificate prima dell'implementazione della parte interessata senza alterare gli originali.

| ID | Decisione | Motivazione / fase |
| --- | --- | --- |
| D01 | Due corsi, edizioni distinte, solo percorso standard | Perimetro confermato dall'utente; M2/M4 |
| D02 | Account candidato con email verificata, password e bozze; nessun accesso ai moduli prima dell'iscrizione | Ripresa e integrazioni senza identità duplicate; M3/M5 |
| D03 | Italiano predefinito, EN/ES disponibili, preferenza persistente anche per email | Utenti internazionali; M1–M4 |
| D04 | Manager/admin gestiscono abbinamenti; solo admin concede ruoli; docente+tutor cumulabili | Coerenza con separazione ruoli; M2–M4 |
| D05 | Un tutor principale per percorso con sostituzioni temporanee esplicite | Responsabilità chiara, visibilità trasversale limitata agli affidati; M4/M8 |
| D06 | Tutor legge materiali pubblicati dei moduli degli affidati e tentativi consegnati, non bozze/soluzioni riservate | Supporto al percorso senza poteri editoriali; M9/M10 |
| D07 | Valutazioni discrezionali, conversioni estere e ammissione confermate dallo staff | Nessuna interpretazione automatica di evidenze o titoli; M6 |
| D08 | Iscrizione applicativa con verifica manuale dell'iter universitario | Nessuna integrazione esterna presunta; M6 |
| D09 | Quote, coperture, esenzioni e pagamenti separati | Corretta lettura del fascicolo economico; M7 |
| D10 | Diario essenziale senza dati paziente; revisioni dopo validazione | Usabilità e tracciabilità; M8 |
| D11 | Presenze inizialmente registrate dallo staff, alert di frequenza senza espulsione automatica | Regole istituzionali e denominatori da confermare; M8 |
| D12 | Stato amministrativo della pratica separato dall'accesso teorico e dalla validazione delle attività | Nessun caricamento trasformato in autorizzazione; M6–M8 |
| D13 | Esiti dei singoli test distinti da voto/giudizio di modulo e prova finale | Coerenza con art. 6 degli statuti e richiesta utente; M10 |
| D14 | Registrazione prova finale/verbale, niente emissione automatica di titolo | Completa il percorso senza sostituire l'Ateneo; M10/M11 |
| D15 | Campione di collaudo 400 candidature, 40 studenti e 10 operatori simultanei | Ipotesi di carico iniziale, modificabile in M1/M9 |
| D16 | Obiettivi proposti di recupero: 24 ore massime di dati persi, ripristino entro 8 ore | Da dimostrare con backup e restore M1, non prestazione già misurata |
| D17 | Allegati documentali 20 MB, PDF; dispense PDF/DOCX; video su percorso dedicato | Limiti iniziali configurabili; M2/M9 |
| D18 | Nessuna creazione automatica di account dai nominativi nei documenti | Bozze non equivalgono a incarichi o email autorizzate; M3/M4 |

## 5. Informazioni mancanti e termine di risoluzione

Nessuna delle questioni sotto blocca la chiusura documentale M0 o l'avvio degli ambienti M1. Il termine indica il punto oltre il quale non si può attivare la funzione dipendente con dati reali. Le attività indipendenti continuano.

| ID | Informazione necessaria | Responsabile proposto | Entro / effetto |
| --- | --- | --- | --- |
| A01 | Bando definitivo, allegati pubblicati, codice corso, orario e modalità ufficiali di invio/immatricolazione | Stefano / Ufficio Master | Prima dell'apertura M5; finché assenti, candidature chiuse |
| A02 | Stato delle convenzioni e aggiornamento del calendario nei documenti istituzionali | Stefano / uffici competenti | Prima di pubblicizzare attivazione e date come definitive |
| A03 | Elenco finale moduli/docenti, nomine, email staff e denominazioni ufficiali tradotte | Stefano / responsabili dei corsi | Prima della pubblicazione catalogo e inviti M4; riconciliare C01 |
| A04 | Ripartizione delle due rate, natura dei € 16 INF, conferma coperture e beneficiari progetto, eventuale contributo di selezione | Segreteria amministrativa / Stefano | Prima di mostrare importi dovuti o perfezionare iscrizioni M6–M7 |
| A05 | Piano pratica: sedi, rotazioni, obiettivi, ore/quantità, tutor, riconoscimento e follow-up | Responsabili didattici / OPBG | Prima di usare requisiti pratici vincolanti M8 |
| A06 | Denominatore dell'80%, valore della fruizione online, recuperi/assenze e gestione soglie | Responsabili didattici | Prima di M8/M9; alert informativi sino ad allora |
| A07 | Metodo di conversione voti esteri, arrotondamento, documenti probanti, periodi sovrapposti e parità completa | Commissione / Ufficio Master | Prima della valutazione reale M6; il modello conserva gli originali |
| A08 | Checklist clinica corrente distinta medici/infermieri, ente competente, documenti da conservare, scadenze e supervisione | Ente ospitante / ufficio competente | Prima di raccogliere i relativi file e abilitare pratica M6–M8 |
| A09 | Informative, responsabilità del trattamento, conservazione/cancellazione e pubblicabilità degli esiti | Referente privacy/amministrativo competente | Prima di qualsiasi dato reale, incluso candidato |
| A10 | SMTP, mittente e responsabili assistenza/backup | Stefano / referente tecnico | M1–M3; nessun invio reale senza configurazione verificata |
| A11 | Video, lingue effettive, sottotitoli, volumi e distribuzione | Docenti / Stefano | M9; infrastruttura video scelta dopo misura, non ora |
| A12 | Criteri finali dei quiz e relazione con voto/giudizio del modulo | Docenti / responsabili didattici | Prima della pubblicazione delle prove M10 |
| A13 | Alloggi, disponibilità, tariffe, coperture di viaggio/vitto e politiche rimborso | Segreteria organizzativa | Prima dell'operatività logistica/economica M7 |

Per proseguire subito non è necessario chiedere nuove risposte all'utente: le scelte di prodotto sono adottate su delega. Prima di M5 servirà soprattutto il bando pubblicato; le informazioni cliniche, economiche e didattiche verranno raccolte nelle fasi pertinenti.

## 6. Inventario documentale

Le date della tabella sono modifiche locali del file, utili a localizzare versioni ma non equivalenti a date di approvazione. I contenuti determinanti e le date esplicite sono trattati nelle sezioni precedenti. Nessuna affermazione di invio effettivo all'Ateneo deriva dalla sola presenza del file.

| ID | Cartella / file relativo | Modifica locale | Uso |
| --- | --- | --- | --- |
| B01 | B/ALL. 2 a.a. 2025_2026.pdf | 2026-09-22 | Contesto/modello; non regola dei corsi |
| B02 | B/ALLEGATO A -ESPOSIZIONE PROFESSIONALE ALLE RADIAZIONI.pdf | 2026-09-22 | Contesto/modello; non regola dei corsi |
| B03 | B/STATUTO ESPOSIZIONE PROFESS. RADIAZIONI 23-24.pdf | 2026-09-22 | Contesto/modello; non regola dei corsi |
| C01 | C/Docentiperf.mediciSalvador1.docx | 2026-08-24 | Confronto / evidenza di supporto |
| C02 | C/Documentazione richiesta dal ministero per autorizzazione temporanea/Documentazione richiesta per autorizzazione temporanea allo svolgimento di attività clinica.pdf | 2026-08-05 | Confronto / evidenza di supporto |
| C03 | C/Documentazione richiesta dal ministero per autorizzazione temporanea/Domanda di autorizzazione temporanea allo svolgimento di attività clinica di medico chirurgo.doc | 2026-08-05 | Confronto / evidenza di supporto |
| C04 | C/Documentazione richiesta dal ministero per autorizzazione temporanea/Domanda di autorizzazione temporanea allo svolgimento di attività clinica infermieristica.doc | 2026-08-05 | Confronto / evidenza di supporto |
| C05 | C/Documentazione richiesta dal ministero per autorizzazione temporanea/MODELLO S.doc | 2026-08-05 | Confronto / evidenza di supporto |
| C06 | C/Documentazione richiesta dal ministero per autorizzazione temporanea/SINTESI SPAGNOLO - Documenti richiesti per corso di perfezionamento.docx | 2026-08-05 | Confronto / evidenza di supporto |
| C07 | C/LETTERA rispiosta PER MINSAL Salvador.docx | 2026-01-20 | Confronto / evidenza di supporto |
| C08 | C/Meteriales y documentos.docx | 2026-08-10 | Confronto / evidenza di supporto |
| C09 | C/Moduli_richiesti_ufficio_master/Allegato A - Infermieri - Assistenza infermieristica pediatrica LMIC.docx | 2026-08-24 | Confronto / evidenza di supporto |
| C10 | C/Moduli_richiesti_ufficio_master/Allegato A - Infermieri - Assistenza infermieristica pediatrica LMIC.pdf | 2026-09-02 | Fonte principale |
| C11 | C/Moduli_richiesti_ufficio_master/Allegato A - Medici - Salute pediatrica e neonatale LMIC.docx | 2026-09-02 | Confronto / evidenza di supporto |
| C12 | C/Moduli_richiesti_ufficio_master/Allegato A - Medici - Salute pediatrica e neonatale LMIC.pdf | 2026-09-02 | Fonte principale |
| C13 | C/Moduli_richiesti_ufficio_master/Allegato B - Infermieri - Assistenza infermieristica pediatrica LMIC.docx | 2026-09-02 | Confronto / evidenza di supporto |
| C14 | C/Moduli_richiesti_ufficio_master/Allegato B - Infermieri - Assistenza infermieristica pediatrica LMIC.pdf | 2026-09-02 | Fonte principale |
| C15 | C/Moduli_richiesti_ufficio_master/Allegato B - Medici - Salute pediatrica e neonatale LMIC.docx | 2026-09-02 | Confronto / evidenza di supporto |
| C16 | C/Moduli_richiesti_ufficio_master/Allegato B - Medici - Salute pediatrica e neonatale LMIC.pdf | 2026-09-02 | Fonte principale |
| C17 | C/OPBG - TOR VERGATA - CDL Infermieristica Pediatrica.pdf | 2025-06-27 | Contesto/modello; non regola dei corsi |
| C18 | C/SINTESI SPAGNOLO - Documenti richiesti per corso di perfezionamento.docx | 2026-08-10 | Confronto / evidenza di supporto |
| C19 | C/VERBALE DELLA RIUNIONE 20 gennaio 2026.docx | 2026-01-20 | Confronto / evidenza di supporto |
| C20 | C/manifestazione di interesse_signed.pdf | 2026-06-12 | Confronto / evidenza di supporto |
| C21 | C/modulistica_corso/infermieristica/Modulistica - 1-b. SCHEMA PER REDAZIONE STATUTO CdP-1.pdf | 2026-02-26 | Contesto/modello; non regola dei corsi |
| C22 | C/modulistica_corso/infermieristica/Modulistica - 2-b. Tabella insegnamenti CdP (art.5 statuto).xlsm | 2026-08-05 | Fonte principale |
| C23 | C/modulistica_corso/infermieristica/Modulistica - 3. Schede NdV.docx | 2026-02-26 | Confronto / evidenza di supporto |
| C24 | C/modulistica_corso/infermieristica/Modulistica - 3. Schede NdV.pdf | 2026-02-25 | Confronto / evidenza di supporto |
| C25 | C/modulistica_corso/infermieristica/Normativa - d. Elementi considerati parere NdV.pdf | 2026-02-20 | Contesto/modello; non regola dei corsi |
| C26 | C/modulistica_corso/infermieristica/Richiesta di attivazione di un Corso di perfezionamento in ambito di salute materno.docx | 2026-02-25 | Confronto / evidenza di supporto |
| C27 | C/modulistica_corso/infermieristica/Richiesta di attivazione di un Corso di perfezionamento in ambito di salute materno.pdf | 2026-02-25 | Confronto / evidenza di supporto |
| C28 | C/modulistica_corso/infermieristica/accordo _signed OPBG-firmato.pdf | 2025-07-18 | Confronto / evidenza di supporto |
| C29 | C/modulistica_corso/infermieristica/cdp_infermieri_dichiarazione.pdf | 2026-02-25 | Confronto / evidenza di supporto |
| C30 | C/modulistica_corso/infermieristica/lettera_intenti_minsal.pdf | 2026-02-25 | Confronto / evidenza di supporto |
| C31 | C/modulistica_corso/infermieristica/opbg_lettera_intenti.docx | 2026-02-20 | Confronto / evidenza di supporto |
| C32 | C/modulistica_corso/medici/Modulistica - 1-b. SCHEMA PER REDAZIONE STATUTO CdP-1.pdf | 2026-02-26 | Contesto/modello; non regola dei corsi |
| C33 | C/modulistica_corso/medici/Modulistica - 2-b. Tabella insegnamenti CdP (art.5 statuto).xlsm | 2026-08-05 | Fonte principale |
| C34 | C/modulistica_corso/medici/Modulistica - 3. Schede NdV.docx | 2026-02-26 | Confronto / evidenza di supporto |
| C35 | C/modulistica_corso/medici/Modulistica - 3. Schede NdV.pdf | 2026-02-25 | Confronto / evidenza di supporto |
| C36 | C/modulistica_corso/medici/Normativa - d. Elementi considerati parere NdV.pdf | 2026-02-23 | Contesto/modello; non regola dei corsi |
| C37 | C/modulistica_corso/medici/Richiesta di attivazione di un Corso di perfezionamento in ambito di salute materno.docx | 2026-02-26 | Confronto / evidenza di supporto |
| C38 | C/modulistica_corso/medici/Richiesta di attivazione di un Corso di perfezionamento in ambito di salute materno.pdf | 2026-02-26 | Confronto / evidenza di supporto |
| C39 | C/modulistica_corso/medici/Richiesta di attivazione di un Corso di perfezionamento rivolto a medici in ambito di salute materno.pdf | 2026-02-25 | Confronto / evidenza di supporto |
| C40 | C/modulistica_corso/medici/accordo _signed OPBG-firmato.pdf | 2025-07-18 | Confronto / evidenza di supporto |
| C41 | C/modulistica_corso/medici/cdp_medici_dichiarazione.pdf | 2026-02-25 | Confronto / evidenza di supporto |
| C42 | C/modulistica_corso/medici/lettera intenti MINSAL_rev.docx | 2026-02-23 | Confronto / evidenza di supporto |
| C43 | C/modulistica_corso/medici/lettera_intenti_minsal.pdf | 2026-02-25 | Confronto / evidenza di supporto |
| C44 | C/modulistica_corso/medici/opbg_lettera_intenti.docx | 2026-02-23 | Confronto / evidenza di supporto |
| C45 | C/modulistica_corso/statuti_cdp_salvador/STATUTO Salute Pediatrica Neonatale LMIC.docx | 2026-05-12 | Fonte principale |
| C46 | C/modulistica_corso/statuti_cdp_salvador/STATUTO_Assistenza_Infermieristica_Pediatrica_LMIC.docx | 2026-03-18 | Fonte principale |
| C47 | C/richieste specialisti Bambino Gesú per formazione 2025.xlsx | 2025-11-26 | Contesto/modello; non regola dei corsi |

Duplicati identici verificati tramite impronta SHA-256: C25/C36, C28/C40, C30/C43, C31/C44. Copie o sintesi non identiche non sono state trattate come nuove approvazioni.
