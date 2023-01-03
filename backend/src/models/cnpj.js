const Cnpj = (sequelize, DataTypes) => {
    const Cnpj = sequelize.define('Cnpj', {
        id: { type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true },
        cnpj: DataTypes.STRING(255),
        companyType: DataTypes.STRING(255),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        tableName: 'cnpjs'
    });
    Cnpj.associate = (models) => {
        Cnpj.hasOne(models.order,
          { foreignKey: 'cnpjId', as: 'cnpjIdOrder' });
      };
      Cnpj.associate = (models) => {
        Cnpj.hasOne(models.buyer,
          { foreignKey: 'cnpjId', as: 'cnpjIdBuyer' });
      };
      Cnpj.associate = (models) => {
        Cnpj.hasOne(models.provider,
          { foreignKey: 'cnpjId', as: 'cnpjIdProvider' });
      };
      Cnpj.associate = (models) => {
        Cnpj.hasOne(models.sponsor,
          { foreignKey: 'cnpjId', as: 'cnpjIdSponsor' });
      };
  
    return Cnpj;
  };
  
  module.exports = Cnpj;