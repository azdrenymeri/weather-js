import { setData } from './weather-container';
import { setCityPhoto } from './flickr-api';
// "http://openweathermap.org/img/w/" + iconcode + ".png"; icon of json
const searchWeatherByCity = (cityName) => {
  setCityPhoto(cityName);
  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+
              cityName+
              '&appid='+process.env.WEATHER_API_KEY+'&units=metric';
  getData(url);
}
const searchWeatherByCoordinates = (lat,long) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+
              lat+'&lon='+long+'&appid='+process.env.WEATHER_API_KEY+
              '&units=metric';
              console.log(lat,long);
  getData(url);
}

const getData = (url) => {
  fetch(url)
  .then(response => response.json())
  .then(json => {
    console.log(json);
      const obj = {
        title: json.name,
        description: json.weather[0].main,
        icon: json.weather[0].icon,
        temperature: Math.round(json.main.temp)+'°C',
        humidity: json.main.humidity+'%',
        windSpeed: json.wind.speed,
        minTemp: Math.round(json.main.temp_min)+'°C',
        maxTemp: Math.round(json.main.temp_max)+'°C'
      };

      setData(obj);

  }).catch(err => console.log(err));
}


export { searchWeatherByCity,searchWeatherByCoordinates }
