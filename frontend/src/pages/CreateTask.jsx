import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, CssBaseline, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { createtask } from '../services/taskService';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#009688', // Teal
        },
        secondary: {
            main: '#ff5722', // Deep Orange
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0bec5', // Light Blue Grey
        },
    },
});

const CreateTask = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        priority: '',
        assignedTo: '',
        deadline: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await createtask(formData);

            console.log(res.data); // Handle success response
            // Optionally, redirect or show success message
        } catch (error) {
            console.error('Server error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container sx={{ marginTop: '2rem', maxWidth: '400px' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                gutterBottom
                                component={motion.h4}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                sx={{ color: 'primary.main', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}
                            >
                                Create Task
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{width:'10vw'}}>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    required
                                    sx={{ marginBottom: '1rem' }}
                                    variant="outlined"
                                />
                                <TextField
                                    label="Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    required
                                    sx={{ marginBottom: '1rem' }}
                                    variant="outlined"
                                />
                                <TextField
                                    label="Priority"
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    required
                                    sx={{ marginBottom: '1rem' }}
                                    variant="outlined"
                                />
                                <TextField
                                    label="Assigned To"
                                    name="assignedTo"
                                    value={formData.assignedTo}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    required
                                    sx={{ marginBottom: '2rem' }}
                                    variant="outlined"
                                />
                                <TextField
                                    label="Deadline"
                                    name="deadline"
                                    value={formData.deadline}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    required
                                    sx={{ marginBottom: '2rem' }}
                                    variant="outlined"
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    component={motion.button}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    sx={{ backgroundColor: 'primary.main', color: 'text.primary', textTransform: 'none', padding: '0.5rem 1rem' }}
                                >
                                    Create Task
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </ThemeProvider>
    );
};

export default CreateTask;
