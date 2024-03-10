import TasksContext from '../../store/TasksContext';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const deleteTaskStyle = {
  backgroundColor: 'transparent',
  color: '#ACACAC',
  fontSize: '0.8em',
  textDecoration: 'underline',
  cursor: 'pointer', // show hand cursor when hover
};

function TaskButton(task) {
  const { handleDeleteTask, handleCompleteTask } = useContext(TasksContext);
  const navigate = useNavigate();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleStartTask = (event) => {
    event.preventDefault();
    navigate('/timer', { state: task });
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    // Delete task
    handleDeleteTask(task);
    setDeleteModalOpen(false);
  };

  const handleCompleteButton = () => {
    handleCompleteTask(task);
  };

  let isCompleted = false;
  if (!isCompleted) {
    return (
      <div>
        <button className="blueButton" onClick={handleStartTask}>
          Start This Task
        </button>
        <br />
        <br />
        <button className="orangeButton" onClick={handleCompleteButton}>
          Completed
        </button>
        <br />
        <button style={deleteTaskStyle} onClick={handleDeleteClick}>
          Delete Task
        </button>
        {/* Deleteボタンがクリックされたら表示 */}
        <Dialog open={isDeleteModalOpen} onClose={handleDeleteCancel}>
          <DialogTitle>Delete Task</DialogTitle>
          <DialogContent>
            <p>Are you sure you want to delete this task?</p>
          </DialogContent>
          <DialogActions>
            <button onClick={handleDeleteConfirm} className="lightBlueButton">
              Delete
            </button>
            <button onClick={handleDeleteCancel} className="grayButton">
              Cancel
            </button>
          </DialogActions>
        </Dialog>
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

function TaskCard({ task }) {
  const timeRemaining = task.budgetedTimeAmount - task.timeElapsed;
  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#E8FEFF' }}>
      <CardContent>
        <p>{task.category}</p>
        <p>{task.description}</p>
        <p>{timeRemaining} remaining</p>
        <TaskButton task={task} />
      </CardContent>
    </Card>
  );
}

export default TaskCard;
