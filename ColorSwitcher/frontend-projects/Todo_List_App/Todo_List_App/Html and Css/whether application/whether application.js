let cityName = document.querySelector('.weather_city');
let wTimeanddate = document.querySelector('.weather_datetime');
let wForecast = document.querySelector('.weather_forecast');
let wIcon = document.querySelector('.weather_icon');
let wTemperature = document.querySelector('.weather_temperature');
let wMin = document.querySelector('.weather_min');
let wMax = document.querySelector('.weather_max');
let wFeelslike = document.querySelector('.whether_feelslike');
let wHumudity = document.querySelector('.whether_humudity');
let wWind = document.querySelector('.wind');
let wPresure = document.querySelector('.presure');

let city = "lahore";



  let weather_city = document.querySelector('.weather_search').addEventListener('submit',(e) =>{
    e.preventDefault();
    let cityName = document.querySelector('.city_name');
    city = cityName.value;
    getWeatherData();
cityName.value = "";
  })
// time and date
const getDateTime = (dt)=> {
  const curDate = new Date(dt * 1000); // Convert seconds to milliseconds
console.log(curDate);
// // const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  //   second: "numeric",
};

const formatter = new Intl.DateTimeFormat("en-US", options);
// // console.log(formatter);
return formatter.format(curDate);

// console.log(formattedDate);

}






 
getWeatherData = async() => {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be3d9a56ffcb597fddc779e05ce6805b`;


  try {
    const res = await fetch (weatherURL);
    const data = await res.json();
    console.log(data);
     const {main,name,weather,wind,sys,dt} = data;

    //  cityName.innerHTML = `${name},${sys.country}`;
     

     const countryNames = {
      "PK": "Pakistan",
      "US": "United States",
      "IN": "India",
      "GB": "United Kingdom",
      "FR": "France",
      // Add more as needed
  };
  
  cityName.innerHTML = `${name}, ${countryNames[sys.country] || sys.country}`;
  wTimeanddate.innerHTML = getDateTime(dt);
  // wIcon.innerHTML = weather[0].icon;
  wTemperature.innerHTML = `${main.temp}&#176`;
  wMin.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`;
  wMax.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`;
  wIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" alt="icon">`;
  wForecast.innerHTML = `${weather[0].main}`;
  wFeelslike.innerHTML = `${main.feels_like}&#176`;
  wHumudity.innerHTML = `${main.humidity} %`;
  wWind.innerHTML = `${wind.speed} m/s`;
  wPresure.innerHTML = `${main.pressure} hpa`;

  } catch (error) {
    console.log(error);
    
  }
}
document.body.addEventListener('load',getWeatherData());
