import classes from './Congratulations.module.css';
import { Box } from '@mui/material';
import Pet from '../Pet/Pet';

export default function Congratulations() {
  return (
    <Box>
      <h1 className={classes.congratulations}>Congratulations!</h1>
      <h2>You completed a task!</h2>
      {Pet({ mode: 3 })}
      <p></p>
    </Box>
  );
}
