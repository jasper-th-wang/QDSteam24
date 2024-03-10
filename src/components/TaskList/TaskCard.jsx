import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import DeleteTask from './DeleteTask';

const deleteTaskStyle = {
  backgroundColor: 'transparent',
  color: '#ACACAC',
  fontSize: '0.8em',
  textDecoration: 'underline',
  cursor: 'pointer', // show hand cursor when hover
};

function TaskButton() {
  const navigate = useNavigate();
  const handleTryDeleteTask = (event) => {
    event.preventDefault();
    console.log('User clicks delete task');
    navigate(<DeleteTask />);
  };

  let isCompleted = false;
  if (!isCompleted) {
    return (
      <div>
        <button className="blueButton">Start This Task</button>
        <br />
        <br />
        <button className="orangeButton">Completed</button>
        <br />
        <button style={deleteTaskStyle} onClick={handleTryDeleteTask}>Delete Task</button>
      </div>
    );
  } else {
    return (
      <div>
        <button className="grayButton">Completed</button>
        <p style={deleteTaskStyle}>Change Task</p>
      </div>
    );
  }
}

function TaskCard() {
  let taskName = 'JavaScript';
  let remainTime = '1 hour 30 minutes';

  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#E8FEFF' }}>
      <CardContent>
        <p>{taskName}</p>
        <p>{remainTime} remaining</p>
        <TaskButton />
      </CardContent>
    </Card>
  );
}

export default TaskCard;
