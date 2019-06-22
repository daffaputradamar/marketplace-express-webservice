const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/produk", require("./routes/produkRouter"));
app.use("/keranjang", require("./routes/keranjangRouter"));
app.use("/provinsi", require("./routes/daerahRouter"));
app.use("/ongkir", require("./routes/ongkirRouter"));

app.listen(process.env.PORT || 3000, function() {
  console.log(" -> Server listening on port 3000");
});
