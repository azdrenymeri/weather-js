
const currentLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log('Latitude: '+position.coords.latitude+"\n Longitude: "+position.coords.longitude);
  });
}
export { currentLocation };
