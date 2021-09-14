'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('tipo', [{
            id: 1,
            nome_tipo: 'Apoio a Transparencia',
            modalidade: 'PRESENCIAL',
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }, {
            id: 2,
            nome_tipo: 'Vacinacao',
            modalidade: 'HIBRIDO',
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }
    ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('tipo', null, {});
    }
};