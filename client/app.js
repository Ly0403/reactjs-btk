const express = require("express");
const dotenv  = require("dotenv");
const path = require("path");
const app = express();

dotenv.config();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT);
