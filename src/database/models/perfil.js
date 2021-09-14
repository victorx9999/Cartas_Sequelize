'use strict';

module.exports = (sequelize, DataTypes) => {
    const Perfil = sequelize.define('Perfil', {
        descricao: DataTypes.STRING,
    }, {
        freezeTableName: true,
        tableName: 'perfil'
    });
    

    // Perfil.associate = function (models) {
    //     Perfil.belongsTo(models.Carta, { as: 'carta', foreignKey: 'carta_id' })
    // };

    return Perfil;
};