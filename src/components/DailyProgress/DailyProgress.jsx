import { Container } from '@mui/material';
import { LinearProgress } from '@mui/material';
import TodayDate from '../TodayDate/TodayDate';
import useGetTimeElapsed from '../../hooks/useGetTimeElapsed';
import minutesToHoursAndMinutes from '../../helper/minutesToHoursAndMinutes';
import Pet from '../Pet/Pet';

function DailyProgress() {
  const { progress, timeRemain } = useGetTimeElapsed();
  const isAllAssigned = timeRemain === 0;

  return (
    <Container>
      <TodayDate />
      <LinearProgress color="primary" variant="determinate" value={progress} />
      {isAllAssigned ? (
        <p className="timeMessage">
          You have assigned all your time, get to work!
        </p>
      ) : (
        <p className="timeMessage">
          You have {minutesToHoursAndMinutes(timeRemain)} to assign!
        </p>
      )}
      <Pet mode={1} />
    </Container>
  );
}

export default DailyProgress;
