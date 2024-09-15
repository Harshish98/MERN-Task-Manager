const express = require("express");
const {
  NewTask,
  GetAllTasks,
  EditTask,
  MarkTaskComplete,
  DeleteTask,
} = require("../controller/taskController");

const task = express.Router();

task.post("/create-task", NewTask);
task.get("/tasks", GetAllTasks);
task.put("/edit-task/:id", EditTask);
task.patch("/:id/mark-complete", MarkTaskComplete);
task.delete("/delete-task/:id", DeleteTask);

module.exports = task;
