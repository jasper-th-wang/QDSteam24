import { useState, useEffect } from "react";
import classes from "./Timer.module.css";
import Container from "../components/Container/Container";

// values for Pomodoro timer
const workDuration = 10;
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

function formatPomodoroTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default function Timer() {
    // values for counting down
    const [pomodoroTimeLeft, setPomodoroTimeLeft] = useState(workDuration);
    const [remainingTime, setRemainingTime] = useState(originalRemainingTime);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setPomodoroTimeLeft((time) => {
                    if (time > 0) {
                        return time - 1;
                    } else {
                        setIsActive(false);
                        setIsBreak((i) => !i);
                        return isBreak ? workDuration : breakDuration;
                    }
                });
                setRemainingTime((time) => (time > 0 ? time - 1 : 0));
            }, 1000);
        } else if (!isActive && pomodoroTimeLeft !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, isBreak, pomodoroTimeLeft]);

    const handleStart = () => {
        setIsActive(!isActive);
    };

    return (
        <Container>
            <h1 className={`${classes.description} blueTitleColour`}>
                {description}
            </h1>
            <h3 className={classes.category}>{category}</h3>
            {isBreak ? <p>Break time!</p> : <p>Remaining time for this set:</p>}
            <h1 className={classes.timer}>
                {formatPomodoroTime(pomodoroTimeLeft)}
            </h1>
            <h2>Remaining time for this task: {formatTime(remainingTime)}</h2>
            <button className={`blueButton`} onClick={handleStart}>
                {isActive ? "Pause" : "Play"}
            </button>
            <p></p>
            {!isActive ? (
                <button
                    className={`orangeButton`}
                    onClick={() => {
                        setIsActive(false);
                        setIsBreak(true);
                        setPomodoroTimeLeft(workDuration);
                    }}
                >
                    Completed
                </button>
            ) : null}
        </Container>
    );
}
