const apiKey = '210247e7072d71d9bd213f7367003a6a';
const baseUrl = 'https://api.openweathermap.org/data/2.5';
var cityInput = document.getElementById('city-input');
var date = dayjs();

var form = document.querySelector("#city-form");
form.addEventListener("submit", handleSubmit);
// handles the user input to get the city name
function handleSubmit(event) {
    event.preventDefault();
    var cityName = cityInput.value.trim(); // city name from user input
    fetchCity(cityName)
        .then((data) => {
            if (data) {
                console.log("Weather data:", data);
                renderTodayWeather(data);// TODO call a function to display the data 
            }
        });
}

function fetchCity(cityName) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?&q="+cityName+"&units=imperial&appid=210247e7072d71d9bd213f7367003a6a";

    //fetch the city data
    return fetch(apiUrl)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                console.error("Invalid city input");
                return null;
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            cityInput.value = ''; // Clear the input field if invalid
            return null;
        });
}

function renderTodayWeather(data) {
    var currentDayBox = document.getElementById('current-weather');
    var currentCity = document.createElement('h2');
    var currentDayDate = document.createElement('h3');
    var currentTemp = document.createElement('p');
    var currentWindSpeed = document.createElement('p');
    var currentHumidity = document.createElement('p');
    
    // setting content for created elements
    currentCity.textContent = `City: ${data.city.name}, ${data.city.country}`;
    currentDayDate.textContent = `Date: ${date.format('MM-DD-YYYY HH:mm')}`;
    currentTemp.textContent = `Temperature: ${data.list[0].main.temp}°F`;
    currentWindSpeed.textContent = `Wind Speed: ${data.list[0].wind.speed} mph`;
    currentHumidity.textContent = `Humidity: ${data.list[0].main.humidity}%`;
    
    // append the created elements
    currentDayBox.appendChild(currentCity);
    currentDayBox.appendChild(currentDayDate);
    currentDayBox.appendChild(currentTemp);
    currentDayBox.appendChild(currentWindSpeed);
    currentDayBox.appendChild(currentHumidity);
}

renderTodayWeather();