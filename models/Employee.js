// Schema setup
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    designation: { type: String, required: true },
    salary: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false },
);

// Schema to Model
const Employee = mongoose.model("Employee", employeeSchema);

// Export Model
module.exports = Employee;
