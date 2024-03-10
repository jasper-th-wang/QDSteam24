import React, { useState } from 'react';
import Container from "../components/Container/Container";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


function CreateTask() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <Container>
            <h2 className="blueTitleColour" style={{ fontWeight: "bolder" }}>Create Task</h2>

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

        </Container >

    )
}

export default CreateTask;