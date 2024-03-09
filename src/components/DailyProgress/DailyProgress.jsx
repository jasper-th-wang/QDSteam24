import { Container, Stack } from "@mui/material";
import { LinearProgress } from "@mui/material";
import TodayDate from "../TodayDate/TodayDate";

function DailyProgress() {
  return (
    <Container>
      <TodayDate />
      <LinearProgress color="primary" variant="determinate" value={50} />
      <p>6 hours remaining</p>
    </Container>
  );
}

export default DailyProgress;
