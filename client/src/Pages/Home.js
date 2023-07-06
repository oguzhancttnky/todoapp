import React, { useEffect, useState } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useTaskContext } from "../Hooks/useTaskContext";
import TaskDetails from "./TaskPages/TaskDetails";
import SpinnerExample from "../Utils/SpinnerExample";

export default function Home() {
  const { user } = useAuthContext();
  const { getAllTasks, tasks } = useTaskContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      await getAllTasks(user._id);
      setLoading(false);
    };
    fetchTasks();
  }, [user._id]);
  return (
    <div className="home">
      {loading ? (
        <SpinnerExample />
      ) : (
        <div>
          <div className="tasks d-flex flex-wrap justify-content-center align-items-center">
            {tasks &&
              tasks.map((task) => <TaskDetails key={task._id} task={task} />)}
          </div>
        </div>
      )}
    </div>
  );
}
