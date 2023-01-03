const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING(255),
        email: DataTypes.STRING(255),
        phoneNumber: DataTypes.STRING(255),
        mobile: DataTypes.STRING(255),
        departament: DataTypes.STRING(255),
        verificationCode: DataTypes.STRING(255),
        emailChecked: DataTypes.TINYINT(1),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        cashforceAdm: DataTypes.TINYINT(1),
    },
    {
        tableName: 'users'
    });
    User.associate = (models) => {
        User.hasOne(models.order,
          { foreignKey: 'userId', as: 'userIdOrder' });
      };

return User;
  };

module.exports = User;