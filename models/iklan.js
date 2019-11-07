"use strict";
module.exports = (sequelize, DataTypes) => {
  const iklan = sequelize.define(
    "iklan",
    {
      id_iklan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      imageurl: DataTypes.STRING,
      id_usaha: DataTypes.INTEGER,
      bukti_bayar: DataTypes.TEXT,
      konfirmasi: DataTypes.BOOLEAN
    },
    {
      freezeTableName: true,
      tableName: "iklan"
    }
  );
  iklan.associate = function(models) {
    iklan.belongsTo(models.usaha, { foreignKey: "id_usaha" });
  };
  return iklan;
};
