import { useContext, useEffect, useState } from "react";
import TotalTimeContext from "./store/TotalTimeContext.js";
import TasksContext from "./store/TasksContext.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Timer from "./pages/Timer.jsx";
import SetDailyGoal from "./pages/SetDailyGoal.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import CreateTask from "./pages/CreateTask.jsx";
import Congratulations from "./components/Congratulations/Congratulations.jsx";
import { Task } from "@mui/icons-material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/timer",
    element: <Timer />,
  },
  {
    path: "/daily-goals",
    element: <SetDailyGoal />,
  },
  {
    path: "/task-card",
    element: <TaskList />,
  },
  {
    path: "/congratulations",
    element: <Congratulations />,
  },
  {
    path: "/create-task",
    element: <CreateTask />,
  },
]);

function App() {
  const [goalTime, setGoalTime] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [tasks, setTasks] = useState([]);
  // run on first render to gather data from local storage
  useEffect(() => {
    const storedGoalTime = localStorage.getItem("goalTime");
    if (storedGoalTime) {
      setGoalTime(parseInt(storedGoalTime));
    }
  }, []);

  const handleSetGoalTime = (newGoalTime) => {
    localStorage.setItem("goalTime", newGoalTime);
    setGoalTime(newGoalTime);
  };

  const handleAddTask = (category, description, budgetedTimeAmount) => {
    const newTask = {
      category,
      description,
      budgetedTimeAmount,
    };
    setTasks([...tasks, newTask]);
  };
  const totalTimeValue = {
    goalTime,
    handleSetGoalTime,
    timeElapsed,
    setTimeElapsed,
    tasks,
    handleAddTask,
  };

  return (
    <>
      <TotalTimeContext.Provider value={totalTimeValue}>
        <TasksContext.Provider value={(tasks, handleAddTask)}>
          <RouterProvider router={router} />
        </TasksContext.Provider>
      </TotalTimeContext.Provider>
    </>
  );
}

export default App;
