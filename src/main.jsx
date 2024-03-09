import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Timer from './pages/Timer.jsx';
import SetDailyGoal from './pages/SetDailyGoal.jsx';
import TaskCard from './components/TaskList/TaskCard.jsx';

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
    element: <TaskCard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
