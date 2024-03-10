import { useEffect, useContext, useState } from 'react';
import Container from '../components/Container/Container';
// import Button from '@mui/material/Button';
import DailyProgress from '../components/DailyProgress/DailyProgress';
import TaskList from '../components/TaskList/TaskList';
import { useNavigate } from 'react-router-dom';
import TotalTimeContext from '../store/TotalTimeContext';
import TasksContext from '../store/TasksContext';
import Congratulations from '../components/Congratulations/Congratulations';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  const { goalTime, timeElapsed, handleCompleteEarly } =
    useContext(TotalTimeContext);
  const { tasks } = useContext(TasksContext);
  const navigate = useNavigate();
  const [displayCongrats, setDisplayCongrats] = useState(false);
  const [displayEarlyComplete, setDisplayEarlyComplete] = useState(false);
  const [displayEmptyMessage, setDisplayEmptyMessage] = useState(false);
  const handleAddTaskButton = (event) => {
    event.preventDefault();
    navigate('/create-task');
  };
  useEffect(() => {
    if (goalTime == 0) {
      navigate('/daily-goals');
    }
  }, []);

  // Redirect to congrats page when goal time is used up, and tasks are completed
  useEffect(() => {
    if (tasks.length === 0) {
      setDisplayEmptyMessage(true);
      return;
    }
    setDisplayEmptyMessage(false);
    const allTasksCompleted = tasks.every((task) => task.completed);
    if (goalTime == timeElapsed && allTasksCompleted) {
      setDisplayCongrats(true);
    } else if (allTasksCompleted) {
      setDisplayEarlyComplete(true);
    }
  }, [goalTime, timeElapsed, tasks]);
  return (
    <Container>
      <Stack direction="column" spacing={2}>
        <Item>{displayCongrats ? <Congratulations /> : <DailyProgress />}</Item>
        <Item>
          {displayEmptyMessage ? (
            <p>So much room for studying! What’s first?</p>
          ) : null}
          <TaskList />
        </Item>
        <Item>
          {!displayCongrats ? (
            <button className="blueButton" onClick={handleAddTaskButton}>
              Add Tasks
            </button>
          ) : null}
        </Item>
        <Item>
          {displayEarlyComplete && !displayCongrats ? (
            <button className="blueButton" onClick={handleCompleteEarly}>
              I've finished early!
            </button>
          ) : null}
        </Item>
      </Stack>
    </Container>
  );
}

export default Home;
