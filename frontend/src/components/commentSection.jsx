import React, { useState } from 'react';
import { addComment } from '../api';
import { List, ListItem, TextField, Button } from '@mui/material';
const CommentSection = ({ taskId, comments }) => {
    const [comment, setComment] = useState('');
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addComment(taskId, comment, token);
            setComment('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <List>
                {comments.map((c, index) => (
                    <ListItem key={index}>
                        {c.comment}
                    </ListItem>
                ))}
            </List>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    fullWidth
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Comment
                </Button>
            </form>
        </>
    );
};

export default CommentSection;
