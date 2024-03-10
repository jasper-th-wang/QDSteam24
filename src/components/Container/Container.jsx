import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import PetsIcon from '@mui/icons-material/Pets';
import { useState } from 'react';
import classes from './Container.module.css';
import logo from '../../assets/minutemon_logo.png';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';

function Container({ children }) {
  const [value, setValue] = useState(0);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <img src={logo} alt="" />
        </AppBar>
      </Box>
      <div className={classes.container}>{children}</div>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            bgcolor: '#00D4FF',
            height: '5rem',
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Goals" icon={<FlagIcon />} />
          <BottomNavigationAction label="Pet" icon={<PetsIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default Container;
