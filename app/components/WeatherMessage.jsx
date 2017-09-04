var React = require('react');


var WeatherMessage = ({temp, location}) => {

  return (
    <h3 className="text-center weather-result">It is {temp} in {location}</h3>
  );
}

module.exports = WeatherMessage;
