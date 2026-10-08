const foodContainer = document.querySelector("#food-container");
const foodModal = document.querySelector("#food-modal");
const modalContent = document.querySelector("#modal-content");
const modalClose = document.querySelector("#modal-close");
const lastViewed = document.querySelector("#last-viewed");

let foodData = [];

async function getFoods() {

    try {

        const response = await fetch("data/foods.json");

        if (!response.ok) {
            throw new Error("Unable to load food data.");
        }

        const data = await response.json();

        foodData = data.foods;

        displayFoods(foodData);

    } catch (error) {

        foodContainer.innerHTML = `
            <p>
                Sorry, the food information could not be loaded.
                Please try again later.
            </p>
        `;

        console.error("Error loading foods:", error);
    }
}

function displayFoods(foods) {

    foodContainer.innerHTML = foods.map((food, index) => `
        <article class="food-card">

            <h2>${food.name}</h2>

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

            <button
                class="details-button"
                type="button"
                data-index="${index}"
            >
                View Details
            </button>

        </article>
    `).join("");

    const detailButtons =
        document.querySelectorAll(".details-button");

    detailButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const food = foodData[button.dataset.index];

            localStorage.setItem(
                "lastViewedFood",
                food.name
            );

            lastViewed.textContent =
                `Last food viewed: ${food.name}`;

            modalContent.innerHTML = `
                <h2 id="modal-title">${food.name}</h2>

                <p>
                    <strong>Country:</strong>
                    ${food.country}
                </p>

                <p>
                    <strong>Category:</strong>
                    ${food.category}
                </p>

                <p>
                    <strong>Description:</strong>
                    ${food.description}
                </p>

                <p>
                    <strong>Ingredients:</strong>
                    ${food.ingredients}
                </p>
            `;

            foodModal.showModal();
        });
    });
}

modalClose.addEventListener("click", () => {
    foodModal.close();
});

foodModal.addEventListener("click", (event) => {

    if (event.target === foodModal) {
        foodModal.close();
    }

});

const savedFood = localStorage.getItem("lastViewedFood");

if (savedFood) {
    lastViewed.textContent =
        `Last food viewed: ${savedFood}`;
}

getFoods();