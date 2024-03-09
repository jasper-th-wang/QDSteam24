import Button from '@mui/material/Button';
import React from 'react';
import classes from './SetDailyGoal.module.css';
import TodayDate from '../components/TodayDate/TodayDate';

function Greeting() {
    // Get current Date
    const currentDate = new Date();

  // Get current yea, month, day
  const year = currentDate.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    currentDate
  );
  const day = currentDate.getDate();
  const currentTIme = currentDate.getHours();

  let greeting;

  if (currentTIme > 0 && currentTIme < 12) {
    greeting = <p>Good Morning!</p>;
  } else if (currentTIme >= 12 && currentTIme < 18) {
    greeting = <p>Good Afternoon!</p>;
  } else {
    greeting = <p>Good Evening!</p>;
  }

    return (
        <div>
            <TodayDate />
            <p className='orangeColour' style={{ fontWeight: 'bolder' }}>{greeting}</p>
        </div>
    );
}

function SetDailyGoal() {
    return (

        <div className="">
            <Greeting />
            <p>Let's set a goal for today</p>
            <br />
            <p>How long do you want to spend time to study today?</p>
            <br />
            <Button variant="contained">Set Today's Goal</Button>
        </div>
    );
}

export default SetDailyGoal;
