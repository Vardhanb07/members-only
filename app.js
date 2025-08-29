const path = require("node:path");
const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const port = 7777;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
