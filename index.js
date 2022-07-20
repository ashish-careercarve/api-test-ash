const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/cources", (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(3000, () => console.log("Listing to port 3000"));
