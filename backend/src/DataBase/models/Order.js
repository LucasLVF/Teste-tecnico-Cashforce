const Order = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: { type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true },
        orderNfId: DataTypes.STRING(255),
        orderNumber: DataTypes.STRING(255),
        orderPath: DataTypes.STRING(255),
        orderFileName: DataTypes.STRING(255),
        orderOriginalName: DataTypes.STRING(255),
        emissionDate: DataTypes.STRING(255),
        pdfFile: DataTypes.STRING(255),
        emitedTo: DataTypes.STRING(255),
        nNf: DataTypes.STRING(255),
        CTE: DataTypes.STRING(255),
        value: DataTypes.STRING(255),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        cnpjId: DataTypes.INTEGER(11),
        userId: DataTypes.INTEGER(11),
        buyerId: DataTypes.INTEGER(11),
        providerId: DataTypes.INTEGER(11),
        orderStatusBuyer: DataTypes.STRING(255),
        orderStatusProvider: DataTypes.STRING(255),
        deliveryReceipt: DataTypes.STRING(255),
        cargoPackingList: DataTypes.STRING(255),
        deliveryCtrc: DataTypes.STRING(255),
    },
    {
        tableName: 'orders',
    });
    Order.associate = (models) => {
        Order.belongsTo(models.Cnpj,
          { foreignKey: 'cnpjId', as: 'cnpjs' });
      };
    Order.associate = (models) => {
        Order.belongsTo(models.User,
          { foreignKey: 'userId', as: 'users' });
      };
    Order.associate = (models) => {
        Order.belongsTo(models.Buyer,
          { foreignKey: 'buyerId', as: 'buyers' });
      };
    Order.associate = (models) => {
        Order.belongsTo(models.Provider,
          { foreignKey: 'providerId', as: 'providers' });
      };
      Order.associate = (models) => {
        Order.hasOne(models.Offer,
          { foreignKey: 'orderId', as: 'ordersOffer' });
      };
      Order.associate = (models) => {
        Order.hasOne(models.Orderportion,
          { foreignKey: 'orderId', as: 'ordersPortion' });
      };

return Order;
  };

module.exports = Order;