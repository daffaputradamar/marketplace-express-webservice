'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    id_review: DataTypes.INTEGER,
    id_produk: DataTypes.INTEGER,
    id_pengguna: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    komentar: DataTypes.TEXT
  }, {});
  review.associate = function(models) {
    // associations can be defined here
  };
  return review;
};