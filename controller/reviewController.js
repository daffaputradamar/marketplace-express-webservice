const { pengguna, produk, review } = require("../models");

module.exports = {
  index(req, res) {
    review
      .findAll({
        include: [{ model: produk }, { model: pengguna }]
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  show(req, res) {
    review
      .findByPk(req.params.id, {
        include: [{ model: produk }, { model: pengguna }]
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  store(req, res) {
    review.create({ ...req.body }).then(function(row) {
      res.json;
    });
  },
  destroy(req, res) {
    review.findByPk(req.params.id).then(function(row) {
      row.destroy().then(function() {
        res.json({
          success: true
        });
      });
    });
  }
};
