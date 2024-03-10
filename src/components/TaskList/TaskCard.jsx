import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Container from '../Container/Container';
const deleteTaskStyle = {
  color: '#ACACAC',
  fontSize: '0.8em',
  textDecoration: 'underline',
  cursor: 'pointer', // show hand cursor when hover
};

function TaskButton() {
  let isCompleted = false;
  if (!isCompleted) {
    return (
      <div>
        <button className="blueButton">Start This Task</button>
        <br />
        <br />
        <button className="orangeButton">Completed</button>
        <p style={deleteTaskStyle}>Delete Task</p>
      </div>
    );
  } else {
    return (
      <div>
        <button className="grayButton">Completed</button>
        <p style={deleteTaskStyle}>Delete Task</p>
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
