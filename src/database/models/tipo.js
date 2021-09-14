'use strict';

module.exports = (sequelize, DataTypes) => {
    const Tipo = sequelize.define('Tipo', {
        nome_tipo: DataTypes.STRING,
        modalidade: DataTypes.STRING,
    }, {
        freezeTableName: true,
        tableName: 'tipo'
    });
    return Tipo;
};