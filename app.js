const { getWeather } = require("./weather.js");
const { getCenter } = require("./location.js");

const getMain = async input => {
  const locationObj = await getCenter(input);
  const response = await getWeather(locationObj);
  return response;
};

module.exports = {
  getMain
};
