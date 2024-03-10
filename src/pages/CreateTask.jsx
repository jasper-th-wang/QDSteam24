import React, { useState } from 'react';
import Container from "../components/Container/Container";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import TimePicker from '../components/TimePicker/TimePicker';


function CreateTask() {
    const [selectedValue, setSelectedValue] = useState('');
    const [taskName, setTaskName] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    };
    return (
        <Container>
            <h2 className="blueTitleColour" style={{ fontWeight: "bolder" }}>Create Task</h2>

            {/* Choose the category */}
            <FormControl fullWidth>
                <InputLabel id="task-dropdown-label">Category</InputLabel>
                <Select
                    labelId="task-dropdown-label"
                    id="task-dropdown"
                    value={selectedValue}
                    label="Select a task"
                    onChange={handleChange}
                >
                    <MenuItem value="task2">Java</MenuItem>
                    <MenuItem value="task3">C</MenuItem>
                    <MenuItem value="task1">Math</MenuItem>
                    <MenuItem value="task2">Computer Architecture</MenuItem>
                    <MenuItem value="task3">Relational Database Systems</MenuItem>
                </Select>
            </FormControl>

            <br />
            {/* Task details */}
            <TextField
                label="Task Name"
                variant="outlined"
                fullWidth
                value={taskName}
                onChange={handleTaskNameChange}
            />

            <p>How long do you assign <br />
                time for this task?</p>
            <TimePicker />
            <button className='blueButton'>Add to Today's Goal</button>
        </Container >

    )
}

export default CreateTask;