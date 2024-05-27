function ShowWeather({ data }) {
  if (!data) {
    return;
  }

  const icon = data.weather[0].icon;

  return (
    <div>
      <div className="icon">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
      </div>
      <div className="air">{data.weather[0].main}</div>
      <div className="temperature">{Math.round(data.main.temp)}°C</div>
      <div className="details">
        <div>Feels Like: {Math.round(data.main.feels_like)}°C</div>
        <div>Humidity: {data.main.humidity}%</div>
        <div>Wind: {data.wind.speed} m/s</div>
      </div>
    </div>
  );
}

export default ShowWeather;
