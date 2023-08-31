var cityInput = document.getElementById("cityname");
var submitButton = document.getElementById('submit');
console.log(cityInput);

submitButton.addEventListener('click', function() {
    var cityName = cityInput.value;
    localStorage.setItem('recent-city', cityName);
});