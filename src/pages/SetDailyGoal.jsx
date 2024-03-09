import Button from '@mui/material/Button';
import React, { useState } from 'react';
import classes from './SetDailyGoal.module.css';
import TodayDate from '../components/TodayDate/TodayDate';
import Container from '../components/Container/Container';

function Greeting() {
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
        <div>
            <TodayDate />
            <p className='orangeColour' style={{ fontWeight: 'bolder' }}>{greeting}</p>
        </div>
    );
}

function SetTIme() {
    const [hours, setHours] = useState("00:00");
    const [minutes, setMinutes] = useState(0);

    const handleHoursChange = (event) => {
        const newHours = parseInt(event.target.value, 10);
        setHours(newHours >= 0 ? newHours : 0);
    };

    const handleMinutesChange = (event) => {
        const newMinutes = parseInt(event.target.value, 10);
        setMinutes(newMinutes >= 0 ? newHours : 0);
    };

    return (
        <div>
            <label>
                Hours:
                <input type="number" value={hours} onChange={handleHoursChange} />
            </label>
            <br />
            <label>
                Minutes:
                <input type="number" value={minutes} onChange={handleMinutesChange} />
            </label>
        </div>
    );

}

function SetDailyGoal() {
    return (

        <Container>
            <Greeting />
            <p>Let's set a goal for today</p>
            <br />
            <p>How long do you want to spend <br />time to study today?</p>
            <SetTIme />
            <br />
            <Button variant="contained">Set Today's Goal</Button>
        </Container>
    );
}

export default SetDailyGoal;
