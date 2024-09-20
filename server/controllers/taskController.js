const asyncHandler = require('express-async-handler');
const Task = require('../models/taskModel.js');

// GET
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});
// POST
const setTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Plese enter a task');
  }
  const task = await Task.create({ text: req.body.text });
  res.status(200).json(task);
});

// PUT
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error('Task not found');
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

//DELETE
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error('Task not found');
  }
  await Task.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = { getTasks, setTask, updateTask, deleteTask };
