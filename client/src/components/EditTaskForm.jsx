import React from "react";

const EditTaskForm = ({
  editedTask,
  handleEditChange,
  handleSaveEditedTask,
  setEditTask
}) => {
  return (
    <div className="bg-gray-900 w-[500px] rounded-2xl border-4 border-gray-500 p-5">
      <form onSubmit={handleSaveEditedTask}>
        <h2 className="text-4xl font-bold text-gray-300 mb-6 text-center">
          Edit Task
        </h2>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2">
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
          <label className="block text-gray-500 text-sm font-bold mb-2">
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
          <label className="block text-gray-500 text-sm font-bold mb-2">
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
          <label className="block text-gray-500 text-sm font-bold mb-2">
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
        <div className="flex gap-3">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Update Task
          </button>
          <button
            onClick={() => setEditTask(null)}
            className="w-full bg-red-500 hover:bg-red-700 rounded-md text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskForm;
