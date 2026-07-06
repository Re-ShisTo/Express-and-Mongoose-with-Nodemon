const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./config/db");

connectDB();

//json middleware
app.use(express.json());

app.use("/api", require("./routes/api.js"));

// Set the Port where the server will run
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
