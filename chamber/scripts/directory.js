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
   DIRECTORY ELEMENTS
================================= */

const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");


/* ==============================
   GET MEMBER DATA
================================= */

async function getMembers() {

    try {

        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Could not load members.json");
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {

        console.error("Error loading members:", error);

        membersContainer.innerHTML =
            "<p>Sorry, the member information could not be loaded.</p>";
    }
}


/* ==============================
   DISPLAY MEMBERS
================================= */

function displayMembers(members) {

    membersContainer.innerHTML = "";

    members.forEach((member) => {

        const card = document.createElement("article");

        card.innerHTML = `
            <img 
                src="images/${member.image}" 
                alt="${member.name} logo"
                loading="lazy"
            >

            <h2>${member.name}</h2>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <p>${member.description}</p>

            <p>Membership Level: ${member.membershipLevel}</p>

            <a 
                href="${member.website}" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Visit Website
            </a>
        `;

        membersContainer.appendChild(card);

    });
}


/* ==============================
   GRID VIEW
================================= */

gridButton.addEventListener("click", () => {

    membersContainer.classList.add("grid");

    membersContainer.classList.remove("list");

});


/* ==============================
   LIST VIEW
================================= */

listButton.addEventListener("click", () => {

    membersContainer.classList.add("list");

    membersContainer.classList.remove("grid");

});


/* ==============================
   LOAD MEMBERS
================================= */

getMembers();

/* ==============================
   FOOTER
================================= */

document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;
