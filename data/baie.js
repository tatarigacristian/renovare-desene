// Baie — sursa la zi pentru desenele din desene/baie.html. Format: JSON strict după „= ”.
// Câmpurile sunt descrise în desene/README.md.
window.CAMERE = window.CAMERE || {};
window.CAMERE["baie"] = {
 "id": "baie",
 "nume": "Baie",
 "referinte": {
  "orizontal": "x: de la fața zidăriei, în colțul din stânga (privind peretele din cameră). Cotele sunt cumulate de la acest colț: se măsoară cu ruleta de la colț, nu din aproape în aproape.",
  "vertical": "h: de la pardoseala finită. Dacă pardoseala nu e pusă încă, de la reperul de nivel trasat pe perete, cu diferența până la pardoseala finită."
 },
 "inaltime": {
  "valoare": 250,
  "stare": "proiect",
  "nota": "Înălțimea liberă: 250 cm, placa de beton (A.01, Hu 2,50; A.27 B01: 87 + 163 = 250 în dreptul lavoarului). Baia nu are tavan fals decât deasupra dușului: caseta TF1, cu fața la 225 cm (A.27 B02 și B03: 225 și 25)."
 },
 "revizie": {
  "nr": 1,
  "data": "2026-11-02",
  "modificari": [
   "Prima versiune: pereții și planul tavanului."
  ]
 },
 "plan": {
  "latime": 161,
  "adancime": 253,
  "nota": "x de la fața zidăriei peretelui de vest (spre living), în dreptul lavoarului; y de la fața peretelui spre hol (sud, 10 cm). Între zidării: 161 × 253 cm (A.01: 25 + 136; A.03: 37,5 + 82,5 + 81,5 + 36,5 = 238 până la masca dușului, plus 15 cm de mască). Fețele finite nu sunt la x = 0 și y = 253: masca WC are fața la x = 25 între y = 90 și 206, ghena existentă ocupă x 0–25 între y = 206 și 253, iar masca dușului are fața la y = 238 pe x 25–161. Pereții N, E și V se măsoară de la fețele măștilor, ca în A.27. Cotele din A.27 sunt la fața faianței, desenată de 0,5 cm: diferă cu ~0,5 cm de cele de aici."
 },
 "pereti": [
  {
   "id": "N",
   "nume": "Peretele cu nișa și fereastra",
   "subtitlu": "nișa cu banda H1, fereastra, fâșia STR, caseta de tavan fals a dușului · B02 în A.27",
   "lungime": 136,
   "origine": "colțul dintre masca WC (fața la x = 25) și masca dușului (fața la y = 238); zidul exterior e cu 15 cm mai în spate, iar colțul N-V al zidăriei e în ghenă",
   "etapa": 1,
   "plan": [
    [
     25,
     238
    ],
    [
     161,
     238
    ]
   ],
   "elemente": [
    {
     "id": "F5",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Fâșie Sand Moon STR lângă masca WC",
     "x": 0,
     "lat": 30,
     "h": 0,
     "inalt": 225,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "finisaj": "sand-moon-str",
     "stare": "proiect",
     "sursa": "A.27 B02 (30, cotat; dungi pe fond alb)",
     "nota": "De la pardoseală până la tavanul fals, lipită de masca WC. Formatul plăcii STR nu e în listă (60 × 60 presupus)."
    },
    {
     "id": "F6",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Faianță Sand Moon pe masca dușului",
     "x": 30,
     "lat": 106,
     "h": 0,
     "inalt": 225,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "pornire": {
      "x": 136,
      "h": 0
     },
     "finisaj": "sand-moon",
     "goluri": [
      {
       "x": 48,
       "lat": 55,
       "h": 150,
       "inalt": 55
      },
      {
       "x": 30,
       "lat": 105.6,
       "h": 95,
       "inalt": 25
      }
     ],
     "stare": "proiect",
     "sursa": "A.27 B02 (punctul de pornire în colțul de est, la pardoseală; rostul vertical la 60 cm de colț; rândurile la 60, 120, 180)",
     "nota": "Pornește din colțul cu peretele de est. Fereastra e centrată pe rostul de la 60 cm de colț; rostul de la 120 e la fața de sus a nișei, iar fundul nișei (95) cade în rândul 60–120. Nișa se placează pe toate fețele. Hidroizolație pe tot peretele (zona dușului)."
    },
    {
     "id": "NI1",
     "strat": "gips",
     "tip": "nisa",
     "nume": "Nișa din duș (105,6 × 25, adâncă de 15)",
     "x": 30,
     "lat": 105.6,
     "h": 95,
     "inalt": 25,
     "adanc": 15,
     "stare": "proiect",
     "sursa": "A.27 B02 și B03 (105,6; 95 + 25; 15, cotat); A.01 („Mască raft duș”); specs/06 G2",
     "nota": "Nișa e în masca dușului MN1 (gips-carton RU, 15 cm, pe toată lățimea, de la pardoseală la tavanul fals) și merge până la zidul exterior. Ajunge la peretele de est. Sus, banda H1."
    },
    {
     "id": "FE1",
     "strat": "structura",
     "tip": "fereastra",
     "nume": "Fereastra (55 × 55)",
     "x": 48,
     "lat": 55,
     "h": 150,
     "inalt": 55,
     "stare": "proiect",
     "sursa": "A.27 B02 (30 + 18; 55 × 55; 150 de la pardoseală și 20 sub tavanul fals, cotat); A.01 și A.03 (golul la 73–128 cm de zidul de vest)",
     "nota": "Fereastra existentă din PVC, cu un canat (stare_actuala/baie 1). Glaful are 15 cm de mască plus ~45 cm de zid exterior."
    },
    {
     "id": "H1",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Banda H1 din nișă (orizontală)",
     "x": 30,
     "lat": 105.6,
     "h": 118.5,
     "inalt": 1.2,
     "ascuns": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 (H, „LED nișă - orizontal”); A.27 B02 (nișa de 105,6); specs/06 G2 și specs/04 (24 V, IP67, sursă Push-DIM)",
     "nota": "Bandă 24 V 3000K IP67 în profil, sub fața de sus a nișei, pe toată lungimea (105,6 cm); locul profilului în nișă nu e desenat. Cablul vine de la sursa D9 din tavanul fals al holului. Butonul H e în IH (hol)."
    },
    {
     "id": "S6",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "rigola",
     "nume": "Rigola dușului (capătul de nord)",
     "x": 0,
     "lat": 7,
     "h": 0,
     "inalt": 1.5,
     "stare": "proiect",
     "sursa": "A.03 (măsurat); A.27 B01 (73, cotat)",
     "nota": "Capătul rigolei, în colțul cu masca WC. Detaliile sunt pe peretele cu WC-ul."
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Caseta de tavan fals de deasupra dușului",
     "x": 0,
     "lat": 136,
     "h": 225,
     "inalt": 25,
     "stare": "proiect",
     "sursa": "A.27 B02 (225, cotat); A.05",
     "nota": "Fața la 225 cm, 25 cm sub placă. Vezi planul tavanului."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Banda H1: întrebarea L5 (lungimea, înălțimea, IP67) e parțial lămurită de A.27 din 03/2026: nișa are 105,6 × 25 cm, între 95 și 120, adâncă de 15. A.06 desenează săgeata benzii pe ~100 cm. Rămâne de confirmat IP67 și locul profilului.",
     "sursa": "A.06, A.27 B02, analiza/11 L5",
     "ids": [
      "H1",
      "NI1"
     ]
    },
    {
     "nivel": "info",
     "text": "A.27 cotează 30 + 105,6 = 135,6 cm până la fața faianței de pe peretele de est (desenată de 0,5 cm); între fețele brute sunt 136 (A.01, A.03). Diferența rămâne la colț.",
     "sursa": "A.01, A.03, A.27 B02",
     "ids": [
      "F5",
      "F6"
     ]
    },
    {
     "nivel": "info",
     "text": "Fereastra e în duș: planșele nu spun dacă glafurile se placează și cum se protejează rama existentă.",
     "sursa": "A.27 B02, stare_actuala/baie 1",
     "ids": [
      "FE1"
     ]
    }
   ]
  },
  {
   "id": "E",
   "nume": "Peretele cu port-prosopul",
   "subtitlu": "port-prosopul CF1, faianța de la pardoseală la placă · B03 în A.27",
   "lungime": 238,
   "origine": "colțul N-E: fața peretelui de est (spre dormitor) și fața măștii dușului (y = 238)",
   "etapa": 1,
   "plan": [
    [
     161,
     238
    ],
    [
     161,
     0
    ]
   ],
   "elemente": [
    {
     "id": "F7",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Faianță Sand Moon în duș",
     "x": 0,
     "lat": 83,
     "h": 0,
     "inalt": 225,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "pornire": {
      "x": 83,
      "h": 0
     },
     "finisaj": "sand-moon",
     "stare": "proiect",
     "sursa": "A.27 B03 (punctul de pornire la 83 cm de masca de nord; rosturi la 23, 83, 143, 203 și la 60, 120, 180, 240, desenate)",
     "nota": "Zona dușului, până la tavanul fals. În colțul cu nișa rămâne o bucată de 23 cm. Hidroizolație pe toată suprafața (specs/07 G)."
    },
    {
     "id": "F8",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Faianță Sand Moon de la duș până la ușă",
     "x": 83,
     "lat": 155,
     "h": 0,
     "inalt": 250,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "pornire": {
      "x": 83,
      "h": 0
     },
     "finisaj": "sand-moon",
     "stare": "proiect",
     "sursa": "A.27 B03 (punctul de pornire la 83; rosturile desenate)",
     "nota": "De la linia peretelui de sticlă până la peretele spre hol, de la pardoseală la placă: rândul de sus are ~9 cm, ultima bucată de lângă ușă ~35 cm."
    },
    {
     "id": "PD1",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Pragul dușului (10 × 5 cm), placat cu gresie",
     "x": 73,
     "lat": 10,
     "h": 0,
     "inalt": 5,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "finisaj": "sand-moon",
     "stare": "de-verificat",
     "sursa": "A.27 B03 (10 × 5, desenat)",
     "nota": "Capătul pragului, la acest perete. Detaliile sunt pe peretele cu WC-ul."
    },
    {
     "id": "CF1",
     "strat": "structura",
     "tip": "calorifer",
     "nume": "Port-prosopul (25 × 120)",
     "x": 100.5,
     "lat": 25,
     "h": 30,
     "inalt": 120,
     "stare": "de-verificat",
     "sursa": "A.27 B03 (83 + 17,5 + 25; 30, cotat; înălțimea de 120, măsurat); A.28; specs/08 B (port-prosopul existent rămâne, 28.10.2026)",
     "nota": "Corp vertical de 25 × 120 cm, de la 30 la 150 cm, cu axa la 113 cm de masca de nord. Racordurile sunt desenate în diagonală: jos pe latura dinspre duș (~34 cm) și sus pe latura dinspre ușă (~146 cm). Adâncimea nu e cotată."
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Caseta de tavan fals de deasupra dușului",
     "x": 0,
     "lat": 83,
     "h": 225,
     "inalt": 25,
     "stare": "proiect",
     "sursa": "A.27 B03 (25 sub placă, cotat)",
     "nota": "Fața la 225 cm. Vezi planul tavanului."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Port-prosopul: A.27 desenează un corp de 25 × 120 (ca radiatorul Blumfeldt Delgado 25 × 120 din lista de achiziții), iar decizia din 28.10.2026 păstrează port-prosopul existent, nemăsurat. Țevile din perete se pun după corpul ales.",
     "sursa": "A.27 B03, specs/04, specs/08 B",
     "ids": [
      "CF1"
     ]
    },
    {
     "nivel": "info",
     "text": "Pe acest perete rosturile pornesc de la linia peretelui de sticlă (83 cm de masca de nord), nu de la colț: lângă nișă rămâne o bucată de 23 cm. Pe peretele cu nișa, colțul comun are placă întreagă.",
     "sursa": "A.27 B02 și B03",
     "ids": [
      "F7",
      "F8"
     ]
    }
   ]
  },
  {
   "id": "S",
   "nume": "Peretele cu ușa",
   "subtitlu": "ușa spre hol (U6 în hol), fâșia STR de lângă lavoar · B04 în A.27",
   "lungime": 161,
   "origine": "colțul S-E: fața peretelui de est, lângă ușă",
   "etapa": 1,
   "plan": [
    [
     161,
     0
    ],
    [
     0,
     0
    ]
   ],
   "elemente": [
    {
     "id": "F9",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Faianță Sand Moon de la colț până la pervazul de vest",
     "x": 0,
     "lat": 98.7,
     "h": 0,
     "inalt": 250,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "pornire": {
      "x": 0,
      "h": 0
     },
     "finisaj": "sand-moon",
     "goluri": [
      {
       "x": 23,
       "lat": 72,
       "h": 0,
       "inalt": 200
      }
     ],
     "stare": "proiect",
     "sursa": "A.27 B04 (punctul de pornire în colțul de est, la pardoseală; rostul vertical la 60 cm; rândurile la 60–240)",
     "nota": "Între colț și golul ușii rămân 23 cm; deasupra ușii, rostul la 60 cm de colț. Faianța ajunge până la toc, iar pervazul o acoperă pe 3,7 cm."
    },
    {
     "id": "F10",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Fâșie Sand Moon STR între ușă și colțul cu lavoarul",
     "x": 98.7,
     "lat": 62.3,
     "h": 0,
     "inalt": 250,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "finisaj": "sand-moon-str",
     "stare": "proiect",
     "sursa": "A.27 B04 (60 de la pervaz, cotat; dungi pe fond alb, pe toată înălțimea)",
     "nota": "De la pervazul ușii până la colț, de la pardoseală la placă, și în spatele mobilierului M08. A.27 cotează 60 cm; cu peretele de 161 cm (A.01) rămân ~62 cm: de măsurat."
    },
    {
     "id": "U1",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa spre hol (U6 în hol), cu tocul și pervazul",
     "x": 19.3,
     "lat": 79.4,
     "h": 0,
     "inalt": 203.7,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.27 B04 (22,5 de la fața faianței, adică 23 de la zid, cotat; pervazul 79,4 × 203,7 și foaia 66,4 × 197,2, măsurat); A.03 (golul la 66–138 cm de zidul de vest, măsurat); desene/data/hol.js (U6)",
     "nota": "Golul din zidărie: 72 × 200 cm, de la 23 la 95 cm de colț. Tocul de 4 cm e în gol, pe ambele laturi; pervazul de 3,7 cm urcă până la 203,7. Se deschide spre baie, cu balamalele spre colțul de est (A.03, A.05, A.06, A.28)."
    },
    {
     "id": "M08",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Mobilierul lavoarului M08, văzut din lateral",
     "x": 106.5,
     "lat": 54.5,
     "h": 30,
     "inalt": 45,
     "finisaj": "p751",
     "stare": "proiect",
     "sursa": "A.27 B04 (adâncimea 54,5, măsurat; 30–75)",
     "nota": "Latura corpului; deasupra, blatul F3. Detaliile sunt pe peretele cu WC-ul."
    },
    {
     "id": "F3",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Blatul lavoarului placat cu Sand Moon, văzut din lateral",
     "x": 106.5,
     "lat": 54.5,
     "h": 75,
     "inalt": 12,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "finisaj": "sand-moon",
     "stare": "de-verificat",
     "sursa": "A.27 B04 (75–87, desenat)",
     "nota": "Latura blatului. Detaliile sunt pe peretele cu WC-ul."
    },
    {
     "id": "MO1",
     "strat": "gips",
     "tip": "masca",
     "nume": "Masca oglinzii, văzută din lateral",
     "x": 155.5,
     "lat": 5.5,
     "h": 87,
     "inalt": 163,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.27 B04 (~5,5 cm, măsurat)",
     "nota": "Masca și oglinda, în secțiune. Detaliile sunt pe peretele cu WC-ul."
    }
   ],
   "avertismente": [
    {
     "nivel": "info",
     "text": "U1 e aceeași ușă cu U6 din hol: golul (23–95 cm de acest colț) și pervazul se potrivesc din ambele părți (raportul băii, secțiunea f). Pe latura de vest a golului, dulapul M07 din hol ajunge până la gol (HL15); din baie nu se vede.",
     "sursa": "A.27 B04, desene/data/hol.js, analiza/11 HL15",
     "ids": [
      "U1"
     ]
    },
    {
     "nivel": "info",
     "text": "Întrerupătorul IH (I1 pe peretele spre baie din hol) e în același perete de 10 cm, la ~16,5 cm de acest colț, la ~110 cm. Pe partea dinspre baie e faianța F9: doza din hol nu trebuie să străpungă peretele.",
     "sursa": "A.06, desene/data/hol.js",
     "ids": [
      "F9",
      "U1"
     ]
    }
   ]
  },
  {
   "id": "V",
   "nume": "Peretele cu WC-ul și lavoarul",
   "subtitlu": "lavoarul M08 cu oglinda, coloana cu rafturi și masca WC cu riflaj (M09), dușul cu rigola · B01 în A.27",
   "lungime": 238,
   "origine": "colțul S-V: fața zidăriei peretelui de vest, lângă peretele spre hol; de la 90 cm, fața e masca WC, la 25 cm de zid",
   "etapa": 1,
   "plan": [
    [
     0,
     0
    ],
    [
     0,
     238
    ]
   ],
   "elemente": [
    {
     "id": "F1",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Faianță Sand Moon sub lavoar",
     "x": 0,
     "lat": 75,
     "h": 0,
     "inalt": 87,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "pornire": {
      "x": 37.5,
      "h": 0
     },
     "finisaj": "sand-moon",
     "stare": "de-verificat",
     "sursa": "A.27 B01 (sub mobilier: rostul vertical în axa lavoarului, la 37,5); specs/07 B",
     "nota": "Sub mobilierul M08 (0–30 cm) A.27 desenează faianță, cu rostul vertical în axa lavoarului. În spatele corpului (30–87) planșa nu arată nimic; propunem faianță până la blat. Racordurile lavoarului (R3–R5) ies prin ea."
    },
    {
     "id": "F2",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Fâșie Sand Moon STR între colț și oglindă",
     "x": 0,
     "lat": 20,
     "h": 87,
     "inalt": 163,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "finisaj": "sand-moon-str",
     "stare": "proiect",
     "sursa": "A.27 B01 (20 × 163, cotat; dungi pe fond alb); specs/07 B (Sand Moon STR)",
     "nota": "De pe blat până la placă (250). Formatul plăcii STR nu e în lista de achiziții: 60 × 60 e presupus. Pe latura dinspre oglindă e banda H2."
    },
    {
     "id": "F3",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Blatul lavoarului placat cu Sand Moon (fața de 12 cm)",
     "x": 0,
     "lat": 75,
     "h": 75,
     "inalt": 12,
     "adanc": 55,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "pornire": {
      "x": 37.5,
      "h": 75
     },
     "finisaj": "sand-moon",
     "in": "M08",
     "stare": "de-verificat",
     "sursa": "A.27 B01 (75–87, cotat 12; rostul în axa lavoarului); A.28 (blat cu aspect de piatră); A.03 (adâncimea ~55, măsurat)",
     "nota": "Blat de 75 × ~55 cm, gros de 12 cm, cu lavoarul S9 îngropat și bateria S10 deasupra. A.27 desenează pe fața lui un rost de faianță în axa lavoarului; materialul și suportul blatului nu sunt scrise în planșe."
    },
    {
     "id": "M08",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Mobilierul lavoarului M08 (un sertar)",
     "x": 0,
     "lat": 75,
     "h": 30,
     "inalt": 45,
     "adanc": 55,
     "fronturi": [
      {
       "lat": 75
      }
     ],
     "finisaj": "p751",
     "stare": "proiect",
     "sursa": "A.27 B01 (75; 30 + 45; legenda: MDF P751 Paris San Marco); A.08 (M08); A.03 (adâncimea ~55, măsurat); A.27 B04 (54,5, măsurat)",
     "nota": "Corp suspendat, de la 30 la 75 cm, cu un sertar (front de ~70 × 37 cm, retras în corp). Deasupra, blatul F3 până la 87. Sifonul lavoarului trece prin sertar: tâmplarul face decupajul după racordurile R3–R5. Sub corp e sifonul de pardoseală S7."
    },
    {
     "id": "S9",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "lavoar",
     "nume": "Lavoar Romeo negru mat, 53 × 37, îngropat în blat",
     "x": 11,
     "lat": 53,
     "h": 75,
     "inalt": 12,
     "in": "M08",
     "ascuns": true,
     "stare": "proiect",
     "sursa": "A.03 (axa la 37,5 de peretele spre hol, cotat; cuva de 53 cm, măsurat); specs/04 (Lavoar Romeo 53 × 37, montaj îngropat)",
     "nota": "Axa la 37,5 cm de colț, la mijlocul mobilierului. Cuva e în grosimea blatului; adâncimea ei și prinderea se iau din fișa produsului."
    },
    {
     "id": "S10",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "baterie",
     "nume": "Bateria lavoarului (pipă și două robinete, pe blat)",
     "x": 24,
     "lat": 27,
     "h": 87,
     "inalt": 23,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.27 B01 (desenată, necotată); A.03 (3 găuri la ~26, 37 și 48 cm de colț, la ~7 cm de perete, măsurat); specs/04 (Cersanit Zen S951-595)",
     "nota": "Trei găuri în blat, la ~7 cm de perete, cu pipa în axa lavoarului (37,5)."
    },
    {
     "id": "MO1",
     "strat": "gips",
     "tip": "masca",
     "nume": "Masca oglinzii, cu nișa benzii H2",
     "x": 20,
     "lat": 55,
     "h": 87,
     "inalt": 163,
     "adanc": 5.5,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01 („Mască oglindă / Nișă LED”); A.03 și A.27 B04 (~5,5 cm peste zid, măsurat)",
     "nota": "Gips-carton RU pe profile, ~5,5 cm peste zid, în spatele oglinzii. Latura dinspre colț (la 20 cm) rămâne deschisă: acolo intră profilul benzii H2. Unde începe jos masca nu e desenat; aici e luată de la blat."
    },
    {
     "id": "OG1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Oglinda (55 × 163)",
     "x": 20,
     "lat": 55,
     "h": 87,
     "inalt": 163,
     "finisaj": "oglinda",
     "inFata": [
      "MO1"
     ],
     "stare": "proiect",
     "sursa": "A.27 B01 (20 + 55; 87 + 163, cotat); A.01 („Mască oglindă”)",
     "nota": "De pe blat până la placă. Se lipește pe masca MO1. 163 cm nu e format standard: oglindă tăiată pe măsură, după ce masca e gata."
    },
    {
     "id": "H2",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Banda H2 la oglindă (verticală)",
     "x": 19.5,
     "lat": 1,
     "h": 87,
     "inalt": 163,
     "ascuns": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 (H, „LED perete - vertical”, la ~35 cm de colț, necotat); A.28 (lumina pe latura oglinzii dinspre ușă); specs/04 (24 V, IP65, sursă Push-DIM)",
     "nota": "Bandă 24 V 3000K IP65, în profil de max. 12 mm, pe latura oglinzii dinspre colț. Lungimea nu e cotată (L2): aici, pe toată înălțimea oglinzii. Sursa Push-DIM e D9, în tavanul fals al holului; butonul H e în întrerupătorul IH din hol."
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză simplă cu protecție (h 110)",
     "x": 66.6,
     "h": 110,
     "punct": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 (simbolul la ~66 cm de colț, h = 110, „Priză integrată în mobilier”); Necesar prize și întrerupătoare, poz. 5",
     "nota": "Priza cu capac a băii. Locul exact se hotărăște înainte de pozarea dozei (vezi avertismentul)."
    },
    {
     "id": "M09-R",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Coloana cu rafturi deschise (M09)",
     "x": 75,
     "lat": 15,
     "h": 0,
     "inalt": 250,
     "adanc": 25,
     "fronturi": [
      {
       "lat": 15
      }
     ],
     "finisaj": "p751",
     "stare": "proiect",
     "sursa": "A.27 B01 (15, cotat; polițele, măsurat); A.28; A.08 (M09)",
     "nota": "Coloană fără uși, deschisă spre cameră, între lavoar și masca WC, adâncă cât masca (25 cm). Polițe de 1,8 cm la ~0, 41, 81, 122, 162, 203 și 244 cm (măsurat pe A.27)."
    },
    {
     "id": "MS1",
     "strat": "gips",
     "tip": "masca",
     "nume": "Masca WC (gips-carton RU, 25 cm), partea din spatele mobilierului",
     "x": 90,
     "lat": 65,
     "h": 0,
     "inalt": 250,
     "adanc": 25,
     "stare": "proiect",
     "sursa": "A.01 („Mască WC încastrat”, 25, cotat); A.03 (fața la 25 cm de zid, de la 90 la 206 cm de colț, măsurat)",
     "nota": "Structură metalică cu plăci RU, fața la 25 cm de zid. Merge de la 90 la 206 cm de colț; în duș (155–206) e sub faianța F4 și pe desen nu se vede. Înăuntru: cadrul WC S2 jos și dulapul M09-D sus. Pe fața ei se prinde riflajul M09-P. Vezi planul tavanului."
    },
    {
     "id": "M09-P",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflajul de pe masca WC (M09, MDF P751)",
     "x": 90,
     "lat": 65,
     "h": 0,
     "inalt": 120,
     "adanc": 2,
     "lamela": 1.1,
     "rost": 1.1,
     "finisaj": "p751",
     "inFata": [
      "MS1"
     ],
     "stare": "de-verificat",
     "sursa": "A.27 B01 (65, cotat; dungi la pas de 2,2 cm; rostul orizontal la 120, măsurat); A.03 (2 cm peste mască, măsurat); A.28",
     "nota": "Panou cu riflaj vertical, gros de 2 cm, de la pardoseală până la 120, cu decupaj pentru clapeta S3 (fața clapetei e în planul riflajului, A.03). Planșele dau doar pasul dungilor (2,2 cm): lățimea lamelei și a canalului se stabilesc cu tâmplarul. Propunem panou demontabil, pentru acces la cadru."
    },
    {
     "id": "M09-D",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul de deasupra WC (M09, două uși cu riflaj)",
     "x": 90,
     "lat": 65,
     "h": 120,
     "inalt": 125.5,
     "adanc": 25,
     "fronturi": [
      {
       "lat": 32.5
      },
      {
       "lat": 32.5
      }
     ],
     "finisaj": "p751",
     "inFata": [
      "MS1"
     ],
     "stare": "proiect",
     "sursa": "A.27 B01 (65, cotat; ușile de la ~120 la ~245,5 și balamalele pe laturile exterioare, măsurat); A.28",
     "nota": "Două uși de 32,5 cm, cu riflaj ca M09-P, de la ~120 la ~245,5 cm; deasupra rămâne o fâșie de ~4,5 cm până la placă. Balamalele sunt pe laturile exterioare. Adâncimea interioară nu e cotată: masca are 25 cm, iar sub dulap e cadrul WC (până la 112)."
    },
    {
     "id": "S2",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "rezervor",
     "nume": "Cadrul WC încastrat Laufen INEO NOVA (112 × 45 × 13)",
     "x": 97.5,
     "lat": 45,
     "h": 0,
     "inalt": 112,
     "adanc": 13,
     "ascuns": true,
     "stare": "proiect",
     "sursa": "specs/04 și specs/08 (Laufen INEO NOVA OS39217, 1120 × 450 × 130 mm); A.03 (cadrul desenat în mască, ~97–145 cm de colț, măsurat)",
     "nota": "Centrat pe axa WC (120). Stă în masca MS1, lipit de placa ei; în spate rămân ~10 cm până la zid (A.03). Racordurile de apă rece (R1) și scurgere Ø110 (R2) sunt pe cadru, la cotele din fișa Laufen."
    },
    {
     "id": "S1",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "wc",
     "nume": "Vas WC suspendat NOVELA BM, negru",
     "x": 102.5,
     "lat": 35,
     "h": 17,
     "inalt": 30,
     "inFata": [
      "M09-P"
     ],
     "stare": "proiect",
     "sursa": "A.03 (axa la 120 de colț: 37,5 + 82,5, cotat); A.27 B01 (marginea de sus la 45, cotat); specs/04 (NOVELA BM, capac softclose)",
     "nota": "Axa la 120 cm de colț. Marginea de sus la 45 cm de pardoseala finită. Se prinde pe tijele cadrului S2, prin riflaj și mască."
    },
    {
     "id": "S3",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "clapeta",
     "nume": "Clapeta Laufen PL NV1, negru mat",
     "x": 107.8,
     "lat": 24.3,
     "h": 98.6,
     "inalt": 16.4,
     "stare": "proiect",
     "sursa": "A.27 B01 (marginea de sus la 115: 45 + 70, cotat; 24 × 16, măsurat); A.03; specs/04 (OS39220)",
     "nota": "Marginea de sus la 115 cm, în axa WC. Prin deschiderea ei se ajunge la robinetul și la mecanismul rezervorului. Compatibilitatea cu cadrul se confirmă la comandă (specs/04)."
    },
    {
     "id": "F4",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Faianță Sand Moon în duș (pe masca WC și pe ghenă)",
     "x": 155,
     "lat": 83,
     "h": 0,
     "inalt": 225,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "pornire": {
      "x": 196.5,
      "h": 0
     },
     "finisaj": "sand-moon",
     "stare": "proiect",
     "sursa": "A.27 B01 (10 + 73 = 83, cotat; rostul vertical la 41,5 de masca de nord și rândurile la 60, 120, 180, desenate)",
     "nota": "Pe masca WC (155–206) și pe peretele ghenei (206–238), până la tavanul fals (225). Rostul vertical e la 41,5 cm de masca de nord, în axa bateriei S4. A.27 nu marchează punct de pornire pe acest perete. Sub faianță: hidroizolație pe toată suprafața (specs/07 G)."
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Caseta de tavan fals de deasupra dușului",
     "x": 155,
     "lat": 83,
     "h": 225,
     "inalt": 25,
     "stare": "proiect",
     "sursa": "A.27 B01, B02, B03 (225 și 25, cotat); A.05 (zona hașurată)",
     "nota": "Gips-carton RU, cu fața la 225 cm. Același cod pe toți pereții și pe planul tavanului."
    },
    {
     "id": "PD1",
     "strat": "finisaje",
     "tip": "faianta",
     "nume": "Pragul dușului (10 × 5 cm), placat cu gresie",
     "x": 155,
     "lat": 10,
     "h": 0,
     "inalt": 5,
     "placa": [
      60,
      60
     ],
     "rost": 0.3,
     "finisaj": "sand-moon",
     "stare": "de-verificat",
     "sursa": "A.27 B01 și B03 (10 × 5, desenat; 10 cotat); A.03 (fâșia de 10 cm pe toată lățimea); A.04 (fâșia de 10 cm din stereotomie)",
     "nota": "Fâșie de 10 cm pe toată lățimea băii, de la 155 la 165 cm de colț; peretele de sticlă S8 stă pe ea. A.27 o desenează înaltă de 5 cm."
    },
    {
     "id": "S8",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "dus",
     "nume": "Peretele de sticlă SanSwiss Easy walk-in 70 × 200, negru mat",
     "x": 157.4,
     "lat": 2,
     "h": 5,
     "inalt": 200,
     "stare": "proiect",
     "sursa": "A.03 (70 de la masca WC, trecere liberă 66, cotat); A.27 B01 (pe prag, la ~158 cm de colț, măsurat); specs/04 (STR4P0700607)",
     "nota": "Perpendicular pe acest perete, prins de masca WC la ~158 cm de colț. Are 70 cm spre peretele de est; rămân 66 cm de trecere. Bara de stabilizare nu e desenată: se prinde după fișa produsului."
    },
    {
     "id": "S4",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "baterie",
     "nume": "Bateria dușului, încastrată",
     "x": 188.2,
     "lat": 16.6,
     "h": 91.7,
     "inalt": 26.6,
     "stare": "proiect",
     "sursa": "A.27 B01 (axa la 41,5 de masca de nord și la 105, cotat)",
     "nota": "Axa la 196,5 cm de colț (41,5 de masca de nord) și la 105 cm. Corpul încastrat intră în masca WC. Modelul nu e ales (specs/04: „Baterie duș”). Alimentează capul S5 și para cu furtun (A.28)."
    },
    {
     "id": "S5",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "para-dus",
     "nume": "Capul de duș (ploaie)",
     "x": 184.5,
     "lat": 24,
     "h": 214,
     "inalt": 6,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.27 B01 (sub tavanul fals, la ~215–220, în axa bateriei, necotat); A.03 (axa la 36,5 de masca de nord, cotat; la ~40 cm de masca WC, măsurat); A.28 (pe braț din perete)",
     "nota": "Cap de ~24 cm, la ~40 cm de masca WC. Țeava de la baterie urcă prin mască. Vezi planul tavanului."
    },
    {
     "id": "S6",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "rigola",
     "nume": "Rigola dușului (7 × 73 cm)",
     "x": 165,
     "lat": 73,
     "h": 0,
     "inalt": 1.5,
     "stare": "proiect",
     "sursa": "A.27 B01 (73, cotat); A.03 („Rigolă duș”, lipită de masca WC, lată de ~7 cm, măsurat)",
     "nota": "În pardoseală, lipită de fața măștii WC (în plan x 25–32), de la prag până la masca de nord. Modelul nu e ales (analiza/07 A9); grosimea lui decide șapa (analiza/07, întrebarea 9). Ieșirea R8 merge la coloana din ghenă."
    },
    {
     "id": "S7",
     "strat": "sanitare",
     "tip": "sanitar",
     "obiect": "sifon",
     "nume": "Sifonul de pardoseală antimiros (10 × 10), sub lavoar",
     "x": 65,
     "lat": 10,
     "h": 0,
     "inalt": 1.5,
     "stare": "proiect",
     "sursa": "A.03 (26,8 + 10 de la zid, 65 + 10 de la peretele spre hol, cotat)",
     "nota": "În pardoseală, la 26,8–36,8 cm de peretele de vest și la 65–75 cm de peretele spre hol, sub mobilierul M08 (care începe la 30 cm). Panta spre el nu e desenată (specs/03: 5 mp de șapă de pantă pentru baie și GS)."
    },
    {
     "id": "R1",
     "strat": "sanitare",
     "tip": "racord",
     "punct": true,
     "fluid": "rece",
     "nume": "Apă rece la rezervorul WC",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "specs/04 (Laufen INEO NOVA); planșele nu dau cota",
     "nota": "Pe cadrul S2, în axa WC (120 cm de colț); cota și latura se iau din fișa cadrului."
    },
    {
     "id": "R2",
     "strat": "sanitare",
     "tip": "racord",
     "punct": true,
     "fluid": "scurgere",
     "diam": 11,
     "nume": "Scurgerea WC Ø110",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "specs/04 (Laufen INEO NOVA); specs/08 F; planșele nu dau cota",
     "nota": "Cotul cadrului S2, în axa WC (120). Până la ghena GH1 sunt ~85 cm, cu pantă de min. 2 % (specs/08 F)."
    },
    {
     "id": "R3",
     "strat": "sanitare",
     "tip": "racord",
     "punct": true,
     "fluid": "calda",
     "nume": "Apă caldă la lavoar",
     "x": 27.5,
     "h": 55,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "propunerea noastră (planșele nu dau cota); A.03 (axa lavoarului la 37,5)",
     "nota": "La 10 cm spre colț de axa lavoarului, la 55 cm, în spatele sertarului M08. Se confirmă cu bateria aleasă și cu tâmplarul."
    },
    {
     "id": "R4",
     "strat": "sanitare",
     "tip": "racord",
     "punct": true,
     "fluid": "rece",
     "nume": "Apă rece la lavoar",
     "x": 47.5,
     "h": 55,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "propunerea noastră (planșele nu dau cota); A.03 (axa lavoarului la 37,5)",
     "nota": "La 10 cm spre coloana cu rafturi de axa lavoarului, la 55 cm. Vezi R3."
    },
    {
     "id": "R5",
     "strat": "sanitare",
     "tip": "racord",
     "punct": true,
     "fluid": "scurgere",
     "diam": 4,
     "nume": "Scurgerea lavoarului",
     "x": 37.5,
     "h": 50,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "propunerea noastră (planșele nu dau cota); A.03 (axa lavoarului la 37,5)",
     "nota": "În axa lavoarului, la 50 cm; sifonul trece prin decupajul sertarului."
    },
    {
     "id": "R6",
     "strat": "sanitare",
     "tip": "racord",
     "punct": true,
     "fluid": "rece",
     "nume": "Apă rece la bateria dușului",
     "x": 196.5,
     "h": 105,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.27 B01 (axa bateriei, cotat)",
     "nota": "La corpul încastrat al bateriei S4; poziția racordurilor pe corp depinde de modelul ales."
    },
    {
     "id": "R7",
     "strat": "sanitare",
     "tip": "racord",
     "punct": true,
     "fluid": "calda",
     "nume": "Apă caldă la bateria dușului",
     "x": 196.5,
     "h": 105,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.27 B01 (axa bateriei, cotat)",
     "nota": "Vezi R6."
    },
    {
     "id": "R8",
     "strat": "sanitare",
     "tip": "racord",
     "punct": true,
     "fluid": "scurgere",
     "diam": 5,
     "nume": "Scurgerea rigolei",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.03 (rigola); modelul nu e ales",
     "nota": "Ieșirea rigolei S6, după modelul ales; spre coloana din ghena GH1, lângă capătul de nord al rigolei."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Priza P1 e desenată în A.06 în dreptul oglinzii, la ~66 cm de colț, iar oglinda OG1 acoperă în A.27 zona dintre 20 și 75 cm, până la placă. Săgeata „integrată în mobilier” din A.06 arată coloana cu rafturi M09-R. Locul prizei se hotărăște înainte de pozarea dozei.",
     "sursa": "A.06, A.27 B01",
     "ids": [
      "P1",
      "OG1",
      "M09-R"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Capul de duș S5: A.03 îl cotează la 36,5 cm de masca de nord, A.27 îl desenează la 41,5 (în axa bateriei S4), agățat de tavanul fals, iar A.28 îl arată pe braț din perete. Țeava spre cap se pozează în mască înainte de plăci.",
     "sursa": "A.03, A.27 B01, A.28",
     "ids": [
      "S5",
      "S4"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Pragul PD1 de 5 cm din A.27 nu se potrivește cu un duș walk-in. De el depind hidroizolația, panta spre rigolă și profilul de jos al peretelui de sticlă S8.",
     "sursa": "A.03, A.04, A.27 B01 și B03",
     "ids": [
      "PD1",
      "S8",
      "S6"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Planșele nu dau înălțimea niciunui racord. La WC sunt pe cadrul Laufen (fișa produsului). La lavoar propunem apa la 55 cm și scurgerea la 50, în spatele sertarului. Se stabilesc cu instalatorul înainte de mască și de faianță.",
     "sursa": "A.03, A.27 B01",
     "ids": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5"
     ]
    },
    {
     "nivel": "info",
     "text": "Bateria lavoarului: A.03, A.27 și A.28 arată o baterie cu 3 găuri în blat. Lista de achiziții are Cersanit Zen S951-595, aceeași ca în GS: de verificat că modelul are 3 găuri înainte de găurirea blatului.",
     "sursa": "A.03, A.27 B01, A.28, specs/04",
     "ids": [
      "S10",
      "F3"
     ]
    },
    {
     "nivel": "info",
     "text": "Faianța STR și riflajul: fâșia F2 (fond alb cu dungi) e Sand Moon STR, iar M09 (fond bej cu dungi) e mobilier din MDF P751. E citirea noastră pentru întrebarea F2.",
     "sursa": "A.27 B01, A.28, analiza/11 F2",
     "ids": [
      "F2",
      "M09-P"
     ]
    },
    {
     "nivel": "info",
     "text": "În duș, rosturile pereților nu continuă rosturile pardoselii: gresia are rost la 36,5 cm de masca de nord (A.04), faianța de pe masca WC la 41,5 (A.27).",
     "sursa": "A.04, A.27 B01",
     "ids": [
      "F4",
      "S6"
     ]
    },
    {
     "nivel": "info",
     "text": "Ghena din colțul N-V (planul tavanului, GH1), cu coloanele de apă și canalizare, e chiar lângă rigolă și WC: scurgerile R2 și R8 merg acolo. Accesul la robinetele de pe coloane după placare nu e desenat.",
     "sursa": "A.01, A.03, stare_actuala/baie 1",
     "ids": [
      "R2",
      "R8",
      "F4"
     ]
    }
   ]
  }
 ],
 "tavan": {
  "id": "T",
  "tip": "tavan",
  "nume": "Tavanul",
  "subtitlu": "vedere de sus · placa la 250, caseta TF1 (fața la 225) peste duș, spoturile I1 și I2",
  "lungime": 161,
  "adancime": 253,
  "origine": "colțul dintre zidăria peretelui de vest și peretele spre hol",
  "nota": "x de la zidăria peretelui de vest, spre est (161 cm); h = y de la peretele spre hol, spre nord (253 cm până la zidul exterior). Masca WC (x 0–25, y 90–206), ghena (x 0–25, y 206–253) și masca dușului (y 238–253) sunt desenate. Placa la 250 cm; caseta TF1 cu fața la 225.",
  "etapa": 1,
  "elemente": [
   {
    "id": "TF1",
    "strat": "gips",
    "tip": "tavan-fals",
    "nume": "Caseta de tavan fals de deasupra dușului",
    "x": 25,
    "lat": 136,
    "h": 155,
    "inalt": 83,
    "stare": "proiect",
    "sursa": "A.05 (zona hașurată, 136 cotat, 83 măsurat); A.27 B01, B02, B03 (fața la 225, 25 sub placă, cotat); A.06",
    "nota": "Gips-carton RU, de la masca dușului (y 238) până la linia peretelui de sticlă (y 155), între masca WC și peretele de est. Fața la 225 cm. Restul băii nu are tavan fals: placa e la 250. A.05 desenează în casetă o linie la 73 cm de masca de nord, deasupra pragului."
   },
   {
    "id": "MN1",
    "strat": "gips",
    "tip": "masca",
    "nume": "Masca dușului (gips-carton RU, 15 cm)",
    "x": 25,
    "lat": 136,
    "h": 238,
    "inalt": 15,
    "stare": "proiect",
    "sursa": "A.01 („Mască raft duș”); A.03 (15, măsurat); A.27 B03 (nișa adâncă de 15, cotat)",
    "nota": "Masca din fața zidului exterior, de la pardoseală până la tavanul fals, cu nișa NI1 și golul ferestrei FE1. Hidroizolație peste ea."
   },
   {
    "id": "MS1",
    "strat": "gips",
    "tip": "masca",
    "nume": "Masca WC (gips-carton RU, 25 cm)",
    "x": 0,
    "lat": 25,
    "h": 90,
    "inalt": 116,
    "stare": "proiect",
    "sursa": "A.01 (25, cotat); A.03 (de la 90 la 206 cm de peretele spre hol, măsurat)",
    "nota": "Văzută de sus: 25 cm de la zid, de la 90 la 206 cm de peretele spre hol. Detaliile sunt pe peretele cu WC-ul."
   },
   {
    "id": "GH1",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Ghena existentă cu coloanele de apă și canalizare",
    "x": 0,
    "lat": 25,
    "h": 206,
    "inalt": 47,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.01 și A.03 (pereți de ~10 cm, golul interior ~15 × 37 cm, măsurat); stare_actuala/baie 1 (ghena deschisă, cu țevi verticale)",
    "nota": "Colțul N-V al băii. Fața dinspre duș e în planul măștii WC (x 25) și se placează (F4). În fotografii, ghena are țevi verticale de apă și o coloană de canalizare."
   },
   {
    "id": "M08",
    "strat": "mobila",
    "tip": "mobilier",
    "nume": "Mobilierul lavoarului M08 (reper)",
    "x": 0,
    "lat": 55,
    "h": 0,
    "inalt": 75,
    "finisaj": "p751",
    "stare": "proiect",
    "sursa": "A.03 (75 × ~55)",
    "nota": "Reper pentru spoturi; detaliile sunt pe peretele cu WC-ul."
   },
   {
    "id": "I1",
    "strat": "led",
    "tip": "spot",
    "nume": "Spotul I1 (aplicat, IP44)",
    "x": 64,
    "h": 120,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (I, desenat, necotat); specs/04 (spot aplicat IP44 20 W CCT, negru, CRI90, LedHome)",
    "nota": "Spot aplicat pe placă (aici nu e tavan fals), pe linia axei WC (y 120). Clapa I din IH (hol)."
   },
   {
    "id": "I2",
    "strat": "led",
    "tip": "spot",
    "nume": "Spotul I2 (aplicat, IP44)",
    "x": 124,
    "h": 120,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (I, desenat, necotat); specs/04",
    "nota": "Ca I1; între spoturi sunt 60 cm."
   },
   {
    "id": "S5",
    "strat": "sanitare",
    "tip": "sanitar",
    "obiect": "para-dus",
    "nume": "Capul de duș (ploaie)",
    "x": 52.9,
    "lat": 24,
    "h": 189.5,
    "inalt": 24,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.03 (axa la 36,5 de masca de nord, cotat; la ~40 cm de masca WC, măsurat); A.27 B01 (la 41,5)",
    "nota": "Centrul la ~65 cm de zidul de vest și la 201,5 cm de peretele spre hol (A.03). Vezi peretele cu WC-ul."
   },
   {
    "id": "VE1",
    "strat": "sanitare",
    "tip": "sanitar",
    "obiect": "ventilator",
    "nume": "Ventilator (nedesenat în baie)",
    "pozitie": "necunoscuta",
    "stare": "de-verificat",
    "sursa": "A.03 (ventilator doar în GS); specs/08 A (trecut și la baie); analiza/11 L8",
    "nota": "Planșele nu au ventilator în baie; baia are fereastra FE1, în duș. Dacă se pune, locul (caseta TF1 sau ghena) și alimentarea se hotărăsc înainte de gips-carton."
   }
  ],
  "avertismente": [
   {
    "nivel": "atentie",
    "text": "În afara dușului nu e tavan fals: cablurile spoturilor I1 și I2 și ale benzilor H1 (nișa) și H2 (oglinda) vin din hol (IH și sursa D9) prin placă, prin pereți sau prin masca WC și caseta TF1. Traseul se hotărăște înainte de tencuială și de gips-carton.",
    "sursa": "A.05, A.06, specs/04",
    "ids": [
     "I1",
     "I2",
     "TF1"
    ]
   },
   {
    "nivel": "info",
    "text": "Caseta TF1 are 25 cm (A.27: 225 și 25); legenda A.05 scrie „tavan gips-carton, grosime 10 cm”.",
    "sursa": "A.05, A.27",
    "ids": [
     "TF1"
    ]
   },
   {
    "nivel": "atentie",
    "text": "Ventilatorul: A.03 desenează ventilator numai în GS, iar specs/08 îl trece și la baie, „cotat pe A.03”. Întrebarea L8 pornește de la el.",
    "sursa": "A.03, specs/08 A, analiza/11 L8",
    "ids": [
     "VE1"
    ]
   },
   {
    "nivel": "info",
    "text": "Ghena GH1: robinetele și coloanele trebuie să rămână accesibile după placare; ușa de vizitare nu e desenată.",
    "sursa": "A.01, A.03, stare_actuala/baie 1",
    "ids": [
     "GH1"
    ]
   }
  ]
 }
};
