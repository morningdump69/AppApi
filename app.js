const figlet = require("figlet");
const { getWeather } = require("./weather.js");
const { getCenter } = require("./location.js");

const getMain = async input => {
  const locationObj = await getCenter(input);
  await getWeather(locationObj);
};

getMain(process.argv[2]);

figlet(process.argv[2], function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
