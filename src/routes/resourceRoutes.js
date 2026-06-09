const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const resourceController = require("../controllers/resourceController");

router.post("/", authMiddleware, resourceController.createResource);

router.get("/", authMiddleware, resourceController.getResources);

module.exports = router;