const axios = require("axios");
const ApiKey =
  "pk.eyJ1Ijoicm9zcy1idXJyb3dzIiwiYSI6ImNrN2J1bHp3bzBmNzczZm1zcjhpczl6a2wifQ.UYHCY1tj9CqTwmgNRVylBg";

const getMap = async locationObj => {
  const { lat, long, location } = locationObj;
  const URL = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static${lat},${long},14.25,0,60/600x600?access_token=${ApiKey}`;
  try {
    const response = await axios.get(URL);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getMap
};
