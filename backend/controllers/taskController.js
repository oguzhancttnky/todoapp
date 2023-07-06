const Task = require("../models/taskModel");

// create a task
const createTask = async (req, res) => {
  const { user_id, title, description } = req.body;

  try {
    const task = await Task.create({ user_id, title, description });
    res.status(201).json({ task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all tasks
const getAllTasks = async (req, res) => {
  try {
    const { user_id } = req.body;
    const tasks = await Task.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a task by id
const getTaskById = async (req, res) => {
  try {
    const { _id } = req.body;
    const task = await Task.find({ _id });
    res.status(200).json({ task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a task
const updateTask = async (req, res) => {
  try {
    const { _id, title, description } = req.body;
    const task = await Task.findByIdAndUpdate({ _id }, { title, description });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a task
const deleteTask = async (req, res) => {
  try {
    const { _id } = req.body;
    const task = await Task.findByIdAndDelete({ _id });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
