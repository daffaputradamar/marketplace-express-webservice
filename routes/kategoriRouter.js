const express = require("express");
const router = express.Router();

const kategoriController = require("../controller/kategoriController");

router.get("/", kategoriController.index);
router.post("/", kategoriController.store);
router.delete("/:id", kategoriController.destroy);

module.exports = router;
