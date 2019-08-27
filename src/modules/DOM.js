import {
  convertToCelcius, setData, convertToFahrenheit, showWeatherCard,
} from './weather';
import searchWeatherByCity from './open-weather-api';
import getCityPhoto from './flickr-api';
import '../styles/style.css';


const toggleLoadingModal = () => {
  const main = document.getElementById('main');
  const loader = document.getElementById('loader');
  const searchBar = document.getElementsByClassName('search-container')[0];
  const weatherCard = document.getElementsByClassName('card')[0];

  if (main.style.display === 'none' && loader.style.display === 'block') {
    main.style.display = 'block';
    searchBar.style.display = 'block';
    weatherCard.style.display = 'inline';
    loader.style.display = 'none';
  } else {
    main.style.display = 'none';
    searchBar.style.display = 'none';
    weatherCard.style.display = 'none';
    loader.style.display = 'block';
  }
};

const setBackground = (json) => {
  const main = document.getElementsByClassName('background-image')[0];
  main.style.backgroundImage = `url(https://farm${json.farm}.staticflickr.com/${json.server}/${json.id}_${json.secret}_b.jpg)`;
};

document.getElementById('search-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const searchBar = document.getElementById('search-bar');

  searchWeatherByCity(searchBar.value.trim()).then((json) => {
    if (json.cod === 200) {
      toggleLoadingModal();

      showWeatherCard();

      const dataObj = {
        title: json.name,
        description: json.weather[0].main,
        icon: json.weather[0].icon,
        temperature: `${Math.round(json.main.temp)}°C`,
        humidity: `${json.main.humidity}%`,
        windSpeed: json.wind.speed,
        minTemp: `${Math.round(json.main.temp_min)}°C`,
        maxTemp: `${Math.round(json.main.temp_max)}°C`,
      };

      setData(dataObj);

      getCityPhoto(searchBar.value.trim()).then((data) => {
        const index = Math.round(Math.random() * (data.photos.photo.length - 0) + 0);
        const selectedPhoto = data.photos.photo[index];
        setBackground(selectedPhoto);
        toggleLoadingModal();
      });
    } else {
      alert('City was not found');
      searchBar.value = '';
    }
  }).catch((error) => {
    alert(error);
    toggleLoadingModal();
  });
});


document.getElementById('myonoffswitch').addEventListener('change', (event) => {
  if (event.target.checked) {
    convertToCelcius();
  } else {
    convertToFahrenheit();
  }
});
