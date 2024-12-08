const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind");
const temperature = document.getElementById("temperature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("please enter the city name");
    return;
  }
  const city = inputBox.value;

  //fetch details
  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=fdc6442c19ef4a1883155423242107&q=${city}`
  );
  const orgData = await fetchData.json();
  const data = orgData;
  console.log(data);
  //displaying the data in html
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temperature.innerHTML = data.current.temp_c;
  weatherStatus.innerHTML = data.current.condition.text;
  logoImage.src = data.current.condition.icon;
};