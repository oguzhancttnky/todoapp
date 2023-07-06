import React, { createContext, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../Hooks/useAuthContext";
axios.defaults.withCredentials = true;

export const TaskContext = createContext({});
export const TaskContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  const createTask = async (user_id, title, description) => {
    await axios.post("http://localhost:5000/api/task/create", {
      user_id,
      title,
      description,
    });
  };

  const getAllTasks = async (user_id) => {
    const res = await axios.post("http://localhost:5000/api/task/getall", {
      user_id,
    });
    setTasks(res.data.tasks);
  };

  const getTask = async (_id) => {
    const task = await axios.get("http://localhost:5000/api/user/logout", {
      _id,
    });
    setTask(task.data);
  };

  const updateTask = async (_id, title, description) => {
    await axios.post("http://localhost:5000/api/task/update", {
      _id,
      title,
      description,
    });
  };

  const deleteTask = async (_id) => {
    await axios.post("http://localhost:5000/api/task/delete", {
      _id,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        user_id: user ? user._id : null,
        tasks,
        task,
        createTask,
        getAllTasks,
        getTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
