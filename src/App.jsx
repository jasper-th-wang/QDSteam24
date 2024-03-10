import { useContext, useState } from 'react';
import TotalTimeContext from './store/TotalTimeContext.js';
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
  const totalTimeValue = { goalTime, setGoalTime, timeElapsed, setTimeElapsed };

  return (
    <>
      <TotalTimeContext.Provider value={totalTimeValue}>
        <RouterProvider router={router} />
      </TotalTimeContext.Provider>
    </>
  );
}

export default App;
