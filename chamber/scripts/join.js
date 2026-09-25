/* ==============================
   HAMBURGER MENU
================================= */

const navButton = document.querySelector("#nav-button");
const navigation = document.querySelector("nav");

if (navButton && navigation) {
    navButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        navButton.classList.toggle("open");
    });
}


/* ==============================
   FOOTER
================================= */

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent =
        `Last Modified: ${document.lastModified}`;
}


/* ==============================
   FORM TIMESTAMP
================================= */

const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}


/* ==============================
   MEMBERSHIP MODALS
================================= */

const membershipLinks =
    document.querySelectorAll(".membership-card a");

membershipLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const modalId = link.getAttribute("href");
        const modal = document.querySelector(modalId);

        if (modal) {
            modal.showModal();
        }

    });

});


/* ==============================
   CLOSE MODALS
================================= */

const closeButtons =
    document.querySelectorAll(".close-modal");

closeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const modal = button.closest("dialog");

        if (modal) {
            modal.close();
        }

    });

});


/* ==============================
   THANK YOU PAGE
================================= */

const params = new URLSearchParams(window.location.search);

const displayFirstName =
    document.querySelector("#display-first-name");

const displayLastName =
    document.querySelector("#display-last-name");

const displayEmail =
    document.querySelector("#display-email");

const displayPhone =
    document.querySelector("#display-phone");

const displayOrganization =
    document.querySelector("#display-organization");

const displayTimestamp =
    document.querySelector("#display-timestamp");


if (displayFirstName) {
    displayFirstName.textContent =
        params.get("first-name") || "";
}

if (displayLastName) {
    displayLastName.textContent =
        params.get("last-name") || "";
}

if (displayEmail) {
    displayEmail.textContent =
        params.get("email") || "";
}

if (displayPhone) {
    displayPhone.textContent =
        params.get("phone") || "";
}

if (displayOrganization) {
    displayOrganization.textContent =
        params.get("organization") || "";
}

if (displayTimestamp) {
    displayTimestamp.textContent =
        params.get("timestamp") || "";
}