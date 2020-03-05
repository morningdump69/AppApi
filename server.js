const express = require("express");
const { getMain } = require("./app");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/weather", async (req, res) => {
  const response = await getMain(req.query.address);
  res.send(response);
});

app.listen(3002, () => {
  console.log(`listening on port 3002`);
});
