import React, { useState } from 'react';
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

function TaskButton() {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    // Delete task
    setDeleteModalOpen(false);
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
  const { category, description, timeElapsed, budgetedTimeAmount } = task;
  const timeRemaining = budgetedTimeAmount - timeElapsed;
  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#E8FEFF' }}>
      <CardContent>
        <p>{category}</p>
        <p>{description}</p>
        <p>{timeRemaining} remaining</p>
        <TaskButton />
      </CardContent>
    </Card>
  );
}

export default TaskCard;
