const Employee = require("../models/Employee");

// Employee Creation
const createEmployee = async (req, res) => {
  try {
    const result = await Employee.create(req.body);
    res.status(201).json({ message: "Employee Created Succesfully" });
  } catch (error) {
    res.status(201).json({ error: "Employee Creation Failed Succesfully " });
  }
};

// Read all Data
const getEmployees = async (req, res) => {
  try {
    const result = await Employee.find({});
    res
      .status(201)
      .json({ message: "Data Accessed Succesfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Data Access Failed Succesfully" });
  }
};

//Read one Data
const getEmployeeById = async (req, res) => {
  try {
    const result = await Employee.findById(req.params.id);
    res
      .status(201)
      .json({ message: "Data Accessed Succesfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Data Access Failed Succesfully" });
  }
};

// Update Data
const updateEmployee = async (req, res) => {
  try {
    const result = await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ message: "Data Updated Succesfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Data Update Failed Succesfully" });
  }
};

// Delete Data
const deleteEmployee = async (req, res) => {
  try {
    await Employee.findOneAndDelete({ _id: req.params.id });
    res.status(201).json({ message: "Data Deleted Succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Data Deletion Failed Succesfully" });
  }
};

// Export controll functions
module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
