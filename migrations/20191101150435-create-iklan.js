"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("iklan", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_iklan: {
        type: Sequelize.INTEGER
      },
      imageurl: {
        type: Sequelize.STRING
      },
      id_usaha: {
        type: Sequelize.INTEGER
      },
      bukti_bayar: {
        type: Sequelize.TEXT
      },
      konfirmasi: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("iklan");
  }
};
