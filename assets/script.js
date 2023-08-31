const apiKey = '210247e7072d71d9bd213f7367003a6a';
const baseUrl = 'https://api.openweathermap.org/data/2.5';
var cityInput = document.querySelectorAll("#city-input");


function fetchCity(cityName){
var search = cityInput.value.trim();

fetch(`${baseUrl}/forecast?q=${cityName}&appid=${apiKey}`);
if (response.status === 200) {
    return response.json();
} else {
    console.error("Invalid city input");
    return null;
}
    



}