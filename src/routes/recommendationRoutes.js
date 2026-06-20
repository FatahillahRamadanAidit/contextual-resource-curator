const express = require("express");
const router = express.Router();

const authMiddleware =
  require("../middlewares/authMiddleware");

const recommendationController =
  require("../controllers/recommendationController");

router.get(
  "/",
  authMiddleware,
  recommendationController.getRecommendations
);

router.get(
  "/history",
  authMiddleware,
  recommendationController.getHistory
);

module.exports = router;