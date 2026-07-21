// INNPUT AUTO - MANUEL
document.querySelectorAll(".config-card").forEach(card => {

    const radios = card.querySelectorAll('input[type="radio"]');
    const schedule = card.querySelector(".scheduleConfig");

    radios.forEach(radio => {

        radio.addEventListener("change", function () {

            if (this.value === "automatique") {
                schedule.classList.remove("hidden");
            } else {
                schedule.classList.add("hidden");
            }

        });

    });

});

// INPUT EMAIL
const emailInput = document.getElementById("emailInput");
const emailTags = document.getElementById("emailTags");

document.querySelectorAll(".email-container").forEach(container => {

    const emailInput = container.querySelector(".emailInput");
    const emailTags = container.querySelector(".emailTags");

    emailInput.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            const email = this.value.trim();

            if (isValidEmail(email)) {

                addEmailTag(emailTags, email);
                this.value = "";

            }

        }

    });

});

// ajouter email dans input
function addEmailTag(container, email) {

    const tag = document.createElement("div");
    tag.classList.add("email-tag");

    tag.innerHTML = `${email} <span>×</span>`;

    tag.querySelector("span").addEventListener("click", function() {
        tag.remove();
    });

    container.appendChild(tag);

}

//ouvrir le reporting * pour choix des kpis
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// afficher le modal de succès
function validateKpis() {
    console.log("Données enregistrées !");
    const container = document.getElementById("toast-container");

    const toast = document.createElement("div");
    toast.className = "toast-success";
    toast.innerHTML = `
        <i class="fa-solid fa-check" style="font-size: 20px;"></i>
        <div class="toast-text">
            <h5>Success</h5>
            <p>Enregistrer avec succès</p>
        </div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3000);
}

