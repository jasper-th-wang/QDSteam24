import Button from '@mui/material/Button';
import React from 'react';
import classes from './SetDailyGoal.module.css';

function GetTodaysDate() {
    // Get current Date
    const currentDate = new Date();

    // Get current yea, month, day
    const year = currentDate.getFullYear();
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);
    const day = currentDate.getDate();
    const currentTIme = currentDate.getHours();

    let greeting;

    if (currentTIme > 0 && currentTIme < 12) {
        greeting = <p>Good Morning!</p>
    } else if (currentTIme >= 12 && currentTIme < 18) {
        greeting = <p>Good Afternoon!</p>
    } else {
        greeting = <p>Good Evening!</p>
    }

    return (
        <div className={classes.redText}>
            <h3>{`${month} ${day}, ${year}`}</h3>
            <p>{greeting}</p>
        </div>
    );
}

function SetDailyGoal() {
    return (

        <div className="blueTitleColour">
            <GetTodaysDate />
            <p>Let's set a goal for today</p>
            <p>How long do you want to spend time to study today?</p>
            <br />
            <Button variant="contained">Set Today's Goal</Button>
        </div>
    );
}

export default SetDailyGoal;
