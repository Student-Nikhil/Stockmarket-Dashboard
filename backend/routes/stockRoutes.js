const express = require("express");

const router = express.Router();

const {
  getStocks,
  addStock,
} = require("../controllers/stockController");

router.get("/", getStocks);

router.post("/", addStock);

module.exports = router;