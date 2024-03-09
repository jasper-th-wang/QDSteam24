import { Container } from '@mui/material';
// import Button from '@mui/material/Button';
import DailyProgress from '../components/DailyProgress/DailyProgress';
function Home() {
  return (
    <Container>
      <DailyProgress />
      <h1>PET IMAGE</h1>
      <h3>Today's Tasks:</h3>
      <ul>
        <li>Task item</li>
        <li>Task item</li>
        <li>Task item</li>
      </ul>
    </Container>
  );
}

export default Home;
