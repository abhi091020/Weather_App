let apiKey = "12f9d0ec07872cee463236ec543569d9"
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?" ;
let city ;
let userCity = document.getElementById("userText") ;
let temperature = document.getElementById("temp") ;
let ct = document.getElementById("city") ;
let humidity = document.getElementById("humidity-info") ;
let windInfo = document.getElementById("wind-info") ;

async function getWeatherData()
{
    if(userCity.value=="")
    {
        alert("Enter A City Name") ;
    }
    else
    {
        city = userCity.value ;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`) ;
        let data = await response.json() ;

        console.log(data) ;
        ct.innerHTML = data.name ;
        temperature.innerHTML = Math.round (data.main.temp-273.15) +"°C" ;
        humidity.innerHTML=  data.main.humidity + "%" ;
        windInfo.innerHTML = data.wind.speed + "km/hr" ;

        userCity.value="" ;
        if(data.weather[0].main=="Clear")
        {
            weatherImage.src="https://w7.pngwing.com/pngs/166/384/png-transparent-cloud-sun-sunny-weather-weather-flat-icon.png" ;
        }
        else if(data.weather[0].main=="Snow")
        {
           weatherImage.src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Weather-snow.svg/1024px-Weather-snow.svg.png" ;
        }
        else if(data.weather[0].main=="Clouds")
        {
           weatherImage.src="https://w7.pngwing.com/pngs/885/236/png-transparent-weather-forecasting-cloud-cover-wind-snow-cloudy-cloud-computer-wallpaper-storm.png" ;
        }
        else if(data.weather[0].main=="Drizzle")
        {
             weatherImage.src="https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-7096832-5753008.png" ;
        }
        else if(data.weather[0].main=="Mist")
        {
             weatherImage.src="https://e7.pngegg.com/pngimages/505/59/png-clipart-computer-icons-graphics-incandescent-light-bulb-foggy-weather-text-smiley.png" ;
        }
        else if(data.weather[0].main=="Rain")
        {
            weatherImage.src="https://cdn2.iconfinder.com/data/icons/weather-filled-outline-3/64/weather07-512.png" ;
        }
        console.log(data) ;
    }
}