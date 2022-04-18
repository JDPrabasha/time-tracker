const express = require("express");
const router = express.Router();
const controller = require("../controllers/Project");

router.get("/", controller.getProjects);
router.post("/log/:id", controller.addLog);

module.exports = router;
