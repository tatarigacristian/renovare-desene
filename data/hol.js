// Holul — sursa la zi pentru desenele din desene/hol.html. Format: JSON strict după „= ”.
// Câmpurile sunt descrise în desene/README.md.
window.CAMERE = window.CAMERE || {};
window.CAMERE["hol"] = {
 "id": "hol",
 "nume": "Hol",
 "referinte": {
  "orizontal": "x: de la fața zidăriei, în colțul din stânga (privind peretele din cameră). Cotele sunt cumulate de la acest colț: se măsoară cu ruleta de la colț, nu din aproape în aproape.",
  "vertical": "h: de la pardoseala finită. Dacă pardoseala nu e pusă încă, de la reperul de nivel trasat pe perete, cu diferența până la pardoseala finită."
 },
 "inaltime": {
  "valoare": 243,
  "stare": "de-verificat",
  "nota": "Înălțimea liberă sub tavanul fals: 243 cm (placa la 250, tavan fals de 7 cm), după detaliul hol din A.05, singura cotă. A.17 și A.18 desenează fața la 242, iar legenda A.05 scrie 10 cm (fața la 240): de confirmat cu arhitecta (L6). Sub grinda GR1 rămân 205 cm."
 },
 "revizie": {
  "nr": 7,
  "data": "2026-11-03",
  "modificari": [
   "Revizia 7: benzile Hue Flux A1, A2, C1 și C2 sunt kituri de 3 m (Altex), nu de 4 m. C1 folosește tot kitul: 18 segmente, ~299 cm. Din restul de la A1 (12 segmente) se iau 7 pentru scafa din living (03.11.2026).",
   "Revizia 6: pașii de montaj animați pentru tavanul fals cu fanta de lumină (TFH) și pentru circuitul cu buton cu revenire (PUSH): I1 de pe peretele spre baie, I2, I3, D8 și D9 (02.11.2026).",
   "Revizia 5: ușile băii (U6) și GS-ului (U5) au foaia de 60 cm, ca ușile cumpărate; foaia e desenată în gol (02.11.2026).",
   "Revizia 4: lamelele RF1 acoperă acum lățimea grinzii GR1 și merg până la oglindă (x 312–360, 48 cm, 10 lamele), în loc de 17,3 cm cu 4 lamele. Sub grindă se opresc la fața ei de jos, la ~205 (02.11.2026).",
   "Masca țevii de gaz M06 (panoul din PAL Nuc Parona de la grindă) scoasă: țeava de gaz trece prin nișa din tavan și nu se mai vede (decizia din 02.11.2026). Plintele G7 și G8 devin o singură plintă, G7, de la ușa bucătăriei la ușa GS.",
   "Atenționare nouă la ușa spre bucătărie (U4): planul bucătăriei din 10/2026 mută golul cu 7,1 cm spre intrare (BC2).",
   "Prima versiune: peretele cu banca (vest, D05) și peretele cu oglinda (est, D04), din A.01, A.05–A.09 și A.17–A.20.",
   "Peretele de est e desenat în două vederi: E, de la colțul dinspre baie până la treaptă (550,9 cm), și E2, porțiunea îngustă de la intrare (140 cm), retrasă cu 20 cm.",
   "Peretele spre baie, peretele cu ușa de intrare și planul tavanului urmează."
  ]
 },
 "plan": {
  "latime": 144,
  "adancime": 690.9,
  "nota": "x de la fața zidăriei peretelui cu banca (vest), pe porțiunea unde holul are 144 cm; y de la zidăria peretelui cu ușa de intrare (sud). Holul nu e dreptunghi: are 124 cm pe primii 140 cm de la intrare, 144 cm la mijloc și 148 cm spre baie, unde peretele de vest se retrage cu 4 cm după stâlpul ST1."
 },
 "pereti": [
  {
   "id": "N",
   "nume": "Peretele spre baie",
   "subtitlu": "ușa băii, întrerupătorul IH, capetele fantei și ale măștii de gaz",
   "lungime": 148,
   "origine": "colțul N-V: fața peretelui de vest din zona de nord, la x = −4 în planul holului (4 cm mai spre vest decât în restul holului)",
   "etapa": 1,
   "plan": [
    [
     -4,
     690.9
    ],
    [
     144,
     690.9
    ]
   ],
   "elemente": [
    {
     "id": "M07",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Dulapul M07 (MSR și uscător), văzut din lateral",
     "x": 0,
     "lat": 63.6,
     "h": 0,
     "inalt": 240,
     "stare": "proiect",
     "finisaj": "bej",
     "sursa": "A.17 D05 (240); A.18 M07 (61,8 + 1,8); A.06 (corpurile între y 540,9 și 690,9)",
     "nota": "Dulapul de pe peretele de vest ajunge până la acest perete; de aici i se vede latura. Adâncimea: 61,8 cm corpul și 1,8 cm fronturile, adică 63,6 cm de la peretele de vest (x ≈ 59,6 în plan), cu 0,6 cm peste golul ușii băii. Detaliile sunt pe peretele de vest.",
     "adanc": 151.8,
     "vedereaPrincipala": "V"
    },
    {
     "id": "U6",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa băii (cu tocul și pervazul)",
     "x": 59.3,
     "lat": 79.4,
     "h": 0,
     "inalt": 203.7,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.05 și A.06 (golul x 59–131 în plan, tocul de 4 cm, foaia ~64 cm; necotat); A.17 D04 și D05 (golul până la 200 cm, pervazul până la 203,7); releveul (ușa existentă 65 × 205); foaia de 60: ușile cumpărate (02.11.2026)",
     "nota": "Golul din zidărie: 72 cm (de la 63 la 135 cm de colț) și 200 cm înălțime de la pardoseala finită (A.17). Tocul de 4 cm e în gol, pe ambele laturi. Pervazul e desenat ca la ușile din A.17 D04: ~3,7 cm de fiecare parte a golului, până la 203,7 cm. Se deschide spre baie, cu balamalele pe latura de est (A.06). Pe latura de vest dulapul M07 ajunge până la gol; pe latura de est întrerupătorul IH e la 6,5 cm de colț. Foaia are 60 cm: ușile cumpărate pentru băi (02.11.2026). Cu tocul de 4 cm pe fiecare parte, ușa are ~68 cm la exterior; golul de ~72 din planșe lasă ~2 cm pe fiecare parte pentru montaj. Releveul din 2021 dă 65: dacă golul real e de 65, ușa nu încape și golul trebuie lărgit cu ~3–5 cm. Se măsoară golul înainte de montaj.",
     "foaie": {
      "lat": 60,
      "inalt": 196
     }
    },
    {
     "id": "I1",
     "strat": "electric",
     "tip": "intrerupator",
     "nume": "Întrerupătorul IH (baie: spoturile I și banda H)",
     "x": 141.5,
     "h": 110,
     "punct": true,
     "stare": "de-verificat",
     "sursa": "A.06 (IH, cota 6,5 de la peretele de est); Necesar prize și întrerupătoare (întrerupător dublu, baie); specs/04 (29.10.2026: Push-DIM)",
     "nota": "Axa la 6,5 cm de colțul cu peretele de est (A.06). Clapa I aprinde spoturile din baie. Clapa H e buton cu revenire pentru sursa Push-DIM a benzilor H (D9, în tavanul fals din hol), cu fir de comandă până la sursă. Înălțimea nu e dată în A.06: 110 cm e presupusă. Placa (~8 cm) ajunge la ~2,5 cm de colț și poate atinge pervazul ușii băii.",
     "detaliu": "PUSH"
    },
    {
     "id": "G11",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm (între ușa băii și colț)",
     "x": 138.7,
     "lat": 9.3,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "alb",
     "coteH": false,
     "sursa": "A.09 (observația: în hol, plintă duropolimer 8 cm); specs/07",
     "nota": "Doar pe bucata de perete dintre pervazul ușii și colțul cu peretele de est. În spatele dulapului M07 nu se pune. Se montează după mobilier (A.09). A.09 cere 8 cm; produsul din listă are 6 cm (analiza/07, întrebarea A1)."
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavanul fals",
     "x": 0,
     "lat": 113,
     "h": 243,
     "inalt": 7,
     "stare": "de-verificat",
     "sursa": "detaliul tavanului fals din hol, A.05 (7 cm); A.17 D04 și D05 (ajunge la acest perete; desenat la 242); A.18 D05",
     "nota": "Fața la ~243 cm, placa la 250 (detaliul A.05: 7 cm; A.17 și A.18 o desenează la 242). Ajunge până la perete. Același cod pe toți pereții și pe planul tavanului.",
     "adanc": 682
    },
    {
     "id": "SC1",
     "strat": "gips",
     "tip": "scafa",
     "nume": "Capătul fantei de 15 cm (banda C1)",
     "x": 113,
     "lat": 15,
     "h": 243,
     "inalt": 7,
     "stare": "proiect",
     "sursa": "A.05 (113 + 15 + 20)",
     "nota": "Aici tavanul fals lipsește până la placă. Profilul benzii C1 se termină la acest perete, pe latura de vest a fantei. Vezi planul tavanului.",
     "adanc": 312,
     "detaliu": "TFH"
    },
    {
     "id": "MG1",
     "strat": "gips",
     "tip": "masca",
     "nume": "Capătul măștii țevii de gaz",
     "x": 128,
     "lat": 20,
     "h": 243,
     "inalt": 7,
     "stare": "proiect",
     "sursa": "A.05 (20; detaliul tavanului fals din hol)",
     "nota": "Masca de 20 cm, lipită de peretele de est, ajunge la acest perete. Vezi planul tavanului.",
     "adanc": 312,
     "detaliu": "TFH"
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Dulapul M07 ajunge la x ≈ 59,6 în plan (61,8 + 1,8 de la peretele de vest, A.18 M07), iar golul ușii băii începe la x = 59 (A.05, A.06): pe latura de vest nu rămâne loc pentru pervaz, iar frontul dulapului acoperă 0,6 cm din toc. De hotărât cu arhitecta: dulap mai puțin adânc sau ușă fără pervaz pe această latură.",
     "sursa": "A.05, A.06, A.17 D05, A.18 M07",
     "ids": [
      "M07",
      "U6"
     ]
    },
    {
     "nivel": "atentie",
     "text": "IH e la 6,5 cm de peretele de est (A.06). Cu o placă de ~8 cm rămân ~2,5 cm până la colț; dacă pervazul ușii băii iese ~3,7 cm din gol, ca la ușile din A.17 D04, placa îl atinge. Pe peretele de est, la 15 cm de colț, sunt întrerupătorul ABC și o priză la h = 30 (A.06).",
     "sursa": "A.06, A.17 D04",
     "ids": [
      "I1",
      "U6"
     ]
    }
   ]
  },
  {
   "id": "E",
   "nume": "Peretele cu oglinda",
   "subtitlu": "ușile spre dormitorul mare, bucătărie și GS, oglinda M05 · D04 în A.17",
   "lungime": 550.9,
   "origine": "colțul N-E, cu peretele spre baie",
   "etapa": 1,
   "plan": [
    [
     144,
     690.9
    ],
    [
     144,
     140
    ]
   ],
   "elemente": [
    {
     "id": "GR1",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda de beton care traversează holul (văzută în secțiune)",
     "x": 312,
     "lat": 25,
     "h": 205,
     "inalt": 45,
     "pozitie": "aprox",
     "stare": "proiect",
     "sursa": "A.01 și A.05 (140 + 213,9 + 25, cotat); A.17 D05 (205, cotat)",
     "nota": "Trece de la peretele de vest la acesta. Pe x e cotată: 312–337 de la colțul N-E. Fața de jos la ~205 cm, măsurată pe A.17: de măsurat acum. Tavanul fals TF1 se oprește la fețele ei. Sub ea, pe acest perete, stau primele cinci lamele RF1, până la fața ei de jos. Masca M06 din planșe, centrată pe grindă, nu se mai face: țeava de gaz nu mai coboară pe grindă (decizia din 02.11.2026). Același cod pe peretele de vest și pe planul tavanului.",
     "adanc": 144
    },
    {
     "id": "U3",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa spre dormitorul mare (cu tocul și pervazul)",
     "x": 26.3,
     "lat": 87.4,
     "h": 0,
     "inalt": 203.7,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.17 D04 (pervazul 26,3–113,7 și 203,7; foaia 72 × 196; necotat); A.01 și A.06 (golul 30–110, măsurat; sensul de deschidere); releveul din 2021 (85 × 205)",
     "nota": "Golul din zidărie ~30–110 (80 cm) în A.01; releveul scrie 85 × 205. Pervazul are ~87,4 cm și urcă până la ~203,7 cm; foaia ~72 cm. Se deschide spre dormitor, cu balamalele în dreapta (spre ușa bucătăriei). Golul există: se măsoară acum, înainte de comanda ușii."
    },
    {
     "id": "U4",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa spre bucătărie (cu tocul și pervazul)",
     "x": 191.1,
     "lat": 87.4,
     "h": 0,
     "inalt": 203.7,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.17 D04 (pervazul 191,1–278,5 și 203,7; foaia 72 × 196; necotat); A.01 și A.06 (golul 194,8–274,8, măsurat; sensul de deschidere); releveul din 2021 (75 × 205)",
     "nota": "Golul din zidărie ~194,8–274,8 (80 cm) în A.01; releveul scrie 75 × 205. Foaia ~72 cm. Se deschide spre bucătărie, cu balamalele în stânga (spre dormitor). Golul există: se măsoară acum."
    },
    {
     "id": "U5",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa spre grupul sanitar (cu tocul și pervazul)",
     "x": 435.2,
     "lat": 79.4,
     "h": 0,
     "inalt": 203.7,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.17 D04 (pervazul 435,2–514,6 și 203,7; foaia 64 × 196; necotat); A.01 și A.06 (golul 438,9–510,9, măsurat; sensul de deschidere); releveul din 2021 (65 × 205); foaia de 60: ușile cumpărate (02.11.2026)",
     "nota": "Golul din zidărie ~438,9–510,9 (72 cm) în A.01; releveul scrie 65 × 205. În A.17 foaia are ~64 cm. Se deschide spre GS, cu balamalele în stânga (spre oglindă). Între lamela RF2 și pervaz rămân ~2,8 cm: un pervaz mai lat de 5 cm atinge lamela. Foaia are 60 cm: ușile cumpărate pentru băi (02.11.2026). Cu tocul de 4 cm pe fiecare parte, ușa are ~68 cm la exterior; golul de ~72 din planșe lasă ~2 cm pe fiecare parte pentru montaj. Releveul din 2021 dă 65: dacă golul real e de 65, ușa nu încape și golul trebuie lărgit cu ~3–5 cm. Se măsoară golul înainte de montaj.",
     "foaie": {
      "lat": 60,
      "inalt": 196
     }
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavan fals din gips-carton (7 cm)",
     "x": 0,
     "lat": 550.9,
     "h": 243,
     "inalt": 7,
     "stare": "de-verificat",
     "sursa": "A.05, detaliul hol (7 cm, cotat; placa 1,25 cm); A.17 D04, D05 și A.18 (fața desenată la 242, necotat); legenda A.05 (10 cm)",
     "eticheta": {
      "x": 150,
      "h": 252
     },
     "nota": "Fața la 243 cm: placa de beton la 250 (A.01, Hu 2,50) minus 7 cm (detaliul holului din A.05). A.17 și A.18 o desenează la 242, legenda A.05 scrie 10 cm: de confirmat (L6). Se oprește la fețele grinzii GR1 (x 312 și 337). Pe primii 20 cm de lângă acest perete tavanul fals ascunde țeava de gaz (A.05), apoi urmează fanta de 15 cm cu banda C. Același cod pe toți pereții și pe planul tavanului.",
     "adanc": 124
    },
    {
     "id": "G5",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 0,
     "lat": 26.3,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "alb",
     "sursa": "A.09 (în hol: plintă duropolimer 8 cm); A.17 D04 (linia de la 8 cm, întreruptă la uși și la M06)",
     "nota": "Din colțul N-E până la pervazul ușii U3. Se montează după mobilier (A.09)."
    },
    {
     "id": "G6",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 113.7,
     "lat": 77.4,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "alb",
     "sursa": "A.09 (în hol: plintă duropolimer 8 cm); A.17 D04 (linia de la 8 cm, întreruptă la uși și la M06)",
     "nota": "Între pervazele ușilor U3 și U4."
    },
    {
     "id": "G7",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 278.5,
     "lat": 156.7,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "alb",
     "sursa": "A.09 (în hol: plintă duropolimer 8 cm); A.17 D04 (linia de la 8 cm, întreruptă la uși și la M06); decizia din 02.11.2026 (fără M06)",
     "nota": "De la pervazul ușii U4 până la pervazul ușii U5, dintr-o bucată: în A.17 se întrerupea la masca M06, care nu se mai face. Trece pe sub lamelele RF1, RF2 și pe sub oglinda M05: lamelele pornesc de pe plintă (A.09: «riflajele se termină în plintă»)."
    },
    {
     "id": "G9",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 514.6,
     "lat": 36.3,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "alb",
     "sursa": "A.09 (în hol: plintă duropolimer 8 cm); A.17 D04 (linia de la 8 cm, întreruptă la uși și la M06)",
     "nota": "De la pervazul ușii U5 până la colțul treptei. Continuă pe latura treptei (20 cm, cu fața spre nord) și pe peretele E2 (G10)."
    },
    {
     "id": "RF1",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Lamele verticale de sub grinda GR1 până la oglindă (10 × 2,4 cm)",
     "x": 312,
     "lat": 48,
     "h": 8,
     "inalt": 235,
     "decupaje": [
      {
       "x": 312,
       "lat": 25,
       "sus": 205
      }
     ],
     "adanc": 3,
     "lamela": 2.4,
     "rost": 2.6,
     "stare": "de-verificat",
     "finisaj": "bej",
     "sursa": "A.17 D04 (17,3 și 2,4, cotat; pasul de 5 cm, măsurat); A.06 și A.08 (secțiunea 2,4 × 3 cm, măsurat)",
     "nota": "Lamelele acoperă lățimea grinzii GR1 și merg până la oglindă: de la x 312 (fața stângă a grinzii) la x 360, 48 cm (decizia din 02.11.2026; în A.17 erau patru lamele pe 17,3 cm, la x 342,7). Zece lamele de 2,4 cm, cu rosturi de ~2,67 cm (pas ~5,07 cm), adânci de ~3 cm, toate de pe plintă (8). Primele cinci, sub grindă (x 312–337), se opresc la fața ei de jos (~205, de măsurat): 197 cm. Celelalte cinci, între grindă și oglindă, merg până la tavanul fals (A.17: 8–242; cu tavanul la 243, 235 cm). Culoarea din A.17 e ca fronturile U156 Bej nisip. Nu sunt benzi LED: A.06 nu are marcaj de LED aici, iar specs/06 G nu are bandă la oglinda holului. Materialul și prinderea: de confirmat cu arhitecta."
    },
    {
     "id": "M05",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Oglinda holului, 70 × 232 (M05)",
     "x": 360,
     "lat": 70,
     "h": 8,
     "inalt": 232,
     "adanc": 1.5,
     "stare": "proiect",
     "sursa": "A.17 D04 (70 × 232, cotat; la 17,3 de prima lamelă); A.08 (M05); A.01 și A.06 (plan)",
     "nota": "De la 8 cm (deasupra plintei) până la 240 cm. Fața la ~2 cm de perete (A.06, măsurat). Fără LED. Nu apare în specs/04, iar specs/09 o trece ca «corp de mobilier hol»: de pus pe lista de comenzi. Prinderea pe perete nu e desenată.",
     "finisaj": "oglinda"
    },
    {
     "id": "RF2",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Lamela din dreapta oglinzii (2,4 cm)",
     "x": 430,
     "lat": 2.4,
     "h": 8,
     "inalt": 235,
     "adanc": 3,
     "lamela": 2.4,
     "rost": 2.6,
     "stare": "de-verificat",
     "finisaj": "bej",
     "sursa": "A.17 D04 (2,4, cotat); A.06 și A.08 (2,4 × 3 cm, măsurat)",
     "nota": "La fel ca lamelele RF1, lipită de marginea dreaptă a oglinzii. Până la pervazul ușii U5 rămân ~2,8 cm."
    },
    {
     "id": "I1",
     "strat": "electric",
     "tip": "intrerupator",
     "nume": "Întrerupător triplu cap-scară ABC (luminile holului)",
     "x": 15,
     "h": 110,
     "punct": true,
     "stare": "de-verificat",
     "sursa": "A.06 (15 de la peretele spre baie); Necesar prize și întrerupătoare, poz. 7; specs/06 G6",
     "nota": "Clapele A (benzile din mobilierul M04 și M07), B (spoturile) și C (fanta din tavan). Pereche cap-scară cu ABC de lângă ușa de intrare (peretele de vest, tot la 15 cm). Doză adâncă, pentru Hue Wall Switch Module (specs/06 G6). Înălțimea nu e dată în A.06: 110 cm e presupusă, ca în living. Pe aceeași axă cu priza P1."
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză simplă",
     "x": 15,
     "h": 30,
     "punct": true,
     "stare": "proiect",
     "sursa": "A.06 (15 de la peretele spre baie, h = 30); Necesar prize și întrerupătoare, poz. 1 (hol ×2)",
     "nota": "Sub întrerupătorul I1."
    },
    {
     "id": "I2",
     "strat": "electric",
     "tip": "intrerupator",
     "nume": "Întrerupător FG (luminile bucătăriei)",
     "x": 289.8,
     "h": 110,
     "punct": true,
     "stare": "de-verificat",
     "sursa": "A.06 (15 de la golul ușii bucătăriei); Necesar prize și întrerupătoare, poz. 6; specs/04 (Push-DIM, 29.10.2026)",
     "nota": "Clapa F: spoturile din bucătărie (clapă obișnuită). Clapa G: banda de sub corpurile suspendate, cu sursă Push-DIM, deci buton cu revenire; din doză se trage un fir de comandă până la sursă (specs/04). x: 15 cm de la marginea golului ușii (pervazul se termină la ~278,5). Înălțimea nu e dată în A.06: 110 cm e presupusă.",
     "detaliu": "PUSH"
    },
    {
     "id": "I3",
     "strat": "electric",
     "tip": "intrerupator",
     "nume": "Întrerupător DE (luminile din GS)",
     "x": 525.9,
     "h": 110,
     "punct": true,
     "stare": "de-verificat",
     "sursa": "A.06 (15 de la golul ușii GS); Necesar prize și întrerupătoare, poz. 6; specs/04 (Push-DIM, 29.10.2026)",
     "nota": "Clapele D și E: benzile din GS, pe o singură sursă Push-DIM (specs/04), deci buton cu revenire; cu o singură sursă, un buton aprinde ambele benzi. Sursa stă în tavanul fals din hol. x: 15 cm de la marginea golului ușii GS. Înălțimea nu e dată în A.06: 110 cm e presupusă.",
     "detaliu": "PUSH"
    },
    {
     "id": "P2",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză simplă",
     "x": 535.9,
     "h": 30,
     "punct": true,
     "stare": "proiect",
     "sursa": "A.06 (15 de la treapta peretelui, h = 30); Necesar prize și întrerupătoare, poz. 1 (hol ×2)",
     "nota": "La 15 cm de colțul treptei (x = 550,9)."
    }
   ],
   "avertismente": [
    {
     "nivel": "info",
     "text": "Fața acestui perete e la x = 144 de la colțul N-E până la y = 140 (550,9 cm). Acolo peretele face o treaptă de 20 cm spre hol: ultimii 140 cm până la ușa de intrare sunt la x = 124 (vederea E2). Cota de 148 din A.01 vine de la peretele de vest (fața lui e la x = −4 de la y = 363,9 spre baie); fața de est e dreaptă până la baie. Latura treptei (20 cm, cu fața spre nord) nu apare în nicio vedere; plinta trece și pe ea.",
     "sursa": "A.01, A.06, A.08 (vectori, 02.11.2026); A.17 D04",
     "ids": [
      "G9"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Înălțimea tavanului fals din hol: detaliul holului din A.05 cotează 7 cm (fața la 243); A.17 (D04, D05) și A.18 îl desenează la 242 (8 cm); legenda A.05 scrie 10 cm (240). Desenul folosește 243, ca în living. Mobilierul de 240 (M07) și oglinda (până la 240) încap în toate trei variantele. De confirmat (L6).",
     "sursa": "A.05, A.17, A.18",
     "ids": [
      "TF1"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Elementele de 2,4 cm de lângă oglindă (A.17 D04: 2,4 | 70 | 2,4) sunt lamele de ~2,4 × 3 cm, nu benzi LED: A.06 nu are marcaj de LED aici, iar specs/06 G și specs/04 nu au bandă la oglinda holului. Literele de iluminat din hol sunt A (mobilier), B (spoturi) și C (fanta din tavan). Dacă se vrea lumină la oglindă, e o bandă nouă, cu sursă și cablu: de întrebat înainte de pozarea cablurilor.",
     "sursa": "A.06, A.17 D04, specs/04, specs/06 G2",
     "ids": [
      "RF1",
      "RF2",
      "M05"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Masca M06 din A.17 D04 (panoul din PAL Nuc Parona de la grindă) nu se mai face (decizia din 02.11.2026): țeava de gaz trece acum prin nișa din tavan și nu se mai vede pe perete. Între ușa bucătăriei și lamelele RF1 peretele rămâne liber, iar plinta G7 merge dintr-o bucată. În tavan, fâșia de 20 cm de lângă acest perete (MG1, MG2 pe planul tavanului) trebuie să fie demontabilă și ventilată (specs/08 D). Traseul îl confirmă firma ANRE.",
     "sursa": "decizia din 02.11.2026; A.05; A.17 D04; specs/08 D; analiza/01, 4.1",
     "ids": [
      "GR1",
      "G7",
      "TF1"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Golurile ușilor: A.01 și A.06 dau ~80, ~80 și ~72 cm (dormitor, bucătărie, GS; măsurat, necotat); releveul din 2021 scrie 85, 75 și 65 cm, cu înălțimea de 205. Golurile există: se măsoară acum, înainte de comanda celor 7 uși.",
     "sursa": "A.01, A.06, A.17 D04; stare_actuala/releveu.JPG",
     "ids": [
      "U3",
      "U4",
      "U5"
     ]
    },
    {
     "nivel": "info",
     "text": "Codul M05 (oglinda) vine din săgeata din A.08. specs/09 o trece ca «corp de mobilier hol», iar oglinda și lamelele nu apar în specs/04.",
     "sursa": "A.08; specs/04; specs/09",
     "ids": [
      "M05"
     ]
    },
    {
     "nivel": "info",
     "text": "A.09 cere plintă duropolimer de 8 cm în hol, dar produsul din lista de achiziții are 6 cm (specs/07 E). Pe acest perete: ~297 cm, plus 20 cm pe latura treptei și 140 cm pe E2.",
     "sursa": "A.09; specs/07 E",
     "ids": [
      "G5",
      "G6",
      "G7",
      "G9"
     ]
    },
    {
     "nivel": "info",
     "text": "A.06 nu dă înălțimea întrerupătoarelor. I1, I2 și I3 sunt desenate la 110 cm, ca în living. x e cotat: 15 cm de la colț sau de la marginea golului ușii.",
     "sursa": "A.06",
     "ids": [
      "I1",
      "I2",
      "I3"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Planul bucătăriei din 10/2026 (A.21) mută golul ușii U4 cu 7,1 cm spre intrare: x 201,9–281,9 în loc de 194,8–274,8. Bucătăria e desenată după planul nou, holul după A.01. Dacă se confirmă (BC2), se mută U4, plinta G7 și întrerupătorul I2.",
     "sursa": "A.21 din 10/2026; A.01; analiza/11 BC2",
     "ids": [
      "U4",
      "G7",
      "I2"
     ]
    }
   ]
  },
  {
   "id": "E2",
   "nume": "Peretele îngust de la intrare",
   "subtitlu": "porțiunea îngustă de 140 cm, cu 20 cm mai în hol decât peretele cu oglinda · ultimii 140 cm din D04 (A.17)",
   "lungime": 140,
   "origine": "muchia treptei, la 140 cm de peretele de intrare",
   "etapa": 1,
   "plan": [
    [
     124,
     140
    ],
    [
     124,
     0
    ]
   ],
   "elemente": [
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavan fals din gips-carton (7 cm)",
     "x": 0,
     "lat": 131.1,
     "h": 243,
     "inalt": 7,
     "stare": "de-verificat",
     "sursa": "A.05 (8,9 de la peretele de intrare, cotat; detaliul hol: 7 cm); A.17 D04 (se oprește la 8,9 cm de peretele de intrare)",
     "eticheta": {
      "x": 40,
      "h": 252
     },
     "nota": "Fața la 243 cm (vezi TF1 pe peretele E). Se oprește la 8,9 cm de peretele ușii de intrare (A.05, cotat; A.17 la fel). Ce închide fâșia de 8,9 cm nu e desenat.",
     "adanc": 124
    },
    {
     "id": "G10",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 0,
     "lat": 140,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "alb",
     "sursa": "A.09 (în hol: plintă duropolimer 8 cm); A.17 D04 (linia de la 8 cm, întreruptă la uși și la M06)",
     "nota": "Pe toată porțiunea, de la muchia treptei până la colțul cu peretele de intrare. Vine de pe latura treptei (20 cm) și continuă pe peretele de intrare. Se montează după mobilier (A.09)."
    }
   ],
   "avertismente": [
    {
     "nivel": "info",
     "text": "Fața acestei porțiuni e la x = 124, cu 20 cm mai în hol decât peretele E. În stânga e muchia exterioară a treptei (y = 140); în dreapta, colțul cu peretele de intrare, unde golul ușii de intrare începe la 14,5 cm (A.01). A.17 D04 desenează porțiunea în continuarea peretelui E, la x 550,9–690,9. Planșele nu pun nimic pe ea în afară de plintă.",
     "sursa": "A.01, A.06, A.17 D04",
     "ids": [
      "G10"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Tavanul fals se oprește la 8,9 cm de peretele de intrare (A.05, cotat; A.17). Planșele nu arată ce e în fâșia de 8,9 cm (grindă, glaf sau placa la vedere): de întrebat.",
     "sursa": "A.05, A.17 D04",
     "ids": [
      "TF1"
     ]
    }
   ]
  },
  {
   "id": "S",
   "nume": "Peretele cu ușa de intrare",
   "subtitlu": "ușa de intrare; tabloul electric și interfonul existente",
   "lungime": 124,
   "origine": "colțul S-E: fața peretelui de est din porțiunea de la intrare, la x = 124 în planul holului",
   "etapa": 1,
   "plan": [
    [
     124,
     0
    ],
    [
     0,
     0
    ]
   ],
   "elemente": [
    {
     "id": "U7",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa de intrare în apartament (cu tocul și pervazul)",
     "x": 10.8,
     "lat": 102.4,
     "h": 0,
     "inalt": 203.7,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.05 și A.06 (golul x 14,5–109,5 în plan, foaia ~87 cm; necotat); A.17 D04 și D05 (golul până la 200 cm, pervazul până la 203,7); releveul (85 × 205); analiza/05 C6",
     "nota": "Golul din zidărie are 95 cm, centrat pe porțiunea de 124 cm (14,5 cm de fiecare parte), și 200 cm înălțime de la pardoseala finită (A.17). Pervazul e desenat ca la ușile interioare din A.17 D04 (~3,7 cm de fiecare parte, până la 203,7 cm); la o ușă de intrare nouă poate fi altfel. Ușa se deschide spre hol, cu balamalele pe latura de est (în stânga, privind din hol); deschisă, foaia de ~87 cm stă paralel cu peretele de est. Releveul dă ușa existentă de 85 × 205. Ușa de intrare nu e în proiect (analiza/05, C6): se decide separat."
    },
    {
     "id": "G12",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm (latura de est a ușii)",
     "x": 0,
     "lat": 10.8,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "alb",
     "coteH": false,
     "sursa": "A.09 (observația: în hol, plintă duropolimer 8 cm); specs/07",
     "nota": "Între colț și pervazul ușii. A.09 cere 8 cm; produsul din listă are 6 cm (analiza/07, întrebarea A1)."
    },
    {
     "id": "G13",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm (latura de vest a ușii)",
     "x": 113.2,
     "lat": 10.8,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "finisaj": "alb",
     "coteH": false,
     "sursa": "A.09 (observația: în hol, plintă duropolimer 8 cm); specs/07",
     "nota": "Între pervazul ușii și colțul cu peretele de vest."
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavanul fals (marginea, la 8,9 cm în fața peretelui)",
     "x": 0,
     "lat": 124,
     "h": 243,
     "inalt": 7,
     "stare": "de-verificat",
     "sursa": "A.05 (8,9; detaliul tavanului fals din hol: 7 cm); A.17 D04 și D05 (marginea la 8,9 cm de perete)",
     "nota": "Tavanul fals nu atinge acest perete: marginea lui e la 8,9 cm în fața peretelui, iar fâșia dintre ele rămâne deschisă până la placă (FS pe planul tavanului). Fața la ~243 cm (A.17 o desenează la 242).",
     "adanc": 682
    },
    {
     "id": "TE",
     "strat": "electric",
     "tip": "cutie",
     "nume": "Tabloul electric existent",
     "x": 56,
     "lat": 14,
     "h": 218,
     "inalt": 26,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "poza stare_actuala/hol/25d6e1e1-4e53-4ac2-8c8f-da8676681777.jpg (existent; poziția și mărimea estimate pe poză); specs/06 E (tablou nou cu diferențial)",
     "nota": "Azi e deasupra ușii, centrat pe ea, cu marginea de sus la ~6 cm sub tavanul actual (estimat pe poză, de măsurat). Proiectul nu-l desenează. Specs/06 cere tablou nou cu diferențial, pentru ~12–14 circuite, mai mare decât cel existent; între pervazul ușii (~204 cm) și tavanul fals (243) rămân ~39 cm. Locul tabloului nou: de hotărât cu arhitecta și cu electricianul."
    },
    {
     "id": "INT",
     "strat": "electric",
     "tip": "cutie",
     "nume": "Interfonul existent",
     "x": 113.5,
     "lat": 9,
     "h": 128,
     "inalt": 20,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "poza stare_actuala/hol/25d6e1e1-4e53-4ac2-8c8f-da8676681777.jpg (existent; poziția estimată pe poză)",
     "nota": "Azi e pe bucata de perete de la vest de ușă, la ~6 cm de colț, cu mijlocul la ~138 cm (estimat pe poză, de măsurat). Proiectul nu-l desenează. Cablul lui se păstrează la refacerea instalației; rămâne aici sau se mută: de hotărât."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Tabloul electric nu apare în proiect (A.06, A.17). Cel existent e deasupra ușii de intrare, până aproape de placă, peste nivelul tavanului fals (243). Tavanul fals se oprește la 8,9 cm de acest perete (A.05, A.17): fâșia poate fi lăsată pentru tablou și cablurile lui, dar planșele nu o spun. Tabloul nou (specs/06) e mai mare: locul lui se stabilește înainte de traseele electrice.",
     "sursa": "A.05, A.06, A.17, specs/06, poza din stare_actuala/hol",
     "ids": [
      "TE",
      "TF1"
     ]
    },
    {
     "nivel": "info",
     "text": "Golul ușii de intrare are 95 cm în A.05 și A.06; releveul dă ușa existentă de 85 × 205, iar A.17 desenează golul până la 200 cm de la pardoseala finită. Interfonul nu apare în proiect. Întrerupătorul ABC de la intrare e pe peretele de vest, la 15 cm de acest perete (A.06), nu pe acesta.",
     "sursa": "A.05, A.06, A.17, releveul, analiza/05 C6",
     "ids": [
      "U7",
      "INT"
     ]
    }
   ]
  },
  {
   "id": "V",
   "nume": "Peretele cu banca",
   "subtitlu": "ușa spre dormitorul mic, mobilierul M04 (bancă, riflaj, dulap, coloane), ușa spre living, dulapul M07 cu MSR și uscător · D05 în A.10 și A.17",
   "lungime": 690.9,
   "origine": "colțul S-V, cu peretele ușii de intrare (fața zidăriei, x = 0 în planul holului)",
   "etapa": 1,
   "plan": [
    [
     0,
     0
    ],
    [
     0,
     690.9
    ]
   ],
   "elemente": [
    {
     "id": "U1",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa spre dormitorul mic (cu tocul și pervazul)",
     "x": 84.2,
     "lat": 97.4,
     "h": 0,
     "inalt": 203.7,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01 (golul 87,9–177,9, măsurat pe vectori); A.17 D05 (pervaz 84,2–181,6, foaia 82 × 196, măsurat); A.06",
     "nota": "Golul din zidărie 90 cm (87,9–177,9), tocul 4 cm în gol, foaia 82 cm (91,9–173,9). Pervazul iese 3,7 cm peste zidărie de fiecare parte. Pervazul sus la ~203,7, foaia la ~196 (necotate). Se deschide spre dormitor, cu balamalele pe latura dinspre intrare (A.01, A.06). Peretele are 20 cm."
    },
    {
     "id": "ST1",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul de beton de la grindă (iese 15 cm în hol)",
     "x": 353.9,
     "lat": 40,
     "h": 0,
     "inalt": 242,
     "adanc": 15,
     "ascuns": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01 (353,9–393,9, măsurat pe vectori); A.18 M04 și A.08 (15, respectiv 19 = 15 + 4, cotat); fotografiile din stare_actuala/hol",
     "nota": "Iese 15 cm din fața peretelui (x = 0), spatele lui e la ~5 cm în zid. Fața de sud e în dreptul grinzii GR1 (353,9). La fața de nord (393,9) peretele se retrage cu 4 cm (x = −4). E ascuns de coloanele M04-R și M04-U4/U5, care stau în fața lui (40 + 1,8 cm de la fața lui). Pe partea livingului, în dreptul lui, e stâlpul ST2 din living."
    },
    {
     "id": "GR1",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda de beton care traversează holul",
     "x": 353.9,
     "lat": 25,
     "h": 205,
     "inalt": 45,
     "stare": "proiect",
     "sursa": "A.01 și A.05 (140 + 213,9 + 25, cotat); A.17 D05 (205, cotat)",
     "nota": "Lată 25 cm, fața de jos la 205 cm, placa la 250. Traversează holul de la acest perete la peretele de est și e continuarea grinzii GR1 de pe peretele TV din living (fața ei dinspre living la 378,9). Tavanul fals se oprește pe ambele laturi ale ei; sub ea stă coloana deschisă M04-R (h 0–205).",
     "adanc": 144
    },
    {
     "id": "U2",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa spre living (U1 din living, cu tocul și pervazul)",
     "x": 420.2,
     "lat": 97.4,
     "h": 0,
     "inalt": 203.7,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01 (golul 423,9–513,9; în living 45 + 95 de la fața pilastrului); A.17 D05 (pervaz 420,2–517,6, foaia 82, măsurat); living.js U1 (435–530)",
     "nota": "Golul din zidărie 90 cm (423,9–513,9), foaia 82 cm (427,9–509,9). Spre hol pervazul iese 3,7 cm de fiecare parte (A.17). Spre living pervazul are 95 cm și începe la fața stâlpului ST2 din living (A.01). Se deschide spre living, cu balamalele pe latura dinspre intrare (A.01, A.06). Peretele are 20 cm."
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavan fals din gips-carton (7 cm)",
     "x": 8.9,
     "lat": 682.0,
     "h": 243,
     "inalt": 7,
     "stare": "de-verificat",
     "sursa": "A.17 D05 și A.18 D05 (fața la 242, placa la 250, măsurat); A.05 (detaliul hol: 7 cm; legenda: 10 cm; 8,9 de la peretele S)",
     "eticheta": {
      "x": 120,
      "h": 252
     },
     "nota": "Fața la 242 cm (A.17, A.18), cu 2 cm liber deasupra mobilierului de 240. Începe la 8,9 cm de peretele S (A.05, A.17). Întrerupt de grinda GR1 între 353,9 și 378,9: acolo nu e tavan fals, grinda coboară la 205. Detaliul din A.05 are 7 cm (fața la 243), legenda A.05 scrie 10 cm (întrebarea L6). Același cod pe toți pereții și pe planul tavanului. Fața tavanului fals la 243 cm (7 cm sub placa de la 250), ca în detaliul hol din A.05, singura cotă. A.17 și A.18 îl desenează la 242 (8 cm), iar legenda A.05 scrie 10 cm: de confirmat cu arhitecta (L6).",
     "adanc": 124
    },
    {
     "id": "G1",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 0,
     "lat": 84.2,
     "h": 0,
     "inalt": 8,
     "finisaj": "alb",
     "stare": "proiect",
     "sursa": "A.09 (plintă duropolimer, 8 cm; pe hol, numai pe peretele liber)",
     "nota": "De la colțul S până la pervazul ușii U1. Continuă pe peretele S până la tocul ușii de intrare (A.09). Se montează după mobilier (A.09). Sub M04 și M07 nu e plintă. A.09 cere 8 cm; produsul din listă are 6 cm (LV10)."
    },
    {
     "id": "G2",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 181.6,
     "lat": 12.3,
     "h": 0,
     "inalt": 8,
     "finisaj": "alb",
     "stare": "proiect",
     "sursa": "A.09 (plintă duropolimer, 8 cm; pe hol, numai pe peretele liber)",
     "nota": "Între pervazul ușii U1 și banca M04-B. Se montează după mobilier (A.09). Sub M04 și M07 nu e plintă. A.09 cere 8 cm; produsul din listă are 6 cm (LV10)."
    },
    {
     "id": "G3",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 405.7,
     "lat": 14.5,
     "h": 0,
     "inalt": 8,
     "finisaj": "alb",
     "stare": "proiect",
     "sursa": "A.09 (plintă duropolimer, 8 cm; pe hol, numai pe peretele liber)",
     "nota": "Între lateralul lui M04 și pervazul ușii U2. Se montează după mobilier (A.09). Sub M04 și M07 nu e plintă. A.09 cere 8 cm; produsul din listă are 6 cm (LV10)."
    },
    {
     "id": "G4",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 517.6,
     "lat": 21.5,
     "h": 0,
     "inalt": 8,
     "finisaj": "alb",
     "stare": "proiect",
     "sursa": "A.09 (plintă duropolimer, 8 cm; pe hol, numai pe peretele liber)",
     "nota": "Între pervazul ușii U2 și dulapul M07. Se montează după mobilier (A.09). Sub M04 și M07 nu e plintă. A.09 cere 8 cm; produsul din listă are 6 cm (LV10)."
    },
    {
     "id": "M04-B",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Banca M04 (corpul de jos, 2 uși)",
     "x": 193.9,
     "lat": 100,
     "h": 0,
     "inalt": 40,
     "adanc": 46,
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 50
      },
      {
       "lat": 50
      }
     ],
     "stare": "proiect",
     "sursa": "A.17 D05 (50 + 50; 40); A.18 M04 (1,8 + 44,2); A.19 (100 × 46)",
     "nota": "U156 Bej nisip, mat (A.19). Corpul are 44,2 cm adâncime, în fața panoului de 1,8 cm de pe perete: fața la 46 cm de perete. Două uși de 50 cm, cu mâner aplicat la mijlocul muchiei de sus (A.17, ~20 cm, necotat). Începe la 160 cm de grinda GR1 (50 + 50 + 60)."
    },
    {
     "id": "M04-L",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Panoul de lemn cu butoni (cuier)",
     "x": 193.9,
     "lat": 41.5,
     "h": 40,
     "inalt": 200,
     "finisaj": "nuc",
     "stare": "de-verificat",
     "sursa": "A.17 D05 (40 + 20 + 20 + 160; lățimea măsurată); A.01 (193,9–235,5, măsurat); A.19 (Nuc Parona)",
     "nota": "Panou H1775 ST12 Nuc Parona pe perete, de pe bancă (h 40) până sus (240). Lățimea ~41,5 cm e măsurată: restul până la corpul de 60 e riflajul RF. Pe el și pe riflaj sunt butonii BT1–BT3 („mâner tip buton”, A.17)."
    },
    {
     "id": "RF",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflaj vertical",
     "x": 235.4,
     "lat": 57,
     "h": 40,
     "inalt": 200,
     "lamela": 2,
     "rost": 3,
     "finisaj": "nuc",
     "stare": "de-verificat",
     "sursa": "A.17 D05 (12 lamele de 2 cm la pas de 5 cm, măsurat pe vectori); A.01 (235,5–292,5)",
     "nota": "12 lamele de 2 cm, cu 3 cm între ele (pas 5 cm), pe un panou de fond. Primele 4 lamele (235,4–252,4) se opresc la 45, deasupra pernei; celelalte merg de pe bancă (40) până la 240, în spatele sertarului M04-S1. Între ultima lamelă (292,4) și corpul de 60 (293,9) rămân 1,5 cm, unde e banda A2. Adâncimea lamelelor nu e cotată."
    },
    {
     "id": "M04-P",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Perna banchetei",
     "x": 193.9,
     "lat": 60.1,
     "h": 40,
     "inalt": 5,
     "inFata": [
      "M04-L",
      "RF"
     ],
     "stare": "proiect",
     "sursa": "A.18 D05 (60,1, cotat); A.17 (grosimea ~5 cm, măsurată)",
     "nota": "Tapițerie pe stânga băncii, 60,1 cm. Grosimea ~5 cm și materialul nu sunt cotate.",
     "adanc": 46,
     "adancAprox": true
    },
    {
     "id": "BT1",
     "strat": "mobila",
     "tip": "perforatii",
     "nume": "Butoni-cuier, rândul cu axa la 190 cm (9 buc.)",
     "x": 203.0,
     "lat": 81.8,
     "h": 189.1,
     "inalt": 1.8,
     "n": 9,
     "diam": 1.8,
     "stare": "proiect",
     "sursa": "A.18 D05 (50 de sus, 10 între rânduri, 10 între butoni, cotat); A.17 D05 („Mâner tip buton”)",
     "nota": "Trei rânduri, 26 de butoni („mâner tip buton”, folosiți ca agățători), la 10 cm unul de altul; rândul din mijloc e decalat cu 5 cm. Primul buton e la ~10 cm de marginea panoului (măsurat). Butonii din dreptul riflajului cad între lamele (rost 3 cm): se prind în panoul de fond. Diametrul desenat ~1,8 cm."
    },
    {
     "id": "BT2",
     "strat": "mobila",
     "tip": "perforatii",
     "nume": "Butoni-cuier, rândul cu axa la 185 cm (8 buc.)",
     "x": 208.0,
     "lat": 71.8,
     "h": 184.1,
     "inalt": 1.8,
     "n": 8,
     "diam": 1.8,
     "stare": "proiect",
     "sursa": "A.18 D05 (50 de sus, 10 între rânduri, 10 între butoni, cotat); A.17 D05 („Mâner tip buton”)",
     "nota": "Vezi BT1."
    },
    {
     "id": "BT3",
     "strat": "mobila",
     "tip": "perforatii",
     "nume": "Butoni-cuier, rândul cu axa la 180 cm (9 buc.)",
     "x": 203.0,
     "lat": 81.8,
     "h": 179.1,
     "inalt": 1.8,
     "n": 9,
     "diam": 1.8,
     "stare": "proiect",
     "sursa": "A.18 D05 (50 de sus, 10 între rânduri, 10 între butoni, cotat); A.17 D05 („Mâner tip buton”)",
     "nota": "Vezi BT1."
    },
    {
     "id": "M04-S1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Sertarul suspendat (consolă cu sertar)",
     "x": 253.9,
     "lat": 40,
     "h": 60,
     "inalt": 20,
     "adanc": 46,
     "finisaj": "nuc",
     "inFata": "RF",
     "stare": "proiect",
     "sursa": "A.17 D05 (40; 20 + 20 de la bancă); A.19 (40 × 46)",
     "nota": "H1775 ST12 Nuc Parona. Prins în perete prin riflaj, fără picioare: prinderea o stabilește tâmplarul. Mâner aplicat la mijlocul muchiei de sus. Trece prin fața capătului de jos al benzii A2."
    },
    {
     "id": "M04-U1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul de 60 din M04 — ușa de jos",
     "x": 293.9,
     "lat": 60,
     "h": 0,
     "inalt": 60,
     "adanc": 56.8,
     "finisaj": "bej",
     "stare": "proiect",
     "sursa": "A.17 D05 (60; 60 + 20 + 125 + 35 = 240); A.18 M04 (15 + 40 + 1,8); A.19 (55)",
     "nota": "Ușa de jos (60 × 60), mâner pe muchia din stânga, la h ~35–55. U156 Bej nisip, mat. Fața fronturilor la 56,8 cm de perete."
    },
    {
     "id": "M04-S2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul de 60 din M04 — sertar",
     "x": 293.9,
     "lat": 60,
     "h": 60,
     "inalt": 20,
     "adanc": 56.8,
     "finisaj": "bej",
     "stare": "proiect",
     "sursa": "A.17 D05 (60; 60 + 20 + 125 + 35 = 240); A.18 M04 (15 + 40 + 1,8); A.19 (55)",
     "nota": "Sertar (60 × 20), mâner la mijlocul muchiei de sus. U156 Bej nisip, mat. Fața fronturilor la 56,8 cm de perete."
    },
    {
     "id": "M04-U2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul de 60 din M04 — ușa cu bara de umerașe",
     "x": 293.9,
     "lat": 60,
     "h": 80,
     "inalt": 125,
     "adanc": 56.8,
     "finisaj": "bej",
     "stare": "proiect",
     "sursa": "A.17 D05 (60; 60 + 20 + 125 + 35 = 240); A.18 M04 (15 + 40 + 1,8); A.19 (55)",
     "nota": "Ușa cu bara de umerașe (60 × 125), mâner pe muchia din stânga, la h ~90–110. U156 Bej nisip, mat. Fața fronturilor la 56,8 cm de perete."
    },
    {
     "id": "M04-U3",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul de 60 din M04 — ușa de sus",
     "x": 293.9,
     "lat": 60,
     "h": 205,
     "inalt": 35,
     "adanc": 56.8,
     "finisaj": "bej",
     "stare": "proiect",
     "sursa": "A.17 D05 (60; 60 + 20 + 125 + 35 = 240); A.18 M04 (15 + 40 + 1,8); A.19 (55)",
     "nota": "Ușa de sus (60 × 35), fără mâner desenat. Înăuntru, propunerea de priză P4 pentru sursa benzii A2. U156 Bej nisip, mat. Fața fronturilor la 56,8 cm de perete."
    },
    {
     "id": "M04-R",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Coloana deschisă cu rafturi, sub grindă",
     "x": 353.9,
     "lat": 25,
     "h": 0,
     "inalt": 205,
     "adanc": 40,
     "finisaj": "nuc",
     "inFata": "ST1",
     "stare": "proiect",
     "sursa": "A.17 D05 (25; 205); A.18 D05 și M04 (rafturi, 40 de la fața stâlpului); A.19",
     "nota": "Fără front, interior H1775 ST12 Nuc Parona. Lateralele de 1,8; rafturi la ~59–61, ~107–109, ~155–157, capac la 203–205 (măsurat). Stă în fața stâlpului ST1 și sub grinda GR1. În compartimentul de sus, priza P1 pentru router."
    },
    {
     "id": "M04-U4",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Coloana de 25 din M04 — ușa de jos (25 × 60)",
     "x": 378.9,
     "lat": 26.8,
     "h": 0,
     "inalt": 60,
     "adanc": 41.8,
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 25
      },
      {
       "lat": 1.8
      }
     ],
     "inFata": "ST1",
     "stare": "proiect",
     "sursa": "A.17 D05 (25 + 1,8; 60 + 180); A.18 D05 (rafturi) și M04 (19 + 40 + 1,8)",
     "nota": "U156 Bej nisip, mat. Uși cu mâner pe muchia din stânga (h ~35–55 și ~90–110), rafturi la ~22–25 cm. Ultimii 1,8 cm (403,9–405,7) sunt lateralul care închide M04. Stă în fața stâlpului ST1 (până la 393,9); de acolo peretele e la x = −4, deci în spatele coloanei rămân ~19 cm."
    },
    {
     "id": "M04-U5",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Coloana de 25 din M04 — ușa de sus (25 × 180)",
     "x": 378.9,
     "lat": 26.8,
     "h": 60,
     "inalt": 180,
     "adanc": 41.8,
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 25
      },
      {
       "lat": 1.8
      }
     ],
     "inFata": "ST1",
     "stare": "proiect",
     "sursa": "A.17 D05 (25 + 1,8; 60 + 180); A.18 D05 (rafturi) și M04 (19 + 40 + 1,8)",
     "nota": "U156 Bej nisip, mat. Uși cu mâner pe muchia din stânga (h ~35–55 și ~90–110), rafturi la ~22–25 cm. Ultimii 1,8 cm (403,9–405,7) sunt lateralul care închide M04. Stă în fața stâlpului ST1 (până la 393,9); de acolo peretele e la x = −4, deci în spatele coloanei rămân ~19 cm."
    },
    {
     "id": "M07",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul M07: rafturi, robotul, MSR și uscătorul",
     "x": 539.1,
     "lat": 151.8,
     "h": 0,
     "inalt": 240,
     "adanc": 63.6,
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 1.8
      },
      {
       "lat": 30
      },
      {
       "lat": 60
      },
      {
       "lat": 60
      }
     ],
     "stare": "proiect",
     "sursa": "A.17 D05 (1,8 + 30 + 60 + 60; 240; 228 + 12); A.18 D05 (interior) și M07 (61,8 + 1,8); A.08",
     "nota": "U156 Bej nisip, mat. Lipit de peretele N. Adâncime 61,8 + 1,8 front de la fața peretelui (x = −4), deci fronturile la x ≈ 59,6. Interior (A.18): rafturi 26,4 cm lățime în spatele ușii de 30; compartimentul din mijloc 49,6 (robotul jos); compartimentul mașinilor 65 cm lățime: MSR la 0–90, uscătorul la 90–180, rafturi deasupra. Ușa de 30 are mâner vertical pe muchia din dreapta; ușile de 60 se deschid în pereche, cu mânerele la mijloc (~3 × 120 cm, desenate, necotate). Frontul din mijloc începe la 12 cm (golul M07-R)."
    },
    {
     "id": "M07-R",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Golul pentru robotul de aspirat (fără front)",
     "x": 571.1,
     "lat": 59.8,
     "h": 0,
     "inalt": 12,
     "finisaj": "alb",
     "inFata": "M07",
     "stare": "proiect",
     "sursa": "A.17 D05 („Acces robot”, 12; 228)",
     "nota": "Frontul din mijloc are 228 cm și lasă jos un gol de 12 cm pe toată lățimea lui, pentru robot. Stația robotului stă în compartimentul din mijloc (49,6 cm lățime interioară, A.18), alimentată din priza P2.",
     "adanc": 63.6,
     "adancAprox": true
    },
    {
     "id": "I1",
     "strat": "electric",
     "tip": "intrerupator",
     "nume": "Întrerupător triplu cap-scară ABC (la intrare)",
     "x": 15,
     "h": 110,
     "punct": true,
     "stare": "de-verificat",
     "sursa": "A.06 (15 de la peretele S, cotat); specs/06 A poz. 7 și G6",
     "nota": "Clapele A (benzile din mobilier, A1 și A2), B (spoturile din tavan), C (fanta tavanului). Pereche cap-scară cu ABC de lângă baie. Doză adâncă pentru Hue Wall Switch Module (specs/06 G6). Înălțimea nu e dată în A.06: 110 cm e presupusă."
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză dublă pentru router",
     "x": 366.8,
     "h": 164.7,
     "punct": true,
     "pozitie": "aprox",
     "in": "M04-R",
     "stare": "de-verificat",
     "sursa": "A.17 D05 și A.18 D05 („Priza dubla – router”, măsurat); specs/06 B",
     "nota": "În compartimentul de sus al coloanei deschise M04-R, pe axa ei, la ~165 cm (necotat). Spatele coloanei e fața stâlpului ST1 (beton): doza se îngroapă în stâlp sau se montează pe panoul din spate, cu cablul prin mobilier. Lângă ea trebuie să ajungă și cablul de internet: traseul nu e desenat."
    },
    {
     "id": "P2",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză triplă în M07, jos (robotul)",
     "x": 580.9,
     "h": 30,
     "punct": true,
     "in": "M07",
     "stare": "proiect",
     "sursa": "A.06 (70 + 40 de la peretele N; h=30, 3 doze, cotat)",
     "nota": "În compartimentul din mijloc al lui M07, în spatele frontului de 228. Pentru stația robotului de aspirat și alte aparate. Tâmplarul lasă spatele deschis sau decupaj."
    },
    {
     "id": "P3",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză triplă în M07, la h 90 (MSR și uscător)",
     "x": 620.9,
     "h": 90,
     "punct": true,
     "in": "M07",
     "stare": "proiect",
     "sursa": "A.06 (70 de la peretele N; h=90, 3 doze, cotat)",
     "nota": "Axa la 1,4 cm de peretele despărțitor dintre compartimentul din mijloc și compartimentul mașinilor (622,3–624,1, A.18): rama nu încape. La h 90 e și la îmbinarea dintre MSR și uscător, în spatele lor. De mutat în compartimentul mașinilor, într-un loc accesibil."
    },
    {
     "id": "P4",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză pentru sursa Hue a benzii A2 (propunere)",
     "x": 300,
     "h": 222,
     "punct": true,
     "pozitie": "aprox",
     "in": "M04-U3",
     "stare": "propunere",
     "sursa": "specs/06 G7 (01.11.2026: priză în mobilier, legată la firele trase pentru LED)",
     "nota": "În compartimentul de sus al dulapului de 60 (M04-U3), lângă latura dinspre riflaj. Legată la cablul CB-A2. Alimentare permanentă, nu prin clapa A (specs/06 G4). Cablul de joasă tensiune trece prin lateralul dulapului până la capătul benzii A2. Tâmplarul trebuie să știe decupajul."
    },
    {
     "id": "P5",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză pentru sursa Hue a benzii A1 (propunere)",
     "x": 556,
     "h": 222,
     "punct": true,
     "pozitie": "aprox",
     "in": "M07",
     "stare": "propunere",
     "sursa": "specs/06 G7 (01.11.2026: priză în mobilier, legată la firele trase pentru LED)",
     "nota": "În compartimentul de 30 al lui M07, sus. Legată la cablul CB-A1. Alternativa: una din prizele triple P2 sau P3, cu cablul prin peretele despărțitor. Alimentare permanentă, nu prin clapa A."
    },
    {
     "id": "CB-A2",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Capătul cablului de 230 V tras pentru banda A2",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.06 (marcajul A de lângă riflaj)",
     "nota": "Poziția reală se măsoară pe șantier. Alimentează priza P4. Nu rămâne liber în spatele mobilierului."
    },
    {
     "id": "CB-A1",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Capătul cablului de 230 V tras pentru banda A1",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.06 (marcajul A din M07, la 10 cm de capătul lui)",
     "nota": "Poziția reală se măsoară pe șantier. Alimentează priza P5."
    },
    {
     "id": "A2",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Bandă Hue Flux A2 — între riflaj și dulapul de 60",
     "x": 292.4,
     "lat": 1.5,
     "h": 40,
     "inalt": 200,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 (marcajul A, ~303, necotat); A.20 (lumina verticală între riflaj și corpul înalt, de pe bancă până sus); decizia Hue Flux din 29.10.2026 (specs/06 G1, G3)",
     "nota": "Verticală, în colțul dintre ultima lamelă a riflajului și lateralul dulapului de 60, cu lumina pe riflaj. Desenată de pe bancă (40) până sus (240), ca în A.20: ~199 cm (12 segmente Flux) dintr-un kit de 3 m. Planul de tăiere din specs/04 are ~100 cm (estimare CAD): de corectat după răspuns. A.06 pune marcajul la ~303, adică ~9,5 cm în conturul dulapului. Banda se vede: profil adânc cu difuzor opal, lățime interioară min. 17–18 mm (specs/06 G4, G6). Sursa în priza P4."
    },
    {
     "id": "A1",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Bandă Hue Flux A1 — în dulapul M07",
     "x": 548.4,
     "lat": 1.5,
     "h": 6.8,
     "inalt": 231.4,
     "ascuns": true,
     "pozitie": "aprox",
     "in": "M07",
     "stare": "de-verificat",
     "sursa": "A.06 (10 de la capătul lui M07, cotat; înălțimea lipsește); decizia Hue Flux din 29.10.2026 (specs/06 G1, G3)",
     "nota": "A.06 o pune la 10 cm de fața de sud a lui M07, adică în compartimentul de 30 cm, în spatele ușii. A.17 și A.18 nu o desenează. Înălțimea nu e dată: desenată pe toată înălțimea interioară a compartimentului (6,8–238,2), ca ipoteză; specs/04 are ~100 cm. Sursa în priza P5."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "sursa": "A.01 (cotele 124 / 144 / 148 și vectorii), A.08 (19 = 15 + 4), A.18 M04",
     "ids": [
      "ST1",
      "M04-U5"
     ],
     "text": "Fața peretelui are o treaptă de 4 cm: de la colțul S până la 393,9 e la x = 0, de la 393,9 până la peretele N e la x = −4 (holul are 148 acolo). Treapta e la fața de nord a stâlpului ST1 și e ascunsă de coloana M04-U5, deci peretele se desenează într-o singură vedere. Stâlpul ST1 iese 15 cm în hol între 353,9 și 393,9. Colțul S: holul are 124 cm (se retrage peretele de est). Colțul N: 148 cm."
    },
    {
     "nivel": "info",
     "sursa": "A.05 (8,9), A.17 D05",
     "ids": [
      "TF1"
     ],
     "text": "Tavanul fals începe la 8,9 cm de peretele S. Ce se face pe fâșia de 8,9 cm de lângă ușa de intrare (până la placă) nu e desenat."
    },
    {
     "nivel": "atentie",
     "sursa": "A.06, A.20; specs/04 (planul de tăiere), specs/06 G2; analiza/11 L2",
     "ids": [
      "A2",
      "RF"
     ],
     "text": "Banda A2: A.06 pune marcajul la ~303 cm (în conturul dulapului de 60, necotat). Randarea A.20 arată lumina în colțul dintre riflaj și corpul înalt, de pe bancă până sus (~200 cm). Planul de tăiere are ~100 cm (estimare CAD). Desenul urmează A.20. De confirmat poziția și lungimea (L2)."
    },
    {
     "nivel": "atentie",
     "sursa": "A.06 (cota 10), A.17, A.18",
     "ids": [
      "A1",
      "M07"
     ],
     "text": "Banda A1: A.06 o cotează la 10 cm de capătul lui M07, adică în compartimentul de 30 cm, în spatele ușii. A.17 și A.18 nu o desenează. Nu se știe dacă luminează rafturile (se vede doar cu ușa deschisă) și pe ce înălțime."
    },
    {
     "nivel": "atentie",
     "sursa": "A.06 (70 de la peretele N, h=90), A.18 D05 (interiorul lui M07)",
     "ids": [
      "P3",
      "M07"
     ],
     "text": "Priza P3 (h 90, la 70 cm de peretele N) cade la 1,4 cm de peretele despărțitor dintre compartimentul din mijloc și compartimentul mașinilor (622,3–624,1). Rama nu încape, iar la h 90 priza e în spatele îmbinării dintre MSR (0–90) și uscător (90–180). Se mută în compartimentul mașinilor, într-un loc accesibil cu mașinile montate."
    },
    {
     "nivel": "atentie",
     "sursa": "A.01 (ușa băii pe peretele N: golul la x 59,1–131,1, pervazul de la 55,4, măsurat pe vectori); A.18 M07 (61,8 + 1,8); A.08 (61,8 + 1,8 + 86,2 = 149,8)",
     "ids": [
      "M07"
     ],
     "text": "Colțul N: M07 ocupă peretele N de la x = −4 până la x ≈ 59,6 (fața fronturilor). Pe peretele N, golul ușii băii începe la x 59,1 și pervazul ei la 55,4 (A.01): pervazul din stânga nu are loc, iar frontul atinge golul. Frontul din dreapta al lui M07 are balamalele în colț; deschis, stă în fața ușii băii. A.08 adună 61,8 + 1,8 + 86,2 = 149,8 cm pe o lățime de 148. De rezolvat cu peretele N înainte de comanda lui M07."
    },
    {
     "nivel": "atentie",
     "sursa": "specs/08 (traseu MSR în hol), A.17, A.18",
     "ids": [
      "M07",
      "P3"
     ],
     "text": "Apa și scurgerea pentru MSR (și scurgerea condensului uscătorului, dacă e cazul) nu sunt desenate. Compartimentul mașinilor are 65 cm lățime și 61,8 cm adâncime (A.18). Traseul nou se stabilește înainte de tencuială; robinetul și sifonul rămân accesibile cu mașinile montate."
    },
    {
     "nivel": "info",
     "sursa": "A.17 D05, A.18 D05; specs/06 A și B",
     "ids": [
      "P1",
      "ST1"
     ],
     "text": "Priza P1 pentru router (~165 cm, necotată) e pe fața stâlpului ST1, în coloana deschisă M04-R. Planșele nu arată tubul pentru cablul de internet până aici. Priza dublă de router nu e în tabelul de aparataj al proiectantului (specs/06 A)."
    },
    {
     "nivel": "info",
     "sursa": "A.01, A.06, A.17",
     "ids": [
      "U1",
      "U2"
     ],
     "text": "A.01 și A.06 desenează ambele uși cu balamalele pe latura dinspre intrare, deschise spre camere. În A.17 triunghiul de pe foaie are vârful spre nord; în convenția obișnuită vârful arată balamalele. De confirmat sensul la comanda ușilor."
    },
    {
     "nivel": "info",
     "sursa": "A.17 D05, A.19; specs/07 (hol: mâner tip buton)",
     "ids": [
      "M04-U2",
      "M07"
     ],
     "text": "„Mâner tip buton” din A.17 arată butonii-cuier de pe panou (BT1–BT3). Fronturile au mânere aplicate (bucăți de ~20 cm la M04, profile verticale de ~120 cm la M07), desenate în A.17, dar necotate și fără cod de produs."
    },
    {
     "nivel": "info",
     "sursa": "specs/06 G1, G3, G4, G6, G7 (29.10 și 01.11.2026)",
     "ids": [
      "A1",
      "A2",
      "P4",
      "P5"
     ],
     "text": "A.06 și A.17 cer bandă LED 3000K. Decizia din 03.11.2026: un kit Hue Flux 3 m pentru A1 și unul pentru A2, cu sursa într-o priză din mobilier (P4, P5, propunere). Clapa A din ABC trimite doar comanda (Hue Wall Switch Module), nu taie curentul benzilor."
    }
   ]
  }
 ],
 "tavan": {
  "id": "T",
  "tip": "tavan",
  "nume": "Tavanul",
  "subtitlu": "vedere de sus, ca în A.05 · tavan fals TF1 (fața la ~243), fanta cu benzile C1 și C2, masca țevii de gaz, grinda GR1, spoturile B",
  "lungime": 144,
  "adancime": 690.9,
  "origine": "colțul dintre peretele de vest (fața din zona de mijloc, unde holul are 144 cm) și peretele cu ușa de intrare",
  "nota": "x de la fața peretelui de vest din zona de mijloc (x = 0), spre est; h = y de la fața peretelui cu ușa de intrare, spre baie (690,9 cm; A.01: 140 + 213,9 + 25 + 312). Holul are 124 cm la intrare (y 0–140, peretele de est la x = 124), 144 cm la mijloc și 148 cm spre baie (y 393,9–690,9, unde peretele de vest e la x = −4). Fâșia de 4 cm de la x = −4 la 0 nu se poate desena: desenul începe la x = 0. Placa la 250 cm (A.01), fața tavanului fals la ~243 cm (7 cm, detaliul din A.05; A.17 și A.18 o desenează la 242), fața de jos a grinzii GR1 la 205 cm (A.17 D05).",
  "etapa": 1,
  "elemente": [
   {
    "id": "TF1",
    "strat": "gips",
    "tip": "tavan-fals",
    "nume": "Tavan fals din gips-carton",
    "x": 0,
    "lat": 124,
    "h": 8.9,
    "inalt": 682,
    "stare": "proiect",
    "sursa": "A.05 (zona hașurată; cotele 312, 25, 345 și 8,9; 113 și 109,3 până la fantă); detaliul tavanului fals din hol, A.05 (1:5: 7 cm); A.17 D04 și D05, A.18 D05 (desenat la 242)",
    "eticheta": {
     "x": 50,
     "h": 520
    },
    "nota": "Fața plăcilor la ~243 cm de la pardoseala finită, 7 cm sub placă (detaliul din A.05, singura cotă; A.17 și A.18 o desenează la 242, legenda A.05 scrie 10 cm). Se oprește la fețele grinzii GR1 (y 353,9 și 378,9), la stâlpul ST1 și la marginea fantei de pe latura de est (x = 109,3; spre baie x = 109). Între y = 8,9 și 155, unde nu e fantă, merge până la peretele de est (x = 124 la intrare; între y = 140 și 155 se continuă cu masca MG2 până la x = 144). Spre baie ajunge la peretele de vest, la x = −4. Lângă peretele cu ușa de intrare se oprește la 8,9 cm de perete (FS). Același cod pe pereți.",
    "adanc": 7,
    "detaliu": "TFH"
   },
   {
    "id": "FS",
    "strat": "gips",
    "tip": "scafa",
    "nume": "Fâșia fără tavan fals de lângă peretele cu ușa de intrare",
    "x": 0,
    "lat": 124,
    "h": 0,
    "inalt": 8.9,
    "stare": "proiect",
    "sursa": "A.05 (cota 8,9, nehașurată); A.17 D04 și D05 (tavanul fals se oprește la 8,9 cm de perete)",
    "nota": "Între peretele cu ușa de intrare și marginea tavanului fals rămân 8,9 cm, deschiși până la placă (A.05, A.17 D04 și D05). Planșele nu spun ce rol are fâșia și cum se închide marginea tavanului fals aici. Tabloul electric existent e deasupra ușii, până aproape de placă (TE pe peretele S). De întrebat arhitecta."
   },
   {
    "id": "GR1",
    "strat": "structura",
    "tip": "grinda",
    "nume": "Grinda de beton care traversează holul",
    "x": 0,
    "lat": 144,
    "h": 353.9,
    "inalt": 25,
    "stare": "proiect",
    "sursa": "A.01 (25; 312 de la peretele spre baie; 140 + 213,9 de la intrare); A.05 (liniile întrerupte); A.17 D05 (45 cm sub placă)",
    "nota": "Grindă existentă de 25 cm, de la peretele de vest la cel de est. E aceeași grindă ca GR1 din living (peretele TV): în A.05 continuă spre vest și spre est. Fața de jos la 205 cm (A.17 D05: 45 cm sub placa de la 250), adică 38 cm sub tavanul fals. Tavanul fals, fanta, banda și masca de gaz se opresc la fețele ei (A.17 D04 și D05; randarea A.20). A.05 hașurează tavanul fals și peste ea. În randarea A.20 rămâne aparentă, albă ca pereții: de confirmat.",
    "adanc": 45
   },
   {
    "id": "ST1",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Stâlpul de sub grindă, pe peretele de vest",
    "x": 0,
    "lat": 15,
    "h": 353.9,
    "inalt": 40,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.05 și A.06 (desenat, necotat: x −5…15, y 353,9–393,9); A.18 M04 (~19 cm din fața peretelui din zona de nord)",
    "nota": "Stâlp existent de ~20 × 40 cm: iese 15 cm din fața peretelui de vest din zona de mijloc (x = 0) și ~19 cm din fața din zona de nord (x = −4). Se întinde de la fața de sud a grinzii (y 353,9) până la y ≈ 393,9, cu 15 cm la nord de grindă. Tavanul fals se oprește la el. Îmbrăcămintea lui și mobilierul din jur sunt pe peretele de vest.",
    "adanc": 242
   },
   {
    "id": "Z1",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Zidăria de la intrare, pe latura de est (holul are aici 124 cm)",
    "x": 124,
    "lat": 20,
    "h": 0,
    "inalt": 140,
    "stare": "proiect",
    "sursa": "A.01 (124 la intrare, 144 la mijloc, 140 de la peretele cu ușa de intrare); A.05; A.06",
    "nota": "Între y = 0 și 140 peretele de est e la x = 124. Zona x 124–144 nu face parte din hol. Colțul S-E al holului e la x = 124."
   },
   {
    "id": "SC1",
    "strat": "gips",
    "tip": "scafa",
    "nume": "Fanta de 15 cm de pe latura de est, la nord de grindă",
    "x": 109,
    "lat": 15,
    "h": 378.9,
    "inalt": 312,
    "stare": "proiect",
    "sursa": "A.05 (113 + 15 de la peretele de vest din zona de nord; 312); detaliul tavanului fals din hol, A.05 (1:5); A.06",
    "nota": "Fantă deschisă până la placă, între marginea tavanului fals (x = 109, adică 113 cm de la peretele de vest din zona de nord, care e la x = −4) și marginea măștii MG1 (x = 124). Marginea dinspre tavanul fals se închide cu o placă verticală de gips-carton, de la placă până la tavanul fals; pe ea, sus, se prinde profilul benzii C1 (detaliul A.05). Merge de la grinda GR1 până la peretele spre baie (312 cm).",
    "adanc": 7,
    "detaliu": "TFH"
   },
   {
    "id": "SC2",
    "strat": "gips",
    "tip": "scafa",
    "nume": "Fanta de 15 cm de pe latura de est, la sud de grindă",
    "x": 109.3,
    "lat": 15,
    "h": 155,
    "inalt": 198.9,
    "stare": "proiect",
    "sursa": "A.05 (109,3 + 15; 200 de la grindă; 15 până la colțul de la intrare); detaliul tavanului fals din hol, A.05 (1:5); A.06",
    "nota": "Ca SC1, cu banda C2. De la fața de sud a grinzii (y 353,9) până la y = 155, adică 15 cm înainte de colțul unde holul se îngustează (y = 140, A.01). Pe desen are 198,9 cm; A.05 cotează 200. De măsurat pe șantier înainte de tăierea benzii C2.",
    "adanc": 7,
    "adancAprox": true,
    "detaliu": "TFH"
   },
   {
    "id": "MG1",
    "strat": "gips",
    "tip": "masca",
    "nume": "Masca țevii de gaz, la nord de grindă",
    "x": 124,
    "lat": 20,
    "h": 378.9,
    "inalt": 312,
    "stare": "proiect",
    "sursa": "A.05 (20; detaliul tavanului fals din hol, 1:5); specs/08 D; analiza/01 pasul 4.1",
    "nota": "Placă de gips-carton de 20 cm, lipită de peretele de est, la nivelul tavanului fals. În ea trece țeava de gaz: în detaliul A.05 are Ø ~3 cm, e lipită de placă și are axa la ~5 cm de perete. Masca trebuie să fie demontabilă și ventilată (specs/08, analiza/01). Detaliul A.05 arată o placă fixă și nu arată cum se demontează; golul ei e deschis spre fantă deasupra profilului de margine. În golul măștii nu se pun doze, prize sau surse. Traseul țevii îl face numai firma autorizată ANRE, înainte de închiderea măștii.",
    "adanc": 7,
    "detaliu": "TFH"
   },
   {
    "id": "MG2",
    "strat": "gips",
    "tip": "masca",
    "nume": "Masca țevii de gaz, la sud de grindă",
    "x": 124.3,
    "lat": 19.7,
    "h": 140,
    "inalt": 213.9,
    "stare": "proiect",
    "sursa": "A.05 (109,3 + 15 + 20; detaliul tavanului fals din hol, 1:5); specs/08 D",
    "nota": "Ca MG1. De la fața de sud a grinzii (y 353,9) până la colțul de la y = 140, unde holul se îngustează. Între y = 140 și 155 se continuă, la același nivel, cu tavanul fals (A.05 nu desenează o margine între ele). A.05 cotează aici 109,3 + 15 + 20 = 144,3, cu 0,3 cm peste lățimea holului: masca are ~19,7 cm. Pe unde intră țeava în mască nu e desenat.",
    "adanc": 7,
    "adancAprox": true,
    "detaliu": "TFH"
   },
   {
    "id": "C1",
    "strat": "led",
    "tip": "banda-led",
    "nume": "Banda Hue Flux C1, în fanta de la nord de grindă",
    "x": 107.3,
    "lat": 1,
    "h": 378.9,
    "inalt": 312,
    "ascuns": true,
    "stare": "de-verificat",
    "sursa": "A.05 (312; profilul din detaliul tavanului fals din hol); A.06 (marcajul C, „LED tavan - orizontal”); specs/06 G2; specs/04 (03.11.2026: Hue Flux 3 m, profil S3)",
    "nota": "Hue Flux (kit de 3 m, folosit pe alb) în profil S3 (23,5 × 10 mm, alb, 2 bare de 2 m), prins sus pe placa verticală de la marginea tavanului fals, cu lumina spre mască (detaliul A.05). Buza tavanului fals (~2 cm) ascunde profilul când e privit de jos. Traseul are 312 cm; banda montată are ~299 cm (18 segmente de 16,6 cm, specs/04). Capătul alimentat e lângă grindă (CB-C1). Clapa C din grupurile ABC.",
    "detaliu": "TFH"
   },
   {
    "id": "C2",
    "strat": "led",
    "tip": "banda-led",
    "nume": "Banda Hue Flux C2, în fanta de la sud de grindă",
    "x": 107.3,
    "lat": 1,
    "h": 155,
    "inalt": 198.9,
    "ascuns": true,
    "stare": "de-verificat",
    "sursa": "A.05 (200; profilul din detaliul tavanului fals din hol); A.06 (marcajul C); specs/06 G2; specs/04 (03.11.2026: Hue Flux 3 m, profil S3)",
    "nota": "Ca C1, cu kitul ei (1 bară S3 de 2 m). Traseul are 198,9 cm pe desen (A.05 cotează 200). Planul de tăiere (specs/04) are 12 segmente, ~199 cm: nu rămâne loc pentru capace și pentru conectorul controllerului. Se măsoară fanta pe șantier înainte de tăiere; dacă nu încap 12 segmente, se taie 11 (~183 cm). Capătul alimentat e lângă grindă (CB-C2).",
    "detaliu": "TFH"
   },
   {
    "id": "CB-C1",
    "strat": "electric",
    "tip": "doza",
    "nume": "Capătul cablului de 230 V pentru banda C1 (marcajul C din A.06)",
    "x": 116.8,
    "h": 386.2,
    "punct": true,
    "pozitie": "aprox",
    "stare": "proiect",
    "sursa": "A.06 (marcajul C, lângă fața de nord a grinzii); specs/06 G4 și G7",
    "nota": "Cablul pentru sursa benzii C1, cu alimentare permanentă: întrerupătorul ABC nu taie curentul, în doza lui se pune Hue Wall Switch Module (specs/06 G4). Sursa Hue se bagă într-o priză (specs/06 G7); locul prizei pentru C1 și C2 nu e hotărât (PH).",
    "detaliu": "TFH"
   },
   {
    "id": "CB-C2",
    "strat": "electric",
    "tip": "doza",
    "nume": "Capătul cablului de 230 V pentru banda C2 (marcajul C din A.06)",
    "x": 116.8,
    "h": 348.7,
    "punct": true,
    "pozitie": "aprox",
    "stare": "proiect",
    "sursa": "A.06 (marcajul C, lângă fața de sud a grinzii); specs/06 G4 și G7",
    "nota": "Ca CB-C1, pentru banda C2.",
    "detaliu": "TFH"
   },
   {
    "id": "PH",
    "strat": "electric",
    "tip": "priza",
    "nume": "Priza pentru sursele Hue ale benzilor C1 și C2",
    "pozitie": "necunoscuta",
    "stare": "propunere",
    "sursa": "specs/06 G7 (01.11.2026: sursele Hue la prize; C1 și C2 încă nealocate)",
    "nota": "Fiecare bandă are kitul ei (sursă și controller). Variante: (1) priză dublă în mobilierul de pe peretele de vest, lângă grindă (M04), cu cabluri prelungitoare Flux de 5 m prin tavanul fals până la CB-C1 și CB-C2; (2) priză lângă grindă, cu sursa în fantă (se vede de jos). Golul tavanului fals e închis spre fantă de placa verticală (detaliul A.05): o sursă pusă în gol se ajunge numai printr-o trapă de vizitare. Nu în golul măștii de gaz. De hotărât."
   },
   {
    "id": "B1",
    "strat": "led",
    "tip": "spot",
    "nume": "Spotul B1 (bec Hue GU10)",
    "x": 93.5,
    "h": 118.9,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (desenat, necotat); specs/04 (29.10.2026: becuri Hue GU10)",
    "nota": "Spot încastrat GU10 cu bec Hue (2 becuri Hue Essential GU10 noi și 2 existente, specs/04). A.06 nu cotează spoturile: axele la ~93,5 cm de peretele de vest, la y ≈ 119, 239, 461 și 581 (120 cm între spoturile din aceeași parte a grinzii). Corpul cu becul trebuie să încapă în golul de deasupra plăcii de gips-carton: ~5,75 cm cu tavanul fals de 7 cm (6,75 cm dacă are 8 cm, ca în A.17). De verificat la corpul ales. Clapa B din grupurile ABC."
   },
   {
    "id": "B2",
    "strat": "led",
    "tip": "spot",
    "nume": "Spotul B2 (bec Hue GU10)",
    "x": 93.5,
    "h": 238.9,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (desenat, necotat); specs/04 (29.10.2026)",
    "nota": "Vezi B1."
   },
   {
    "id": "B3",
    "strat": "led",
    "tip": "spot",
    "nume": "Spotul B3 (bec Hue GU10)",
    "x": 93.5,
    "h": 460.9,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (desenat, necotat); specs/04 (29.10.2026)",
    "nota": "Vezi B1."
   },
   {
    "id": "B4",
    "strat": "led",
    "tip": "spot",
    "nume": "Spotul B4 (bec Hue GU10)",
    "x": 93.5,
    "h": 580.9,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (desenat, necotat); specs/04 (29.10.2026)",
    "nota": "Vezi B1."
   },
   {
    "id": "D8",
    "strat": "electric",
    "tip": "doza",
    "nume": "Doza și sursa Push-DIM a benzilor din GS (D, E)",
    "x": 100,
    "h": 215.7,
    "punct": true,
    "pozitie": "aprox",
    "stare": "propunere",
    "sursa": "specs/04 (29.10.2026: sursele GS și băii în tavanul fals din hol, dozele D8 și D9 din modelul CAD); cad/rooms_spec.py (12.10.2026); analiza/11 L7",
    "nota": "Sursă 24 V Push-DIM, scoasă din zona umedă a GS-ului. Firul de comandă vine de la butonul DE de pe peretele de est (y ≈ 165). În modelul CAD era la x = 124,6, pe marginea măștii de gaz; aici e mutată la vest de fantă, departe de țeava de gaz. Se ajunge la ea printr-o trapă de vizitare (golul tavanului fals nu se ajunge prin fantă). Întrebarea L7 la arhitectă e deschisă.",
    "detaliu": "PUSH"
   },
   {
    "id": "D9",
    "strat": "electric",
    "tip": "doza",
    "nume": "Doza și sursa Push-DIM a benzilor din baie (H)",
    "x": 95,
    "h": 680,
    "punct": true,
    "pozitie": "aprox",
    "stare": "propunere",
    "sursa": "specs/04 (29.10.2026: sursele GS și băii în tavanul fals din hol); cad/rooms_spec.py (12.10.2026); analiza/11 L7",
    "nota": "Ca D8, pentru benzile H din baie (nișa din duș și oglinda). Firul de comandă vine de la butonul H din întrerupătorul IH (peretele spre baie). Poziția e cea din modelul CAD.",
    "detaliu": "PUSH"
   }
  ],
  "avertismente": [
   {
    "nivel": "atentie",
    "text": "Înălțimea tavanului fals în hol: detaliul tavanului fals din hol (A.05, 1:5) cotează 7 cm, adică fața la 243, ca în living; e singura cotă și desenele o folosesc. A.17 (D04, D05) și A.18 (D05) desenează, necotat, placa de gips între 245 și 242 cm, adică fața la 242 (8 cm). Legenda A.05 scrie 10 cm (fața la 240, la nivelul mobilierului de 240). De confirmat cu arhitecta (L6).",
    "sursa": "A.05, A.17, A.18",
    "ids": [
     "TF1"
    ]
   },
   {
    "nivel": "atentie",
    "text": "Grinda GR1 coboară la 205 cm, 38 cm sub tavanul fals, și întrerupe fanta, banda și masca de gaz: C1 și C2 sunt trasee separate, fiecare cu kitul ei. A.05 hașurează tavanul fals și peste grindă; A.17 și A.20 o arată aparentă. Țeava de gaz nu mai trece pe sub grindă: masca M06 nu se mai face (decizia din 02.11.2026).",
    "sursa": "A.01, A.05, A.17, A.20",
    "ids": [
     "GR1",
     "SC1",
     "SC2"
    ]
   },
   {
    "nivel": "atentie",
    "text": "Masca țevii de gaz trebuie să fie ventilată și demontabilă (specs/08 D, analiza/01 pasul 4.1). Detaliul A.05 arată o placă fixă de 20 cm, fără grile și fără prinderi demontabile. Din 02.11.2026 țeava trece prin nișa din tavan și nu se mai vede; masca M06 de pe perete nu se mai face. Pe unde trece de grinda GR1 și pe unde iese spre bucătărie nu e desenat. Firma ANRE confirmă traseul înainte de scheletul tavanului.",
    "sursa": "A.05, specs/08, analiza/01; decizia din 02.11.2026",
    "ids": [
     "MG1",
     "MG2",
     "GR1"
    ]
   },
   {
    "nivel": "atentie",
    "text": "Sursele puse în golul tavanului fals nu se ajung prin fantă: în detaliul A.05 golul e închis spre fantă de o placă verticală. D8, D9 și, dacă se aleg acolo, sursele Hue ale lui C1 și C2 au nevoie de trapă de vizitare sau de alt loc (mobilier). Doza D6 din modelul CAD (driver și controller Zigbee pentru C1 și C2) nu mai e valabilă: din 29.10.2026 C1 și C2 sunt Hue Flux, câte un kit, cu sursa în priză (specs/06 G7).",
    "sursa": "A.05, specs/04, specs/06 G7, cad/rooms_spec.py",
    "ids": [
     "D8",
     "D9",
     "PH",
     "CB-C1",
     "CB-C2"
    ]
   },
   {
    "nivel": "info",
    "text": "A.05 cotează de la intrare la grindă 8,9 + 130 + 15 + 200 = 353,9, dar desenul are colțul la 140 (ca A.01), deci 131,1 în loc de 130, și fanta de 198,9 cm în loc de 200. Pe latura de est A.05 cotează 109,3 + 15 + 20 = 144,3, iar holul are 144. Banda C2 de 12 segmente (~199 cm) poate să nu încapă.",
    "sursa": "A.01, A.05, specs/04",
    "ids": [
     "SC2",
     "C2",
     "MG2"
    ]
   },
   {
    "nivel": "info",
    "text": "Spre baie (y 393,9–690,9) peretele de vest e cu 4 cm mai spre vest (x = −4; holul are 148 cm). Desenul tavanului începe la x = 0, deci fâșia de 4 cm nu apare: tavanul fals TF1 merge până la perete, iar stâlpul ST1 iese ~19 cm din el.",
    "sursa": "A.01, A.05, A.06",
    "ids": [
     "TF1",
     "ST1"
    ]
   }
  ]
 }
};
