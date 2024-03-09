import { useState, useEffect } from "react";
import classes from "./Timer.module.css";
import Container from "../components/Container/Container";

// values for Pomodoro timer
const workDuration = 25 * 60;
const breakDuration = 5 * 60;

// things we want to get from firebase
const description = "Chapter 1: Introduction to JavaScript";
const category = "JavaScript";
const originalRemainingTime = 90 * 60; // 90 minutes

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default function Timer() {
    // values for counting down
    const [pomodoroTimeLeft, setPomodoroTimeLeft] = useState(workDuration);
    const [remainingTime, setRemainingTime] = useState(originalRemainingTime);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setPomodoroTimeLeft((time) => (time > 0 ? time - 1 : 0));
                setRemainingTime((time) => (time > 0 ? time - 1 : 0));
            }, 1000);
        } else if (!isActive && pomodoroTimeLeft !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, pomodoroTimeLeft]);

    const handleStart = () => {
        setIsActive(true);
    };

    return (
        <Container>
            <h1 className={`${classes.description} blueTitleColour`}>
                {description}
            </h1>
            <h3 className={classes.category}>{category}</h3>
            <p>Remaining time for this task:</p>
            <h1 className={classes.timer}>{formatTime(remainingTime)}</h1>
            <p>Remaining time for this set:</p>
            <h1 className={classes.timer}>{formatTime(pomodoroTimeLeft)}</h1>
            <button onClick={handleStart}>Play</button>
        </Container>
    );
}
