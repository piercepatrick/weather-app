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

eval("const apiKey = 'a40b56249b0a84a90a3e822cdb0aee31'\r\nasync function callAPI(city) {\r\n    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {mode: 'cors'})\r\n    const data = await response.json()\r\n    processData(data)\r\n}\r\n\r\nfunction processData(apiData) {\r\n    const weatherData = {name: apiData.name, temp: apiData.main.temp, tempFeelsLike: apiData.main.feels_like, humidity: apiData.main.humidity, tempHigh: apiData.main.temp_max,\r\n                        tempLow: apiData.main.temp_min, weather: apiData.weather[0].main, weatherDescription: apiData.weather[0].description, pressure: apiData.main.pressure,\r\n                        windSpeed: apiData.wind.speed}\r\n    return weatherData\r\n}\r\ncallAPI('London')\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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