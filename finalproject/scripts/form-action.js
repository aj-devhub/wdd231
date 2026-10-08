const formResults = document.querySelector("#form-results");

const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const food = params.get("food");
const country = params.get("country");
const category = params.get("category");
const description = params.get("description");

if (name && food && country && category && description) {

    formResults.innerHTML = `
        <h2>Submitted Information</h2>

        <p>
            <strong>Name:</strong>
            ${name}
        </p>

        <p>
            <strong>Food:</strong>
            ${food}
        </p>

        <p>
            <strong>Country:</strong>
            ${country}
        </p>

        <p>
            <strong>Category:</strong>
            ${category}
        </p>

        <p>
            <strong>Description:</strong>
            ${description}
        </p>
    `;

} else {

    formResults.innerHTML = `
        <p>
            No food suggestion was submitted.
        </p>
    `;

}