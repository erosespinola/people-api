const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use("/people", require("./routes/people"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
