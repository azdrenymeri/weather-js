## Weather App 
#### A Weather applicatio where you can get information bassed on your location or by searching.
The app is build with javascript and gets the data from  [http://openweathermap.org](http://openweathermap.org) and also shows a picture in background bassed on the name of the city you search this made possible from `flicker` API.

___
#### Libraries used
* Webpack
* Webpack-cli
* dotenv-webpack
* node-sass
* sass-loader
* file-loader

#### API-s used
* flickr api
* openweather api
* geolocation api

#### How to run the app
1.Simple create `.env` file on the root level
2.Inside `.env` file set:
```
FLICKR_API_KEY=<YOUR KEY FROM FLICKR>
WEATHER_API_KEY=<YOUR KEY FROM OPEN WEATHER API>
```
2.Run `npm install`
3.Final run `npm run build`
