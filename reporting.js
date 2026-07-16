const reportData = {

    visibility: {
        title: "Visibilité",
        kpis: ["Nombre de vues","Recherches Google","Interactions","Appels","Itinéraires","Clics vers le site","Photos vues"]
    },
    campaign: {
        title: "Campagnes",
        kpis: [ "Nombre de campagnes","Portée","Engagement","Publications"]
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


function openReport(type){

    document.getElementById("reportTypesEmail").classList.add("hidden");
    document.getElementById("reportKpis").classList.remove("hidden");

    document.getElementById("reportTitle").innerText =
        reportData[type].title;

    const container = document.getElementById("kpiContainer");

    container.innerHTML = "";

    reportData[type].kpis.forEach(kpi=>{

        container.innerHTML += `
            <label class="kpi-item">
                <input type="checkbox" >
                ${kpi}
            </label>
        `;

    });

}


function backToReports(){

    document.getElementById("reportTypesEmail").classList.remove("hidden");
    document.getElementById("reportKpis").classList.add("hidden");

}