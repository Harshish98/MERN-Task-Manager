const TaskModel = require("../model/taskModel");

const NewTask = async (req, res) => {
  const { title, description, dueDate, category } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  try {
    const newTask = new TaskModel({
      title,
      description,
      dueDate,
      category,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Error while creating the task" });
  }
};

const GetAllTasks = async (req, res) => {
  try {
    const allTasks = await TaskModel.find();
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json({ error: "Error while getting all tasks" });
  }
};

const EditTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, category } = req.body;
  const updateData = { title, description, dueDate, category };
  try {
    const editedTask = await TaskModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!editedTask) {
      res.status(404).json({ error: "No such task found" });
    }
    res.status(200).json(editedTask);
  } catch (error) {
    res.status(500).json({ error: "Error in editing the task" });
  }
};

const DeleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await TaskModel.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not deleted" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error in deleting the task" });
  }
};

const MarkTaskComplete = async (req, res) => {
  const { id } = req.params;
  try {
    const existingTask = await TaskModel.findById(id);
    if (!existingTask) {
      return res.status(404).json({ error: "No such task exist" });
    }
    if (existingTask.completed) {
      return res.status(400).json({ error: "Task already completed" });
    }
    existingTask.completed = true
    await existingTask.save();
    res.status(200).json(existingTask);
  } catch (error) {
    res.status(500).json({ error: "Error in editing the task" });
  }
};

module.exports = {
  NewTask,
  EditTask,
  DeleteTask,
  MarkTaskComplete,
  GetAllTasks,
};
