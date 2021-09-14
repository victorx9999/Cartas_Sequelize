'use strict';

module.exports = (sequelize, DataTypes) => {
    const Carta = sequelize.define('Carta', {
        nome: DataTypes.STRING,
        requisitos: DataTypes.STRING,
        tipo_id: DataTypes.INTEGER,
        perfil_id: DataTypes.INTEGER
    }, {
        freezeTableName: true,
        tableName: 'carta'
    });


    Carta.associate  = function (models) {
        Carta.belongsTo(models.Tipo, {as: 'tipo', foreignKey: 'tipo_id' })
        Carta.belongsTo(models.Perfil, {as: 'perfil', foreignKey: 'perfil_id'})
    };

    return Carta;
};