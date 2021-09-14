'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('carta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      nome: {
        allowNull: false,
        type: Sequelize.STRING,

      },

      requisitos: {
        allowNull: false,
        type: Sequelize.STRING,

      },

      perfil_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "perfil",
          key: "id",
        },
      },

      tipo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "tipo",
          key: "id",
        },
      },

      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('carta');
  }
};