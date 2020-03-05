const { getWeather } = require("./weather.js");
const { getCenter } = require("./location.js");
const { getMap } = require("./map.js");

const getMain = async input => {
  const locationObj = await getCenter(input);
  const response = await getWeather(locationObj);
  const map = await getMap(locationObj);
  return {
    weather: response,
    locationData: locationObj
  };
};

module.exports = {
  getMain
};
