const button = document.getElementById("button");
const input = document.getElementById("location");
const locate = document.getElementById("locate");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");
const percipI = document.getElementById("percipI");
const percipP = document.getElementById("percipP");
const humidity = document.getElementById("humidity");
const mapImage = document.getElementById("map-image");

button.addEventListener("click", async () => {
  const response = await fetch(`/weather?address=${input.value}`);
  const data = await response.json();
  let mapWrapper = document.getElementById("mapWrapper");
  let map = document.getElementById("map");

  mapWrapper.removeChild(map);

  let newMap = document.createElement("div");
  newMap.id = "map";
  mapWrapper.appendChild(newMap);

  locate.textContent = data.weather.location;
  weather.textContent = data.weather.data.summary;
  temperature.textContent = (
    (data.weather.data.temperature - 32) *
    (5 / 9)
  ).toFixed(2);
  percipI.textContent = data.weather.data.precipIntensity;
  percipP.textContent = data.weather.data.precipProbability;
  humidity.textContent = data.weather.data.humidity;

  L.mapquest.key = "1NLh0nq3uGFgmHawNfb5ttFJYHYHs9RG";

  // 'map' refers to a <div> element with the ID map
  L.mapquest.map("map", {
    center: [data.locationData.lat, data.locationData.long],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12
  });
});
