const Stock = require("../models/Stock");

// Get all stocks
const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: stocks.length,
      data: stocks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add a stock
const addStock = async (req, res) => {
  try {
    const stock = await Stock.create(req.body);

    res.status(201).json({
      success: true,
      data: stock,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getStocks,
  addStock,
};