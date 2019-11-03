const { iuran_wajib } = require("../models");

module.exports = {
  index(req, res) {
    iuran_wajib.findAll().then(rows => {
      res.json(rows);
    });
  },
  show(req, res) {
    iuran_wajib.findByPk(req.params.id).then(rows => {
      res.json(rows);
    });
  },
  store(req, res) {
    iuran_wajib.create({ ...req.body }).then(rows => {
      res.json(rows);
    });
  },
  destroy(req, res) {
    iuran_wajib.findByPk(req.params.id).then(row => {
      row.destroy().then(function() {
        res.json({
          success: true
        });
      });
    });
  }
};
