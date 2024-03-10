import { useState } from 'react';
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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
