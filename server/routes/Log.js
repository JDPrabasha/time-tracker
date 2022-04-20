const express = require("express");
const router = express.Router();
const controller = require("../controllers/Log");

router.get("/", controller.getLogs);

module.exports = router;
