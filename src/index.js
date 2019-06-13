const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Hello World! ${process.env.API_KEY}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
