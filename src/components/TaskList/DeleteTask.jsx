import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const DeleteTask = ({ isOpen, onClose, onDelete }) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Delete Task</DialogTitle>
            <DialogContent>
                <p>Are you sure you want to delete this task?</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onDelete} color="error">
                    Delete
                </Button>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteTask;