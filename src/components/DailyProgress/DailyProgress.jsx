import { Container } from '@mui/material';
import { LinearProgress } from '@mui/material';
import TodayDate from '../TodayDate/TodayDate';
import { useContext, useEffect, useState } from 'react';
import TotalTimeContext from '../../store/TotalTimeContext';
import Pet from '../Pet/Pet';

function DailyProgress() {
  const { goalTime, timeElapsed } = useContext(TotalTimeContext);
  const [progress, setProgress] = useState(0);
  const [timeRemain, setTimeRemain] = useState(0);

  useEffect(() => {
    const newProgress = (1 - timeElapsed / goalTime) * 100;
    const newTimeRemain = goalTime - timeElapsed;
    console.log('goal: ' + goalTime);
    console.log(timeElapsed);
    setProgress(newProgress);
    setTimeRemain(newTimeRemain);
  }, [goalTime, timeElapsed, progress]);

  return (
    <Container>
      <TodayDate />
      <LinearProgress color="primary" variant="determinate" value={progress} />
      <p>You got {timeRemain / 60} hours to use up!</p>
      <Pet mode={1} />
    </Container>
  );
}

export default DailyProgress;
