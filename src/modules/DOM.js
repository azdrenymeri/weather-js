import { loadDOM } from './../pageLoader';
import {convertToCelcius,convertToFahrenheit } from './weather-container';
import { searchWeatherByCity } from './open-weather-api';



loadDOM();

//
document.getElementById('myonoffswitch').addEventListener('change',(event)=> {
    if(event.target.checked){
      convertToCelcius();
    }else{
      convertToFahrenheit();
    }
});

document.getElementById('search-ic').addEventListener('click', (event)=> {

    const searchBar = document.getElementById('search-bar');
    searchWeatherByCity(searchBar.value.trim());
    searchBar.value = '';

});
document.getElementById('search-bar').addEventListener('keyup', (e)=> {

    if(e.keyCode === 13){
      searchWeatherByCity(e.target.value.trim());
      e.target.value = '';
    }
});
