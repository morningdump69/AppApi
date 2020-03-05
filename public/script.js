const button = document.getElementById("button");
const input = document.getElementById("location");
const locate = document.getElementById("locate");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");
const percipI = document.getElementById("percipI");
const percipP = document.getElementById("percipP");
const humidity = document.getElementById("humidity");

button.addEventListener("click", async () => {
  const response = await fetch(`/weather?address=${input.value}`);
  const location = await response.json();

  locate.textContent = location.location;
  weather.textContent = location.data.summary;
  temperature.textContent = (
    (location.data.temperature - 32) *
    (5 / 9)
  ).toFixed(2);
  percipI.textContent = location.data.precipIntensity;
  percipP.textContent = location.data.precipProbability;
  humidity.textContent = location.data.humidity;
});
