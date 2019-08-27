import { convertToCelciusUtil, convertToFahrenheitUtil } from './temperature-utils';

const weatherContainer = document.createElement('div');
weatherContainer.classList.add('card', 'hidden');
weatherContainer.innerHTML = `

  `;
const showWeatherCard = () => {
  document.getElementsByClassName('card')[0].classList.remove('hidden');
};

const setData = (obj) => {
  document.getElementById('title').innerText = obj.title;
  document.getElementById('description').innerText = obj.description;
  document.getElementById('weather-icon')
    .setAttribute('src', `http://openweathermap.org/img/wn/${obj.icon}@2x.png`);
  document.getElementById('temperature').innerText = obj.temperature;
  document.getElementById('humidity-val').innerText = obj.humidity;
  document.getElementById('wind-speed-val').innerText = `${obj.windSpeed}(m/s)`;
  document.getElementById('min-temp-val').innerText = obj.minTemp;
  document.getElementById('max-temp-val').innerText = obj.maxTemp;
};

const convertToCelcius = () => {
  const temperature = document.getElementById('temperature');
  temperature.innerText = `${convertToCelciusUtil(temperature.innerText.split('°')[0])}°C`;

  const minTemp = document.getElementById('min-temp-val');
  minTemp.innerText = `${convertToCelciusUtil(minTemp.innerText.split('°')[0])}°C`;

  const maxTemp = document.getElementById('max-temp-val');
  maxTemp.innerText = `${convertToCelciusUtil(maxTemp.innerText.split('°')[0])}°C`;
};
const convertToFahrenheit = () => {
  const temperature = document.getElementById('temperature');
  temperature.innerText = `${convertToFahrenheitUtil(temperature.innerText.split('°')[0])}°F`;

  const minTemp = document.getElementById('min-temp-val');
  minTemp.innerText = `${convertToFahrenheitUtil(minTemp.innerText.split('°')[0])}°F`;

  const maxTemp = document.getElementById('max-temp-val');
  maxTemp.innerText = `${convertToFahrenheitUtil(maxTemp.innerText.split('°')[0])}°F`;
};

export {
  weatherContainer, setData, convertToCelcius, convertToFahrenheit, showWeatherCard,
};
