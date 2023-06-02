const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 8000 || 8001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to home page ");
});

app.listen(() => {
  console.log(`Server running on the PORT ${PORT}`);
});
