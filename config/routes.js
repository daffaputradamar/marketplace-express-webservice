const express = require("express");
const router = express.Router();
module.exports = router;

router.use("/produk", require("../routes/produkHomeRouter"));
router.use("/keranjang", require("../routes/keranjangRouter"));
router.use("/transaksi", require("../routes/transaksiRouter"));
router.use("/provinsi", require("../routes/provinsiRouter"));
router.use("/ongkir", require("../routes/ongkirRouter"));
router.use("/pengguna", require("../routes/penggunaRouter"));
router.use("/usaha", require("../routes/usahaRouter"));
router.use("/admin", require("../routes/adminRouter"));
router.use("/kategori", require("../routes/kategoriRouter"));
router.use("/iuran", require("../routes/iuranWajibRouter"));
router.use("/bayariuran", require("../routes/pembayaranIuranRouter"));
router.use("/penarikan", require("../routes/penarikanRouter"));
router.use("/promo", require("../routes/promoRouter"));
