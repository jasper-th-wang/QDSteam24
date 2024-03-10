import TasksContext from '../../store/TasksContext';
import { useContext } from 'react';
import TaskCard from './TaskCard';
import Container from '../Container/Container';

function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <Container>
      {tasks.map((task, index) => {
        return <TaskCard key={index} task={task} />;
      })}
    </Container>
  );
}

export default TaskList;
