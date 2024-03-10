import useGetTimeElapsed from '../hooks/useGetTimeElapsed';
import TasksContext from '../store/TasksContext';
import { useContext, useState, useId, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import TaskTimePicker from '../components/TimePicker/TaskTimePicker';

function CreateTask() {
  const navigate = useNavigate();
  const taskId = useId();
  const { tasks, handleAddTask } = useContext(TasksContext);
  const { timeRemain } = useGetTimeElapsed();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [taskDescription, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState(0);
  const [selectedCategoryError, setSelectedCategoryError] = useState(false);
  const [taskDescriptionError, setTaskDescriptionError] = useState(false);
  const [taskTimeError, setTaskTimeError] = useState(false);
  useEffect(() => {
    setSelectedCategoryError(false);
    setTaskDescriptionError(false);
    setTaskTimeError(false);
  }, [selectedCategory, taskDescription, taskTime]);

  const validateTaskInput = (selectedCategory, taskDescription, taskTime) => {
    const isSelectedCategoryValid = selectedCategory !== '';
    const isTaskDescriptionValid = taskDescription !== '';
    const isTaskTimeValid = taskTime > 0;
    console.log(
      isSelectedCategoryValid,
      isTaskDescriptionValid,
      isTaskTimeValid
    );
    setSelectedCategoryError(!isSelectedCategoryValid);
    setTaskDescriptionError(!isTaskDescriptionValid);
    setTaskTimeError(!isTaskTimeValid);

    return isSelectedCategoryValid && isTaskDescriptionValid && isTaskTimeValid;
  };

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
    const isValid = validateTaskInput(
      selectedCategory,
      taskDescription,
      taskTime
    );
    if (!isValid) {
      return;
    }
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
          error={selectedCategoryError}
          helperText={selectedCategoryError ? 'Please select a category' : ''}
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
        error={taskDescriptionError}
        helperText={taskDescriptionError ? 'Please select a category' : ''}
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
      <FormHelperText error={taskTimeError}>
        {taskTimeError ? 'Please select a time' : ''}
      </FormHelperText>
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
