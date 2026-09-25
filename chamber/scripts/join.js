/* ==============================
   HAMBURGER MENU
================================= */

const navButton = document.querySelector("#nav-button");
const navigation = document.querySelector("nav");

navButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    navButton.classList.toggle("open");
});


/* ==============================
   FOOTER
================================= */

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


/* ==============================
   JOIN PAGE
================================= */

const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}


/* ==============================
   MEMBERSHIP MODALS
================================= */

const membershipLinks = document.querySelectorAll(".membership-card a");

membershipLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const modalId = link.getAttribute("href");

        const modal = document.querySelector(modalId);

        modal.showModal();

    });

});


/* ==============================
   CLOSE MODALS
================================= */

const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.closest("dialog").close();

    });

});