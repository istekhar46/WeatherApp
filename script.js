const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '50b74be4abmsh3612e33a5aa0344p120b8ejsn2a83698e62d4',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            document.getElementById("city-name").innerHTML = document.getElementById("input").value;
            document.getElementById("temp").innerHTML = response.temp+"<sup>ºC</sup>"
            document.getElementById("wind").innerHTML = response.wind_speed + " Km/H"
            document.getElementById("humidity").innerHTML = response.humidity + " %"      
        }).catch(err => console.log(err))

}

document.getElementById("button").addEventListener('click', (e) => {
    e.preventDefault()
    let city = document.getElementById("input").value
    getWeather(city);
})
