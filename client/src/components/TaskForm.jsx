import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({onClose, fetchTask}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    category: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4444/api/create-task",
        formData
      );
      console.log(response);
      onClose()
      setFormData({
        title: "",
        description: "",
        dueDate: "",
        category: "",
      });
      fetchTask()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-900 w-[500px] rounded-2xl border-4 border-gray-500 p-5">
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl font-bold text-gray-300 mb-6 text-center">
          Create New Task
        </h2>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleOnChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
            placeholder="Task Title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleOnChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Task Description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2">
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleOnChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleOnChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Category</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add Task
          </button>
          <button onClick={onClose} className="w-full bg-red-500 hover:bg-red-700 rounded-md text-white">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
