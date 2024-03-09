import { Container, Stack } from '@mui/material';
import { LinearProgress } from '@mui/material';
import TodayDate from '../TodayDate/TodayDate';

function DailyProgress() {
  return (
    <Container>
      <Stack>
        <TodayDate />
        <LinearProgress color="primary" fourColor variant="determinate" />
        <p>6 hours remaining</p>
      </Stack>
    </Container>
  );
}

export default DailyProgress;
