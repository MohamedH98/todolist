const express = require("express");
const bodyParser = require("body-parser");
const date = require(`${__dirname}/date`);
const controller = require("./controllers/controller");
const router = require("./routes/routes");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static("public"));

app.use("/", router);

module.exports = app;
