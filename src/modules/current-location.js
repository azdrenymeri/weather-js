import { searchWeatherByCoordinates } from './open-weather-api';
const currentLocation = () => {
    // const args = {
    //   enableHighAccuracy: true,
    //   maximumAge        : 30000,
    //   timeout           : 27000
    // }
    // navigator.geolocation.getCurrentPosition((position) => {
    //    searchWeatherByCoordinates(position.coords.latitude,position.coords.longitude)
    // },error => console.log(error),args);
}
export { currentLocation };
