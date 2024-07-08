import React from 'react';
import CommentSection from './commentSection';
import { ListItem, ListItemText, Typography } from '@mui/material'; 


const Task = ({ task }) => {
    return (
        <ListItem>
            <ListItemText
                primary={task.name}
                secondary={
                    <>
                        <Typography component="span" variant="body2" color="textPrimary">
                            {task.description}
                        </Typography>
                        <Typography component="span" variant="body2">
                            {`Priority: ${task.priority}`}
                        </Typography>
                        <Typography component="span" variant="body2">
                            {`Assigned to: ${task.assignedTo?.name || 'Unassigned'}`}
                        </Typography>
                        <Typography component="span" variant="body2">
                            {`Deadline: ${new Date(task.deadline).toLocaleDateString()}`}
                        </Typography>
                    </>
                }
            />
            <CommentSection taskId={task._id} comments={task.comments} />
        </ListItem>
    );
};

export default Task;
