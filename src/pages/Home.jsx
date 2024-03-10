import { Task } from '@mui/icons-material';
import Container from '../components/Container/Container';
// import Button from '@mui/material/Button';
import DailyProgress from '../components/DailyProgress/DailyProgress';
import TaskList from '../components/TaskList/TaskList';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleAddTaskButton = (event) => {
    event.preventDefault();
    navigate('/create-task');
  };
  return (
    <Container>
      <DailyProgress />
      <TaskList />
      <button className="blueButton" onClick={handleAddTaskButton}>
        Add More Tasks
      </button>
    </Container>
  );
}

export default Home;
