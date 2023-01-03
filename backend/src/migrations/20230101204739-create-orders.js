'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNfId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      orderPath: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      orderFileName: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      orderOriginalName: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      emissionDate: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      pdfFile: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      emitedTo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nNf: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      CTE: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      value: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cnpjId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {          
          model: 'cnpjs',          
          key: 'id',
        },
      },
      userId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {          
          model: 'users',          
          key: 'id',
        },
      },
      buyerId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {          
          model: 'buyers',          
          key: 'id',
        },
      },
      providerId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {          
          model: 'providers',          
          key: 'id',
        },
      },
      orderStatusBuyer: {
        defaultValue: 0,
        type: Sequelize.STRING
      },
      orderStatusProvider: {
        defaultValue: 0,
        type: Sequelize.STRING
      },
      deliveryReceipt: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      cargoPackingList: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      deliveryCtrc: {
        defaultValue: null,
        type: Sequelize.STRING
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');

  }
};
