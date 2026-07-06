const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

// Create a new employee
router.post("/employees", createEmployee);

// Get all employees
router.get("/employees", getEmployees);

// Get a single employee by ID
router.get("/employees/:id", getEmployeeById);

// Update an employee by ID
router.put("/employees/:id", updateEmployee);

// Delete an employee by ID
router.delete("/employees/:id", deleteEmployee);

module.exports = router;
