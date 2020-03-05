const axios = require("axios");
const ApiKey = "";

const URL = `https://api.darksky.net/forecast/${ApiKey}/37.8267,-122.4233`;

const getWeather = async locationObj => {
  const { lat, long, location } = locationObj;
  const URL = `https://api.darksky.net/forecast/${ApiKey}/${lat},${long}`;
  try {
    const response = await axios.get(URL);
    return {
      location: location,
      data: response.data.currently
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getWeather
};
