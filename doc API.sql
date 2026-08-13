-- Location par site
GET http://localhost:8080/api/locations/1

-- liste de toutes les sites
GET http://localhost:8080/api/sites

-- liste de type : HQ - FRANCHISES 
GET http://localhost:8080/api/rp-types

-- liste des fréquences pour AUTO 
GET http://localhost:8080/api/rp-frequencies

------ Site
{
  "rpConfig": {
    "name": "Reporting Visibilité Siège - Hebdo",
    "idRpType": 1,
    "formatEmail": true,
    "formatPdf": false
  },
  "rpSchedule": {
    "sendMode": "AUTO",
    "idFrequency": 1,
    "day": "LUNDI",
    "hour": "08:00:00",
    "nextExecution": "2026-08-17",
    "lastExecution": "2026-08-10",
    "reportStart": null,
    "reportEnd": null
  },
  "rpTargets": [
    {
      "idSite": 1,
      "idLocation": null,
      "recipients": [
        "siege@example.com",
        "direction@example.com"
      ]
    }
  ]
}

----- établissement
{
  "rpConfig": {
    "name": "Reporting Delh 1,2 - Hebdo",
    "idRpType":2,
    "formatEmail": true,
    "formatPdf": true
  },
  "rpSchedule": {
    "sendMode": "AUTO",
    "idFrequency": 1,
    "day": "LUNDI",
    "hour": "08:00:00",
    "nextExecution": "2026-08-17",
    "lastExecution": "2026-08-10",
    "reportStart": null,
    "reportEnd": null
  },
  "rpTargets": [
    {
      "idSite": null,
      "idLocation": 1,
      "recipients": [
        "delh10@example.com"
      ]
    },
    {
      "idSite": null,
      "idLocation": 2,
      "recipients": [
        "delh11@example.com"
      ]
    }
  ]
}

-- Détails de configuration d'envoie
GET http://localhost:8080/api/rp-configs/details/1
[
    {
        "frequence": "Hebdomadaire",
        "heure": "08:00:00",
        "idConfig": 1,
        "jour": "LUNDI",
        "modeEnvoi": "AUTO",
        "nom": "Reporting Visibilité Siège - Hebdo",
        "reportEnd": null,
        "reportStart": null
    }
]

-- liste des email
GET http://localhost:8080/api/rp-configs/recipients/1
[
    {
        "idRpConfig": 1,
        "idRpSchedule": 1,
        "idRpTarget": 1,
        "idDestination": 1,
        "count_recipient": 2,
        "nom": "Reporting Visibilité Siège - Hebdo",
        "destination": "Delhaize Belgique",
        "destinataires": "siege@example.com, direction@example.com"
    }
]

-- màj configurtion d'envoie$