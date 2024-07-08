import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, TextField, Button, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { getTasks, addComment } from '../services/taskService';
import { useLocation, Link } from 'react-router-dom';

const TaskListPage = () => {
    const location = useLocation();
    const user = location.state.response;
    const [tasks, setTasks] = useState([]);
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState({ text: '' });

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await getTasks();
                setTasks(res);
                const initialComments = res.reduce((acc, task) => ({ ...acc, [task._id]: [] }), {});
                setComments(initialComments);
                console.log("user role: " + user.role);
            } catch (err) {
                console.error(err);
            }
        };
        fetchTasks();
    }, []);

    const handleAddComment = async (taskId, comment, userEmail) => {
        try {
            await addComment(taskId, comment, userEmail);
            setComments((prevComments) => ({
                ...prevComments,
                [taskId]: [...prevComments[taskId], { user: userEmail, text: comment }],
            }));
            setNewComment({ text: '' });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container sx={{ marginTop: '2rem', backgroundColor: '#28262b', padding: '2rem', borderRadius: '8px', width: '100vw' }}>
            <Grid container justifyContent="center" alignItems="center">
                <Typography
                    variant="h3"
                    gutterBottom
                    component={motion.h4}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    sx={{ color: '#F72585', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', marginRight: '10vw'}}
                >
                    Task List
                </Typography>
                {user.role === 'manager || admin' && (
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/CreateTask"
                    sx={{ backgroundColor: '#03DAC6', color: '#121212', textTransform: 'none', marginBottom: '1rem' , marginLeft:'0'}}
                >
                    Create Task
                </Button>
                )}
            </Grid>
            <List
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, staggerChildren: 0.2 }}
                sx={{ padding: '10px', margin: '0' }}
            >
                {tasks.map((task) => (
                    <ListItem
                        key={task._id}
                        component={motion.div}
                        layout
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        sx={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '60vw', marginLeft: '0', padding: '5px' }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                width: '100%',
                                maxWidth: '600px',
                                backgroundColor: '#282F44',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                },
                            }}
                        >
                            <ListItemText
                                primary={task.name}
                                primaryTypographyProps={{ style: { color: '#BB86FC', fontWeight: 'bold' } }}
                                secondary={`Assigned to: ${task.assignedTo}`}
                                secondaryTypographyProps={{ style: { color: '#03DAC6' } }}
                                sx={{ marginBottom: '1rem' }}
                            />
                            {task.comments.map((com, index) => (
                                <Typography key={index} variant="body2" sx={{ marginTop: '0.5rem', color: '#CF6679' }}>
                                    <strong style={{ color: '#FFB74D' }}>{com.user}:</strong> <span>{com.comment}</span>
                                </Typography>
                            ))}
                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                <TextField
                                    size="small"
                                    label="Add Comment"
                                    variant="outlined"
                                    sx={{
                                        marginRight: '1rem',
                                        marginTop: '1rem',
                                        flexGrow: 1,
                                        input: { color: '#FFECD1' },
                                        label: { color: '#FFECD1' },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#FFECD1' },
                                            '&:hover fieldset': { borderColor: '#FFECD1' },
                                            '&.Mui-focused fieldset': { borderColor: '#FFECD1' },
                                        },
                                    }}
                                    onChange={(e) => setNewComment({ text: e.target.value })}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleAddComment(task._id, newComment.text, user.email)}
                                    component={motion.button}
                                    whileHover={{ scale: 1.1, backgroundColor: '#FFB74D' }}
                                    whileTap={{ scale: 0.9 }}
                                    sx={{ backgroundColor: '#FFECD1', color: '#3D405D', textTransform: 'none', padding: '0.5rem 1rem', marginTop: '1rem' }}
                                >
                                    Add Comment
                                </Button>
                            </Box>
                            {comments[task._id] && comments[task._id].map((comment, index) => (
                                <Typography key={index} variant="body2" sx={{ marginTop: '0.5rem', color: '#FFECD1' }}>
                                    <strong style={{ color: '#FFB74D' }}>{comment.user}:</strong> <span>{comment.text}</span>
                                </Typography>
                            ))}
                        </Paper>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default TaskListPage;
