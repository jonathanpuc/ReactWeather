var React = require('react');



var About = (props) => {
  return (
    <div>
    <h1 className="text-center page-title">About</h1>
    <p> This is an application built on React. This application which allows users to track the weather, was built to familiarise myself and practice with React.</p>
    <p>Check out my source code: <a href="https://github.com/jonathanpuc/ReactWeather" target="_blank">GitHub repository</a></p>
    <p>Here are some of the tools I used:</p>
    <ul>
      <li><p><a href="https://facebook.github.io/react/" target="_blank">React</a></p></li>
      <li><p><a href="https://nodejs.org/en/" target="_blank">Node.js</a></p></li>
      <li><p><a href="https://expressjs.com/" target="_blank">Express.js</a></p></li>
      <li><p><a href="http://foundation.zurb.com/" target="_blank">Foundation</a></p></li>
      <li><p><a href="https://openweathermap.org/" target="_blank">Open Weather Map</a></p></li>
    </ul>
    </div>
  )
};

module.exports = About;
