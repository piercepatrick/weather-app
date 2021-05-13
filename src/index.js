const apiKey = 'a40b56249b0a84a90a3e822cdb0aee31'
async function callAPI(city) {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {mode: 'cors'})
    const data = await response.json()
    console.log(data)
}



callAPI('London')