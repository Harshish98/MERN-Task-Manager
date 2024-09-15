const { default: mongoose } = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
  },
  category: {
    type: String,
    default: "Personal",
  },
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
