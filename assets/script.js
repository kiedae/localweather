const apiKey = '210247e7072d71d9bd213f7367003a6a';
const baseUrl = 'https://api.openweathermap.org/data/2.5';
var cityInput = document.getElementById('city-input');
var date = dayjs();



// handles the user input to get the city name
function handleSubmit(event) {
    event.preventDefault();
    var cityName = cityInput.value.trim(); // city name from user input
    fetchCity(cityName)
        .then((data) => {
            if (data) {
                console.log("Weather data:", data);
                // TODO call a function to display the data 
            }
        });
}

function fetchCity(cityName) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?&q="+cityName+"&units=imperial&appid=210247e7072d71d9bd213f7367003a6a";

    //fetch the city name
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

    




