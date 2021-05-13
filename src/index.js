const apiKey = 'a40b56249b0a84a90a3e822cdb0aee31'
const searchText = document.querySelector('.search-text')
const searchBtn = document.querySelector('.search-button')
const weatherContainer = document.querySelector('.weatherContainer')
const cityName = document.querySelector('#city-name')
const tempElem = document.querySelector('#temp')
const tempFeelsLikeElem = document.querySelector('#tempFeelsLike')
const weatherElem = document.querySelector('#weather')
const weatherDescElem = document.querySelector('#weatherDescription')
const tempHighElem = document.querySelector('#tempHigh')
const tempLowElem = document.querySelector('#tempLow')
const humidityElem = document.querySelector('#humidity')
const pressureElem = document.querySelector('#pressure')
const windSpeedElem = document.querySelector('#windSpeed')
const errorElem = document.querySelector('#error')

searchBtn.addEventListener('click', callAPI)

async function callAPI(e) {
    //e.preventDefault()
    let city = searchText.value
    searchText.value = ''
    try {
        const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {mode: 'cors'})
        const data = await response.json()
        const weatherData = processData(data)
        errorElem.innerHTML = ''
        displayWeather(weatherData)
    }
    catch {
        errorElem.innerHTML = 'Error'
    }
}

function processData(apiData) {
    const weatherData = {name: apiData.name, temp: apiData.main.temp, tempFeelsLike: apiData.main.feels_like, humidity: apiData.main.humidity, tempHigh: apiData.main.temp_max,
                        tempLow: apiData.main.temp_min, weather: apiData.weather[0].main, weatherDescription: apiData.weather[0].description, pressure: apiData.main.pressure,
                        windSpeed: apiData.wind.speed}
    console.log(weatherData)
    return weatherData
}

function displayWeather(weatherData) {
    cityName.innerHTML = weatherData.name
    tempElem.innerHTML = weatherData.temp
    tempFeelsLikeElem.innerHTML = weatherData.tempFeelsLike
    weatherElem.innerHTML =weatherData.weather
    weatherDescElem.innerHTML =weatherData.weatherDescription
    tempHighElem.innerHTML = weatherData.tempHigh
    tempLowElem.innerHTML = weatherData.tempLow
    humidityElem.innerHTML = weatherData.humidity
    pressureElem.innerHTML = weatherData.pressure
    windSpeedElem.innerHTML =weatherData.windSpeed
}

