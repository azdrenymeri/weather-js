const searchWeatherByCity = async cityName => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    return err;
  }
};

export default searchWeatherByCity;
