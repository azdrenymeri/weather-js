import './styles/style.css';
import { header } from './modules/nav-container';
import { searchContainer } from './modules/search-bar';
import { weatherContainer } from './modules/weather-container';
import { searchWeatherByCity } from './modules/open-weather-api';
import { fahrenheitToCelcius,celciusToFahrenheit } from './modules/temperature-utils';
const loadDOM = () => {

  const body = document.getElementsByTagName('body')[0];
   body.appendChild(searchContainer);
   body.appendChild(weatherContainer);
    searchWeatherByCity('London');

}


export { loadDOM };
