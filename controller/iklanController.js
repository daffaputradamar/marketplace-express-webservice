const { iklan, usaha } = require("../models");

module.exports = {
  index(req, res) {
    iklan
      .findAll({
        include: {
          model: usaha
        },
        order: [["createdAt", "DESC"]]
      })
      .then(function(rows) {
        res.json(rows);
      });
  },
  show(req, res) {
    iklan
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
    const newIklan = { ...req.body, id_usaha: req.user.id_usaha };
    iklan.create({ ...newIklan }).then(function(row) {
      res.json;
    });
  },
  destroy(req, res) {
    iklan.findByPk(req.params.id).then(function(row) {
      row.destroy().then(function() {
        res.json({
          success: true
        });
      });
    });
  }
};
