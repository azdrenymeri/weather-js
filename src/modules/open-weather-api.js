
const searchWeatherByCity = async (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${
    cityName
  }&appid=${
    process.env.WEATHER_API_KEY
  }&units=metric`;

  const response = await fetch(url);
  return response.json();
};

export default { searchWeatherByCity };
