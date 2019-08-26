
const getCityPhoto = async (cityName) => {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
    process.env.FLICKR_API_KEY}&tags=Skyline&text=${cityName.replace(' ', '+')
  }&sort=relevance&accuracy=11&content_type=1machine_tag_mode=OR&format=json&nojsoncallback=1`;
  const response = await fetch(url);
  return response.json();
};


export default { getCityPhoto };
