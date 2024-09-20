const getTasks = (req, res) => {
  res.status(200).json({ message: 'Get all tasks' });
};

const setTask = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Plese enter a task');
  }
  res.status(200).json({ message: 'Create task' });
};

const updateTask = (req, res) => {
  res.status(200).json({ message: `Task ${req.params.id} updated` });
};

const deleteTask = (req, res) => {
  res.status(200).json({ message: `Task ${req.params.id} deleted` });
};

module.exports = { getTasks, setTask, updateTask, deleteTask };
