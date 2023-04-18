document.addEventListener("DOMContentLoaded", fetchWeather, false);
window.onload = function() {
document.getElementById("fetchButton").addEventListener("click", fetchWeather, false);
}
function fetchWeather(){
    fetch('https://classes.engineering.wustl.edu/cse330/content/weather_json.php')
    .then(function(response) {
        return response.json();
    })
    .then(function(stuff){
        console.log(JSON.stringify(stuff));
        // alert((JSON.stringify(stuff)));
        str = JSON.stringify(stuff);
        jsonData = JSON.parse(str);
        let city = jsonData.location.city;
        document.getElementsByClassName("weather")[0].getElementsByClassName("weather-loc")[0].innerHTML = ("<strong>" + city + "   </strong>");
        document.getElementsByClassName("weather")[0].getElementsByClassName("weather-humidity")[0].innerHTML = (jsonData.atmosphere.humidity);
        document.getElementsByClassName("weather")[0].getElementsByClassName("weather-temp")[0].innerHTML = (jsonData.current.temp);
        document.getElementsByClassName("weather")[0].getElementsByClassName("weather-tomorrow")[0].setAttribute("src", getImage(jsonData.tomorrow.code));
        document.getElementsByClassName("weather")[0].getElementsByClassName("weather-dayaftertomorrow")[0].setAttribute("src", getImage(jsonData.dayafter.code));
        return JSON.stringify(stuff);
    }).catch(function(error) {
        console.log("Found an error" + error);
        return null;
    });
}
function getImage(code){
    return "http://us.yimg.com/i/us/nws/weather/gr/" + code + "ds.png";
    
}