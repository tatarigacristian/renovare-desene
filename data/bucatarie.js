// Bucătărie — sursa la zi pentru desenele din desene/bucatarie.html. Format: JSON strict după „= ”.
// Câmpurile sunt descrise în desene/README.md.
window.CAMERE = window.CAMERE || {};
window.CAMERE["bucatarie"] = {
 "id": "bucatarie",
 "nume": "Bucătărie",
 "referinte": {
  "orizontal": "x: de la fața zidăriei, în colțul din stânga (privind peretele din cameră). Cotele sunt cumulate de la acest colț: se măsoară cu ruleta de la colț, nu din aproape în aproape.",
  "vertical": "h: de la pardoseala finită. Dacă pardoseala nu e pusă încă, de la reperul de nivel trasat pe perete, cu diferența până la pardoseala finită."
 },
 "inaltime": {
  "valoare": 250,
  "stare": "proiect",
  "nota": "Fără tavan fals: A.05 nu hașurează bucătăria, iar A.22 desenează placa la 250 (A.01: Hu 2,50). Sub grinzile GR1 și GR2 rămân 205 cm (A.22 BU02, BU03). Deasupra corpurilor de pe peretele cu chiuveta, placa orizontală M01-PO (203–205,6) închide zona dintre perete și GR1."
 },
 "revizie": {
  "nr": 1,
  "data": "2026-11-02",
  "modificari": [
   "Prima versiune: pereții și planul tavanului."
  ]
 },
 "plan": {
  "latime": 322,
  "adancime": 265,
  "nota": "x de la fața zidăriei peretelui cu ușa spre hol (vest), y de la fața zidăriei peretelui cu chiuveta (sud). Lățimea e 322 între y = 131 și 265 (partea cu fereastra) și 278 între y = 0 și 131, unde peretele de est face o treaptă de 44 cm (vederea E2). Adâncimea 265 = 55 + 28 + 48 + 134 (A.01). Ghena din colțul S-V ocupă x 0–33,5, y 0–30; stâlpul ST1 iese din peretele E2 la x 259–278, y 55–83. A.01 scrie 324,2 pentru lățime, dar cota pornește de la un contur oblic, la 2,2 cm în peretele spre hol; vectorii din A.01 și A.21 dau 322."
 },
 "pereti": [
  {
   "id": "N",
   "nume": "Peretele cu frigiderul și bancheta",
   "subtitlu": "corpul înalt (frigider, espressor, microunde), bancheta cu riflaj, corpul din colț pentru centrală · BU03 în A.22",
   "lungime": 322,
   "origine": "colțul N-V, cu peretele cu ușa spre hol (fața zidăriei, x = 0)",
   "etapa": 1,
   "plan": [
    [
     0,
     265
    ],
    [
     322,
     265
    ]
   ],
   "elemente": [
    {
     "id": "M01-PC",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Placa de capăt a corpului înalt, spre peretele cu ușa",
     "x": 0,
     "lat": 4.3,
     "h": 0,
     "inalt": 243.2,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU03 (4,3, cotat; «Placa de capat»); A.21 (golul de 4,3 până la perete)",
     "nota": "Corpul înalt stă la 4,3 cm de peretele cu ușa. Golul se închide în față cu o placă de 1,8 cm (y 203,2–205 în plan), H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-SI",
     "strat": "mobila",
     "tip": "plinta",
     "nume": "Soclul corpului înalt",
     "x": 4.3,
     "lat": 120,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU03 (8, cotat)",
     "nota": "Soclu de 8 cm sub cele două coloane."
    },
    {
     "id": "M01-C1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul înalt — ușile de jos (frigider; sertare interioare)",
     "x": 4.3,
     "lat": 120,
     "h": 8,
     "inalt": 83.5,
     "adanc": 61.8,
     "stare": "proiect",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 60
      },
      {
       "lat": 60
      }
     ],
     "sursa": "A.22 BU03 (60 + 60; 8, 91,5, cotat); A.21 (61,8); specs/09 (mâner pull-out)",
     "nota": "Două uși de 60 × 83,5. În stânga: partea de jos a frigiderului E1. În dreapta: două sertare interioare (9,8–47,9 și 49,7–89,7). Mâner tip pull-out (specs/09). Fronturile la 61,8 cm de perete. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-C2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul înalt — ușile din mijloc (frigider; espressor și microunde)",
     "x": 4.3,
     "lat": 120,
     "h": 91.5,
     "inalt": 111.7,
     "adanc": 61.8,
     "stare": "proiect",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 60
      },
      {
       "lat": 60
      }
     ],
     "sursa": "A.22 BU03 (111,7; 40 + 1,8 + 35 + 1,8 + 31,3, cotat)",
     "nota": "Două uși de 60 × 111,7. În stânga: frigiderul E1. În dreapta, de jos în sus: espressorul E3 (nișă de 40), raft 1,8, microundele E2 (nișă de 35), raft 1,8, compartiment de 31,3. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-C3",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul înalt — ușile de sus",
     "x": 4.3,
     "lat": 120,
     "h": 203.2,
     "inalt": 40,
     "adanc": 61.8,
     "stare": "proiect",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 60
      },
      {
       "lat": 60
      }
     ],
     "sursa": "A.22 BU03 (40, cotat)",
     "nota": "Două uși de 60 × 40. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-PT1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Plinta de sus a corpului înalt (până la placă)",
     "x": 0,
     "lat": 126.1,
     "h": 243.2,
     "inalt": 6.8,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU03 (6,8, cotat; «Plinta»)",
     "nota": "Închide cei 6,8 cm dintre corp și placa de la 250. Fără tavan fals, placa poate avea abateri: plinta se croiește la măsura de pe șantier."
    },
    {
     "id": "E1",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Frigider încastrat",
     "x": 6.1,
     "lat": 56.4,
     "h": 9.8,
     "inalt": 191.6,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "finisaj": "incastrat",
     "aparat": "frigider",
     "in": "M01-C2",
     "sursa": "A.22 BU03 («Frigider incastrat»; nișa 6,1–62,5 × 9,8–201,4, măsurată pe desen)",
     "nota": "Nișa interioară ~56,4 × 191,6, adâncime 61,8 cu fronturile. Frigiderele încastrabile se fac pentru nișe de 178 sau 194 cm: unul de 194 nu încape, unul de 178 lasă ~13 cm. Modelul nu e ales (specs/04)."
    },
    {
     "id": "E3",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Espressor",
     "x": 66.1,
     "lat": 56.4,
     "h": 91.5,
     "inalt": 40,
     "stare": "proiect",
     "finisaj": "incastrat",
     "aparat": "espressor",
     "in": "M01-C2",
     "inFata": [
      "P1"
     ],
     "sursa": "A.22 BU03 («Espresor»; 40, cotat)",
     "nota": "Nișă de 56,4 × 40 în spatele ușii din dreapta. Un espressor încastrabil cere de obicei nișă de 45: aparatul nu e ales."
    },
    {
     "id": "E2",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Cuptor cu microunde",
     "x": 66.1,
     "lat": 56.4,
     "h": 133.3,
     "inalt": 35,
     "stare": "proiect",
     "finisaj": "incastrat",
     "aparat": "microunde",
     "in": "M01-C2",
     "sursa": "A.22 BU03 («Cuptor microunde»; 35, cotat)",
     "nota": "Nișă de 56,4 × 35 în spatele ușii din dreapta. Microundele încastrabile cer nișă de 38 sau 45: în 35 intră doar un aparat de sine stătător mic."
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză triplă: frigider, microunde, espressor",
     "x": 95,
     "h": 110,
     "punct": true,
     "pozitie": "aprox",
     "stare": "proiect",
     "in": "M01-C2",
     "sursa": "A.06 (h = 110, scris; x ≈ 95 măsurat pe plan); Necesar prize și întrerupătoare (bucătărie, triplă)",
     "nota": "În coloana din dreapta a corpului înalt, în nișa espressorului (91,5–131,5). Frigiderul din coloana stângă se leagă aici printr-o trecere în peretele dintre coloane."
    },
    {
     "id": "M01-PN",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Panoul dintre corpul înalt și banchetă",
     "x": 124.3,
     "lat": 1.8,
     "h": 0,
     "inalt": 243.2,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU03 (1,8, cotat); A.21",
     "nota": "Placă de 1,8 cm, de la pardoseală la plinta de sus. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-BN",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Bancheta de pe peretele cu frigiderul (depozitare)",
     "x": 126.1,
     "lat": 130.1,
     "h": 3,
     "inalt": 38,
     "adanc": 41,
     "stare": "proiect",
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 45
      },
      {
       "lat": 40
      },
      {
       "lat": 45.1
      }
     ],
     "sursa": "A.22 BU03 (45 + 40 + 45; 3 + 38 + 4, cotat); A.21 (130,1 × 41)",
     "nota": "Trei uși (45, 40, 45,1) pe picioare de 3 cm. Peste corp vine perna M01-PE1 (41–45). U156 Bej nisip (randarea A.23)."
    },
    {
     "id": "M01-PE1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Perna banchetei de pe peretele cu frigiderul",
     "x": 126.1,
     "lat": 130.1,
     "h": 41,
     "inalt": 4,
     "stare": "proiect",
     "sursa": "A.22 BU03 (4, cotat; «Perna»)",
     "nota": "Pernă de 4 cm; materialul nu e dat în planșe (albă în randarea A.23)."
    },
    {
     "id": "RF1",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflajul de deasupra banchetei",
     "x": 126.1,
     "lat": 130.1,
     "h": 45,
     "inalt": 46.5,
     "stare": "proiect",
     "finisaj": "nuc",
     "lamela": 2.4,
     "rost": 2.6,
     "sursa": "A.22 BU03 (46,5, cotat; lamele și capacul măsurate pe desen)",
     "nota": "Lamele de ~2,4 cm la ~5 cm pas, de la 45 la 88,5, cu o șipcă orizontală de 3 cm deasupra (88,5–91,5). Sus e la nivelul blatului (91,5). H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-SN",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpurile suspendate de deasupra banchetei",
     "x": 126.2,
     "lat": 130,
     "h": 203.2,
     "inalt": 40,
     "adanc": 41.4,
     "stare": "proiect",
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 45
      },
      {
       "lat": 40
      },
      {
       "lat": 45
      }
     ],
     "sursa": "A.22 BU03 (45 + 40 + 45; 40, cotat); A.21 (41,4)",
     "nota": "Trei uși fără mâner (frontul cu 1 cm mai lung decât corpul, specs/09). Dedesubt, o placă orizontală în Nuc Parona închide nișa banchetei (randarea A.23). U156 Bej nisip."
    },
    {
     "id": "M01-PT2",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Plinta de sus a corpurilor suspendate de deasupra banchetei",
     "x": 126.1,
     "lat": 130.1,
     "h": 243.2,
     "inalt": 6.8,
     "stare": "proiect",
     "finisaj": "bej",
     "sursa": "A.22 BU03 (6,8, cotat)",
     "nota": "Se croiește la măsura de pe șantier, ca M01-PT1."
    },
    {
     "id": "M01-L",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Panoul vertical dintre banchetă și corpul din colț",
     "x": 256.2,
     "lat": 1.8,
     "h": 0,
     "inalt": 250,
     "adanc": 41.4,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU03 și BU02 («Placa mascare»; 1,8 și 41,4, cotat); A.21",
     "nota": "Placă de 1,8 cm, de la pardoseală la placă, pe toată adâncimea banchetei. Pe fața dinspre banchetă e priza P1 a peretelui cu fereastra (h = 60). H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-CF",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul din colț — partea fixă de jos",
     "x": 258,
     "lat": 60,
     "h": 0,
     "inalt": 91.5,
     "adanc": 41.4,
     "stare": "proiect",
     "finisaj": "bej",
     "sursa": "A.22 BU03 (91,5, cotat; «parte fixa»); A.21 (258–318, 41,4)",
     "nota": "Panou fix, fără ușă. În fața lui: capătul banchetei M01-BE, riflajul RF2 și masca caloriferului M01-MC. Culoarea nu se vede clar în randare."
    },
    {
     "id": "M01-CE",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul din colț — ușa (propunere: dulapul centralei)",
     "x": 258,
     "lat": 60,
     "h": 91.5,
     "inalt": 113.5,
     "adanc": 41.4,
     "stare": "proiect",
     "finisaj": "bej",
     "sursa": "A.22 BU03 (113,5 «front», rafturi la 126,5 și 163,3, cotat); A.21 (60 × 41,4–41,8)",
     "nota": "Ușă de 60 × 113,5 (91,5–205). Sus atinge grinda GR2 (205). Rafturile din BU03 se scot dacă aici intră centrala S3. Interior ~56,4 × ~38 cm."
    },
    {
     "id": "S3",
     "strat": "sanitare",
     "tip": "sanitar",
     "nume": "Centrala termică Ariston Genus One+ WiFi 24 (propunere de poziție)",
     "x": 268,
     "lat": 40,
     "h": 112,
     "inalt": 74.5,
     "adanc": 31.5,
     "pozitie": "aprox",
     "stare": "propunere",
     "obiect": "centrala",
     "in": "M01-CE",
     "sursa": "specs/08 C (model ales 29.10.2026, 745 × 400 × 315; «dulapul înalt … corp 58 × 41,8»); A.22 BU03 («Traseu teava gaz» deasupra corpului)",
     "nota": "Centrată în corp (9 cm liberi pe fiecare parte, ca în specs/08). Sus la ~186,5, ca să încapă cotul kitului de evacuare sub grinda GR2 (205): evacuarea iese orizontal prin peretele de est. Gazul vine din canalul T1 de deasupra (x 258–278). Rafturile se scot. Poziția exactă o dă firma autorizată ANRE."
    },
    {
     "id": "R4",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Racordul de gaz al centralei",
     "punct": true,
     "pozitie": "necunoscuta",
     "stare": "propunere",
     "fluid": "gaz",
     "sursa": "specs/08 C și D (centrala nouă pe gaz); A.22 BU03",
     "nota": "Sub centrală, după șablonul Ariston. Țeava coboară din canalul T1 în corp, pe lângă centrală (~8 cm liberi). Robinet de gaz accesibil prin ușă."
    },
    {
     "id": "R5",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa rece spre centrală",
     "punct": true,
     "pozitie": "necunoscuta",
     "stare": "propunere",
     "fluid": "rece",
     "sursa": "specs/08 C",
     "nota": "Sub centrală, după șablonul Ariston. Traseul de la coloană nu e desenat."
    },
    {
     "id": "R6",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa caldă menajeră de la centrală",
     "punct": true,
     "pozitie": "necunoscuta",
     "stare": "propunere",
     "fluid": "calda",
     "sursa": "specs/08 C",
     "nota": "Sub centrală, după șablonul Ariston. Alimentează chiuveta (R2), baia și GS."
    },
    {
     "id": "R7",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Turul încălzirii",
     "punct": true,
     "pozitie": "necunoscuta",
     "stare": "propunere",
     "fluid": "calda",
     "sursa": "specs/08 B și C",
     "nota": "Sub centrală. Caloriferul CF1 e imediat la sud, în spatele banchetei M01-BE."
    },
    {
     "id": "R8",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Returul încălzirii",
     "punct": true,
     "pozitie": "necunoscuta",
     "stare": "propunere",
     "fluid": "calda",
     "sursa": "specs/08 B și C",
     "nota": "Sub centrală, lângă tur."
    },
    {
     "id": "R9",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Scurgerea condensului centralei",
     "punct": true,
     "pozitie": "necunoscuta",
     "stare": "propunere",
     "fluid": "scurgere",
     "diam": 3.2,
     "sursa": "specs/08 A și C («sifon de condens», punct sanitar nou)",
     "nota": "Obligatorie la centrala cu condensare. Cea mai apropiată scurgere e la chiuvetă (R3), pe peretele opus: trebuie un traseu nou sau o pompă de condens. Fără ea centrala nu se pune în funcțiune."
    },
    {
     "id": "P2",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză cu împământare pentru centrală",
     "x": 312,
     "h": 100,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "in": "M01-CE",
     "sursa": "specs/06 (circuit separat pentru centrala nouă)",
     "nota": "Pe circuit propriu. În corp, sub centrală, în dreapta, accesibilă prin ușă. A.06 nu o are: poziția se stabilește cu instalatorul."
    },
    {
     "id": "M01-BE",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Bancheta de pe peretele cu fereastra (capătul)",
     "x": 256.2,
     "lat": 40,
     "h": 3,
     "inalt": 38,
     "adanc": 90.8,
     "stare": "proiect",
     "finisaj": "bej",
     "inFata": [
      "M01-CF"
     ],
     "sursa": "A.22 BU03 (45; 3 + 38 + 4, cotat); A.21 (256,2–296,2)",
     "nota": "Capătul de nord al banchetei de pe peretele cu fereastra, văzut în secțiune."
    },
    {
     "id": "M01-PE2",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Perna banchetei de pe peretele cu fereastra",
     "x": 256.2,
     "lat": 40,
     "h": 41,
     "inalt": 4,
     "stare": "proiect",
     "inFata": [
      "M01-CF"
     ],
     "sursa": "A.22 BU03 («Perna», 4)",
     "nota": "Văzută în secțiune."
    },
    {
     "id": "RF2",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflajul de sub fereastră (capătul)",
     "x": 296.4,
     "lat": 3,
     "h": 45,
     "inalt": 42,
     "stare": "proiect",
     "finisaj": "nuc",
     "lamela": 2.5,
     "rost": 2.5,
     "inFata": [
      "M01-CF"
     ],
     "sursa": "A.21 (296,4–299,4); A.22 BU02 și BU03",
     "nota": "Văzut în secțiune: lamele de 3 cm adâncime."
    },
    {
     "id": "M01-MC",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Masca caloriferului (capătul)",
     "x": 299.4,
     "lat": 22.6,
     "h": 0,
     "inalt": 87,
     "stare": "proiect",
     "inFata": [
      "M01-CF"
     ],
     "sursa": "A.22 BU03 («Masca calorifer»); A.21 (299,4–322,2)",
     "nota": "Văzută în secțiune; vezi peretele cu fereastra."
    },
    {
     "id": "GR2",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda de deasupra ferestrei (văzută în secțiune)",
     "x": 278,
     "lat": 44,
     "h": 205,
     "inalt": 45,
     "stare": "proiect",
     "sursa": "A.01 și A.05 (liniile întrerupte, x 278–328); A.22 BU03 (fața de jos la 205, desenat)",
     "nota": "Grindă de 50 cm lățime (x 278–328), din care 44 cm în bucătărie și 6 cm în peretele exterior. Fața de jos la 205. Corpul din colț M01-CE vine lipit sub ea: centrala nu poate evacua în sus."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Nișele aparatelor din corpul înalt sunt mai mici decât cele standard: microunde 35 cm (încastrabilele cer 38 sau 45), espressor 40 cm (încastrabilele cer 45), frigider 191,6 cm (frigiderele încastrabile sunt pentru 178 sau 194). Aparatele nu sunt alese: se aleg înainte de comanda mobilei sau se refac nișele (BC1).",
     "sursa": "A.22 BU03; specs/09 D",
     "ids": [
      "E1",
      "E2",
      "E3"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Poziția centralei: specs/08 o pune în „dulapul înalt de lângă ușă, lângă peretele cu bancheta, corp 58 × 41,8” și citează A.21 din 10/2026. A.21 din PDF (02/2026) nu are eticheta „Centrala”. Singurul corp de ~41,8 adâncime și ~58 interior e M01-CE, din colțul N-E, unde BU03 desenează traseul de gaz și unde e și centrala de acum. Corpul de lângă ușă (M01-C) are 61,8 adâncime și e ocupat de frigider și nișe. De confirmat (BC10).",
     "sursa": "specs/08 C; A.21; A.22 BU03; stare_actuala/bucatarie",
     "ids": [
      "S3",
      "M01-CE",
      "M01-C2"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Evacuarea centralei: deasupra corpului M01-CE e grinda GR2 (205). Kitul coaxial trebuie să iasă orizontal prin peretele de est, sub 205 și lângă fereastră (y 140–225). Distanța față de fereastră și dacă evacuarea pe fațadă e permisă le verifică firma ANRE (BC10).",
     "sursa": "specs/08 C; A.22 BU03",
     "ids": [
      "S3",
      "GR2"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Scurgerea condensului (R9) e un punct sanitar nou: chiuveta e pe peretele opus, la ~2,5 m. Fără scurgere centrala nu se pune în funcțiune (BC14).",
     "sursa": "specs/08 A, C",
     "ids": [
      "R9"
     ]
    }
   ]
  },
  {
   "id": "E",
   "nume": "Peretele cu fereastra",
   "subtitlu": "bancheta cu riflaj, masca și caloriferul, fereastra, placa de mascare a țevii de gaz · partea de nord a BU02 în A.22",
   "lungime": 134,
   "origine": "colțul N-E, cu peretele cu frigiderul (fața peretelui exterior, x = 322)",
   "etapa": 1,
   "plan": [
    [
     322,
     265
    ],
    [
     322,
     131
    ]
   ],
   "elemente": [
    {
     "id": "GR2",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda de deasupra ferestrei (paralelă cu peretele)",
     "x": 0,
     "lat": 134,
     "h": 205,
     "inalt": 45,
     "stare": "proiect",
     "sursa": "A.01 și A.05 (x 278–328); A.22 BU02 și BU03 (205)",
     "nota": "Grinda merge de-a lungul peretelui, pe 44 cm din bucătărie (x 278–322), de la treaptă până la peretele cu frigiderul. Fața de jos la 205, la 1 cm deasupra golului ferestrei (204). În fața ei, la x 256,2–258: placa M01-PM."
    },
    {
     "id": "M01-L",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Panoul vertical dintre banchetă și corpul din colț",
     "x": 0,
     "lat": 41.4,
     "h": 0,
     "inalt": 250,
     "adanc": 1.8,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU02 («Placa mascare», 41,4, cotat); A.22 BU03 (1,8)",
     "nota": "Fața spre bucătărie a panoului de 1,8 cm (x 256,2–258 în plan). Acoperă latura corpului din colț. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză simplă integrată în mobilier",
     "x": 19,
     "h": 60,
     "punct": true,
     "pozitie": "aprox",
     "stare": "proiect",
     "in": "M01-L",
     "sursa": "A.06 («Priza integrată în mobilier», h = 60, scris; 19 de la colț, măsurat); Necesar prize și întrerupătoare (bucătărie, simplă)",
     "nota": "În panoul M01-L, cu fața spre banchetă, la 15 cm deasupra pernei. Tâmplarul face decupajul; doza se montează în panou, nu în perete."
    },
    {
     "id": "M01-BN",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Bancheta de pe peretele cu frigiderul (capătul)",
     "x": 0,
     "lat": 41,
     "h": 3,
     "inalt": 38,
     "adanc": 130.1,
     "stare": "proiect",
     "finisaj": "bej",
     "inFata": [
      "M01-L"
     ],
     "sursa": "A.22 BU02 (41; 3 + 38, cotat)",
     "nota": "Capătul de est, văzut în secțiune."
    },
    {
     "id": "M01-PE1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Perna banchetei de pe peretele cu frigiderul",
     "x": 0,
     "lat": 41,
     "h": 41,
     "inalt": 4,
     "stare": "proiect",
     "inFata": [
      "M01-L"
     ],
     "sursa": "A.22 BU02",
     "nota": "Văzută în secțiune."
    },
    {
     "id": "M01-SN",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpurile suspendate de deasupra banchetei (capătul)",
     "x": 0,
     "lat": 41.4,
     "h": 203.2,
     "inalt": 40,
     "adanc": 130,
     "stare": "proiect",
     "finisaj": "bej",
     "inFata": [
      "M01-L",
      "GR2"
     ],
     "sursa": "A.22 BU02 (41,4; 40, cotat)",
     "nota": "Văzute în secțiune."
    },
    {
     "id": "M01-PT2",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Plinta de sus a corpurilor suspendate de deasupra banchetei",
     "x": 0,
     "lat": 41.4,
     "h": 243.2,
     "inalt": 6.8,
     "stare": "proiect",
     "finisaj": "bej",
     "inFata": [
      "M01-L",
      "GR2"
     ],
     "sursa": "A.22 BU02 (6,8, cotat)",
     "nota": "Văzută în secțiune."
    },
    {
     "id": "M01-MC",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Masca caloriferului (cutia din spatele banchetei și al riflajului)",
     "x": 41.4,
     "lat": 90.8,
     "h": 0,
     "inalt": 87,
     "adanc": 22.8,
     "stare": "proiect",
     "sursa": "A.21 (x 299,4–322,2, y 132,8–223,6); A.22 BU02 și BU03 («Masca calorifer»)",
     "nota": "Cutie pe toată lungimea banchetei: panoul din față la x 299,4–301,2, deci ~20,8 cm liberi până la perete. Sus e la 87, la nivelul parapetului. Planșele nu arată grile de aer: vezi avertismentul."
    },
    {
     "id": "CF1",
     "strat": "structura",
     "tip": "calorifer",
     "nume": "Calorifer Mexen CF33 600 × 600 sub fereastră",
     "x": 52.5,
     "lat": 60,
     "h": 12,
     "inalt": 60,
     "adanc": 16.4,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "specs/08 B (configurația aleasă 28.10.2026: bucătărie 600 × 600, mascat)",
     "nota": "Centrat sub fereastră (propunere), cu marginea de jos la ~12 cm. Adâncime 16,4 cm + consolele: intră la limită în cei ~20,8 cm ai măștii. Racord lateral 4 × G½″, 55 cm între racorduri. Țevile vin din centrala S3 (colțul N-E), pe lângă peretele exterior, pe ~15 cm. Stă în spatele banchetei și al riflajului; robinetul trebuie să rămână accesibil."
    },
    {
     "id": "M01-BE",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Bancheta de pe peretele cu fereastra (depozitare)",
     "x": 41.4,
     "lat": 90.8,
     "h": 3,
     "inalt": 38,
     "adanc": 40,
     "stare": "proiect",
     "finisaj": "bej",
     "inFata": [
      "M01-MC",
      "CF1"
     ],
     "sursa": "A.21 (256,2–296,2 × 132,8–223,6); A.22 BU02 și BU03 (3 + 38 + 4, cotat)",
     "nota": "Corp de 90,8 × 40, pe picioare de 3 cm. BU02 nu desenează uși: cum se deschide depozitarea (capac sau uși) nu e clar (BC13). La capătul de sud, un panou de 1,8 cm (y 131–132,8) acoperă latura treptei de 44 cm a peretelui. U156 Bej nisip."
    },
    {
     "id": "M01-PE2",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Perna banchetei de pe peretele cu fereastra",
     "x": 41.4,
     "lat": 90.8,
     "h": 41,
     "inalt": 4,
     "stare": "proiect",
     "inFata": [
      "M01-MC",
      "CF1"
     ],
     "sursa": "A.22 BU02 și BU03 (4)",
     "nota": "Pernă de 4 cm; materialul nu e dat."
    },
    {
     "id": "RF2",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflajul din fața măștii caloriferului",
     "x": 41.4,
     "lat": 90.8,
     "h": 45,
     "inalt": 42,
     "stare": "proiect",
     "finisaj": "nuc",
     "lamela": 2.5,
     "rost": 2.5,
     "inFata": [
      "M01-MC",
      "CF1"
     ],
     "sursa": "A.21 (lamele la x 296,4–299,4, pas 5); A.22 BU02",
     "nota": "Lamele de ~2,5 × 3 cm la 5 cm pas, de pe pernă (45) până la parapet (87). Aerul cald al caloriferului iese printre lamele. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "FE1",
     "strat": "structura",
     "tip": "fereastra",
     "nume": "Fereastra",
     "x": 40,
     "lat": 85,
     "h": 87,
     "inalt": 117,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01 și A.21 (golul y 140–225, adică 40–125 de la colț); A.22 BU02 (tocul 42,5–122,5 × 89,5–201,5) și BU03 (golul 87–204), măsurate",
     "nota": "Parapetul la ~87, la nivelul riflajului; capul la ~204, sub grinda GR2. Înălțimile sunt măsurate pe desen: de măsurat pe șantier."
    },
    {
     "id": "M01-PM",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Placa de mascare a țevii de gaz",
     "x": 41.4,
     "lat": 92.6,
     "h": 203.2,
     "inalt": 46.8,
     "stare": "proiect",
     "inFata": [
      "GR2",
      "T1"
     ],
     "sursa": "A.22 BU02 («Placa mascare» 130,5 × 46,8, cotat)",
     "nota": "Placă de 1,8 cm în planul x 256,2–258, de la 203,2 la placă, pe 130,5 cm (y 223,6 → 93,1), cu o întoarcere de 1,8 cm la capătul de sud. În spatele ei, canalul x 258–278 cu țeava de gaz T1. Trebuie să fie demontabilă și ventilată (HL5). Finisajul nu e dat."
    },
    {
     "id": "T1",
     "strat": "sanitare",
     "tip": "teava",
     "nume": "Țeava de gaz în canalul de sub placă",
     "x": 15,
     "lat": 119,
     "h": 222,
     "inalt": 4,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "fluid": "gaz",
     "ascuns": true,
     "sursa": "A.22 BU03 («Traseu teava gaz», în canalul x 258–278); A.22 BU02 (placa de mascare)",
     "nota": "În canalul dintre placa M01-PM și grinda GR2, la 205–250. Spre nord coboară în corpul M01-CE, la centrală. Planșele nu arată cum ajunge aici de la masca M06 din hol (HL4, BC12). Traseul îl stabilește firma ANRE."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Caloriferul CF1 e închis între perete, panoul măștii (x 299,4–301,2), banchetă și riflaj. Planșele nu arată pe unde intră aerul rece (jos e banca) și dacă cutia e deschisă sus, sub fereastră. specs/08 cere 5–8 cm liberi sus sau o grilă și estimează −20 % putere cu masca. Adâncimea liberă (~20,8 cm) e la limită pentru CF33 (16,4 cm + console) (BC11).",
     "sursa": "A.21; A.22 BU02, BU03; specs/08 B",
     "ids": [
      "CF1",
      "M01-MC",
      "RF2"
     ]
    }
   ]
  },
  {
   "id": "E2",
   "nume": "Peretele cu coloana de lângă stâlp",
   "subtitlu": "depozitarea îngustă, masca stâlpului ST1, dulapul de condimente; cu 44 cm mai spre vest decât peretele cu fereastra · partea de sud a BU02 în A.22",
   "lungime": 131,
   "origine": "muchia treptei, la 131 cm de peretele cu chiuveta (x = 278)",
   "etapa": 1,
   "plan": [
    [
     278,
     131
    ],
    [
     278,
     0
    ]
   ],
   "elemente": [
    {
     "id": "M01-PM",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Placa de mascare a țevii de gaz (capătul de sud)",
     "x": 0,
     "lat": 39.7,
     "h": 203.2,
     "inalt": 46.8,
     "stare": "proiect",
     "inFata": [
      "T1"
     ],
     "sursa": "A.22 BU02 (130,5 + 1,8, cotat)",
     "nota": "Continuarea plăcii de pe peretele cu fereastra până la y = 91,3, cu întoarcerea de 1,8 cm. Între întoarcere și grinda GR1 rămân 8,1 cm (BU02)."
    },
    {
     "id": "T1",
     "strat": "sanitare",
     "tip": "teava",
     "nume": "Țeava de gaz în canalul de sub placă",
     "x": 0,
     "lat": 39.7,
     "h": 222,
     "inalt": 4,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "fluid": "gaz",
     "ascuns": true,
     "sursa": "A.22 BU02 și BU03",
     "nota": "Capătul de sud al canalului. Legătura cu masca M06 din hol nu e desenată (HL4, BC12)."
    },
    {
     "id": "M01-DI1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Depozitarea îngustă — ușa de jos",
     "x": 0,
     "lat": 40,
     "h": 0,
     "inalt": 103,
     "adanc": 21.8,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU02 (40; 103, cotat; «Depozitare ingusta»); specs/09 (sistem push)",
     "nota": "Corp de 40 × 21,8, ușă push (specs/09). Lipit de latura treptei spre nord. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-DI2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Depozitarea îngustă — ușa de sus",
     "x": 0,
     "lat": 40,
     "h": 103,
     "inalt": 100,
     "adanc": 21.8,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU02 (100, cotat)",
     "nota": "Ușă push. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "ST1",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul de beton de lângă peretele E2",
     "x": 48,
     "lat": 28,
     "h": 0,
     "inalt": 250,
     "stare": "proiect",
     "sursa": "A.01 și A.21 (x 259–278, y 55–83, din vectori)",
     "nota": "Iese 19 cm din perete, pe 28 cm (y 55–83). Masca M01-MS îl acoperă până la 203. Grinda GR1 reazemă pe el."
    },
    {
     "id": "GR1",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda GR1 (văzută în secțiune)",
     "x": 48,
     "lat": 25,
     "h": 205,
     "inalt": 45,
     "stare": "proiect",
     "sursa": "A.01 și A.05 (liniile întrerupte y 58–83); A.22 BU02 (205)",
     "nota": "Capătul de est al grinzii, pe stâlpul ST1."
    },
    {
     "id": "M01-MS",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Masca stâlpului ST1",
     "x": 40,
     "lat": 36,
     "h": 0,
     "inalt": 203,
     "adanc": 21.8,
     "stare": "proiect",
     "finisaj": "nuc",
     "inFata": [
      "ST1"
     ],
     "sursa": "A.22 BU02 (36, cotat); A.21 (y 55–91)",
     "nota": "Panou fix de 36 cm în fața stâlpului, la nivelul coloanei (21,8 cm de perete). H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-DC",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul de condimente",
     "x": 76,
     "lat": 50,
     "h": 103,
     "inalt": 100,
     "adanc": 21.8,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU02 (50; 100, cotat; «Dulap condimente»); specs/09 (sistem push)",
     "nota": "Ușă push de 50 × 100, la 11,5 cm deasupra blatului. Între el și peretele cu chiuveta rămân 4,8 cm (banda G2 e în colț). H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-DC0",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Zona de sub dulapul de condimente (neclară)",
     "x": 76,
     "lat": 50,
     "h": 0,
     "inalt": 103,
     "adanc": 21.8,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.22 BU02 (nedesenată, acoperită de capătul blatului); A.22 BU01 (8 compartimente pe 0–203 în lateral)",
     "nota": "BU02 arată aici doar capătul blatului și al corpurilor de jos. BU01 desenează în lateral, pe 21,8 cm, compartimente pe toată înălțimea. Nu se știe dacă e corp închis, raft sau gol. De întrebat."
    },
    {
     "id": "M01-SJ",
     "strat": "mobila",
     "tip": "plinta",
     "nume": "Soclul corpurilor de jos (capătul)",
     "x": 69,
     "lat": 60,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "bej",
     "inFata": [
      "M01-MS",
      "M01-DC0"
     ],
     "sursa": "A.22 BU01 (8)",
     "nota": "Văzut în secțiune."
    },
    {
     "id": "M01-J",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpurile de jos (capătul de est, în secțiune)",
     "x": 69,
     "lat": 60,
     "h": 8,
     "inalt": 80,
     "adanc": 254.3,
     "stare": "proiect",
     "finisaj": "bej",
     "inFata": [
      "M01-MS",
      "M01-DC0"
     ],
     "sursa": "A.22 BU02; A.21 (y 2–62)",
     "nota": "Capătul corpului cu două sertare, lipit de coloană (x 256,2)."
    },
    {
     "id": "M01-BL",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Blatul (capătul de est)",
     "x": 69,
     "lat": 60,
     "h": 88,
     "inalt": 3.5,
     "stare": "proiect",
     "finisaj": "blat",
     "inFata": [
      "M01-MS",
      "M01-DC0"
     ],
     "sursa": "A.21 (y 2–62); A.22 BU01 (3,5)",
     "nota": "Blatul se oprește în coloană (x 256,2)."
    },
    {
     "id": "M01-PO",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Placa orizontală de deasupra corpurilor (capătul de est)",
     "x": 40.5,
     "lat": 90.3,
     "h": 203.2,
     "inalt": 2.4,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU02 (hașurată, 203,2–205,6, măsurat)",
     "nota": "Acoperă coloana de la peretele cu chiuveta până la y ≈ 90,5. Deasupra ei, până la placă, zona dintre perete și GR1 rămâne închisă."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Sub dulapul de condimente (h 0–103) planșele nu se potrivesc: BU02 nu desenează nimic, BU01 arată compartimente pe toată înălțimea. Blatul și corpurile de jos se opresc în coloană, deci zona e accesibilă doar dacă e corp separat. De întrebat (BC4).",
     "sursa": "A.22 BU01, BU02",
     "ids": [
      "M01-DC0",
      "M01-DC"
     ]
    }
   ]
  },
  {
   "id": "S",
   "nume": "Peretele cu chiuveta și plita",
   "subtitlu": "corpurile de jos și suspendate, blatul la 91,5, plita, cuptorul, chiuveta, hota, banda G · BU01 în A.22 (A.10 îi spune BI01)",
   "lungime": 278,
   "origine": "colțul S-E, cu peretele E2 (x = 278)",
   "etapa": 1,
   "plan": [
    [
     278,
     0
    ],
    [
     0,
     0
    ]
   ],
   "elemente": [
    {
     "id": "GH1",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Ghena din colțul S-V (33,5 × 30)",
     "x": 244.5,
     "lat": 33.5,
     "h": 0,
     "inalt": 250,
     "stare": "proiect",
     "sursa": "A.01 (33,5 + 244,5, cotat); A.21 (y 0–30, pereți de 10 cm cu gol de 23,5 × 20, din vectori)",
     "nota": "Bloc din zidărie de 10 cm cu un gol de ~23,5 × 20 (ghenă de ventilație?). Fața lui e la 30 cm în fața peretelui. Corpul de colț de 35,1 are în dreptul lui doar ~32 cm adâncime, iar placarea M01-PS1 trece pe fața lui."
    },
    {
     "id": "GR1",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda GR1 (paralelă cu peretele, la 58–83 cm de el)",
     "x": 19,
     "lat": 259,
     "h": 205,
     "inalt": 45,
     "stare": "proiect",
     "sursa": "A.01 și A.05 (y 58–83, din vectori); A.21 (liniile întrerupte); A.22 BU02 (205)",
     "nota": "E aceeași grindă ca GR1 din hol. Se vede deasupra plăcii orizontale M01-PO (fața de nord, 205–250, ca în randarea A.23). Merge de la peretele cu ușa până la stâlpul ST1 (x 259)."
    },
    {
     "id": "M01-PO",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Placa orizontală de deasupra corpurilor suspendate",
     "x": 0,
     "lat": 276.1,
     "h": 203,
     "inalt": 2.6,
     "stare": "proiect",
     "finisaj": "nuc",
     "inFata": [
      "GR1",
      "GH1"
     ],
     "sursa": "A.22 BU01 (47 până la placă) și BU02 (hașurată, 203–205,6); randarea A.23",
     "nota": "Placă orizontală pe toată lungimea, de la perete (y 0,2) până la fața de nord a grinzii GR1 (y 83), sub grindă. Închide zona de deasupra corpurilor; în ea trec cablurile benzilor G1 și G2. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-LS",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Panoul lateral de lângă peretele cu ușa",
     "x": 276.1,
     "lat": 1.8,
     "h": 0,
     "inalt": 205,
     "adanc": 52.2,
     "stare": "proiect",
     "finisaj": "nuc",
     "inFata": [
      "GH1"
     ],
     "sursa": "A.22 BU01 (1,8, cotat); A.21 (x 0,1–1,9, y 30,8–83)",
     "nota": "Placă de 1,8 cm lipită de peretele cu ușa, de la fața ghenei (y 30,8) la y 83, de la pardoseală la placa M01-PO. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "M01-DC",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul de condimente (latura)",
     "x": 0,
     "lat": 21.8,
     "h": 103,
     "inalt": 100,
     "adanc": 50,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU01 (21,8, cotat; 103 + 100) și BU02",
     "nota": "Latura coloanei de lângă stâlp, la 4,8 cm de perete. Vezi peretele E2."
    },
    {
     "id": "M01-DC0",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Zona de sub dulapul de condimente (latura, neclară)",
     "x": 0,
     "lat": 21.8,
     "h": 0,
     "inalt": 103,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.22 BU01 (compartimente pe 0–203, desenate în lateral); A.22 BU02",
     "nota": "Vezi peretele E2 și întrebarea BC4."
    },
    {
     "id": "M01-PS1",
     "strat": "mobila",
     "tip": "placare",
     "nume": "Placarea dintre blat și corpurile suspendate (zona hașurată)",
     "x": 21.8,
     "lat": 254.3,
     "h": 91.5,
     "inalt": 51.5,
     "stare": "de-verificat",
     "inFata": [
      "GH1",
      "P2"
     ],
     "sursa": "A.22 BU01 (51,5, cotat; hașurat); A.21 (placă de 1,8 la y 0,2–2,0, x 33,5–257,4)",
     "nota": "A.21 desenează o placă de 1,8 cm pe perete, deci nu e tencuială. Materialul nu e dat (F3). Pe ghenă trece pe fața ei (y 30)."
    },
    {
     "id": "M01-PS2",
     "strat": "mobila",
     "tip": "placare",
     "nume": "Placarea de lângă coloană, până la placa de sus",
     "x": 21.8,
     "lat": 39.3,
     "h": 143,
     "inalt": 60,
     "stare": "de-verificat",
     "sursa": "A.22 BU01 (39,4 și 100, cotat; hașurat)",
     "nota": "Unde nu sunt corpuri suspendate, placarea urcă până la 203. Material: F3."
    },
    {
     "id": "M01-SJ",
     "strat": "mobila",
     "tip": "plinta",
     "nume": "Soclul corpurilor de jos",
     "x": 21.8,
     "lat": 254.3,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "bej",
     "sursa": "A.22 BU01 (8, cotat)",
     "nota": "Continuu, și în fața mașinii de spălat vase (cu decupajul cerut de aparat)."
    },
    {
     "id": "M01-J",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpurile de jos",
     "x": 21.8,
     "lat": 254.3,
     "h": 8,
     "inalt": 80,
     "adanc": 57.8,
     "stare": "proiect",
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 39.2
      },
      {
       "lat": 60
      },
      {
       "lat": 60
      },
      {
       "lat": 60
      },
      {
       "lat": 35.1
      }
     ],
     "inFata": [
      "P1",
      "D1",
      "R1",
      "R2",
      "R3",
      "GH1",
      "M01-PS1"
     ],
     "sursa": "A.22 BU01 (39,2 + 60 + 60 + 60 + 35,1 = 254,3; 8 + 80, cotat); A.21 (adâncimea, fronturile la y 59,8); specs/09 (mâner frezat J)",
     "nota": "De la stânga: 2 sertare (8–48, 48–88); sertar 8–28 sub cuptorul E4; mașina de spălat vase E7 (frontul pe ușa ei); corpul chiuvetei (ușă); corpul de colț de 35,1 (ușă), doar ~32 cm adâncime în fața ghenei. MDF vopsit, culoare similară cu U156 Bej nisip (nota din A.21, specs/09). Mâner frezat tip J."
    },
    {
     "id": "M01-BL",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Blatul",
     "x": 21.8,
     "lat": 254.3,
     "h": 88,
     "inalt": 3.5,
     "adanc": 60,
     "stare": "proiect",
     "finisaj": "blat",
     "sursa": "A.22 BU01 (3,5; 8 + 80 + 3,5 = 91,5, cotat); A.21 (y 2–62, x 1,9–256,2)",
     "nota": "Fața de sus la 91,5. Adâncime 60 (y 2–62), 32 în dreptul ghenei. Decupaje: plita E5 (58 × 49) și chiuveta S1 (41 × 45). Materialul nu e dat; în randare e bej deschis, mat."
    },
    {
     "id": "E4",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Cuptor încastrat",
     "x": 61,
     "lat": 60,
     "h": 28,
     "inalt": 60,
     "stare": "proiect",
     "finisaj": "negru",
     "aparat": "cuptor",
     "in": "M01-J",
     "inFata": [
      "D1"
     ],
     "sursa": "A.22 BU01 (60; 20 + 60, cotat); randarea A.23 (negru)",
     "nota": "Nișă de 60 × 60 (28–88), sub plită, cu sertar de 20 cm dedesubt."
    },
    {
     "id": "E7",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Mașina de spălat vase încastrată",
     "x": 121,
     "lat": 60,
     "h": 0,
     "inalt": 88,
     "stare": "proiect",
     "finisaj": "incastrat",
     "aparat": "msv",
     "in": "M01-J",
     "inFata": [
      "P1"
     ],
     "sursa": "A.22 BU01 («MSV incastrata», 60, cotat); specs/08 A",
     "nota": "Gol de 60 × 88 sub blat, fără corp. Frontul de 60 × 80 se prinde pe ușa mașinii. Apa și scurgerea se leagă în corpul chiuvetei (R1, R3)."
    },
    {
     "id": "E5",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Plită cu inducție",
     "x": 62,
     "lat": 58,
     "h": 86,
     "inalt": 5.5,
     "stare": "proiect",
     "finisaj": "incastrat",
     "aparat": "plita",
     "in": "M01-BL",
     "sursa": "A.21 (x 158–216, y 6,5–55,5); decizia din 12.08.2026: plită cu inducție (specs/08; specs/06)",
     "nota": "Decupaj ~56 × 49 după aparat. Corpul plitei coboară ~5,5 cm sub fața blatului, adică până la ~86, sub fața de sus a nișei cuptorului (88). Se alimentează din doza D1, pe circuit de 32 A."
    },
    {
     "id": "S1",
     "strat": "sanitare",
     "tip": "sanitar",
     "nume": "Chiuveta",
     "x": 190.5,
     "lat": 41,
     "h": 72,
     "inalt": 20,
     "pozitie": "aprox",
     "stare": "proiect",
     "obiect": "chiuveta",
     "in": "M01-J",
     "sursa": "A.21 (x 46,5–87,5, y 12,2–57,2); A.22 BU01; randarea A.23 (neagră)",
     "nota": "41 × 45, cuvă ~31 × 30. Adâncimea cuvei nu e dată (desenat 20 cm). Neagră în randare. Nu e în lista de achiziții (specs/08 A)."
    },
    {
     "id": "S2",
     "strat": "sanitare",
     "tip": "sanitar",
     "nume": "Bateria chiuvetei",
     "x": 209,
     "lat": 4,
     "h": 91.5,
     "inalt": 23.1,
     "stare": "proiect",
     "obiect": "baterie",
     "sursa": "A.21 (x 65–69, y 12,8); A.22 BU01 (măsurat 91,5–114,6); randarea A.23 (neagră)",
     "nota": "Pe blat, în spatele chiuvetei, la ~13 cm de perete. Neagră în randare. Nu e în lista de achiziții."
    },
    {
     "id": "R2",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa caldă la chiuvetă",
     "x": 201,
     "h": 55,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "fluid": "calda",
     "in": "M01-J",
     "sursa": "propunere (planșele nu desenează racordurile)",
     "nota": "Robinet colțar în corpul chiuvetei, în stânga scurgerii."
    },
    {
     "id": "R1",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa rece la chiuvetă și la mașina de spălat vase",
     "x": 221,
     "h": 55,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "fluid": "rece",
     "in": "M01-J",
     "sursa": "propunere; specs/08 A («racord MSV … apă + evacuare»)",
     "nota": "Robinet colțar cu două ieșiri: bateria și mașina de spălat vase E7 (în corpul vecin, spre stânga)."
    },
    {
     "id": "R3",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Scurgerea chiuvetei și a mașinii de spălat vase",
     "x": 211,
     "h": 45,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "fluid": "scurgere",
     "diam": 5,
     "in": "M01-J",
     "sursa": "propunere (planșele nu desenează scurgerea)",
     "nota": "Ø50, sub axa chiuvetei. Sifonul are racord pentru furtunul mașinii de spălat vase."
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză triplă: cuptor, plită, mașina de spălat vase",
     "x": 141,
     "h": 30,
     "punct": true,
     "pozitie": "aprox",
     "stare": "proiect",
     "sursa": "A.06 («Priza Cuptor/Plita/MSV», h = 30, scris; x măsurat); Necesar prize și întrerupătoare",
     "nota": "În spatele mașinii de spălat vase. Plita trece pe circuit dedicat de 32 A (doza D1, specs/06): rămân cuptorul și mașina de spălat vase. Cuptorul are nevoie de circuit separat (specs/06)."
    },
    {
     "id": "D1",
     "strat": "electric",
     "tip": "doza",
     "nume": "Doza circuitului de 32 A pentru plită",
     "x": 101,
     "h": 30,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "specs/06 (circuit dedicat 3 × 6 mm², 32 A, pentru plita cu inducție)",
     "nota": "Propunere: în spatele cuptorului, sub plită, ca să ajungă cablul plitei (~1 m). Se ajunge la ea scoțând cuptorul."
    },
    {
     "id": "P2",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză triplă pentru electrocasnice diverse",
     "x": 141,
     "h": 110,
     "punct": true,
     "pozitie": "aprox",
     "stare": "proiect",
     "inFata": [
      "M01-PS1"
     ],
     "sursa": "A.06 (h = 110, scris; x măsurat); Necesar prize și întrerupătoare",
     "nota": "Pe placare, deasupra blatului (91,5). Decupajul în placa M01-PS1 îl face tâmplarul."
    },
    {
     "id": "M01-S",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpurile suspendate",
     "x": 61.1,
     "lat": 215,
     "h": 143,
     "inalt": 60,
     "stare": "proiect",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 60
      },
      {
       "lat": 40
      },
      {
       "lat": 40
      },
      {
       "lat": 40
      },
      {
       "lat": 35
      }
     ],
     "inFata": [
      "P3",
      "E6",
      "D2",
      "GH1",
      "M01-PS1"
     ],
     "sursa": "A.22 BU01 (60 + 40 + 40 + 40 + 35, 60, cotat); randarea A.23",
     "nota": "Fără mâner: frontul cu 1 cm mai lung decât corpul (specs/09). Primul (60) e corpul hotei: front 148,8–202,9, dedesubt viziera hotei. Adâncimea nu e cotată. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "E6",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Hotă încastrată (telescopică)",
     "x": 62.9,
     "lat": 56.4,
     "h": 143,
     "inalt": 30,
     "pozitie": "aprox",
     "stare": "proiect",
     "finisaj": "incastrat",
     "aparat": "hota",
     "in": "M01-S",
     "sursa": "A.22 BU01 (corpul de 60; viziera 143–148,8, măsurată)",
     "nota": "În corpul de 60, deasupra plitei (~51,5 cm între blat și hotă). Viziera se vede sub front. Evacuarea (ghenă sau recirculare) nu e desenată."
    },
    {
     "id": "P3",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză dublă: hotă și senzorul de gaz",
     "x": 76,
     "h": 190,
     "punct": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "in": "M01-S",
     "sursa": "A.06 («Priza hota / Senzor Gaz», h = 190, scris; x = 202 în plan); A.22 BU01 («Priza», la ~113,5)",
     "nota": "În corpul hotei. A.06 o pune la 76 de colț, BU01 la ~113,5: în ambele e în corpul de 60."
    },
    {
     "id": "D2",
     "strat": "electric",
     "tip": "doza",
     "nume": "Alimentarea sursei Push-DIM pentru benzile G",
     "x": 141,
     "h": 196,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "in": "M01-S",
     "sursa": "specs/04 și specs/06 (bucătărie: bandă 24 V, sursă Push-DIM, 29.10.2026)",
     "nota": "Propunere: sursa stă în primul corp de 40, lângă hotă. Are nevoie de 230 V și de firul de comandă de la butonul G din întrerupătorul I2 din hol. Planșele nu arată unde stă."
    },
    {
     "id": "G1",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Banda LED G sub corpurile suspendate",
     "x": 122.9,
     "lat": 151.4,
     "h": 143,
     "inalt": 1,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.22 BU01 (razele de la 126,6 la 270,5; «Banda LED 3000k 15cm de la perete»); specs/04, specs/06 (24 V, Push-DIM)",
     "nota": "Sub cele patru corpuri de lângă hotă (nu și sub corpul hotei): ~151 cm. Profil îngropat în fundul corpurilor, la 15 cm de perete (BU01). Lungimea diferă între planșe (L3)."
    },
    {
     "id": "G2",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Banda LED G verticală, în colțul de lângă coloană",
     "x": 21.8,
     "lat": 1.2,
     "h": 91.5,
     "inalt": 111.5,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 («LED încastrat Vertical», x ≈ 245–256 în plan, necotat); randarea A.23 (de pe blat până la placa de sus)",
     "nota": "Verticală, în lateralul coloanei de lângă stâlp, cu lumina pe placare. Lungimea nu e cotată (L2): desenată de pe blat (91,5) până sub placa M01-PO (203)."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Plita E5 coboară ~5,5 cm sub fața blatului (91,5), adică până la ~86, iar cuptorul E4 are nișa până la 88. Producătorii cer de obicei un spațiu de aer între plită și cuptor: se verifică cu fișele aparatelor înainte de comanda mobilei (BC3).",
     "sursa": "A.22 BU01",
     "ids": [
      "E5",
      "E4",
      "M01-BL"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Senzorul de gaz e alimentat din priza P3, în corpul hotei, la ~3,5 m de centrală (colțul N-E) și închis în corp. Detectorul pentru gaz metan se pune de obicei pe perete, aproape de tavan și de aparat. De stabilit cu firma ANRE (BC5).",
     "sursa": "A.06; specs/08 D",
     "ids": [
      "P3"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Hota E6: planșele nu arată evacuarea. Ghena GH1 e la ~1,5 m, în colțul opus. Recirculare (filtru de cărbune) sau tub prin zona închisă de deasupra corpurilor (BC6)?",
     "sursa": "A.22 BU01; A.21",
     "ids": [
      "E6",
      "GH1"
     ]
    },
    {
     "nivel": "info",
     "text": "Banda G1: BU01 o desenează sub patru corpuri (~151 cm), specs/06 numără toate cele cinci (~215 cm), A.06 are o săgeată de ~110 cm (L3). BU01 scrie „15 cm de la perete”, specs/06 scrie „2 cm de la perete”.",
     "sursa": "A.06; A.22 BU01; specs/06",
     "ids": [
      "G1"
     ]
    },
    {
     "nivel": "info",
     "text": "Placarea dintre blat și corpurile suspendate: A.01 scrie „Tencuială”, A.22 o hașurează, A.21 desenează o placă de 1,8 cm (F3).",
     "sursa": "A.01; A.21; A.22 BU01",
     "ids": [
      "M01-PS1",
      "M01-PS2"
     ]
    },
    {
     "nivel": "info",
     "text": "Placa M01-PO e desenată la 203–205,6, iar fața de jos a grinzii GR1 la 205: 0,6 cm de suprapunere. Se ajustează pe șantier, după ce se măsoară grinda.",
     "sursa": "A.22 BU01, BU02",
     "ids": [
      "M01-PO",
      "GR1"
     ]
    }
   ]
  },
  {
   "id": "V",
   "nume": "Peretele cu ușa spre hol",
   "subtitlu": "ușa spre hol (U4 în hol), ghena din colț, capetele corpurilor · fără desfășurare în A.22",
   "lungime": 265,
   "origine": "colțul S-V, cu peretele cu chiuveta (fața zidăriei, y = 0); primii 30 cm sunt latura ghenei",
   "etapa": 1,
   "plan": [
    [
     0,
     0
    ],
    [
     0,
     265
    ]
   ],
   "elemente": [
    {
     "id": "GH1",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Ghena din colțul S-V (latura ei)",
     "x": 0,
     "lat": 30,
     "h": 0,
     "inalt": 250,
     "stare": "proiect",
     "sursa": "A.01; A.21 (y 0–30)",
     "nota": "Blocul ghenei iese 33,5 cm din acest perete, pe primii 30 cm de la colț."
    },
    {
     "id": "M01-LS",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Panoul lateral al corpurilor de pe peretele cu chiuveta",
     "x": 30.8,
     "lat": 52.2,
     "h": 0,
     "inalt": 205,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.21 (x 0,1–1,9, y 30,8–83); A.22 BU01 (1,8, 0–205)",
     "nota": "Lipit de perete, de la fața ghenei până la y 83 (fața de nord a grinzii GR1). Închide capătul blatului (91,5), al corpurilor de jos și al celor suspendate. H1775 ST12 Nuc Parona (randarea A.23)."
    },
    {
     "id": "GR1",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda GR1 (văzută în secțiune)",
     "x": 58,
     "lat": 25,
     "h": 205,
     "inalt": 45,
     "stare": "proiect",
     "sursa": "A.01 și A.05 (y 58–83, din vectori); A.22 BU02 (205)",
     "nota": "Trece prin perete în hol, unde e tot GR1 (în hol la y 353,9–378,9, adică 59,8–84,8 aici: 1,8 cm diferență în A.01). În hol, masca de gaz M06 e centrată pe ea."
    },
    {
     "id": "U1",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa spre hol (U4 în hol), cu tocul și pervazul",
     "x": 118.3,
     "lat": 87.4,
     "h": 0,
     "inalt": 203.7,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01, A.06 și A.21 (golul 122–202, din vectori; pervazul spre bucătărie 118,3–205,7 în A.21); A.22 BU03 (buiandrugul la 200); A.17 D04 (pervazul în hol, 203,7)",
     "nota": "Golul 122–202 (80 cm), exact în dreptul golului U4 din hol. Releveul din 2021 dă 75 × 205; foaia din A.17 are 72 × 196 (HL20). Se deschide spre bucătărie, cu balamalele spre corpul înalt (y 202)."
    },
    {
     "id": "M01-SI",
     "strat": "mobila",
     "tip": "plinta",
     "nume": "Soclul corpului înalt (latura)",
     "x": 203.2,
     "lat": 61.8,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU03 (8)",
     "nota": "Văzut în secțiune."
    },
    {
     "id": "M01-C1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul înalt — ușile de jos (latura)",
     "x": 203.2,
     "lat": 61.8,
     "h": 8,
     "inalt": 83.5,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.21 (y 203,2–265); A.22 BU03",
     "nota": "Latura de vest e la 4,3 cm de perete; golul se închide în față cu placa M01-PC."
    },
    {
     "id": "M01-C2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul înalt — ușile din mijloc (latura)",
     "x": 203.2,
     "lat": 61.8,
     "h": 91.5,
     "inalt": 111.7,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.21; A.22 BU03",
     "nota": "Văzut în secțiune."
    },
    {
     "id": "M01-C3",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul înalt — ușile de sus (latura)",
     "x": 203.2,
     "lat": 61.8,
     "h": 203.2,
     "inalt": 40,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.21; A.22 BU03",
     "nota": "Văzut în secțiune."
    },
    {
     "id": "M01-PT1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Plinta de sus a corpului înalt (latura)",
     "x": 203.2,
     "lat": 61.8,
     "h": 243.2,
     "inalt": 6.8,
     "stare": "proiect",
     "finisaj": "nuc",
     "sursa": "A.22 BU03 (6,8)",
     "nota": "Văzută în secțiune."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Ușa U1 deschisă la 90° stă de-a lungul lui y ≈ 198–202, iar fronturile corpului înalt sunt la y = 203,2: mânerul ușii lovește ușile frigiderului și frigiderul nu se poate deschide cât ușa e deschisă. În plus, pervazul spre bucătărie (până la y 205,7 în A.21) intră 2,5 cm peste placa de capăt a corpului înalt (y 203,2–205). Opritor de ușă la <90°, ușa cu balamalele pe cealaltă parte sau corpul mutat (BC2).",
     "sursa": "A.01, A.06 (sensul de deschidere); A.21; desene/data/hol.js (U4)",
     "ids": [
      "U1",
      "M01-C1",
      "M01-C2"
     ]
    },
    {
     "nivel": "info",
     "text": "Între panoul M01-LS (y 83) și pervazul ușii (y 118,3) rămân 35 cm de perete liber, iar sub ușă și lângă corpul înalt nu e nimic. A.09 nu definește plinta din bucătărie (BC7).",
     "sursa": "A.09; A.21",
     "ids": [
      "M01-LS",
      "U1"
     ]
    }
   ]
  }
 ],
 "tavan": {
  "id": "T",
  "tip": "tavan",
  "nume": "Tavanul",
  "subtitlu": "vedere de sus, ca în A.05 · fără tavan fals; grinzile GR1 și GR2, stâlpul ST1, ghena, spoturile F, canalul țevii de gaz",
  "lungime": 322,
  "adancime": 265,
  "origine": "colțul dintre peretele cu ușa spre hol (x = 0) și peretele cu chiuveta (y = 0)",
  "nota": "x de la fața peretelui cu ușa (vest), spre est, până la peretele exterior (322); h = y de la fața peretelui cu chiuveta (sud), spre nord (265). Între y = 0 și 131 bucătăria are doar 278 cm: la est e zona Z1. Placa la 250 cm (A.01), fără tavan fals (A.05). Fața de jos a grinzilor GR1 și GR2 la 205 (A.22).",
  "etapa": 1,
  "elemente": [
   {
    "id": "GH1",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Ghena din colțul S-V",
    "x": 0,
    "lat": 33.5,
    "h": 0,
    "inalt": 30,
    "stare": "proiect",
    "sursa": "A.01 (33,5); A.21 (30)",
    "nota": "Bloc de zidărie de 33,5 × 30 până la placă, cu un gol de ~23,5 × 20."
   },
   {
    "id": "GR1",
    "strat": "structura",
    "tip": "grinda",
    "nume": "Grinda GR1 (est–vest)",
    "x": 0,
    "lat": 259,
    "h": 58,
    "inalt": 25,
    "stare": "proiect",
    "sursa": "A.01 și A.05 (liniile întrerupte, y 58–83); A.21; A.22 BU02 (205)",
    "nota": "Grindă de 25 cm, fața de jos la 205, de la peretele cu ușa până la stâlpul ST1. Continuă în hol (GR1, cu 1,8 cm decalaj în A.01). Sub ea, până la y 83, placa M01-PO (203–205,6)."
   },
   {
    "id": "ST1",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Stâlpul ST1",
    "x": 259,
    "lat": 19,
    "h": 55,
    "inalt": 28,
    "stare": "proiect",
    "sursa": "A.01; A.21 (x 259–278, y 55–83)",
    "nota": "Iese 19 cm din peretele E2. Mascat de M01-MS."
   },
   {
    "id": "GR2",
    "strat": "structura",
    "tip": "grinda",
    "nume": "Grinda GR2 (nord–sud, deasupra ferestrei)",
    "x": 278,
    "lat": 44,
    "h": 131,
    "inalt": 134,
    "stare": "proiect",
    "sursa": "A.01 și A.05 (liniile întrerupte x 278–328); A.21 (axa la x 303); A.22 BU03 (205)",
    "nota": "50 cm lățime (x 278–328), 44 în bucătărie. Fața de jos la 205. Începe la y 125,6, pe peretele treptei, și continuă spre nord în dormitor."
   },
   {
    "id": "Z1",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Zona de la est de peretele E2 (nu ține de bucătărie)",
    "x": 278,
    "lat": 44,
    "h": 0,
    "inalt": 131,
    "stare": "proiect",
    "sursa": "A.01 și A.21 (pereți de 10 cm la x 278–288 și y 121–131; spațiu închis x 288–322, y 0–121)",
    "nota": "Peretele E2 (10 cm), un spațiu închis de ~34 × 121 fără etichetă și peretele de 10 cm spre treaptă. Ce e spațiul nu se știe (BC8)."
   },
   {
    "id": "M01-PO",
    "strat": "mobila",
    "tip": "tavan-fals",
    "nume": "Placa orizontală din PAL de deasupra corpurilor (nu e tavan fals din gips)",
    "x": 1.9,
    "lat": 276.1,
    "h": 0.2,
    "inalt": 82.8,
    "stare": "proiect",
    "finisaj": "nuc",
    "inFata": [
     "GR1",
     "GH1",
     "ST1"
    ],
    "sursa": "A.22 BU01, BU02; A.21 (panoul M01-LS până la y 83)",
    "nota": "La 203–205,6, de la peretele cu chiuveta până la fața de nord a grinzii GR1 (y 83); peste coloana de lângă stâlp până la y ≈ 90,5. În dreptul ghenei pornește de la fața ei (y 30). Desenată transparent, ca să se vadă grinda și ghena de deasupra."
   },
   {
    "id": "M01-PM",
    "strat": "mobila",
    "tip": "mobilier",
    "nume": "Placa de mascare a țevii de gaz",
    "x": 256.2,
    "lat": 1.8,
    "h": 91.3,
    "inalt": 132.3,
    "stare": "proiect",
    "sursa": "A.22 BU02 (130,5 + 1,8; 46,8)",
    "nota": "Verticală, de la 203,2 la placă, între y 91,3 și 223,6."
   },
   {
    "id": "T1",
    "strat": "sanitare",
    "tip": "teava",
    "nume": "Țeava de gaz în canalul de sub placă",
    "x": 262,
    "lat": 4,
    "h": 91.3,
    "inalt": 153.7,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "fluid": "gaz",
    "ascuns": true,
    "sursa": "A.22 BU02, BU03 («Traseu teava gaz»)",
    "nota": "În canalul x 258–278, la 205–250, până deasupra corpului M01-CE, unde coboară la centrală. Legătura cu masca M06 din hol nu e desenată (HL4, BC12)."
   },
   {
    "id": "M01-PT1",
    "strat": "mobila",
    "tip": "mobilier",
    "nume": "Corpul înalt și plinta lui (până la placă)",
    "x": 0,
    "lat": 126.1,
    "h": 203.2,
    "inalt": 61.8,
    "stare": "proiect",
    "finisaj": "nuc",
    "sursa": "A.21; A.22 BU03",
    "nota": "Corpul înalt ajunge la placă prin plinta de 6,8 cm."
   },
   {
    "id": "M01-PT2",
    "strat": "mobila",
    "tip": "mobilier",
    "nume": "Corpurile suspendate de deasupra banchetei și plinta lor",
    "x": 126.1,
    "lat": 130.1,
    "h": 223.6,
    "inalt": 41.4,
    "stare": "proiect",
    "finisaj": "bej",
    "sursa": "A.21; A.22 BU03",
    "nota": "Ajung la placă prin plinta de 6,8 cm."
   },
   {
    "id": "F1",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot aplicat F",
    "x": 74.9,
    "h": 133,
    "punct": true,
    "stare": "proiect",
    "sursa": "A.06 (F, cotat); specs/04 (aplicat alb 12 W 3000K CRI90)",
    "nota": "Aplicat pe placă (fără tavan fals). Clapa F din întrerupătorul I2 din hol. Cablul: vezi întrebarea BC9."
   },
   {
    "id": "F2",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot aplicat F",
    "x": 139.9,
    "h": 133,
    "punct": true,
    "stare": "proiect",
    "sursa": "A.06 (F, cotat); specs/04",
    "nota": "Ca F1, la 65 cm de el."
   },
   {
    "id": "F3",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot aplicat F",
    "x": 204.9,
    "h": 133,
    "punct": true,
    "stare": "proiect",
    "sursa": "A.06 (F, cotat); specs/04",
    "nota": "Ca F1, la 65 cm de F2."
   }
  ],
  "avertismente": [
   {
    "nivel": "atentie",
    "text": "Fără tavan fals, cablurile spoturilor F1–F3 n-au pe unde trece ascuns. Placa e de beton: șlițuri în placă doar cu acordul structuristului; altfel tuburile existente sau un traseu aparent (BC9).",
    "sursa": "A.05; A.06",
    "ids": [
     "F1",
     "F2",
     "F3"
    ]
   },
   {
    "nivel": "info",
    "text": "GR1 din bucătărie (y 58–83) și GR1 din hol (y 59,8–84,8 în acest plan) sunt aceeași grindă; A.01 le desenează cu 1,8 cm decalaj la jumătatea peretelui.",
    "sursa": "A.01; desene/data/hol.js",
    "ids": [
     "GR1"
    ]
   }
  ]
 }
};
