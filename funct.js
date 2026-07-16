
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

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toggleReporting() {

    const list = document.getElementById("reportList");
    const arrow = document.getElementById("reportArrow");

    list.classList.toggle("hidden");

    if (list.classList.contains("hidden")) {
        arrow.classList.remove("fa-chevron-up");
        arrow.classList.add("fa-chevron-down");
    } else {
        arrow.classList.remove("fa-chevron-down");
        arrow.classList.add("fa-chevron-up");
    }
}