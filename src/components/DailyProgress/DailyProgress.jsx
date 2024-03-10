import { Container } from '@mui/material';
import { LinearProgress } from '@mui/material';
import TodayDate from '../TodayDate/TodayDate';
import useGetTimeElapsed from '../../hooks/useGetTimeElapsed';
import Pet from '../Pet/Pet';

function DailyProgress() {
  const { progress, timeRemain } = useGetTimeElapsed();

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
