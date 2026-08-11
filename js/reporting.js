// ============================================================
// DONNÉES REPORTING - SIÈGE - EMAIL
// ============================================================

const reportDataEmail = {

    visibility: {
        title: "Reporting VISIBILITE",
        kpis: [
            {
                name: "Indice de visibilité",
                description: "Mesure la visibilité globale du réseau sur les recherches locales."
            },
            {
                name: "Evolution de l’indice de visibilité",
                description: "Présente l’évolution de la visibilité du réseau sur la période sélectionnée."
            },
            {
                name: "Nombre total de visiteurs",
                description: "Indique le nombre total de visiteurs ayant consulté les fiches des établissements."
            },
            {
                name: "Taux de complétude des fiche",
                description: "Mesure le niveau de complétude des informations présentes sur les fiches des établissements."
            }
        ]
    },

    campaign: {
        title: "Reporting CAMPAGNES",
        kpis: [
            {
                name: "Nombre total de publications",
                description: "Indique le nombre total de publications diffusées pendant la période."
            },
            {
                name: "Portée totale des campagnes",
                description: "Mesure le nombre total de personnes ayant été exposées aux campagnes."
            },
            {
                name: "Évolution de la Portée totale des campagnes",
                description: "Présente l’évolution de la portée des campagnes par rapport à la période précédente."
            },
            {
                name: "Nombre total d'interactions",
                description: "Indique le nombre total d’interactions générées par les campagnes."
            }
        ]
    },

    reviews: {
        title: "Reporting AVIS (réputation)",
        kpis: [
            {
                name: "Nombre total d'avis",
                description: "Indique le nombre total d’avis reçus par les établissements du réseau."
            },
            {
                name: "Évolution du volume d'avis",
                description: "Présente l’évolution du nombre d’avis reçus sur la période."
            },
            {
                name: "Note moyenne",
                description: "Indique la note moyenne attribuée aux établissements par les clients."
            },
            {
                name: "Évolution de la note moyenne",
                description: "Présente l’évolution de la note moyenne par rapport à la période précédente."
            },
            {
                name: "TOP 3 Meilleure note du réseau",
                description: "Identifie les trois établissements ayant obtenu les meilleures notes."
            },
            {
                name: "FLOP 3 Établissements à surveiller",
                description: "Identifie les trois établissements ayant les notes les plus faibles."
            }
        ]
    },

    ai: {
        title: "ADVANCED INSIGHTS",
        kpis: [
            {
                name: "Sentiment global",
                description: "Présente la tendance générale des sentiments exprimés dans les avis clients."
            },
            {
                name: "Évolution des sentiments",
                description: "Montre l’évolution des sentiments exprimés par les clients sur la période."
            },
            {
                name: "Nombre total de ressentis",
                description: "Indique le nombre total de ressentis détectés dans les avis analysés."
            },
            {
                name: "Évolution des ressentis",
                description: "Présente l’évolution du nombre de ressentis identifiés sur la période."
            },
            {
                name: "Top 5 ressentis positifs",
                description: "Présente les cinq ressentis positifs les plus fréquemment exprimés."
            },
            {
                name: "Flop 5 ressentis négatifs",
                description: "Présente les cinq ressentis négatifs les plus fréquemment exprimés."
            }
        ]
    }
};


// ============================================================
// DONNÉES REPORTING - SIÈGE - PDF
// ============================================================

const reportDataPdf = {

    visibility: {
        title: "Reporting VISIBILITE",
        kpis: [
            {
                name: "Nombre total de visiteurs",
                description: "Indique le nombre total de visiteurs ayant consulté les fiches des établissements."
            },
            {
                name: "Nombre de vues de la fiche Google Business Profile",
                description: "Indique le nombre de consultations des fiches Google Business Profile."
            },
            {
                name: "Indice de visibilité",
                description: "Mesure la visibilité globale du réseau sur les recherches locales."
            },
            {
                name: "Nombre d'activations google (itinéraires, appels, site web)",
                description: "Indique le nombre d’actions réalisées depuis les fiches Google : itinéraires, appels et visites du site web."
            },
            {
                name: "Top 5 établissements les plus visibles",
                description: "Identifie les cinq établissements bénéficiant de la meilleure visibilité."
            },
            {
                name: "Flop 5 établissements avec moins de visibilité",
                description: "Identifie les cinq établissements ayant la visibilité la plus faible."
            },
            {
                name: "Contribution de chaque établissement à la visibilité du réseau(top/flop)",
                description: "Compare la contribution de chaque établissement à la visibilité globale du réseau."
            }
        ]
    },

    campaign: {
        title: "Reporting CAMPAGNES",
        kpis: [
            {
                name: "Nombre de campagnes publiées",
                description: "Indique le nombre total de campagnes publiées pendant la période."
            },
            {
                name: "Nombre de campagnes actives",
                description: "Indique le nombre de campagnes actuellement actives."
            },
            {
                name: "Nombre de campagnes programmées",
                description: "Indique le nombre de campagnes planifiées pour une diffusion ultérieure."
            },
            {
                name: "Nombre de campagnes terminées",
                description: "Indique le nombre de campagnes arrivées à leur terme."
            },
            {
                name: "Nombre total d'interactions",
                description: "Indique le nombre total d’interactions générées par les campagnes."
            },
            {
                name: "Meilleure campagne sur la période",
                description: "Identifie la campagne ayant obtenu les meilleures performances sur la période."
            },
            {
                name: "Top 5 campagnes",
                description: "Présente les cinq campagnes ayant obtenu les meilleures performances."
            },
            {
                name: "Contribution de chaque établissement aux campagnes du réseau",
                description: "Compare la contribution de chaque établissement aux performances globales des campagnes."
            }
        ]
    },

    reviews: {
        title: "Reporting AVIS (réputation)",
        kpis: [
            {
                name: "Nombre total d'avis",
                description: "Indique le nombre total d’avis reçus par les établissements du réseau."
            },
            {
                name: "Note moyenne",
                description: "Indique la note moyenne attribuée aux établissements par les clients."
            },
            {
                name: "NPS",
                description: "Mesure le niveau de recommandation des établissements par les clients."
            },
            {
                name: "TOP 3 des établissements à meilleure note du réseau",
                description: "Identifie les trois établissements ayant obtenu les meilleures notes."
            },
            {
                name: "FLOP 3 Établissements à surveiller",
                description: "Identifie les trois établissements ayant les notes les plus faibles."
            },
            {
                name: "Nombre d'établissements sous 3★",
                description: "Indique le nombre d’établissements ayant une note moyenne inférieure à 3 étoiles."
            }
        ]
    },

    ai: {
        title: "ADVANCED INSIGHTS",
        kpis: [
            {
                name: "Sentiment global",
                description: "Présente la tendance générale des sentiments exprimés dans les avis clients."
            },
            {
                name: "Taux de sentiments positifs",
                description: "Indique la proportion de sentiments positifs détectés dans les avis."
            },
            {
                name: "Taux de sentiments neutres",
                description: "Indique la proportion de sentiments neutres détectés dans les avis."
            },
            {
                name: "Taux de sentiments négatifs",
                description: "Indique la proportion de sentiments négatifs détectés dans les avis."
            },
            {
                name: "Sentiments par source",
                description: "Compare les sentiments exprimés selon les différentes sources d’avis."
            },
            {
                name: "Top ressentis positifs",
                description: "Présente les ressentis positifs les plus fréquemment identifiés."
            },
            {
                name: "Top ressentis négatifs",
                description: "Présente les ressentis négatifs les plus fréquemment identifiés."
            },
            {
                name: "Nombre total de ressentis",
                description: "Indique le nombre total de ressentis détectés dans les avis analysés."
            }
        ]
    }
};


// ============================================================
// DONNÉES REPORTING - ÉTABLISSEMENT - EMAIL
// ============================================================

const reportDataEmailBranch = {

    visibility: {
        title: "Reporting VISIBILITE",
        kpis: [
            {
                name: "Indice de visibilité",
                description: "Mesure la visibilité de l’établissement sur les recherches locales."
            },
            {
                name: "Evolution de l’indice de visibilité",
                description: "Présente l’évolution de la visibilité de l’établissement sur la période."
            },
            {
                name: "Nombre total de visiteurs",
                description: "Indique le nombre de visiteurs ayant consulté la fiche de l’établissement."
            },
            {
                name: "Taux de complétude de fiche Google",
                description: "Mesure le niveau de complétude des informations présentes sur la fiche Google."
            }
        ]
    },

    campaign: {
        title: "Reporting CAMPAGNES",
        kpis: [
            {
                name: "Nombre total de publications diffusées sur la période",
                description: "Indique le nombre de publications diffusées par l’établissement pendant la période."
            },
            {
                name: "Portée totale des campagnes",
                description: "Mesure le nombre total de personnes exposées aux campagnes de l’établissement."
            },
            {
                name: "Évolution de la portée totale des campagnes",
                description: "Présente l’évolution de la portée des campagnes sur la période."
            },
            {
                name: "Nombre total d'interactions",
                description: "Indique le nombre total d’interactions générées par les campagnes."
            },
            {
                name: "Évolution des interactions",
                description: "Présente l’évolution du nombre d’interactions générées par les campagnes."
            }
        ]
    },

    reviews: {
        title: "Reporting AVIS (réputation)",
        kpis: [
            {
                name: "Nombre total d'avis",
                description: "Indique le nombre total d’avis reçus par l’établissement."
            },
            {
                name: "Évolution du volume d'avis",
                description: "Présente l’évolution du nombre d’avis reçus sur la période."
            },
            {
                name: "Note moyenne",
                description: "Indique la note moyenne attribuée à l’établissement par les clients."
            },
            {
                name: "Évolution de la note moyenne",
                description: "Présente l’évolution de la note moyenne de l’établissement."
            }
        ]
    },

    ai: {
        title: "ADVANCED INSIGHTS",
        kpis: [
            {
                name: "Sentiment global",
                description: "Présente la tendance générale des sentiments exprimés dans les avis de l’établissement."
            },
            {
                name: "Évolution des sentiments",
                description: "Montre l’évolution des sentiments exprimés par les clients sur la période."
            },
            {
                name: "Taux de sentiments positifs",
                description: "Indique la proportion de sentiments positifs détectés dans les avis."
            },
            {
                name: "Taux de sentiments négatifs",
                description: "Indique la proportion de sentiments négatifs détectés dans les avis."
            },
            {
                name: "Nombre total de ressentis",
                description: "Indique le nombre total de ressentis détectés dans les avis analysés."
            },
            {
                name: "Évolution des ressentis",
                description: "Présente l’évolution du nombre de ressentis identifiés sur la période."
            },
            {
                name: "Top 5 ressentis positifs",
                description: "Présente les cinq ressentis positifs les plus fréquemment exprimés."
            },
            {
                name: "Flop 5 ressentis négatifs",
                description: "Présente les cinq ressentis négatifs les plus fréquemment exprimés."
            }
        ]
    }
};


// ============================================================
// DONNÉES REPORTING - ÉTABLISSEMENT - PDF
// ============================================================

const reportDataPdfBranch = {

    visibility: {
        title: "Reporting VISIBILITE",
        kpis: [
            {
                name: "Nombre total de visiteurs",
                description: "Indique le nombre de visiteurs ayant consulté la fiche de l’établissement."
            },
            {
                name: "Evolution du nombre de visiteurs",
                description: "Présente l’évolution du nombre de visiteurs sur la période."
            },
            {
                name: "Nombre de vues de la fiche Google Business Profile",
                description: "Indique le nombre de consultations de la fiche Google Business Profile."
            },
            {
                name: "Indice de visibilité",
                description: "Mesure la visibilité de l’établissement sur les recherches locales."
            },
            {
                name: "Evolution de l’indice de visibilité",
                description: "Présente l’évolution de la visibilité de l’établissement sur la période."
            },
            {
                name: "Nombre d'activations Google (itinéraires, appels, site web)",
                description: "Indique le nombre d’actions réalisées depuis la fiche Google : itinéraires, appels et visites du site web."
            },
            {
                name: "Evolution des activations",
                description: "Présente l’évolution des actions réalisées depuis la fiche Google."
            },
            {
                name: "Nombre d'impressions",
                description: "Indique le nombre de fois où la fiche ou le contenu de l’établissement a été affiché."
            },
            {
                name: "Evolution des impressions",
                description: "Présente l’évolution du nombre d’impressions sur la période."
            },
            {
                name: "Taux de complétude de fiche Google",
                description: "Mesure le niveau de complétude des informations présentes sur la fiche Google."
            }
        ]
    },

    campaign: {
        title: "Reporting CAMPAGNES",
        kpis: [
            {
                name: "Nombre de campagnes publiées",
                description: "Indique le nombre total de campagnes publiées par l’établissement."
            },
            {
                name: "Nombre de campagnes actives",
                description: "Indique le nombre de campagnes actuellement actives."
            },
            {
                name: "Nombre de campagnes terminées",
                description: "Indique le nombre de campagnes arrivées à leur terme."
            },
            {
                name: "Portée totale des campagnes",
                description: "Mesure le nombre total de personnes exposées aux campagnes."
            },
            {
                name: "Évolution de la portée totale des campagnes",
                description: "Présente l’évolution de la portée des campagnes sur la période."
            },
            {
                name: "Nombre total d'interactions",
                description: "Indique le nombre total d’interactions générées par les campagnes."
            },
            {
                name: "Évolution des interactions",
                description: "Présente l’évolution du nombre d’interactions générées par les campagnes."
            },
            {
                name: "Interactions moyennes",
                description: "Indique le nombre moyen d’interactions générées par campagne."
            },
            {
                name: "Portée moyenne par campagne",
                description: "Indique le nombre moyen de personnes atteintes par campagne."
            }
        ]
    },

    reviews: {
        title: "Reporting AVIS (réputation)",
        kpis: [
            {
                name: "Nombre total d'avis",
                description: "Indique le nombre total d’avis reçus par l’établissement."
            },
            {
                name: "Évolution du volume d'avis",
                description: "Présente l’évolution du nombre d’avis reçus sur la période."
            },
            {
                name: "Note moyenne",
                description: "Indique la note moyenne attribuée à l’établissement par les clients."
            },
            {
                name: "Évolution de la note moyenne",
                description: "Présente l’évolution de la note moyenne sur la période."
            },
            {
                name: "NPS",
                description: "Mesure le niveau de recommandation de l’établissement par les clients."
            },
            {
                name: "Évolution du NPS",
                description: "Présente l’évolution du NPS sur la période."
            },
            {
                name: "Nombre d'avis répondus",
                description: "Indique le nombre d’avis auxquels l’établissement a apporté une réponse."
            },
            {
                name: "Nombre d'avis non répondus",
                description: "Indique le nombre d’avis auxquels l’établissement n’a pas encore répondu."
            },
            {
                name: "Répartition des notes (1★ à 5★)",
                description: "Présente la répartition des avis selon les notes de 1 à 5 étoiles."
            },
            {
                name: "Nombre d'avis 5★",
                description: "Indique le nombre total d’avis ayant reçu une note de 5 étoiles."
            },
            {
                name: "Nombre d'avis 1★",
                description: "Indique le nombre total d’avis ayant reçu une note de 1 étoile."
            }
        ]
    },

    ai: {
        title: "ADVANCED INSIGHTS",
        kpis: [
            {
                name: "Sentiment global",
                description: "Présente la tendance générale des sentiments exprimés dans les avis."
            },
            {
                name: "Taux de sentiments positifs",
                description: "Indique la proportion de sentiments positifs détectés dans les avis."
            },
            {
                name: "Taux de sentiments neutres",
                description: "Indique la proportion de sentiments neutres détectés dans les avis."
            },
            {
                name: "Taux de sentiments négatifs",
                description: "Indique la proportion de sentiments négatifs détectés dans les avis."
            },
            {
                name: "Évolution des sentiments",
                description: "Présente l’évolution des sentiments exprimés sur la période."
            },
            {
                name: "Sentiments par source",
                description: "Compare les sentiments exprimés selon les différentes sources d’avis."
            },
            {
                name: "Top ressentis positifs",
                description: "Présente les ressentis positifs les plus fréquemment détectés."
            },
            {
                name: "Top ressentis négatifs",
                description: "Présente les ressentis négatifs les plus fréquemment détectés."
            },
            {
                name: "Nombre total de ressentis",
                description: "Indique le nombre total de ressentis détectés dans les avis analysés."
            },
            {
                name: "Évolution des ressentis",
                description: "Présente l’évolution du nombre de ressentis sur la période."
            },
            {
                name: "Indice de satisfaction",
                description: "Mesure le niveau global de satisfaction exprimé par les clients."
            },
            {
                name: "Tendance de satisfaction",
                description: "Présente l’évolution de la satisfaction des clients sur la période."
            }
        ]
    }
};


// ============================================================
// FONCTIONS REPORTING - SIÈGE
// ============================================================

function openReport(type, format) {

    let reportData;

    if (format === "Email") {
        reportData = reportDataEmail;
    } else if (format === "Pdf") {
        reportData = reportDataPdf;
    }

    document
        .getElementById("reportTypes" + format)
        .classList.add("hidden");

    document
        .getElementById("reportKpis" + format)
        .classList.remove("hidden");

    document
        .getElementById("reportTitle" + format)
        .innerText = reportData[type].title;

    const container = document.getElementById("kpiContainer" + format);

    container.innerHTML = "";

    reportData[type].kpis.forEach(kpi => {

        container.innerHTML += `
            <label class="kpi-item">

                <input type="checkbox" checked>

                <div class="kpi-content">
                    <span class="kpi-name">
                        ${kpi.name}
                    </span>

                    <span class="kpi-description">
                        ${kpi.description}
                    </span>
                </div>

            </label>
        `;

    });
}


// ============================================================
// RETOUR LISTE REPORTING - SIÈGE
// ============================================================

function backToReports(format) {

    document
        .getElementById("reportTypes" + format)
        .classList.remove("hidden");

    document
        .getElementById("reportKpis" + format)
        .classList.add("hidden");
}


// ============================================================
// FONCTIONS REPORTING - ÉTABLISSEMENTS
// ============================================================

let currentCategory = "visibility";


// ============================================================
// OUVRIR MODALE KPI
// ============================================================

function openKpiModal(category) {

    currentCategory = category;

    document.getElementById("kpiModal").style.display = "flex";

    loadKpis();
}


// ============================================================
// FERMER MODALE KPI
// ============================================================

function closeKpiModal() {

    document.getElementById("kpiModal").style.display = "none";
}


// ============================================================
// CHANGEMENT EMAIL / PDF
// ============================================================

function changeReportType() {

    loadKpis();
}


// ============================================================
// CHARGEMENT DES KPI
// ============================================================

function loadKpis() {

    const selectedType = document.querySelector(
        'input[name="reportType"]:checked'
    );

    if (!selectedType) {
        return;
    }

    const type = selectedType.value;

    let data;

    if (type === "email") {

        data = reportDataEmailBranch;

    } else {

        data = reportDataPdfBranch;
    }

    const category = data[currentCategory];

    if (!category) {
        return;
    }

    document.getElementById("categoryTitle").innerHTML =
        category.title;

    const container = document.getElementById("kpiContainer");

    container.innerHTML = "";

    category.kpis.forEach(kpi => {

        container.innerHTML += `
            <div class="kpi-items">

                <input type="checkbox" checked>

                <div class="kpi-content">

                    <span class="kpi-name">
                        ${kpi.name}
                    </span>

                    <span class="kpi-description">
                        ${kpi.description}
                    </span>

                </div>

            </div>
        `;

    });
}