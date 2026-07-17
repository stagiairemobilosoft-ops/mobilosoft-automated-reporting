
const emailInput = document.getElementById("emailInput");
const emailTags = document.getElementById("emailTags");

emailInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (isValidEmail(email)) {
            addEmailTag(email);
            emailInput.value = "";
        }
    }
});

// ajouter email dans input

function addEmailTag(email) {

    const tag = document.createElement("div");
    tag.classList.add("email-tag");

    tag.innerHTML = `
        ${email}
        <span>×</span>
    `;

    tag.querySelector("span").addEventListener("click", function() {
        tag.remove();
    });

    emailTags.appendChild(tag);
}

//ouvrir le reporting * pour choix des kpis
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

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


// activer les autres configs si automatique

const modeRadios = document.querySelectorAll('input[name="modeEnvoie"]');
const scheduleConfig = document.getElementById("scheduleConfig");


modeRadios.forEach(radio => {

    radio.addEventListener("change", function() {

        if (this.value === "automatique") {

            scheduleConfig.classList.remove("hidden");

        } else {

            scheduleConfig.classList.add("hidden");

        }

    });

});
