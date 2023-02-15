# The Masked Singer API

## Voorwaarden:

- Gebruik express - express
- Gebruik ES6 (import/export) - type: module
- Gebruik MVC
- Gebruik mongoose voor mongodb, model bouwen etc - mongoose
- Gebruik .ENV voor port en mongo url - dotenv
- Stel de cors in voor alle domeinen - cors
- Maak en gitignore - node_modules, .DS_Store , .env
- Pas error handling toe
- NIET then gebruiken enkel async, await
- fetch of axios, dit is vrije keuze
- Gebruik lokale mongodb databank
- Enkel lokaal gebruiken en deployen. Dit voor de copyright.

## Doel:

The masked singer api die we in de front end kunnen aanspreken, en deze api toont welk kostuum op welke aflevering gestart is, hoeveel afleveringen deze heeft meegedaan voor hij geraden werd.
Wanneer hij geraden is en dan toont deze welke deelnemer onder het kostuum zat en op de hoeveelste plaats deze geëindigd is.

## DB:

Elk kostuum heeft een plaats - Deelnemer - kostuum afbeelding - naam - startaflevering - aantal afleveringen
Let op met welke je niet nullable maakt.

## Routes:

### endpoint /api/v1/tms

- GET: / - geeft alle singers terug (array)

- GET: /?deelnemer=???? - geeft 1 singer terug ( object ) - qeury methode

- GET: /:id - geeft 1 singer terug ( object ) - params methode

- POST: / - singer kunnen toevoegen - misschien voor in de toekomst

- PUT: /:id - update heel het object, geeft het updated object terug ( object )

- DELETE: /:id - verwijderd 1 singer, geeft enkel succes bericht terug

## Media:

Foto's zijn meegeleverd in src/images

## Info:

Deze foto is ook nog toegevoegd in de info map.

![Info](/info/TMS%20info.jpg 'info')

---

#### **Credits van een creatief brein**
