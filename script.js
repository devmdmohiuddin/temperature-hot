const apiKey = '13872ea482af8e1eb6f387d892a61c78'
const apiBase = 'https://api.openweathermap.org/data/2.5/weather'

const getWeatherData = (cityName) => {
  const URL = `${apiBase}?q=${cityName}&units=metric&appid=${apiKey}`;
  fetch(URL)
    .then(res => res.json())
    .then(data => updateUI(data))
}

const searchBtn = document.getElementById('search-btn').addEventListener('click', () => {
  const cityName = document.getElementById('city-name').value 
  getWeatherData(cityName)
})

const updateUI = (data) => {
  console.log(data)
  document.getElementById('show-city').innerText = data.name
  document.getElementById('show-temperature').innerText = data.main.temp
  document.getElementById('weather-status').innerText = data.weather[0].main
  document.getElementById('icon').setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
}





// const apiKey = 'b6cc4392568a3586e950307c86a22bbd';
// const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

// const getWeatherData = city => {
//     const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => updateUI(data))
// }

// const searchBtn = document.getElementById('search_button');
// searchBtn.addEventListener('click', () => {
//     const inputCity = document.getElementById('city').value;
//     getWeatherData(inputCity)
// })

// const updateUI = data => {
//     document.getElementById('show_city').innerText = data.name || "Unknown Location!";
//     document.getElementById('show_temperature').innerText = data.main.temp;
//     document.getElementById('weather_status').innerText = data.weather[0].main;
//     document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
//     document.getElementById('city').value = "";
// }

// getWeatherData('Dhaka');