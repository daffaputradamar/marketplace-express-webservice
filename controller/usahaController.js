const { usaha, pengguna, produk, kategori } = require("../models");

module.exports = {
  index(req, res) {
    usaha
      .findAll({
        include: {
          model: pengguna
        }
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  show(req, res) {
    usaha
      .findByPk(req.params.id, {
        include: [
          {
            model: produk,
            include: kategori
          }
        ]
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  update(req, res) {
    usaha.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },
  delete(req, res) {
    usaha.findByPk(req.params.id).then(row => {
      row.destroy().then(function() {
        res.json({
          success: true
        });
      });
      res.json({
        success: true
      });
    });
  }
};
