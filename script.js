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

