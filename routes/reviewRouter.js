const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

const reviewController = require("../controller/reviewController");

router.get("/", reviewController.index);
router.get("/:id", reviewController.show);
router.use(verifyToken);
router.post("/", reviewController.store);
router.delete("/:id", reviewController.destroy);

module.exports = router;
