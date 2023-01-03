const Offer = (sequelize, DataTypes) => {
    const Offer = sequelize.define('Offer', {
        id: { type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true },
        tax: DataTypes.STRING(255),
        tariff: DataTypes.STRING(255),
        adValorem: DataTypes.STRING(255),
        float: DataTypes.STRING(255),
        iof: DataTypes.STRING(255),
        expiresIn: DataTypes.DATE,
        paymentStatusSponsor: DataTypes.TINYINT(1),
        paymentStatusProvider: DataTypes.TINYINT(1),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        orderId: DataTypes.INTEGER(11),
        sponsorId: DataTypes.INTEGER(11),
    },
    {
        tableName: 'offers',
    });
    Offer.associate = (models) => {
        Offer.belongsTo(models.order,
          { foreignKey: 'orderId', as: 'order' });
      };
    Offer.associate = (models) => {
        Offer.belongsTo(models.sponsor,
          { foreignKey: 'sponsorId', as: 'sponsor' });
      };

return Offer;
  };

module.exports = Offer;