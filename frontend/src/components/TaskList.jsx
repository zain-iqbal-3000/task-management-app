import React from 'react';
import Task from './Task';
import { List } from '@mui/material';

const TaskList = ({ tasks }) => {
    return (
        <List>
            {tasks.map(task => (
                <Task key={task._id} task={task} />
            ))}
        </List>
    );
};

export default TaskList;
