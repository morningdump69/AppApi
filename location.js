const axios = require("axios");

const mapBoxKey =
  "pk.eyJ1Ijoicm9zcy1idXJyb3dzIiwiYSI6ImNrN2J1bHp3bzBmNzczZm1zcjhpczl6a2wifQ.UYHCY1tj9CqTwmgNRVylBg";

const getCenter = async location => {
  const GEO = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapBoxKey}`;

  try {
    const response = await axios.get(GEO);

    return {
      lat: response.data.features[0].center[1],
      long: response.data.features[0].center[0],
      location: response.data.features[0].place_name
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getCenter
};
