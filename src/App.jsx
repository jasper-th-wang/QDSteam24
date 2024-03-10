import { useEffect, useState } from 'react';
import TotalTimeContext from './store/TotalTimeContext.js';
import TasksContext from './store/TasksContext.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Timer from './pages/Timer.jsx';
import SetDailyGoal from './pages/SetDailyGoal.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import CreateTask from './pages/CreateTask.jsx';
import Congratulations from './components/Congratulations/Congratulations.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/timer',
    element: <Timer />,
  },
  {
    path: '/daily-goals',
    element: <SetDailyGoal />,
  },
  {
    path: '/task-card',
    element: <TaskList />,
  },
  {
    path: '/congratulations',
    element: <Congratulations />,
  },
  {
    path: '/create-task',
    element: <CreateTask />,
  },
]);

function App() {
  const [goalTime, setGoalTime] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [tasks, setTasks] = useState([]);
  // run on first render to gather data from local storage
  useEffect(() => {
    const storedGoalTime = localStorage.getItem('goalTime');
    if (storedGoalTime) {
      setGoalTime(parseInt(storedGoalTime));
    }
    const storedTimeElapsed = localStorage.getItem('timeElapsed');
    if (storedTimeElapsed) {
      setTimeElapsed(parseInt(storedTimeElapsed));
    }
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleSetGoalTime = (newGoalTime) => {
    localStorage.setItem('goalTime', newGoalTime);
    setGoalTime(newGoalTime);
  };

  const handleIncreaseTime = (time) => {
    localStorage.setItem('timeElapsed', timeElapsed - time);
    setTimeElapsed(timeElapsed - time);
  };
  const handleDecreaseTime = (time) => {
    localStorage.setItem('timeElapsed', timeElapsed + time);
    setTimeElapsed(timeElapsed + time);
  };
  const handleCompleteEarly = () => {
    localStorage.setItem('timeElapsed', goalTime);
    setTimeElapsed(goalTime);
  };

  const handleAddTask = (taskId, category, description, budgetedTimeAmount) => {
    const newTask = {
      taskId,
      category,
      description,
      budgetedTimeAmount,
      timeElapsed: 0,
      completed: false,
    };
    handleDecreaseTime(budgetedTimeAmount);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (task) => {
    // not sure why i have to use task.task....
    const newTasks = tasks.filter((t) => t.taskId !== task.task.taskId);
    console.log(tasks);
    console.log(newTasks);
    console.log(task);
    console.log(task.task.taskId);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
    const timeUnused = task.task.budgetedTimeAmount - task.task.timeElapsed;
    handleIncreaseTime(timeUnused);
  };

  const handleCompleteTask = (task) => {
    task.task.completed = true;
    const newTasks = tasks.map((t) => {
      if (t.taskId === task.task.taskId) {
        return task.task;
      }
      return t;
    });
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const totalTimeValue = {
    goalTime,
    handleSetGoalTime,
    timeElapsed,
    setTimeElapsed,
    tasks,
    handleAddTask,
    handleCompleteEarly,
  };
  const tasksValue = {
    tasks,
    handleAddTask,
    handleDeleteTask,
    handleCompleteTask,
  };

  return (
    <>
      <TotalTimeContext.Provider value={totalTimeValue}>
        <TasksContext.Provider value={tasksValue}>
          <RouterProvider router={router} />
        </TasksContext.Provider>
      </TotalTimeContext.Provider>
    </>
  );
}

export default App;
