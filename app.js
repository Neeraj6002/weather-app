const apikey ="74fadce1dfce0defaa409e04c46b1432";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const wicons =  document.querySelector(".icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status== 404){
        document.querySelector(".error").style.display = "block"
    }
    else{

    var data = await response.json();
    console.log(data);


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds"){
            wicons.src = "clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
            wicons.src = "clear.png";
    }
    else if (data.weather[0].main == "Drizzle"){
            wicons.src = "drizzle.png";
    }
    else if (data.weather[0].main == "Rain"){
            wicons.src = "rain.png";
    }
    else if (data.weather[0].main == "Mist"){
            wicons.src = "mist.png";
    }
    else {
            wicons.src = "snow.png";
    }
    document.querySelector(".error").style.display = "none"
}
    
}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);    
})
