'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('perfil', [{
            id: 1,
            descricao: 'Secretaria da Transparencia Publica',
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 2,
            descricao: 'Secretaria Municipal de Saúde',
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }
    ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('perfil', null, {});
    }
};