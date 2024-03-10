import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';


const DeleteTask = ({ isOpen, onClose, onDelete }) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Delete Task</DialogTitle>
            <DialogContent>
                <p>Are you sure you want to delete this task?</p>
            </DialogContent>
            <DialogActions>
                <button onClick={onDelete} className='lightBlueButton'>
                    Delete
                </button>
                <button onClick={onClose} className="grayButton">
                    Cancel
                </button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteTask;