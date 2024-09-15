import React from "react";

const EditTaskForm = ({
  editedTask,
  handleEditChange,
  handleSaveEditedTask,
  onClose
}) => {
  return (
    <div className="bg-gray-900 w-[500px] rounded-2xl border-4 border-gray-500 p-5">
      <form
        onSubmit={handleSaveEditedTask}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Edit Task</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleEditChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Task Title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleEditChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Task Description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleEditChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select
            name="category"
            value={editedTask.category}
            onChange={handleEditChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Category</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Update Task
        </button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditTaskForm;
