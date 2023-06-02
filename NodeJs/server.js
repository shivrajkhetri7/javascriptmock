const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("THIS is First API ");
});

app.listen(PORT, (res, error) => {
  if (error) {
    console.log("Something went wrong ");
  }
  console.log("Server running on the PORT 8000");
});
