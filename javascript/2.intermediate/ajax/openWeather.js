//$ 오픈웨더

const API_KEY = "b68177078f5cb7c53e861421586aee13";

const getCurrentWeather = async (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const response = await fetch(URL);
  const weatherData = await response.json();
  return weatherData;
};

const printWeather = (weatherInfo) => {
  console.log(weatherInfo);
  console.log(weatherInfo.name + "의 날씨는 ? " + weatherInfo.weather[0].main);
};

const geoOk = async (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const weatherInfo = await getCurrentWeather(lat, lon);

  printWeather(weatherInfo);
};

const geoNg = () => {
  alert("위치를 찾을 수 없습니다.");
};

navigator.geolocation.getCurrentPosition(geoOk, geoNg);