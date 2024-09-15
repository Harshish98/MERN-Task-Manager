import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import axios from "axios";

export const Home = () => {
  const [openForm, setOpenForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:4444/api/tasks");
    setTasks(response.data);
  };

  const toggleWindow = () => {
    setOpenForm(!openForm);
  };

  useEffect(() => {
    fetchTask()
  }, [])
  return (
    <>
      <div className="h-screen p-6 bg-gray-900">
        <div className="max-w-6xl h-full mx-auto border-2 border-gray-500 rounded-2xl p-4 ">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl text-gray-100 mb-4 text-right basis-[63%]">
              Task Manager
            </h1>
            <button
              className="text-white bg-blue-500 hover:bg-blue-700 h-fit w-32 rounded-lg py-1"
              onClick={() => setOpenForm(!openForm)}
            >
              Create Task
            </button>
          </div>

          <div>
            {openForm && (
              <div className="fixed top-0 left-0 w-full h-full bg-opacity-25 bg-black backdrop-blur-sm flex justify-center items-center">
                <TaskForm onClose={toggleWindow} fetchTask={fetchTask} />
              </div>
            )}
            <TaskList tasks={tasks} setTasks={setTasks} fetchTask={fetchTask} />
          </div>
        </div>
      </div>
    </>
  );
};
