var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9a3578e8f665871d6d5eceda30b22ded&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) { //success
      if (res.data.cod && res.data.message) {            // open weather handles http requests differently, must accomodate for different syntax.
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) { // error
      throw new Error (res.data.message);
    });
  }
}
