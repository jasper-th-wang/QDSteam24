import { Task } from '@mui/icons-material';
import Container from '../components/Container/Container';
// import Button from '@mui/material/Button';
import DailyProgress from '../components/DailyProgress/DailyProgress';
import TaskList from '../components/TaskList/TaskList';

function Home() {
  return (
    <Container>
      <DailyProgress />
      <TaskList />
      <button className="blueButton">Add More Tasks</button>
    </Container>
  );
}

export default Home;
