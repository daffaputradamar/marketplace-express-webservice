const express = require("express");
const router = express.Router();

const iklanController = require("../controller/iklanController");

const verifyToken = require("../middlewares/verifyToken");

router.get("/", iklanController.index);
router.get("/:id", iklanController.show);
router.use(verifyToken);
router.post("/", iklanController.store);
router.delete("/:id", iklanController.destroy);

module.exports = router;
