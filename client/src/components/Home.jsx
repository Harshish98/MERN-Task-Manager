import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

export const Home = () => {
  const [openForm, setOpenForm] = useState(false);

  const toggleWindow = () => {
    setOpenForm(!openForm)
  }
  return (
    <>
      <div className="h-screen p-6 bg-gray-900">
        <div className="max-w-6xl h-full mx-auto border-2 border-gray-500 rounded-2xl p-4 ">
          <h1 className="text-center text-5xl text-gray-100 mb-4">
            Task Manager
          </h1>
          <button className="text-white" onClick={() => setOpenForm(!openForm)}>
            Create Task
          </button>
          <div>
            {openForm && (
              <div className="fixed top-0 left-0 w-full h-full bg-opacity-25 bg-black backdrop-blur-sm flex justify-center items-center">
                <TaskForm onClose={toggleWindow} />
              </div>
            )}
            <TaskList onClose={toggleWindow} />
          </div>
        </div>
      </div>
    </>
  );
};
