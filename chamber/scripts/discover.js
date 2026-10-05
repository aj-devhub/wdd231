import { discoverItems } from "../data/discover.mjs";


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
   DISCOVER CARDS
================================= */

const discoverContainer =
    document.querySelector("#discover-container");

function displayDiscoverItems(items) {

    items.forEach((item) => {

        const card = document.createElement("article");

        card.classList.add("discover-card");

        card.innerHTML = `
            <h2>${item.name}</h2>

            <figure>
                <img
                    src="images/${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >
            </figure>

            <address>${item.address}</address>

            <p>${item.description}</p>

            <button type="button">Learn More</button>
        `;

        discoverContainer.appendChild(card);
    });
}

if (discoverContainer) {
    displayDiscoverItems(discoverItems);
}


/* ==============================
   LAST VISIT
================================= */

const visitMessage =
    document.querySelector("#visit-message");

const currentVisit = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (visitMessage) {

    if (!lastVisit) {

        visitMessage.textContent =
            "Welcome! Let us know if you have any questions.";

    } else {

        const timeDifference =
            currentVisit - Number(lastVisit);

        const daysDifference =
            Math.floor(
                timeDifference /
                (1000 * 60 * 60 * 24)
            );

        if (daysDifference < 1) {

            visitMessage.textContent =
                "Back so soon! Awesome!";

        } else if (daysDifference === 1) {

            visitMessage.textContent =
                "You last visited 1 day ago.";

        } else {

            visitMessage.textContent =
                `You last visited ${daysDifference} days ago.`;
        }
    }
}

localStorage.setItem("lastVisit", currentVisit);