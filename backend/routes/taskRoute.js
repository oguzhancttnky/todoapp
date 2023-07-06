const express = require("express");

// controller functions
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

// create route
router.route("/create").post(createTask);

// getAll route
router.route("/getall").post(getAllTasks);

// get one route
router.route("/get").post(getTaskById);

// update route
router.route("/update").post(updateTask);

// delete route
router.route("/delete").post(deleteTask);

module.exports = router;
