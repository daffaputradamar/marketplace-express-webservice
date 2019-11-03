"use strict";
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define(
    "review",
    {
      id_review: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      id_produk: DataTypes.INTEGER,
      id_pengguna: DataTypes.INTEGER,
      rating: DataTypes.FLOAT,
      komentar: {
        type: DataTypes.TEXT,
        defaultValue: ""
      }
    },
    {
      freezeTableName: true,
      tableName: "review"
    }
  );
  review.associate = function(models) {
    review.belongsTo(models.pengguna, {
      foreignKey: "id_pengguna"
    });
    review.belongsTo(models.produk, {
      foreignKey: "id_produk"
    });
  };
  return review;
};
