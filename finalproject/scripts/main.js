const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
});


const featuredContainer =
    document.querySelector("#featured-food-container");


async function getFeaturedFoods() {

    if (!featuredContainer) {
        return;
    }

    try {

        const response = await fetch("data/foods.json");

        if (!response.ok) {
            throw new Error("Unable to load food data.");
        }

        const data = await response.json();

        const featuredFoods = data.foods.slice(0, 3);

        displayFeaturedFoods(featuredFoods);

    } catch (error) {

        featuredContainer.innerHTML = `
            <p>
                Sorry, the featured foods could not be loaded.
                Please try again later.
            </p>
        `;

        console.error(
            "Error loading featured foods:",
            error
        );
    }
}


function displayFeaturedFoods(foods) {

    featuredContainer.innerHTML = foods.map((food) => `
        <article class="food-card">

            <h3>${food.name}</h3>

            <p>
                <strong>Country:</strong>
                ${food.country}
            </p>

            <p>
                <strong>Category:</strong>
                ${food.category}
            </p>

            <p>
                ${food.description}
            </p>

        </article>
    `).join("");
}


getFeaturedFoods();



const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}