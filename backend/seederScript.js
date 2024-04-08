require("dotenv").config();

const productsData = require("./data/products");
const connectDB =require("./config/db");
const product = require("./models/product");

connectDB();

const importData = async () => {
  try {
    await product.deleteMany({});

    await product.insertMany(productsData);

    console.log("Data Import Success");

    process.exit();
  }catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};

importData();
