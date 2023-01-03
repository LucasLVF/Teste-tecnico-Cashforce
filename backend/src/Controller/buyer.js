const buyerService = require('../Service/buyer');

const INTERNAL_SERVER_ERROR = 'Internal Server Error';

const getCardInformations = async (req, res) => {
    try {     
  
      const result = await buyerService.getUser();
  
      if (!result) return res.status(404).json({ message: 'Not found' });
  
      return res.status(200).json(result );
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ message: INTERNAL_SERVER_ERROR });
    }
  };

  module.exports = {
    getCardInformations
  };