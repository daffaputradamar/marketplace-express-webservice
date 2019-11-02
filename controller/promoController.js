const { promo, usaha } = require("../models");

module.exports = {
  index(req, res) {
    promo
      .findAll({
        include: {
          model: usaha
        }
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  show(req, res) {
    promo
      .findByPk(req.params.id, {
        include: {
          model: usaha
        }
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  store(req, res) {
    promo.create({ ...req.body }).then(function(row) {
      res.json;
    });
  },
  destroy(req, res) {
    promo.findByPk(req.params.id).then(function(row) {
      row.destroy().then(function() {
        res.json({
          success: true
        });
      });
    });
  }
};
