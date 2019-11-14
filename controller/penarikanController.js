const { penarikan, pengguna, iuran_wajib } = require("../models");

module.exports = {
  index(req, res) {
    penarikan
      .findAll({
        where: {
          id_pengguna: req.user.id_pengguna
        },
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
  indexConfirmed(req, res) {
    penarikan
      .findAll({
        where: {
          konfirmasi: false
        },
        include: {
          model: pengguna
        }
      })
      .then(rows => {
        res.json(rows);
      });
  },
  confirm(req, res) {
    penarikan.findByPk(req.params.id).then(row => {
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
    console.log(req.body)
    const newpenarikan = { ...req.body, id_pengguna: req.user.id_pengguna };
    penarikan.create({ ...newpenarikan }).then(row => {
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
