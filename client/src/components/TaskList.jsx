import axios from "axios";
import React, { useEffect, useState } from "react";
import EditTaskForm from "./EditTaskForm";

const TaskList = ({tasks, setTasks, fetchTask}) => {
  const [editTask, setEditTask] = useState(null);
  const [editedTask, setEditedTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    category: "",
  });

  const markComplete = async (id) => {
    const response = await axios.patch(
      `http://localhost:4444/api/${id}/mark-complete`
    );
    setTasks(
      tasks.map((val) => (val._id === id ? { ...val, completed: true } : val))
    );
  };

  const EditTask = (task) => {
    setEditTask(task);
    setEditedTask({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
      category: task.category,
    });
  };

  const handleEditChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSaveEditedTask = async () => {
    try {
      await axios.put(
        `http://localhost:4444/api/edit-task/${editTask._id}`,
        editedTask
      );
      fetchTask();
      setEditTask(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:4444/api/delete-task/${id}`);
      setTasks(tasks.filter((val) => val._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks?.map((task) => (
          <div key={task._id} className="bg-gray-700 shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold capitalize mb-2 text-gray-50">
                {task.title}
              </h3>
              <p
                className={`${
                  task.category === "work" ? "bg-yellow-300" : "bg-blue-500"
                } rounded-full px-2 font-semibold`}
              >
                {task.category}
              </p>
            </div>

            <p className="text-gray-200 h-[70px] overflow-hidden">
              {task.description}
            </p>
            <p className="text-xs text-gray-400 mb-2">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </p>
            <div className="flex justify-between items-center">
              <p
                className={`${
                  task.completed ? "bg-green-500" : "bg-red-500"
                } w-32 py-1 rounded text-center`}
              >
                {task.completed ? "Completed" : "Pending"}
              </p>

              <div className="flex justify-between items-center gap-3 text-gray-200">
                <button onClick={() => markComplete(task._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button
                  className="hover:underline text-gray-200"
                  onClick={() => EditTask(task)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                  </svg>
                </button>
                <button
                  className="text-gray-200 hover:underline"
                  onClick={() => handleDeleteTask(task._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {editTask ? (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-25 bg-black backdrop-blur-sm flex justify-center items-center">
          <EditTaskForm
            editedTask={editedTask}
            handleEditChange={handleEditChange}
            handleSaveEditedTask={handleSaveEditedTask}
            setEditTask={setEditTask}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TaskList;
