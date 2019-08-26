import { convertToCelciusUtil, convertToFahrenheitUtil } from './temperature-utils';

const weatherContainer = document.createElement('div');
weatherContainer.classList.add('card', 'hidden');
weatherContainer.innerHTML = `
    <div class="card-container">
      <div class="card-header">
        <h1 id="title"></h1>
        <div id="description"></div>
        <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
    <label class="onoffswitch-label" for="myonoffswitch">
        <span class="onoffswitch-inner"></span>
    </label>
</div>
      </div>
      <div class="card-body">
        <img id="weather-icon" alt="ic" src="#"/>
        <div id="temperature">40°C</div>
      </div>
      <div class="card-footer">
        <div class="left-footer">
          <div class="humidity">
          <div id="humidity">Humidity</div> <div id="humidity-val">0</div>
          </div>
          <div class="wind-speed">
          <div id="wind-speed">Wind speed</div> <div id="wind-speed-val">0</div>
          </div>
        </div>
        <div class="right-footer">
          <div class="max-temperature">
          <div id="max-temp">Max temp.</div> <div id="max-temp-val">0</div>
          </div>
          <div class="min-temperature">
          <div id="min-temp">Min temp.</div> <div id="min-temp-val">0</div>
          </div>
        </div>

      </div>
    </div>
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
