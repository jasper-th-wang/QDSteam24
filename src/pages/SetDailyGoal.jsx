import Button from '@mui/material/Button';
import React, { useState } from 'react';
import classes from './SetDailyGoal.module.css';
import TodayDate from '../components/TodayDate/TodayDate';

<<<<<<< HEAD
function GetTodaysDate() {
  // Get current Date
  const currentDate = new Date();
=======
function Greeting() {
    // Get current Date
    const currentDate = new Date();
>>>>>>> refs/remotes/origin/main

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

<<<<<<< HEAD
  return (
    <div>
      <TodayDate />
      <p className="orangeColour">{greeting}</p>
    </div>
  );
}

function SetDailyGoal() {
  return (
    <div className="">
      <GetTodaysDate />
      <br />
      <p>Let's set a goal for today</p>
      <p>How long do you want to spend time to study today?</p>
      <br />
      <Button variant="contained">Set Today's Goal</Button>
    </div>
  );
=======
    return (
        <div>
            <TodayDate />
            <p className='orangeColour' style={{ fontWeight: 'bolder' }}>{greeting}</p>
        </div>
    );
}

function SetTIme() {
    const [time, setTime] = useState("00:00");

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <div>
            <input type="time" value={time} onChange={handleTimeChange} />
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
            <SetTIme />
            <br />
            <Button variant="contained">Set Today's Goal</Button>
        </div>
    );
>>>>>>> refs/remotes/origin/main
}

export default SetDailyGoal;
