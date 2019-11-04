const { produk, usaha, kategori, review } = require("../models");

module.exports = {
  index(req, res) {
    produk
      .findAll({
        where: {
          id_usaha: req.usaha
        },
        include: [{ model: kategori }, { model: usaha }]
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  show(req, res) {
    produk
      .findByPk(req.params.id, {
        include: [
          { model: usaha },
          { model: kategori },
          { model: review, include: { model: pengguna } }
        ]
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  store(req, res) {
    produk.create({ ...req.body, id_usaha: req.usaha }).then(function(rows) {
      res.json(rows);
    });
  },
  update(req, res) {
    produk.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },
  archive(req, res) {
    produk.findByPk(req.params.id).then(function(row) {
      row
        .update({
          arsip: true
        })
        .then(() => {
          res.json(row);
        });
    });
  },
  destroy(req, res) {
    produk.findByPk(req.params.id).then(row => {
      row.destroy().then(function() {
        res.json({
          success: true
        });
      });
    });
  }
};
