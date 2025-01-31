"use strict";
module.exports = (sequelize, DataTypes) => {
  const penarikan = sequelize.define(
    "penarikan",
    {
      id_penarikan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_pengguna: DataTypes.INTEGER,
      no_rek: DataTypes.STRING,
      atas_nama: DataTypes.STRING,
      jumlah: DataTypes.INTEGER,
      konfirmasi: {
        type: DataTypes.BOOLEAN,
        defaulValue: false
      }
    },
    {
      freezeTableName: true,
      tableName: "penarikan"
    }
  );
  penarikan.associate = function(models) {
    penarikan.belongsTo(models.pengguna, {
      foreignKey: "id_pengguna"
    });
  };
  return penarikan;
};
