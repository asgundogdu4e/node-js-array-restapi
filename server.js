const express = require("express");
const { tutorialRoutes } = require("./app/routes/tutorial.routes");
const { todoRoutes } = require("./app/routes/todo.routes");

const app = express();
const port = 8080;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const responseOptions = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Authorization, Accept, Origin, TOKEN, token"
  );
  if (req.method === "OPTIONS") {
    //console.log("OPTIONS")
    res.header(
      "Access-Control-Allow-Methods",
      "PATCH, GET, POST, PUT, DELETE, OPTIONS, TOKEN, token"
    );
    return res.status(200).json({ Netice: "OPTIONS" });
  }
  next();
};

app.use(responseOptions);

tutorialRoutes(app);
todoRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});