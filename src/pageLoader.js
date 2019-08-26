import './styles/style.css';
import { searchContainer } from './modules/search-bar';
import { weatherContainer } from './modules/weather-container';


const loadDOM = () => {
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(searchContainer);
  body.appendChild(weatherContainer);
};

export default { loadDOM };
