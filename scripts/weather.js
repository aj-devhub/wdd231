// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.752938&lon=6.630906&units=metric&appid=3fd5312ccb3b21123a75f3726b3be34f';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);      
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

// Display weather results
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  let desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  captionDesc.textContent = `${desc}`;
}