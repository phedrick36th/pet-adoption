async function weatherStart() {
  const weatherPromise = await fetch(
    "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
  );
  const weatherData = await weatherPromise.json();

  const ourTemperature = weatherData.properties.periods[0].temperature;

  const weatherTemp = document.querySelector("#weather-temp");

  weatherTemp.textContent = ourTemperature;
}
weatherStart();
