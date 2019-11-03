const { kategori } = require("../models");

module.exports = {
  index(req, res) {
    kategori.findAll().then(rows => res.json(rows));
  },
  store(req, res) {
    kategori.create({ ...req.body }).then(row => res.json(row));
  },
  destroy(req, res) {
    kategori.findByPk(req.params.id).then(row => {
      row.destroy().then(function() {
        res.json({
          success: true
        });
      });
    });
  }
};
