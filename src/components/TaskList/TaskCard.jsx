import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from '../Container/Container';
const deleteTaskStyle = {
    color: '#ACACAC',
    fontSize: '0.8em',
    textDecoration: 'underline',
    cursor: 'pointer',  // show hand cursor when hover
};


function TaskCard({ taskName, remainTime }) {
    return (
        <Container>
            <Card sx={{ minWidth: 275, backgroundColor: '#E8FEFF' }}>
                <CardContent>
                    <p>{taskName}</p>
                    <p>{remainTime} remaining</p>

                    <button className='blueButton'>Start This Task</button>
                    <br />
                    <br />
                    <button className='orangeButton'>Completed</button>
                    <p style={deleteTaskStyle}>Delete Task</p>
                </CardContent>
            </Card>
        </Container >
    )
}

export default TaskCard;