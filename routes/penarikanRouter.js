const express = require("express");
const router = express.Router();

const penarikanController = require("../controller/penarikanController");

const verifyToken = require("../middlewares/verifyToken");

router.get("/", verifyToken, penarikanController.index);
router.get("/unconfirmed", penarikanController.indexConfirmed);
router.get("/:id", penarikanController.show);
router.put("/:id/konfirmasi", penarikanController.confirm);
router.use(verifyToken);
router.post("/", penarikanController.store);
router.delete("/:id", penarikanController.delete);

module.exports = router;
