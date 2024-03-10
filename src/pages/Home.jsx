import { useEffect, useContext, useState } from 'react';
import Container from '../components/Container/Container';
// import Button from '@mui/material/Button';
import DailyProgress from '../components/DailyProgress/DailyProgress';
import TaskList from '../components/TaskList/TaskList';
import { useNavigate } from 'react-router-dom';
import TotalTimeContext from '../store/TotalTimeContext';
import TasksContext from '../store/TasksContext';
import Congratulations from '../components/Congratulations/Congratulations';

function Home() {
  const { goalTime, timeElapsed } = useContext(TotalTimeContext);
  const { tasks } = useContext(TasksContext);
  const navigate = useNavigate();
  const [displayCongrats, setDisplayCongrats] = useState(false);
  const handleAddTaskButton = (event) => {
    event.preventDefault();
    navigate('/create-task');
  };
  // Redirect to congrats page when goal time is used up, and tasks are completed
  useEffect(() => {
    if (goalTime === timeElapsed && tasks.length === 0) {
      setDisplayCongrats(true);
    }
  }, [goalTime, timeElapsed, tasks]);
  return (
    <Container>
      {displayCongrats ? <Congratulations /> : null}
      <DailyProgress />
      <TaskList />
      <button className="blueButton" onClick={handleAddTaskButton}>
        Add More Tasks
      </button>
    </Container>
  );
}

export default Home;
