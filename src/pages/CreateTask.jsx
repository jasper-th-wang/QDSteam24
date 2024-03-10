import useGetTimeElapsed from '../hooks/useGetTimeElapsed';
import TasksContext from '../store/TasksContext';
import { useContext, useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import TaskTimePicker from '../components/TimePicker/TaskTimePicker';

function CreateTask() {
  const navigate = useNavigate();
  const taskId = useId();
  const { tasks, handleAddTask } = useContext(TasksContext);
  const { timeRemain } = useGetTimeElapsed();
  const [taskTime, setTaskTime] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [taskDescription, setTaskName] = useState('');

  const handleSetTaskTime = (newTaskTime) => {
    setTaskTime(newTaskTime);
  };

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTaskButton = (event) => {
    event.preventDefault();
    console.log(selectedCategory, taskDescription, taskTime);
    handleAddTask(taskId, selectedCategory, taskDescription, taskTime);
    navigate('/');
  };
  return (
    <Container>
      <h2 className="blueTitleColour" style={{ fontWeight: 'bolder' }}>
        Create Task
      </h2>

      {/* Choose the category */}
      <FormControl fullWidth>
        <InputLabel id="task-dropdown-label" required={true}>
          Category
        </InputLabel>
        <Select
          labelId="task-dropdown-label"
          id="task-dropdown"
          value={selectedCategory}
          label="Select a task"
          onChange={handleSelectChange}
        >
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="Math">Math</MenuItem>
          <MenuItem value="Computer Architecture">
            Computer Architecture
          </MenuItem>
          <MenuItem value="Relational Database Systems">
            Relational Database Systems
          </MenuItem>
        </Select>
      </FormControl>

      <br />
      {/* Task details */}
      <TextField
        label="Task Description"
        variant="outlined"
        fullWidth
        value={taskDescription}
        onChange={handleTaskNameChange}
      />

      <p>
        How long do you assign <br />
        time for this task?
      </p>
      <TaskTimePicker
        timeRemain={timeRemain}
        taskTime={taskTime}
        onSliderChange={handleSetTaskTime}
      />
      <button className="blueButton" onClick={handleAddTaskButton}>
        Add to Today's Goal
      </button>
    </Container>
  );
}

export default CreateTask;
