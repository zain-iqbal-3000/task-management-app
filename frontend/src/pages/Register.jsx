import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#f48fb1',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#a0a0a0',
        },
    },
});

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [position, setPosition] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({ name, email, password, role, position });
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component={motion.div} 
                maxWidth="sm" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
            >
                <Paper elevation={3} sx={{ padding: '2rem', backgroundColor: 'background.paper' }}>
                    <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'primary.main', textAlign: 'center', marginBottom: '1rem' }}>
                        Register
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ marginBottom: '1rem' }}>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                required
                                sx={{ marginBottom: '1rem' }}
                            />
                            <TextField
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                required
                                sx={{ marginBottom: '1rem' }}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                                required
                                sx={{ marginBottom: '1rem' }}
                            />
                            <TextField
                                label="Position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                fullWidth
                                required
                                sx={{ marginBottom: '1rem' }}
                            />
                            <TextField
                                label="Role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                fullWidth
                                required
                                sx={{ marginBottom: '2rem' }}
                            />
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            component={motion.button}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            sx={{ textTransform: 'none', padding: '0.75rem 1.5rem', fontSize: '1rem' }}
                        >
                            Register
                        </Button>
                    </form>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default Register;
