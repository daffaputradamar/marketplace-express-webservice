const express = require("express");
const router = express.Router();

const reviewController = require("../controller/reviewController");

router.get("/", reviewController.index);
router.get("/:id", reviewController.show);
router.post("/", reviewController.store);
router.delete("/:id", reviewController.destroy);

module.exports = router;
