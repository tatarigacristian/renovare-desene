// Grup sanitar — sursa la zi pentru desenele din desene/gs.html. Format: JSON strict după „= ”.
// Câmpurile sunt descrise în desene/README.md.
window.CAMERE = window.CAMERE || {};
window.CAMERE["gs"] = {
 "id": "gs",
 "nume": "Grup sanitar",
 "referinte": {
  "orizontal": "x: de la fața zidăriei, în colțul din stânga (privind peretele din cameră). Cotele sunt cumulate de la acest colț: se măsoară cu ruleta de la colț, nu din aproape în aproape.",
  "vertical": "h: de la pardoseala finită. Dacă pardoseala nu e pusă încă, de la reperul de nivel trasat pe perete, cu diferența până la pardoseala finită."
 },
 "inaltime": {
  "valoare": 250,
  "stare": "proiect",
  "nota": "Fără tavan fals: placa la 250 cm (A.01: Hu 2,50 m în eticheta GS; A.05 nu hașurează GS-ul; A.25 desenează pereții de la pardoseală la placă)."
 },
 "revizie": {
  "nr": 3,
  "data": "2026-11-02",
  "modificari": [
   "Revizia 3: pașii de montaj animați pentru blatul lavoarului (M02-B), masca WC (WC) și circuitul cu buton cu revenire (PUSH: D1, CB-D1, CB-E1); banda E1 e în pașii blatului (02.11.2026).",
   "Revizia 2: vasul WC, clapeta și bateria sunt negre, iar lavoarul e desenat sub blatul placat cu faianță. Ușa (U1) are foaia de 60 cm, ca ușa cumpărată; deschisă, ajunge la ~51 cm de perete (02.11.2026).",
   "Prima versiune: cei 4 pereți și planul tavanului, din A.01, A.03–A.06, A.08, A.10 și A.24–A.26.",
   "Peretele cu WC-ul e într-o singură vedere, ca în A.25 (B06): treapta de 10 cm dintre mască și spalet e explicată în avertismente.",
   "Peretele cu ușa (B08) nu are vedere în A.25: faianța de pe el e propunerea noastră."
  ]
 },
 "plan": {
  "latime": 130,
  "adancime": 117,
  "nota": "x de la fața zidăriei peretelui cu ușa (vest; holul e la x = −20, fața lui de est la x = 144 în planul holului), y de la fața zidăriei peretelui lavoarului (sud; în dreptul treptei holului de la y = 140 în planul holului). Camera are 130 × 117 cm. Fața de nord se retrage la y = 140 între x = 80 și 130 (nișa lui M03). La est, masca WC are fața la x = 130 (y 42,1–140), cu zidăria în spate la x = 150; între y = 0 și 42 fața e spaletul de la x = 120, cu un gol în spatele lui (x 130–150, y 0–32)."
 },
 "pereti": [
  {
   "id": "N",
   "nume": "Peretele cu dulapul M03",
   "subtitlu": "faianță, ventilatorul, dulapul M03 în nișă · B07 în A.10 și A.25",
   "lungime": 130,
   "origine": "colțul N-V, cu peretele cu ușa (fața peretelui de nord, y = 117)",
   "etapa": 1,
   "plan": [
    [
     0,
     117
    ],
    [
     130,
     117
    ]
   ],
   "elemente": [
    {
     "id": "F2",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Faianță Sand Moon 60 × 60 pe peretele de nord",
     "x": 0,
     "lat": 80,
     "h": 0,
     "inalt": 250,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "pornire": {
      "x": 40,
      "h": 250
     },
     "finisaj": "sand-moon",
     "stare": "proiect",
     "sursa": "A.25 B07 (rost vertical la x 40 și rânduri la 250, 190, 130, 70, 10; «Punct pornire stereotomie» la x 40, sub placă; modul de 60 cm, măsurat); A.04 (rostul pardoselii la x 40); specs/07",
     "nota": "De la pardoseală la placă, între colțul N-V și dulapul M03 (80 cm). Stereotomia pornește din colțul de sus al plăcii de la x = 40 (A.25): rostul vertical e în dreptul rostului din pardoseală (A.04), iar pe lățime rămân două bucăți de ~40 cm. Rândurile se pun de sus în jos; cu rostul de 3 mm, jos rămâne o fâșie de ~9 cm. Ventilatorul S8 cade pe rostul vertical. Suprafața: 2,0 mp.",
     "adanc": 1,
     "adancAprox": true
    },
    {
     "id": "S8",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "ventilator",
     "nume": "Ventilatorul",
     "x": 35,
     "lat": 10,
     "h": 220,
     "inalt": 10,
     "stare": "proiect",
     "sursa": "A.25 B07 (35 de la colț, 20 sub placă, axa la 40 = punctul de pornire, cotat; conturul de ~10 × 10 măsurat); A.03 (40 de la peretele cu ușa, cotat); specs/08 A (nespecificat în achiziții)",
     "nota": "Axa la 40 cm de colțul N-V și la 225 cm de la pardoseală; conturul din A.25 are ~10 × 10 cm. Produsul nu e ales (specs/08, analiza/05 A13). În spatele feței, la ~10 cm, peretele are un gol de ~13 × 70 cm (A.01, A.24): probabil canalul de ventilație în care evacuează. Alimentarea și comanda lipsesc din A.06 (L8)."
    },
    {
     "id": "M03",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul M03, ușa de sus (50 × 130)",
     "x": 80,
     "lat": 50,
     "h": 120,
     "inalt": 130,
     "adanc": 23,
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 50
      }
     ],
     "stare": "proiect",
     "sursa": "A.25 B07 (50; 130 + 120, cotat); A.24 și A.08 (M03 în nișa de 23 cm, cotat); A.26 (randarea 2); specs/09 (M03)",
     "nota": "Dulap în nișa de 50 × 23 cm din peretele de nord; fața lui e în planul peretelui (y = 117). Sus are o ușă de 50 × 130 cm, de la 120 la placă, cu balamalele pe latura de vest (vârful semnului din A.25). Front Nuc (A.24 și specs/07: MDF Egger Nuc; legenda A.25: PAL H1775 ST12 Nuc Parona). Mânerul nu e desenat. Jos sunt rafturile deschise M03-R."
    },
    {
     "id": "M03-R",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Dulapul M03, rafturile deschise de jos",
     "x": 80,
     "lat": 50,
     "h": 0,
     "inalt": 120,
     "adanc": 23,
     "finisaj": "nuc",
     "stare": "proiect",
     "sursa": "A.25 B07 (120, cotat; rafturile măsurate); A.26 (randarea 2)",
     "nota": "Fără front. Soclu de ~5 cm, rafturi la ~5–7, ~43–45 și ~82–84 cm, capacul la 118–120 (măsurat pe A.25). Interiorul din Nuc (A.26)."
    }
   ],
   "avertismente": [
    {
     "nivel": "info",
     "text": "Fața peretelui de nord e la y = 117 pe primii 80 cm; între 80 și 130 zidul e cu 23 cm mai în spate (y = 140), iar nișa e ocupată de M03, cu fața în planul peretelui. În zid, la 10 cm în spatele feței, e un gol de ~13 cm pe primii 70 cm (A.01, A.24): de verificat dacă e canalul de ventilație al blocului, în care evacuează ventilatorul S8 (analiza/07, întrebarea 11).",
     "sursa": "A.01, A.24, A.25 B07 (vectori, 02.11.2026)",
     "ids": [
      "M03",
      "S8"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Poza din stare_actuala/baie 2 arată în oglindă un port-prosop (calorifer) cu robineți, deasupra mașinii de spălat, în partea de nord a GS-ului; specs/08 B scrie că GS-ul nu are calorifer nici acum, iar specs/08 F vorbește de un port-prosop în GS. Decizia din 18.10.2026 e GS fără calorifer, iar mașina de spălat se mută în hol: țevile caloriferului și racordurile mașinii se scot sau se închid înainte de faianță și de M03.",
     "sursa": "stare_actuala/baie 2/3a2e035c-9b5c-4c15-8237-cda0c72a066c.jpg; specs/08 A, B și F; analiza/08 D8",
     "ids": [
      "M03",
      "F2"
     ]
    }
   ]
  },
  {
   "id": "E",
   "nume": "Peretele cu WC-ul",
   "subtitlu": "masca WC cu profil ORAC, dulapul de deasupra, dușul igienic, ușa de vizitare a apometrului · B06 în A.10 și A.25",
   "lungime": 140,
   "origine": "colțul N-E, în nișa lui M03: fața de nord la y = 140, masca WC la x = 130",
   "etapa": 1,
   "plan": [
    [
     130,
     140
    ],
    [
     130,
     0
    ]
   ],
   "elemente": [
    {
     "id": "M03",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Dulapul M03, văzut din lateral",
     "x": 0,
     "lat": 23,
     "h": 0,
     "inalt": 250,
     "finisaj": "nuc",
     "inFata": [
      "MWC"
     ],
     "stare": "proiect",
     "sursa": "A.25 B06 (23; 130 + 120); A.24, A.08",
     "nota": "Latura dulapului din nișa peretelui de nord, lipită de masca WC. Detaliile sunt pe peretele de nord.",
     "adanc": 50,
     "vedereaPrincipala": "N"
    },
    {
     "id": "MWC",
     "strat": "gips",
     "tip": "masca",
     "nume": "Masca WC (gips-carton RU)",
     "x": 0,
     "lat": 97.9,
     "h": 0,
     "inalt": 120,
     "adanc": 20,
     "stare": "proiect",
     "sursa": "A.01 («Mască WC încastrat»); A.24 și A.08 (20 și 97,9, cotat); A.25 B06 (120, cotat) și B05, B07 (secțiunea); specs/07 F (RU în GS)",
     "nota": "Masca din fața cadrului încastrat: 20 cm adâncime (de la zidăria de la x = 150 până la fața de la x = 130), 97,9 cm lungime (de la y = 42,1 până la peretele de nord din nișă) și 120 cm înălțime, cu capac la 118–120. Gips-carton RU. În ea stau cadrul S2, țevile WC-ului și ale dușului igienic. Pe față se lipește profilul ORAC (OR1); latura de nord e acoperită de M03.",
     "detaliu": "WC"
    },
    {
     "id": "DWC",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul de deasupra măștii WC (2 uși placate cu profil ORAC)",
     "x": 23,
     "lat": 74.4,
     "h": 120,
     "inalt": 130,
     "adanc": 20,
     "finisaj": "p722",
     "fronturi": [
      {
       "lat": 37
      },
      {
       "lat": 37.4
      }
     ],
     "stare": "de-verificat",
     "sursa": "A.25 B06 (două uși peste mască, 130, cotat; linia dintre uși la ~60 cm de colț, măsurat); A.25 B05 și B07 (secțiunea: ușa de ~2 cm, rafturile); A.26 (randările 1 și 2)",
     "nota": "Dulap de la 120 cm până la placă, pe lățimea profilului ORAC, adânc de 20 cm (până la zidărie; ~17 cm interior). Două uși de ~37 cm, placate cu profilul ORAC (OR2), ca masca. Înăuntru, rafturi la ~152–154, ~189–190 și ~221–222 cm (A.25 B05). Planșele nu-i dau cod și nu e în specs/09."
    },
    {
     "id": "OR1",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Profil ORAC W109 VALLEY pe masca WC",
     "x": 23,
     "lat": 74.4,
     "h": 0,
     "inalt": 120,
     "adanc": 1.2,
     "lamela": 2.6,
     "rost": 0.5,
     "finisaj": "p722",
     "inFata": [
      "MWC"
     ],
     "stare": "proiect",
     "sursa": "A.25 B06 (zona verde, 120, cotat; lățimea ~74,4 măsurată = 3 panouri de 24,9 cm); A.25 (detaliul profilului: 249 × 11,8 mm, pas 31,25 mm; culoarea P722 Alloro); specs/07 C și D",
     "nota": "Profil decorativ ORAC W109 VALLEY (panou de 249 mm, gros de 11,8 mm, caneluri verticale la 31,25 mm), vopsit San Marco P722 Alloro, lipit pe masca WC de la pardoseală până la capacul măștii. Pe lățime intră 3 panouri (74,7 cm), de la latura lui M03 până la capătul măștii. Prin profil se fac decupajele pentru clapeta S3 și bateria S6, după montarea cadrului."
    },
    {
     "id": "OR2",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Profil ORAC W109 VALLEY pe ușile dulapului DWC",
     "x": 23,
     "lat": 74.4,
     "h": 120,
     "inalt": 130,
     "adanc": 1.2,
     "lamela": 2.6,
     "rost": 0.5,
     "finisaj": "p722",
     "inFata": [
      "DWC"
     ],
     "stare": "proiect",
     "sursa": "A.25 B06 (zona verde, 130, cotat); A.26 (randările)",
     "nota": "Ca OR1, pe cele două uși ale dulapului DWC, de la 120 cm până la placă. Rostul dintre uși (~60 cm de colț) trebuie să cadă între două caneluri."
    },
    {
     "id": "S2",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "rezervor",
     "nume": "Cadrul încastrat Laufen INEO NOVA (în mască)",
     "x": 35.5,
     "lat": 45,
     "h": 0,
     "inalt": 112,
     "ascuns": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "specs/04 și specs/08 A (Laufen INEO NOVA OS39217, 112 × 45 × 13 cm); A.03 (axa WC, cotat); A.25 B06 (masca de 120)",
     "nota": "Centrat pe axa WC (58 cm de colțul N-E). Cu 13 cm adâncime încape în masca de 20 cm. Înălțimea de montaj și racordurile se iau din fișa cadrului.",
     "adanc": 13,
     "detaliu": "WC"
    },
    {
     "id": "S1",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "wc",
     "nume": "Vasul WC suspendat NOVELA BM, negru",
     "x": 40.8,
     "lat": 34.2,
     "h": 12,
     "inalt": 33,
     "pozitie": "aprox",
     "stare": "proiect",
     "sursa": "A.03 (axa la 35 cm de fața de nord din zona ușii și la 40 cm de capătul măștii, cotat); A.25 B06 (45, cotat; conturul măsurat); specs/04 (NOVELA BM, capac soft-close)",
     "nota": "Axa la 58 cm de colțul N-E, adică 82 cm de peretele lavoarului (A.03: 35 cm de la fața peretelui de nord din zona ușii, y = 117). Marginea de sus la 45 cm (A.25). Vasul iese ~50 cm din mască (A.03).",
     "adanc": 50,
     "adancAprox": true,
     "finisaj": "negru",
     "detaliu": "WC"
    },
    {
     "id": "S3",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "clapeta",
     "nume": "Clapeta Laufen PL NV1, negru mat",
     "x": 45.6,
     "lat": 24.6,
     "h": 98.6,
     "inalt": 16.4,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.25 B06 (45 + 70 = 115 până la marginea de sus, cotat; conturul măsurat); specs/04 (Laufen PL NV1 negru mat, OS39220)",
     "nota": "Marginea de sus la 115 cm, pe axa WC. Conturul desenat (~24,6 × 16,4 cm) e blocul din planșă; dimensiunile reale și înălțimea se iau din fișa clapetei și a cadrului (compatibilitatea PL NV1 – INEO NOVA se confirmă la comandă, specs/04).",
     "finisaj": "negru",
     "detaliu": "WC"
    },
    {
     "id": "S6",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "baterie",
     "nume": "Bateria dușului igienic (Kludi Bozz)",
     "x": 81.5,
     "lat": 13,
     "h": 30,
     "inalt": 10,
     "pozitie": "aprox",
     "stare": "proiect",
     "sursa": "A.03 (axa la 30 cm de axa WC, cotat); A.25 B06 (35, cotat; conturul măsurat); specs/04 (pachet duș igienic Kludi Bozz)",
     "nota": "Pe mască, cu axa la 30 cm de axa WC spre sud (88 cm de colțul N-E, 52 cm de peretele lavoarului) și la 35 cm înălțime. A.25 o desenează aparentă, cu două racorduri (R3, R4) și cu furtunul în jos."
    },
    {
     "id": "S7",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "para-dus",
     "nume": "Para dușului igienic, cu agățătoarea",
     "x": 85.3,
     "lat": 4.9,
     "h": 67,
     "inalt": 15,
     "pozitie": "aprox",
     "stare": "proiect",
     "sursa": "A.25 B06 (35 + 35 = 70, cotat; agățătoarea și para măsurate)",
     "nota": "Agățătoarea la 70 cm, pe axa bateriei; para atârnă până la ~82 cm."
    },
    {
     "id": "R1",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Scurgerea WC, Ø 110 (în cadru)",
     "x": 58,
     "h": 23,
     "punct": true,
     "fluid": "scurgere",
     "diam": 11,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.03 (axa WC, cotat); fișa cadrului Laufen INEO NOVA (înălțimea)",
     "nota": "Pe axa WC. Înălțimea de ~23 cm e valoarea obișnuită la cadrele de 112 cm: se ia din fișa cadrului. Panta până la coloană min. 2% (specs/08 F); poziția coloanei se verifică întâi (analiza/07, întrebarea 7)."
    },
    {
     "id": "R2",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa rece pentru rezervor (în cadru)",
     "punct": true,
     "fluid": "rece",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "fișa cadrului Laufen INEO NOVA; specs/08 A",
     "nota": "Racordul e în partea de sus a cadrului, după fișă. Țeava urcă prin mască. Robinetul de serviciu se ajunge prin deschiderea clapetei."
    },
    {
     "id": "R3",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa caldă pentru dușul igienic",
     "x": 83,
     "h": 35,
     "punct": true,
     "fluid": "calda",
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.25 B06 (35, cotat; racordul din stânga al bateriei, măsurat); A.03 (axa)",
     "nota": "La stânga axei bateriei S6, privind peretele. Distanța dintre racorduri depinde de modelul Kludi Bozz: A.25 desenează ~10 cm, la bateriile aparente e de obicei 15 cm."
    },
    {
     "id": "R4",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa rece pentru dușul igienic",
     "x": 93,
     "h": 35,
     "punct": true,
     "fluid": "rece",
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.25 B06 (35, cotat; racordul din dreapta al bateriei, măsurat); A.03 (axa)",
     "nota": "La dreapta axei bateriei S6. Vezi R3."
    },
    {
     "id": "PL1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Placarea Nuc a spaletului din colțul S-E, deasupra blatului",
     "x": 98,
     "lat": 42,
     "h": 85,
     "inalt": 165,
     "finisaj": "nuc",
     "stare": "de-verificat",
     "sursa": "A.25 B06 și B05 (aceeași culoare ca M03, de la pardoseală la placă, măsurat); A.26 (randările 1 și 2: lemn pe ambele fețe ale spaletului); A.24, A.01 (spaletul)",
     "nota": "Fața spaletului de zidărie (x = 120, 42 cm lățime) e placată în culoarea Nuc de la pardoseală până la placă; latura lui de nord (10 cm, la y = 42) la fel (A.25 B05). Între 35 și 85 cm placarea e acoperită de capătul blatului și de compartimentul deschis al lui M02 (rămâne vizibilă doar o fâșie de ~2 cm lângă masca WC). Partea de sub mobilier, cu ușa de vizitare, e PL2. Materialul nu e scris în planșe."
    },
    {
     "id": "PL2",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Placarea Nuc a spaletului, sub mobilierul lavoarului",
     "x": 98,
     "lat": 42,
     "h": 0,
     "inalt": 35,
     "finisaj": "nuc",
     "stare": "de-verificat",
     "sursa": "A.25 B06 (35, cotat; culoarea măsurată)",
     "nota": "Continuarea lui PL1 sub fundul lui M02 (35 cm). În ea e ușa de vizitare S9."
    },
    {
     "id": "S9",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "apometru",
     "nume": "Ușa de vizitare a apometrului (30 × 30)",
     "x": 101.7,
     "lat": 30,
     "h": 2,
     "inalt": 30,
     "pozitie": "aprox",
     "stare": "proiect",
     "sursa": "A.25 B06 («Ușă de vizitare apometru», 30 × 30, cotat; poziția măsurată); specs/08 A; specs/10",
     "nota": "În placarea PL2 a spaletului, sub mobilierul lavoarului, în spațiul liber de 35 cm de sub M02. Prin ea se ajunge în golul din colțul S-E (~20 × 32 cm, A.01, A.24), unde sunt probabil coloanele de apă și apometrul. Ușa se pune în dreptul apometrului, după ce i se verifică poziția (analiza/07, întrebarea 10)."
    },
    {
     "id": "M02-B",
     "strat": "gips",
     "tip": "mobilier",
     "nume": "Blatul lavoarului, văzut din capăt",
     "x": 100,
     "lat": 40,
     "h": 73,
     "inalt": 12,
     "finisaj": "sand-moon",
     "stare": "proiect",
     "sursa": "A.24 (40, 12, 85, cotat); A.25 B06 și B05",
     "nota": "Capătul de est al blatului, lipit de spalet. Detaliile sunt pe peretele lavoarului.",
     "adanc": 118.1,
     "vedereaPrincipala": "S",
     "detaliu": "M02-B"
    },
    {
     "id": "M02-D",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Compartimentul deschis al lui M02, văzut din lateral",
     "x": 100,
     "lat": 40,
     "h": 35,
     "inalt": 38,
     "finisaj": "nuc",
     "stare": "proiect",
     "sursa": "A.25 B06 (35, 50, 85, cotat) și B05",
     "nota": "Latura compartimentului deschis de 35 cm, lipită de spalet. Detaliile sunt pe peretele lavoarului.",
     "adanc": 35,
     "vedereaPrincipala": "S"
    }
   ],
   "avertismente": [
    {
     "nivel": "info",
     "text": "Fața peretelui are o treaptă de 10 cm la 97,9 cm de colț: masca WC (x = 130) se termină la y = 42,1, iar spaletul din colțul S-E are fața la x = 120 (A.24 și A.08: 85 + 35 + 10). Peretele e desenat într-o singură vedere, ca în A.25 (B06). Latura de nord a spaletului (10 cm) e placată ca fața lui și nu apare în nicio vedere.",
     "sursa": "A.24, A.08, A.25 B06",
     "ids": [
      "MWC",
      "PL1"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Între marginea cadrului S2 (80,5 cm de colț) și axa bateriei dușului igienic S6 (88 cm) rămân ~7 cm. Robinetul, cele două țevi și, dacă bateria e încastrată, corpul ei trebuie să încapă în mască lângă latura de sud a cadrului sau în cei ~5–7 cm din fața lui (20 cm mască − 13 cm cadru − placa). De ales modelul Kludi Bozz (aparent sau încastrat) înainte de montajul cadrului.",
     "sursa": "A.03, A.25 B06; specs/04, specs/08 A",
     "ids": [
      "S2",
      "S6"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Dulapul DWC (de la 120 la placă, deasupra măștii) nu are cod în planșe și nu e în specs/09, în antemăsurători sau în buget. Ușile lui sunt placate cu profil ORAC. De stabilit cine îl face (tâmplarul sau constructorul), cum se prind ușile și profilul și dacă e dulap sau doar o placare fixă.",
     "sursa": "A.25 B05, B06, B07; A.26; specs/09",
     "ids": [
      "DWC",
      "OR2"
     ]
    },
    {
     "nivel": "info",
     "text": "Profilul ORAC W109 VALLEY nu e în lista de achiziții (analiza/05 A16). Suprafața: ~0,9 mp pe mască (OR1), ~1,0 mp pe ușile DWC (OR2) și ~0,6 mp pe peretele lavoarului (OR3), în total ~2,5 mp, fără pierderi. Lungimea panourilor se verifică la furnizor. Culoarea: San Marco P722 Alloro.",
     "sursa": "A.25; specs/07 C; analiza/05 A16",
     "ids": [
      "OR1",
      "OR2"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Placarea spaletului (PL1, PL2) e desenată în culoarea Nuc, de la pardoseală la placă, lângă lavoar (zona cu stropi). Planșele nu spun materialul: PAL, MDF sau altceva rezistent la umezeală. Ușa de vizitare S9 se face din același material, demontabilă.",
     "sursa": "A.25 B05 și B06; A.26",
     "ids": [
      "PL1",
      "PL2",
      "S9"
     ]
    }
   ]
  },
  {
   "id": "S",
   "nume": "Peretele cu lavoarul",
   "subtitlu": "blatul pe profil UW, lavoarul sub blat, sertarul M02, oglinda cu banda E1, profilul ORAC · B05 în A.10 și A.25",
   "lungime": 120,
   "origine": "colțul S-E: fața spaletului de zidărie (x = 120 în planul GS)",
   "etapa": 1,
   "plan": [
    [
     120,
     0
    ],
    [
     0,
     0
    ]
   ],
   "elemente": [
    {
     "id": "M02-B",
     "strat": "gips",
     "tip": "mobilier",
     "nume": "Blatul lavoarului (profil UW 100 × 40, gips-carton RU, faianță)",
     "x": 0,
     "lat": 118.1,
     "h": 73,
     "inalt": 12,
     "adanc": 40,
     "finisaj": "sand-moon",
     "stare": "proiect",
     "sursa": "A.24 (secțiunea blatului: 8 + 24 + 8 = 40, grosime 12, la 85; profil UW 100 × 40, 2 corniere, placă dublă RU, faianță; nota de ordine); A.25 B05 (120, 12, 85, cotat); A.08 (120 × 40); specs/07 D",
     "nota": "Blat construit din profil de oțel zincat UW 100 × 40 mm, cu 2 corniere pe care stă lavoarul, închis cu placă dublă de gips-carton RU și placat cu faianță sus și pe față. 120 × 40 cm între spalet și peretele cu ușa, gros de 12 cm, fața de sus la 85 cm. Pe față începe la ~1,9 cm de peretele cu ușa (A.25), cât grosimea pervazului. Decupajul lavoarului: 24 cm pe adâncime, la 8 cm de perete și 8 cm de muchie (A.24); pe lungime, după fișa lavoarului. Se face înaintea peretelui-suport PS1 (nota din A.24).",
     "detaliu": "M02-B"
    },
    {
     "id": "M02-S",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Sertarul lavoarului (M02), 85 × 38",
     "x": 35,
     "lat": 83.1,
     "h": 35,
     "inalt": 38,
     "adanc": 38,
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 83.1
      }
     ],
     "stare": "proiect",
     "sursa": "A.25 B05 (85 «sertar», 38, 35, cotat); A.24 (sertar, front MDF Egger Nuc); A.24 și A.08 (M02); specs/07 D, specs/09",
     "nota": "Sertar sub blat, de la 35 la 73 cm, pe 85 cm de la peretele cu ușa (frontul începe la ~1,9 cm de perete). Front Nuc. Mânerul nu e desenat. Lavoarul S4 și sifonul coboară în sertar."
    },
    {
     "id": "M02-D",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Compartimentul deschis al lui M02 (35 cm)",
     "x": 0,
     "lat": 35,
     "h": 35,
     "inalt": 38,
     "adanc": 38,
     "finisaj": "nuc",
     "stare": "proiect",
     "sursa": "A.25 B05 (35 «deschis», 38, cotat)",
     "nota": "Fără front, interior Nuc, între sertar și spalet. Sub el (0–35) e spațiul liber prin care se ajunge la ușa de vizitare S9."
    },
    {
     "id": "F3",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Faianță Sand Moon sub mobilierul lavoarului",
     "x": 0,
     "lat": 120,
     "h": 0,
     "inalt": 35,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "pornire": {
      "x": 59.3,
      "h": 8.8
     },
     "finisaj": "sand-moon",
     "stare": "de-verificat",
     "sursa": "A.25 B05 (zona de sub M02, 35, cotat; rost vertical la ~60,7 cm de peretele cu ușa, măsurat); A.01 (W: faianță)",
     "nota": "Între pardoseală și fundul lui M02 (35 cm), pe toată lungimea. A.25 pune un rost vertical în axa lavoarului (la ~60,7 cm de peretele cu ușa), la fel ca pe fața blatului; rândul de jos e ca pe peretele de nord (rost la ~9 cm). În spatele sertarului și al compartimentului deschis (35–73) planșele nu arată faianța. Suprafața: ~0,4 mp.",
     "adanc": 1,
     "adancAprox": true
    },
    {
     "id": "PS1",
     "strat": "gips",
     "tip": "masca",
     "nume": "Peretele-suport al oglinzii (placă dublă de gips-carton RU)",
     "x": 35,
     "lat": 85,
     "h": 85,
     "inalt": 165,
     "adanc": 2.5,
     "stare": "proiect",
     "sursa": "A.24 (detaliile: placă dublă gips-carton RU; nota: întâi blatul, apoi peretele-suport); A.01 («Mască oglindă nișă LED»); A.25 B05 (85 × 165, cotat)",
     "nota": "Placare din două plăci de gips-carton RU pe peretele de sud, de pe blat până la placă, pe lățimea oglinzii (85 cm de la peretele cu ușa), ~2,5 cm grosime. Stă pe blat, deci se face după el. Pe ea se lipește oglinda OG1. Pe după ea poate trece cablul benzii E1.",
     "detaliu": "M02-B"
    },
    {
     "id": "OG1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Oglinda, 85 × 165",
     "finisaj": "oglinda",
     "x": 35,
     "lat": 85,
     "h": 85,
     "inalt": 165,
     "adanc": 0.5,
     "inFata": [
      "PS1"
     ],
     "stare": "proiect",
     "sursa": "A.25 B05 (85 × 165, cotat); A.24 (detaliul plan LED oglindă); A.26",
     "nota": "De pe blat (85) până la placă (250), de la peretele cu ușa până la banda E1. Lipită pe PS1; fața ei e cu ~1,5 cm în fața planului faianței (A.24). Nu e în specs/04: de pus pe lista de comenzi.",
     "detaliu": "M02-B"
    },
    {
     "id": "E1",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Banda LED E1, verticală, la oglindă",
     "x": 34,
     "lat": 1.2,
     "h": 85,
     "inalt": 165,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 (E, «LED perete – vertical», la ~87 cm de peretele cu ușa, necotat); A.24 (detaliul plan LED oglindă: profil slim cu difuzor, max. 12 mm); A.26 (de pe blat până la placă); specs/04 (29.10.2026: 24 V 3000K CRI90, IP65, profil slim 10,7 × 8,8 mm; o sursă Push-DIM cu D1)",
     "nota": "Bandă 24 V 3000K CRI90, IP65, în profil slim cu difuzor (max. 12 mm), pe latura de est a oglinzii, între oglindă și profilul ORAC. Lungimea nu e cotată: pe înălțimea oglinzii, ~165 cm (L2). Sursa e D8, în tavanul fals din hol, comună cu D1; butonul e DE (I3 din hol).",
     "detaliu": "M02-B"
    },
    {
     "id": "CB-E1",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Capătul cablului de 24 V pentru banda E1",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.06 (marcajul E la ~99 cm de peretele cu ușa, în dreptul profilului ORAC)",
     "nota": "A.06 nu arată la care capăt al benzii (sus, la placă, sau jos, la blat) ajunge cablul. Propunerea noastră: cablul vine din colțul S-V, pe după peretele-suport PS1, până la capătul de sus. Se hotărăște înainte de PS1.",
     "detaliu": "PUSH"
    },
    {
     "id": "OR3",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Profil ORAC W109 VALLEY lângă oglindă",
     "x": 0,
     "lat": 35,
     "h": 85,
     "inalt": 165,
     "adanc": 1.2,
     "lamela": 2.6,
     "rost": 0.5,
     "finisaj": "p722",
     "stare": "de-verificat",
     "sursa": "A.25 B05 (zona verde, 35 × 165, cotat prin 85 și 165); A.26 (randarea 1); detaliul plan LED oglindă din A.24 («placă faianță»)",
     "nota": "Pe peretele de sud, între banda E1 și spalet, de pe blat până la placă: un panou de 24,9 cm și o bucată de ~10 cm. A.24 pune aici faianță."
    },
    {
     "id": "S4",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "lavoar",
     "nume": "Lavoarul Omnires Shell M+ (sub blat)",
     "x": 38.9,
     "lat": 40.3,
     "h": 68.4,
     "inalt": 14.1,
     "ascuns": true,
     "pozitie": "aprox",
     "stare": "proiect",
     "sursa": "A.03 (axa la 61 cm de peretele cu ușa, cotat); A.24 (38 × 25, axa la 20 cm de perete; fișa: 403 × 281 mm, adânc de 141 mm); specs/04 (SHELL380UPBLV, negru)",
     "nota": "Lavoar oval, negru, 38 × 25 cm la interior, montat sub blat pe cele 2 corniere. Axa la 61 cm de peretele cu ușa (59 cm de colțul S-E) și la 20 cm de perete. Corpul coboară ~14 cm sub fața de sus a placajului, deci ~4–5 cm sub blat, în sertar; scurgerea are Ø 44 mm. Pe desen e cu linie întreruptă: stă sub blatul placat cu faianță, în spatele feței lui.",
     "adanc": 28.1,
     "finisaj": "negru",
     "detaliu": "M02-B"
    },
    {
     "id": "S5",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "baterie",
     "nume": "Bateria lavoarului Cersanit Zen, stativă, pe blat",
     "x": 33,
     "lat": 4,
     "h": 85,
     "inalt": 16,
     "pozitie": "aprox",
     "stare": "proiect",
     "sursa": "A.03 (35 cm de spalet, 20 cm de perete, cotat); specs/04 (Cersanit Zen stativ negru S951-595)",
     "nota": "Pe blat, la stânga lavoarului privind spre perete: 85 cm de peretele cu ușa, 20 cm de perete, chiar în dreptul benzii E1. Înălțimea desenată e orientativă. Furtunurile coboară prin blat, în compartimentul deschis M02-D.",
     "finisaj": "negru",
     "detaliu": "M02-B"
    },
    {
     "id": "R5",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Scurgerea lavoarului (Ø 40)",
     "x": 59,
     "h": 55,
     "punct": true,
     "fluid": "scurgere",
     "diam": 4,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "propunerea noastră (02.11.2026); A.03 (axa lavoarului); A.24 (fișa lavoarului)",
     "nota": "Planșele nu desenează racordurile lavoarului. Pe axa lavoarului, în spatele sertarului: sertarul se face în U sau se pune sifon plat. Înălțimea se stabilește cu tâmplarul și instalatorul."
    },
    {
     "id": "R6",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa caldă pentru lavoar (robinet de colț)",
     "x": 15,
     "h": 55,
     "punct": true,
     "fluid": "calda",
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "propunerea noastră (02.11.2026); A.03 (bateria la 35 cm de spalet)",
     "nota": "Robinetul de colț în compartimentul deschis M02-D, sub baterie: se ajunge la el fără să se scoată sertarul."
    },
    {
     "id": "R7",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa rece pentru lavoar (robinet de colț)",
     "x": 25,
     "h": 55,
     "punct": true,
     "fluid": "rece",
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "propunerea noastră (02.11.2026); A.03 (bateria la 35 cm de spalet)",
     "nota": "Ca R6."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Ordinea din A.24: întâi blatul M02-B (constructorul, în faza de gips-carton), apoi peretele-suport PS1, apoi faianța, oglinda și banda E1. Înainte de blat se pozează țevile lavoarului și cablul benzii E1, iar lavoarul S4 se așază pe corniere când se face blatul.",
     "sursa": "A.24 (observația); specs/07 D; analiza/01 pasul 4.4",
     "ids": [
      "M02-B",
      "PS1",
      "S4"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Lavoarul coboară ~4–5 cm sub blat (141 mm cu placajul de deasupra), iar sifonul și scurgerea lui sunt în sertarul M02-S (35–73). Planșele nu arată cum: sertar în U, sertar mai scurt sau sifon plat. De stabilit cu tâmplarul și instalatorul înainte de comanda lui M02.",
     "sursa": "A.24 (fișa lavoarului, secțiunea blatului); A.25 B05",
     "ids": [
      "S4",
      "M02-S",
      "R5"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Racordurile lavoarului nu sunt în planșe. R5, R6 și R7 sunt propunerea noastră: scurgerea pe axa lavoarului, apa caldă și rece în compartimentul deschis, la îndemână. Se confirmă cu instalatorul.",
     "sursa": "propunerea noastră (02.11.2026)",
     "ids": [
      "R5",
      "R6",
      "R7"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Lângă oglindă, între banda E1 și spalet, A.25 (B05) și randarea A.26 pun profil ORAC verde, iar detaliul plan LED oglindă din A.24 pune «placă faianță». Desenul urmează A.25. De confirmat.",
     "sursa": "A.24, A.25 B05, A.26",
     "ids": [
      "OR3",
      "E1"
     ]
    },
    {
     "nivel": "info",
     "text": "Frontul sertarului și ușa lui M03: A.24 și regulile GS din specs/07 D scriu MDF Egger Nuc; legenda A.25 și tabelul din specs/07 D scriu PAL H1775 ST12 Nuc Parona. Decorul e același; materialul (MDF sau PAL) se confirmă la comandă.",
     "sursa": "A.24, A.25; specs/07 D",
     "ids": [
      "M02-S"
     ]
    },
    {
     "nivel": "info",
     "text": "Rostul vertical de pe fața blatului și de sub blat e în axa lavoarului (~60,7 cm de peretele cu ușa, A.25), nu în dreptul rosturilor din pardoseală (40 și 100 cm, A.04). Pe peretele de nord rostul e aliniat cu pardoseala.",
     "sursa": "A.04, A.25 B05 și B07",
     "ids": [
      "F3",
      "M02-B"
     ]
    }
   ]
  },
  {
   "id": "V",
   "nume": "Peretele cu ușa",
   "subtitlu": "ușa din hol (U5 în hol), priza P1, faianță · B08 în A.10, nedesenat în A.25",
   "lungime": 117,
   "origine": "colțul S-V, cu peretele lavoarului (x = 0, y = 0 în planul GS)",
   "etapa": 1,
   "plan": [
    [
     0,
     0
    ],
    [
     0,
     117
    ]
   ],
   "elemente": [
    {
     "id": "U1",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa din hol (U5 în hol), cu tocul și pervazul",
     "x": 36.3,
     "lat": 79.4,
     "h": 0,
     "inalt": 203.7,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.24 (golul 40–112 de la peretele lavoarului, tocul 4 cm, foaia 64, pervazul 3,7 cm de fiecare parte; măsurat la 1:10); A.25 B07 și B05 (golul până la 200, pervazul până la 203,7); A.01, A.06; hol.js U5; foaia de 60: ușile cumpărate (02.11.2026)",
     "nota": "Aceeași ușă cu U5 din hol. Golul din zidărie: 72 cm (40–112 de la colțul S-V), 200 cm înălțime. Tocul de 4 cm e în gol, foaia are 60 × ~196 cm. Se deschide spre GS, cu balamalele pe latura de nord (la 108 cm de colț); deschisă, foaia stă paralel cu peretele de nord, la ~9 cm de el, și ajunge la ~51 cm de acest perete. Pervazul are 3,7 cm de fiecare parte a golului și ~1,9 cm grosime. Foaia are 60 cm: ușile cumpărate pentru băi (02.11.2026). Cu tocul de 4 cm pe fiecare parte, ușa are ~68 cm la exterior; golul de ~72 din planșe lasă ~2 cm pe fiecare parte pentru montaj. Releveul din 2021 dă 65: dacă golul real e de 65, ușa nu încape și golul trebuie lărgit cu ~3–5 cm. Se măsoară golul înainte de montaj.",
     "foaie": {
      "lat": 60,
      "inalt": 196
     }
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză simplă cu protecție",
     "x": 20,
     "h": 30,
     "punct": true,
     "stare": "de-verificat",
     "sursa": "A.06 (20 cm de la marginea golului ușii spre sud, cotat; «h=30» scris între priza din hol și aceasta); specs/06 A poz. 5 (priză simplă cu protecție: Baie, GS)",
     "nota": "La 20 cm de colțul S-V (A.06 cotează 20 cm de la marginea golului ușii), sub capătul blatului: la h 30 e la 5 cm sub fundul lui M02 (35). Priză cu capac (IP44). Pe fața dinspre hol a aceluiași perete, la 5 cm spre sud, e priza P2 din hol, tot la h 30."
    },
    {
     "id": "F1",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Faianță Sand Moon 60 × 60 pe peretele cu ușa",
     "x": 0,
     "lat": 117,
     "h": 0,
     "inalt": 250,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "pornire": {
      "x": 70.9,
      "h": 250
     },
     "goluri": [
      {
       "x": 36.3,
       "lat": 79.4,
       "h": 0,
       "inalt": 203.7
      }
     ],
     "finisaj": "sand-moon",
     "stare": "propunere",
     "sursa": "A.01 (eticheta GS: «W: Faianță»); A.26 (randarea 1: faianță pe acest perete); A.04 (rosturile pardoselii la y ≈ 10,9 și 70,9, modul de 60 cm); A.25 B07 (rândurile pornesc de la placă); specs/07",
     "nota": "Pe tot peretele, de la pardoseală la placă, mai puțin golul ușii cu pervazul. A.25 nu are vederea acestui perete (B08), deci împărțirea e propunerea noastră: rosturile verticale în dreptul rosturilor din pardoseală (x ≈ 10,9 și 70,9 de la colțul S-V, A.04) și rândurile de sus în jos, ca pe peretele de nord. Peste ușă rămâne o fâșie de ~46 cm. Blatul și sertarul lavoarului încep la ~1,9 cm de acest perete (A.25 B05), deci faianța trece în spatele lor. Suprafața: ~1,3 mp.",
     "adanc": 1,
     "adancAprox": true
    },
    {
     "id": "M02-B",
     "strat": "gips",
     "tip": "mobilier",
     "nume": "Blatul lavoarului, văzut din capăt",
     "x": 0,
     "lat": 40,
     "h": 73,
     "inalt": 12,
     "finisaj": "sand-moon",
     "stare": "proiect",
     "sursa": "A.24 (40, 12, 85, cotat); A.25 B05 (blatul începe la ~1,9 cm de acest perete, măsurat)",
     "nota": "Capătul de vest al blatului. Blatul se oprește la ~1,9 cm de perete, cât iese pervazul ușii (pervazul începe la 36,3 cm de colț, iar blatul are 40 cm adâncime). Detaliile sunt pe peretele lavoarului.",
     "adanc": 118.1,
     "vedereaPrincipala": "S",
     "detaliu": "M02-B"
    },
    {
     "id": "M02-S",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Sertarul lavoarului (M02), văzut din lateral",
     "x": 0,
     "lat": 38,
     "h": 35,
     "inalt": 38,
     "finisaj": "nuc",
     "stare": "proiect",
     "sursa": "A.25 B05 (38, 35, cotat)",
     "nota": "Latura sertarului, la ~1,9 cm de perete. Detaliile sunt pe peretele lavoarului.",
     "adanc": 83.1,
     "vedereaPrincipala": "S"
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Pervazul de nord al ușii ajunge la 115,7 cm de colțul S-V, iar peretele de nord e la 117: între ele rămân 1,3 cm, mai puțin decât grosimea faianței cu adezivul (~1–1,5 cm) de pe peretele de nord. De hotărât: pervaz mai îngust pe această latură, faianța oprită la pervaz sau ușa mutată spre sud.",
     "sursa": "A.24 (pervazul 112–115,7; peretele de nord la 117, măsurat la 1:10); A.25 B07",
     "ids": [
      "U1",
      "F1"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Înălțimea prizei P1 nu e sigură: A.06 scrie «h=30» o singură dată, între priza P2 din hol și P1. La 30 cm, P1 e sub sertarul lavoarului, greu de folosit pentru un uscător de păr; deasupra blatului (de ex. h ~100) ar fi în zona cu stropi. De confirmat înălțimea și rostul ei.",
     "sursa": "A.06; specs/06 A poz. 5",
     "ids": [
      "P1"
     ]
    },
    {
     "nivel": "info",
     "text": "Golul ușii: ~72 cm în A.01, A.06 și A.24 (necotat), iar ușa cumpărată are foaia de 60 cm (02.11.2026); releveul din 2021 dă 65 cm (HL20). Ușa se deschide spre GS: deschisă, foaia ajunge la ~51 cm de acest perete, iar vasul WC începe la ~80 cm (A.03), deci între ele rămân ~29 cm.",
     "sursa": "A.01, A.03, A.24; releveul; analiza/11 HL20",
     "ids": [
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
  "subtitlu": "vedere de sus, ca în A.05 · fără tavan fals (placa la 250), banda D1, dulapurile până la placă",
  "lungime": 150,
  "adancime": 140,
  "origine": "colțul S-V: fața peretelui cu ușa (x = 0) și fața peretelui lavoarului (y = 0)",
  "nota": "x de la peretele cu ușa spre est, h = y de la peretele lavoarului spre nord. Camera are 130 × 117 cm; nișa lui M03 merge până la y = 140 (x 80–130), masca WC ocupă x 130–150 (y 42–140), spaletul din colțul S-E ocupă x 120–150 (y 0–42). Fără tavan fals: A.05 nu hașurează GS-ul, iar A.25 desenează pereții de la pardoseală la placă (250).",
  "etapa": 1,
  "elemente": [
   {
    "id": "D1",
    "strat": "led",
    "tip": "banda-led",
    "nume": "Banda LED D1, pe tavan",
    "x": 0,
    "lat": 120,
    "h": 41.1,
    "inalt": 1.7,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (D: săgeata dublă de tip «LED tavan – orizontal», de la peretele cu ușa până la spalet, la ~41–43 cm de peretele lavoarului; necotat); A.26 (randările 1 și 2); specs/04 (29.10.2026: 24 V 3000K CRI90, profil aplicat ~16,6 × 10,6 mm, o sursă Push-DIM cu E1); specs/06 G2 (~120 cm)",
    "nota": "Bandă 24 V 3000K CRI90 pe placă, paralelă cu peretele lavoarului, la ~41–43 cm de el (în dreptul muchiei blatului și a feței de nord a spaletului), de la peretele cu ușa până la spalet: ~120 cm. Fără tavan fals, profilul se aplică pe placă (specs/04); randările o arată încastrată. A.06 și randările o pun pe tavan, nu deasupra oglinzii (L4): de confirmat. Sursa e D8, în tavanul fals din hol, comună cu E1; butonul e DE (I3 din hol).",
    "detaliu": "PUSH"
   },
   {
    "id": "CB-D1",
    "strat": "electric",
    "tip": "doza",
    "nume": "Capătul cablului de 24 V pentru banda D1 (marcajul D din A.06)",
    "x": 119,
    "h": 42,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (marcajul D la capătul de est al benzii, lângă spalet)",
    "nota": "A.06 pune marcajul la capătul de est, lângă spalet. Sursa D8 e în hol, la vest: alimentat de aici, cablul traversează tavanul GS-ului pe ~120 cm, fără tavan fals care să-l ascundă. Propunerea noastră: alimentarea la capătul de vest, prin peretele cu ușa, chiar sub placă (în hol, între tavanul fals de la 243 și placă).",
    "detaliu": "PUSH"
   },
   {
    "id": "MWC",
    "strat": "gips",
    "tip": "masca",
    "nume": "Masca WC (amprenta)",
    "x": 130,
    "lat": 20,
    "h": 42.1,
    "inalt": 97.9,
    "stare": "proiect",
    "sursa": "A.24 și A.08 (20 și 97,9, cotat)",
    "nota": "Masca de 120 cm înălțime. Deasupra ei, de la 120 la placă, e dulapul DWC (y 42,6–117). Ce e deasupra măștii în spatele lui M03 (y 117–140) nu e desenat.",
    "adanc": 120,
    "detaliu": "WC"
   },
   {
    "id": "DWC",
    "strat": "mobila",
    "tip": "mobilier",
    "nume": "Dulapul de deasupra măștii WC",
    "x": 130,
    "lat": 20,
    "h": 42.6,
    "inalt": 74.4,
    "finisaj": "p722",
    "inFata": [
     "MWC"
    ],
    "stare": "de-verificat",
    "sursa": "A.25 B05, B06, B07",
    "nota": "Ajunge la placă. Detaliile sunt pe peretele cu WC-ul.",
    "adanc": 130
   },
   {
    "id": "M03",
    "strat": "mobila",
    "tip": "mobilier",
    "nume": "Dulapul M03 (în nișa peretelui de nord)",
    "x": 80,
    "lat": 50,
    "h": 117,
    "inalt": 23,
    "finisaj": "nuc",
    "stare": "proiect",
    "sursa": "A.24, A.08 (23, cotat); A.25 B07 (ajunge la placă)",
    "nota": "Ajunge la placă. Detaliile sunt pe peretele de nord.",
    "adanc": 130
   },
   {
    "id": "Z1",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Spaletul din colțul S-E și golul din spatele lui",
    "x": 120,
    "lat": 30,
    "h": 0,
    "inalt": 42,
    "stare": "proiect",
    "sursa": "A.01, A.24, A.08 (85 + 35 + 10; 80 + 50 + 20; 42, cotat; golul măsurat pe vectori)",
    "nota": "Zidărie de 10 cm la x 120–130 (fața spre GS, placată cu PL1 și PL2). În spatele ei, la x 130–150 și y 0–32, e un gol (A.01, A.24), probabil cu coloanele de apă și apometrul: se ajunge la el prin ușa de vizitare S9."
   },
   {
    "id": "Z2",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Peretele de nord (în afara camerei) și golul din el",
    "x": 0,
    "lat": 80,
    "h": 117,
    "inalt": 23,
    "stare": "de-verificat",
    "sursa": "A.01, A.24 (golul x 0–70, y 127–140, măsurat pe vectori)",
    "nota": "Zidărie de 10 cm, apoi un gol de ~13 cm pe primii 70 cm: probabil canalul de ventilație în care evacuează ventilatorul S8. De verificat pe șantier."
   }
  ],
  "avertismente": [
   {
    "nivel": "atentie",
    "text": "GS-ul nu are tavan fals, iar sursa benzilor D1 și E1 e în tavanul fals din hol (D8). Cablul de 24 V intră prin peretele cu ușa, chiar sub placă. În GS rămâne în profilul benzii, în șanț în placă sau aparent; dacă placa e din panouri prefabricate, șanțul nu se poate face (specs/06 F). În hol, de la D8 până la perete, trece fie peste fanta SC2 (deschisă până la placă, se vede de jos), fie pe la sud de ea, prin primii 15 cm de lângă peretele lavoarului, unde holul nu are fantă. În ambele cazuri trece prin masca de gaz MG2 (20 cm): acolo în tub, fără îmbinări, cu acordul firmei ANRE (specs/08 D).",
    "sursa": "A.05, A.06; hol.js (D8, SC2, MG2, TF1); specs/04; specs/06 F; specs/08 D",
    "ids": [
     "D1",
     "CB-D1"
    ]
   },
   {
    "nivel": "info",
    "text": "Benzile D1 și E1 au o singură sursă Push-DIM (specs/04): butonul DE (I3 din hol) le aprinde și le stinge împreună. Două butoane separate cer două surse (HL12).",
    "sursa": "specs/04; analiza/11 HL12",
    "ids": [
     "D1"
    ]
   },
   {
    "nivel": "info",
    "text": "Randările A.26 arată o lustră suspendată deasupra lavoarului și benzile încastrate în tavan. A.06 nu are lustra, specs/04 nu o are pe listă, iar A.05 nu are tavan fals în GS. Desenul urmează A.05 și A.06.",
    "sursa": "A.05, A.06, A.26; specs/04",
    "ids": [
     "D1"
    ]
   },
   {
    "nivel": "info",
    "text": "Gresia din GS continuă stereotomia holului (A.04): rosturi la x = 40 și 100 și la y ≈ 10,9, 70,9 și 130,9 (modul de 60 cm din A.04; cu rostul de 3 mm pozițiile se mută puțin, după punctul de pornire din hol). Rostul de la x = 40 continuă pe peretele de nord.",
    "sursa": "A.04 (vectori, 02.11.2026); specs/07 A",
    "ids": [
     "M03",
     "Z1"
    ]
   },
   {
    "nivel": "info",
    "text": "Golurile din zidărie (Z1 în colțul S-E, Z2 în peretele de nord) sunt desenate în A.01 și A.24 fără nume. Rolul lor (coloanele de apă cu apometrul, canalul de ventilație) e dedus și se verifică pe șantier înainte de pozarea instalațiilor.",
    "sursa": "A.01, A.24; specs/10; analiza/07 (întrebările 10 și 11)",
    "ids": [
     "Z1",
     "Z2"
    ]
   }
  ]
 }
};
