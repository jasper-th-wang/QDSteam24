import Container from '../components/Container/Container';
// import Button from '@mui/material/Button';
import DailyProgress from '../components/DailyProgress/DailyProgress';
import Pet from '../components/Pet/Pet';

function Home() {
  return (
    <Container>
      <DailyProgress />
      <Pet mode={1} />
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
