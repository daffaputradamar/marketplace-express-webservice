const { produk, usaha, kategori } = require("../models");

module.exports = {
  index(req, res) {
    produk
      .findAll({
        include: [{ model: usaha }, { model: kategori }]
      })
      .then(function(rows) {
        res.json(rows);
      });
  }
};
