const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const stockRoutes = require("./routes/stockRoutes");

app.use("/api/stocks", stockRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "StockPro Backend Running Successfully 🚀",
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `🚀 Server Running on Port ${process.env.PORT || 5000}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });