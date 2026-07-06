const mongoose = require("mongoose");

const uri =
  "mongodb://Novelty:%23CP77%237053R%23@localhost:27017/novelty1?authSource=admin";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Mongoose Connected Successfuly");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
