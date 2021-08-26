const express = require("express");
const { tutorialRoutes } = require("./app/routes/tutorial.routes");
const { todoRoutes } = require("./app/routes/todo.routes");

const app = express();
const port = 8080;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, token');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

tutorialRoutes(app);
todoRoutes(app);

app.get("/api/auth", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/", (req, res) => {
  res.send("Api test OK!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});