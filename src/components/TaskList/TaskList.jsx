import TasksContext from '../../store/TasksContext';
import { useContext } from 'react';
import TaskCard from './TaskCard';
import { Box, Stack } from '@mui/material';

function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <Box>
      <Stack spacing={2}>
        {tasks.map((task, index) => {
          return <TaskCard key={index} task={task} />;
        })}
      </Stack>
    </Box>
  );
}

export default TaskList;
