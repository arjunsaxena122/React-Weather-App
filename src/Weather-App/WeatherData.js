async function weatherData(city) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2af32eea6dccdedc7834286bcb3cf8fa";

  const api_url = await fetch(
    `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  const res = await api_url.json();
  let { main, name, wind } = res;

  let result = {
    name : name,
    humidity : main.humidity,
    pressure: main.pressure,
    temp : main.temp,
    speed : wind.speed
  }
  
  console.log(result)
  return result
}

export default weatherData