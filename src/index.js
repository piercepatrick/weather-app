const apiKey = 'a40b56249b0a84a90a3e822cdb0aee31'
async function callAPI(city) {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {mode: 'cors'})
    const data = await response.json()
    processData(data)
}

function processData(apiData) {
    const weatherData = {name: apiData.name, temp: apiData.main.temp, tempFeelsLike: apiData.main.feels_like, humidity: apiData.main.humidity, tempHigh: apiData.main.temp_max,
                        tempLow: apiData.main.temp_min, weather: apiData.weather[0].main, weatherDescription: apiData.weather[0].description, pressure: apiData.main.pressure,
                        windSpeed: apiData.wind.speed}
    return weatherData
}
callAPI('London')
