const express = require("express");
const router = express.Router();

const promoController = require("../controller/promoController");

router.get("/", promoController.index);
router.get("/:id", promoController.show);
router.post("/", promoController.store);
router.delete("/:id", promoController.destroy);

module.exports = router;
