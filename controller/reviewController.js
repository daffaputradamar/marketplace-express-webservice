const { pengguna, produk, review, detail_transaksi } = require("../models");

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
    const { id_detiltransaksi, ...rest } = req.body;
    const newReview = { ...rest, id_pengguna: req.user.id_pengguna };
    review.create({ ...newReview }).then(function(row) {
      detail_transaksi.findByPk(id_detiltransaksi).then(detail => {
        detail.review = true;
        detail.save().then(() => res.json(row));
      });
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
