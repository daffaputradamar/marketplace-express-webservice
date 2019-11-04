const { penarikan, pengguna, iuran_wajib } = require("../models");

module.exports = {
  index(req, res) {
    penarikan
      .findAll({
        include: {
          model: pengguna
        }
      })
      .then(rows => {
        res.json(rows);
      });
  },
  show(req, res) {
    penarikan
      .findByPk(req.params.id, {
        include: {
          model: pengguna
        }
      })
      .then(rows => {
        res.json(rows);
      });
  },
  confirm(req, res) {
    penarikan
      .findByPk(req.params.id, {
        include: {
          model: pengguna
        }
      })
      .then(row => {
        row
          .update({
            konfirmasi: true
          })
          .then(() => {
            usaha.findByPk(req.user.id_usaha).then(usaha => {
              usaha
                .update({
                  saldo: usaha.saldo - row.jumlah
                })
                .then(() => {
                  res.json(row);
                });
            });
          });
      });
  },
  store(req, res) {
    const penarikan = { ...req.body, id_pengguna: req.user.id_pengguna };
    penarikan.create({ ...penarikan }).then(row => {
      res.json(row);
    });
  },
  delete(req, res) {
    penarikan.findByPk(req.params.id).then(row => {
      row.destroy().then(function() {
        res.json({
          success: true
        });
      });
    });
  }
};
