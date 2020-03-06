const express = require("express");
const { getMain } = require("./app");
const path = require("path");

const app = express();
const port = process.env.PORT || 3003;
app.use(express.static(path.join(__dirname, "public")));

app.get("/weather", async (req, res) => {
  const response = await getMain(req.query.address);
  res.send(response);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
