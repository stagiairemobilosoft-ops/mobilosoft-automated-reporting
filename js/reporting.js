const reportDataEmail = {
    visibility: {
        title: "Reporting VISIBILITE",
        kpis: ["Indice de visibilité","Evolution de l’indice de visibilité","Nombre total de visiteurs","Taux de complétude des fiche"
        ]
    },
    campaign: {
        title: "Reporting CAMPAGNES",
        kpis: ["Nombre total de publications","Portée totale des campagnes","Évolution de la Portée totale des campagnes","Nombre total d'interactions"
        ]
    },
    reviews: {
        title: "Reporting AVIS (réputation)",
        kpis: ["Nombre total d'avis","Évolution du volume d'avis","Note moyenne","Évolution de la note moyenne","TOP 3 Meilleure note du réseau","FLOP 3 Établissements à surveiller"
        ]
    },
    ai: {
        title: "ADVANCED INSIGHTS",
        kpis: ["Sentiment global","Évolution des sentiments","Nombre total de ressentis","Évolution des ressentis","Top 5 ressentis positifs","Flop 5 ressentis négatifs"
        ]
    }
};

const reportDataPdf = {
    visibility: {
        title: "Reporting VISIBILITE",
        kpis: ["Nombre total de visiteurs","Nombre de vues de la fiche Google Business Profile","Indice de visibilité","Evolution de l’indice de visibilité","Nombre d'activations google (itinéraires, appels, site web)","Top 5 établissements les plus visibles","Flop 5 établissements avec moins de visibilité","Contribution de chaque établissement à la visibilité du réseau(top/flop)"
        ]
    },
    campaign: {
        title: "Reporting CAMPAGNES",
        kpis: ["Nombre de campagnes publiées","Nombre de campagnes actives","Nombre de campagnes programmées","Nombre de campagnes terminées","Portée totale des campagnes","Évolution de la Portée totale des campagnes","Nombre total d'interactions","Évolution des intéractions","Meilleure campagne sur la période","Top 5 campagnes","Contribution de chaque établissement aux campagnes du réseau"
        ]
    },
    reviews: {
        title: "Reporting AVIS (réputation)",
        kpis: ["Nombre total d'avis","Évolution du volume d'avis","Note moyenne","Évolution de la note moyenne","NPS","Évolution du NPS","TOP 3 des établissements à meilleure note du réseau","FLOP 3 Établissements à surveiller","Nombre d'établissements sous 3★"
        ]
    },
    ai: {
        title: "ADVANCED INSIGHTS",
        kpis: ["Sentiment global","Taux de sentiments positifs","Taux de sentiments neutres","Taux de sentiments négatifs","Évolution des sentiments","Sentiments par source","Top ressentis positifs","Top ressentis négatifs","Nombre total de ressentis","Évolution des ressentis"
        ]
    }
};

// ETABLISSEMENT 
const reportDataEmailBranch = {
    visibility: {
        title: "Reporting VISIBILITE",
        kpis: ["Indice de visibilité","Evolution de l’indice de visibilité","Nombre total de visiteurs","Taux de complétude de fiche Google"
        ]
    },

    campaign: {
        title: "Reporting CAMPAGNES",
        kpis: ["Nombre total de publications diffusées sur la période","Portée totale des campagnes","Évolution de la portée totale des campagnes","Nombre total d'interactions","Évolution des interactions"
        ]
    },

    reviews: {
        title: "Reporting AVIS (réputation)",
        kpis: ["Nombre total d'avis","Évolution du volume d'avis","Note moyenne","Évolution de la note moyenne"
        ]
    },

    ai: {
        title: "ADVANCED INSIGHTS",
        kpis: ["Sentiment global","Évolution des sentiments","Taux de sentiments positifs","Taux de sentiments négatifs","Nombre total de ressentis","Évolution des ressentis","Top 5 ressentis positifs","Flop 5 ressentis négatifs"
        ]
    }
};

const reportDataPdfBranch = {
    visibility: {
        title: "Reporting VISIBILITE",
        kpis: ["Nombre total de visiteurs","Evolution du nombre de visiteurs","Nombre de vues de la fiche Google Business Profile","Indice de visibilité","Evolution de l’indice de visibilité","Nombre d'activations Google (itinéraires, appels, site web)","Evolution des activations","Nombre d'impressions","Evolution des impressions","Taux de complétude de fiche Google"
        ]
    },

    campaign: {
        title: "Reporting CAMPAGNES",
        kpis: ["Nombre de campagnes publiées","Nombre de campagnes actives","Nombre de campagnes terminées","Portée totale des campagnes","Évolution de la portée totale des campagnes","Nombre total d'interactions","Évolution des interactions","Interactions moyennes","Portée moyenne par campagne"
        ]
    },

    reviews: {
        title: "Reporting AVIS (réputation)",
        kpis: ["Nombre total d'avis","Évolution du volume d'avis","Note moyenne","Évolution de la note moyenne","NPS","Évolution du NPS","Nombre d'avis répondus","Nombre d'avis non répondus","Répartition des notes (1★ à 5★)","Nombre d'avis 5★","Nombre d'avis 1★"
        ]
    },

    ai: {
        title: "ADVANCED INSIGHTS",
        kpis: ["Sentiment global","Taux de sentiments positifs","Taux de sentiments neutres","Taux de sentiments négatifs","Évolution des sentiments","Sentiments par source","Top ressentis positifs","Top ressentis négatifs","Nombre total de ressentis","Évolution des ressentis","Indice de satisfaction","Tendance de satisfaction"
        ]
    }
};

// ---------------------------------  Fonctions HQ
function openReport(type, format){
    let reportData;
    if(format === "Email"){
        reportData = reportDataEmail;
        console.log('OKKKKKKKKKKKKK');
    }
    else if(format === "Pdf"){
        reportData = reportDataPdf;
    }

    document.getElementById("reportTypes" + format)
        .classList.add("hidden");

    document.getElementById("reportKpis" + format)
        .classList.remove("hidden");

    document.getElementById("reportTitle" + format)
        .innerText = reportData[type].title;

    const container = document.getElementById("kpiContainer" + format);
    container.innerHTML = "";
    reportData[type].kpis.forEach(kpi => {

        container.innerHTML += `
            <label class="kpi-item">
                <input type="checkbox">
                ${kpi}
            </label>
        `;

    });

}


function backToReports(format){
    document.getElementById("reportTypes" + format)
        .classList.remove("hidden");
    document.getElementById("reportKpis" + format)
        .classList.add("hidden");

}
// ---------------------------------  Fonctions FRANCHISES
let currentCategory = "visibility";
function openKpiModal(category){
    currentCategory = category;
    document
    .getElementById("kpiModal")
    .style.display="flex";

    loadKpis();

}

// fermer POPUP
function closeKpiModal(){
    document
    .getElementById("kpiModal")
    .style.display="none";
}


// changement Email / PDF
function changeReportType(){
    loadKpis();

}

function loadKpis() {

    const type = document
        .querySelector('input[name="reportType"]:checked')
        .value;

    let data;

    if (type === "email") {
        data = reportDataEmailBranch;
    } else {
        data = reportDataPdfBranch;
    }

    const category = data[currentCategory];

    document.getElementById("categoryTitle").innerHTML = category.title;

    const container = document.getElementById("kpiContainer");
    container.innerHTML = "";

    category.kpis.forEach(kpi => {
        container.innerHTML += `
            <div class="kpi-items">
                <input type="checkbox">
                <span>${kpi}</span>
            </div>
        `;
    });
}
