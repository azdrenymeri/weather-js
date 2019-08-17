
const  setCityPhoto = (cityName) => {

const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='+
                process.env.FLICKR_API_KEY+'&tags=Skyline&text='+cityName.replace(' ','+')
                +'&sort=relevance&accuracy=11&content_type=1machine_tag_mode=OR&format=json&nojsoncallback=1';

// Tags City,Urban,Downtown,Town,Block,Street, Panoramic
      getData(url);
}
const getCityPhotoByLatLong = (lat,long) => {

}


const setRandomCityPhoto = () => {
  const cities = ['New York City','San Francisco','Las Vegas','Dubai','Berlin','Tokyo']
  const randomIndex =  Math.round(Math.random() * (cities.length - 0) + 0);
  console.log(cities[randomIndex]);
  getCityPhotoUrl(cities[randomIndex]);

}
const getData = (url) => {
  fetch(url)
  .then(response => response.json())
  .then(json => {
    const index =  Math.round(Math.random() * (json.photos.photo.length - 0) + 0);
    const selectedPhoto = json.photos.photo[index];
        setBackground(selectedPhoto);
  })
  .catch(err => console.error(err))
}


const setBackground = (json) => {
  const main = document.getElementsByClassName('background-image')[0];
  main.style.backgroundImage = 'url(https://farm'+json.farm+'.staticflickr.com/'+json.server+'/'+json.id+'_'+json.secret+'_b.jpg)';
}


export { setCityPhoto,setRandomCityPhoto };
