const express = require("express");
const morgan = require("morgan");
const { create } = require("express-handlebars");
const path = require("path");

const app = express();
const port = 8080;
app.use(express.static(path.join(__dirname, "publics/")));
// HTTP logger
app.use(morgan("combined"));

// Template engine
const hbs = create({
  extname: ".handlebars",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "resources/views/layouts/"),
  partialsDir: path.join(__dirname, "resources/views/partials/"),
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views")); // Đảm bảo đường dẫn đúng tới thư mục views

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () =>
  console.log(`example app listening at http://localhost:${port}`)
);
