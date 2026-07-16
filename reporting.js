const reportDataEmail = {
    visibility: {
        title: "Visibilité",
        kpis: ["Nombre de vues","Recherches Google","Interactions","Appels","Itinéraires","Clics vers le site","Photos vues"]
    },
    campaign: {
        title: "Campagnes",
        kpis: ["Nombre de campagnes","Portée","Engagement","Publications"]
    },
    reviews: {
        title: "Avis",
        kpis: ["Nombre d'avis","Note moyenne","Réponses","Temps de réponse"]
    },
    ai: {
        title: "Advanced Insights",
        kpis: ["Sentiment global","Thèmes","Recommandations IA"]
    }
};



const reportDataPdf = {
    visibility: {
        title: "Visibilité",
        kpis: ["Nombre de vues","Recherches Google","Interactions","Évolution visibilité","Top établissements"]
    },
    campaign: {
        title: "Campagnes",
        kpis: ["Campagnes actives","Portée totale","Taux d'engagement","Meilleure campagne","Performance par établissement"]
    },
    reviews: {
        title: "Avis",
        kpis: ["Volume d'avis","Note moyenne","Sentiment global","Taux de réponse","Avis négatifs"]
    },
    ai: {
        title: "Advanced Insights",
        kpis: ["Analyse sentiment","Tendances détectées","Points forts","Points faibles","Recommandations IA"]
    }
};


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