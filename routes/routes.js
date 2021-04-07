const express = require("express");
const app = require("../app");
const controller = require("./../controllers/controller");

const router = express.Router();

router
  .route("/")
  .get(controller.renderDayToDo)
  .post(controller.redirectToCorrectPage);

router
  .route("/work")
  .get(controller.renderWorkToDo)
  .post(controller.redirectToWork);

module.exports = router;
