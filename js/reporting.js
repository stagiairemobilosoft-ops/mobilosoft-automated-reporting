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

function loadKpis(){
    let type = document
    .querySelector('input[name="reportType"]:checked')
    .value;

    let data = type==="email"
        ? reportDataEmail
        : reportDataPdf;

    let category = data[currentCategory];
    document
    .getElementById("categoryTitle")
    .innerHTML = category.title;

    let container =
    document.getElementById("kpiContainer");
    container.innerHTML="";
    category.kpis.forEach(kpi=>{


        container.innerHTML += `
        <div class="kpi-items">
            <input type="checkbox" >
            <span>
                ${kpi}
            </span>
        </div>
        `;
    });
}

function saveKpiConfig(){
    let selected=[];
    document
    .querySelectorAll(".kpi-items input:checked")
    .forEach(item=>{
        selected.push(
            item.nextElementSibling.innerText
        );

    });

    console.log("KPIs sélectionnés :",selected);
    closeKpiModal();

}