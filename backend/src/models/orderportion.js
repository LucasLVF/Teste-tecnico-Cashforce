const Orderportion = (sequelize, DataTypes) => {
    const Orderportion = sequelize.define('Orderportion', {
        id: { type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true },
        nDup: DataTypes.STRING(255),
        dVenc: DataTypes.STRING(255),
        vDup: DataTypes.STRING(255),
        availableToMarket:  DataTypes.TINYINT(1),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        orderId: DataTypes.INTEGER(11),
    },
    {
        tableName: 'orderportions'
    });
    Orderportion.associate = (models) => {
        Orderportion.belongsTo(models.order,
          { foreignKey: 'orderId', as: 'order' });
      };

return Orderportion;
  };

module.exports = Orderportion;