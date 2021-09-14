'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tipo', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            nome_tipo: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: false
            },

            modalidade: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: false
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
        return queryInterface.dropTable('tipo');
    }
};