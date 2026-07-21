function showTab(tabId, element) {
    document.querySelectorAll(".tab-content")
        .forEach(tab => {
            tab.classList.add("hidden");
        });

    document.querySelectorAll(".menu-item")
        .forEach(item => {
            item.classList.remove("active");
        });

    document.getElementById(tabId)
        .classList.remove("hidden");

    element.classList.add("active");
}

// ouvrir reporting
function toggleReporting(type) {

    const list = document.getElementById("reportList" + type);
    const arrow = document.getElementById("reportArrow" + type);

    list.classList.toggle("hidden");


    if (list.classList.contains("hidden")) {

        arrow.classList.remove("fa-chevron-up");
        arrow.classList.add("fa-chevron-down");

    } else {

        arrow.classList.remove("fa-chevron-down");
        arrow.classList.add("fa-chevron-up");

    }
}



