import { Task } from '@mui/icons-material';
import React from 'react';

const TasksContext = React.createContext({
  tasks: [],
  setTasks: () => {},
});

export default TasksContext;
