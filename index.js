const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Simple Node App deploy to HEROKU !!!");
});

app.listen(process.env.PORT || 5000);
