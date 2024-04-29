//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
    key : "86c8de6637332bc955bd22261d1ccf38" ,
    baseUrl : "http://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode  == 13){
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.details').style.display = "block";
    }
});

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate  = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('Images/clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('Images/cloud.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('Images/cloud.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('Images/rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('Images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('Images/thunderstorm.jpg')";
        
    } 
}

function dateManage(t_day){
    
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
        let year = t_day.getFullYear();
        let month = months[t_day.getMonth()];
        let date = t_day.getDate();
        let day = days[t_day.getDay()];

        let hr = t_day.getHours();
        let min = t_day.getMinutes();
        let sec = t_day.getSeconds();

    
        /*return `${date} ${month} (${day}), ${year}`;*/
        return `${date} ${month} (${day}), ${year} | ${hr}:${min}:${sec}`;

}
