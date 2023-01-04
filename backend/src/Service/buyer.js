const { Order } = require('../DataBase/models');

const getCardInformations = async () => {
    const result = await Order.findAll();
  
    if (!result) return null;
  
    return result;
  };

  module.exports = {
    getCardInformations,
  };