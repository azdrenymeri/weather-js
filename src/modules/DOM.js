import { loadDOM } from './../pageLoader';
import {convertToCelcius,convertToFahrenheit } from './weather-container';
import { searchWeatherByCity } from './open-weather-api';


loadDOM();

document.getElementById('myonoffswitch').addEventListener('change',(event)=> {
    if(event.target.checked){
      convertToCelcius();
    }else{
      convertToFahrenheit();
    }
});

document.getElementById('search-ic').addEventListener('click', (event)=> {
    setTimeout(toggleLoadingModal,2000);
    const searchBar = document.getElementById('search-bar');
    searchWeatherByCity(searchBar.value.trim());
    searchBar.value = '';
    toggleLoadingModal();
});

document.getElementById('search-bar').addEventListener('keyup', (e)=> {

    if(e.keyCode === 13){
      setTimeout(toggleLoadingModal,3000);
      searchWeatherByCity(e.target.value.trim());
      e.target.value = '';
      toggleLoadingModal();
    }

});

const toggleLoadingModal = () => {

  const main = document.getElementById('main');
  const loader = document.getElementById('loader');
  const searchBar = document.getElementsByClassName('search-container')[0];
  const weatherCard = document.getElementsByClassName('card')[0];

  if(main.style.display === 'none' && loader.style.display === 'block'){
      main.style.display = 'block';
      searchBar.style.display = 'block';
      weatherCard.style.display = 'inline';
      loader.style.display = 'none';
  }else{
    main.style.display = 'none';
    searchBar.style.display = 'none';
    weatherCard.style.display = 'none';
    loader.style.display = 'block';
  }
}
