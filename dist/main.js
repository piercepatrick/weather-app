/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const apiKey = 'a40b56249b0a84a90a3e822cdb0aee31'\r\nconst searchText = document.querySelector('.search-text')\r\nconst searchBtn = document.querySelector('.search-button')\r\nconst weatherContainer = document.querySelector('.weatherContainer')\r\nconst cityName = document.querySelector('#city-name')\r\nconst tempElem = document.querySelector('#temp')\r\nconst tempFeelsLikeElem = document.querySelector('#tempFeelsLike')\r\nconst weatherElem = document.querySelector('#weather')\r\nconst weatherDescElem = document.querySelector('#weatherDescription')\r\nconst tempHighElem = document.querySelector('#tempHigh')\r\nconst tempLowElem = document.querySelector('#tempLow')\r\nconst humidityElem = document.querySelector('#humidity')\r\nconst pressureElem = document.querySelector('#pressure')\r\nconst windSpeedElem = document.querySelector('#windSpeed')\r\nconst errorElem = document.querySelector('#error')\r\n\r\nsearchBtn.addEventListener('click', callAPI)\r\n\r\nasync function callAPI(e) {\r\n    //e.preventDefault()\r\n    let city = searchText.value\r\n    searchText.value = ''\r\n    try {\r\n        const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {mode: 'cors'})\r\n        const data = await response.json()\r\n        const weatherData = processData(data)\r\n        errorElem.innerHTML = ''\r\n        displayWeather(weatherData)\r\n    }\r\n    catch {\r\n        errorElem.innerHTML = 'Error'\r\n    }\r\n}\r\n\r\nfunction processData(apiData) {\r\n    const weatherData = {name: apiData.name, temp: apiData.main.temp, tempFeelsLike: apiData.main.feels_like, humidity: apiData.main.humidity, tempHigh: apiData.main.temp_max,\r\n                        tempLow: apiData.main.temp_min, weather: apiData.weather[0].main, weatherDescription: apiData.weather[0].description, pressure: apiData.main.pressure,\r\n                        windSpeed: apiData.wind.speed}\r\n    console.log(weatherData)\r\n    return weatherData\r\n}\r\n\r\nfunction displayWeather(weatherData) {\r\n    cityName.innerHTML = weatherData.name\r\n    tempElem.innerHTML = weatherData.temp\r\n    tempFeelsLikeElem.innerHTML = weatherData.tempFeelsLike\r\n    weatherElem.innerHTML =weatherData.weather\r\n    weatherDescElem.innerHTML =weatherData.weatherDescription\r\n    tempHighElem.innerHTML = weatherData.tempHigh\r\n    tempLowElem.innerHTML = weatherData.tempLow\r\n    humidityElem.innerHTML = weatherData.humidity\r\n    pressureElem.innerHTML = weatherData.pressure\r\n    windSpeedElem.innerHTML =weatherData.windSpeed\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;