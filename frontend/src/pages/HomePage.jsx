import React from 'react';
import { Container, Typography, Button, Box, CssBaseline, createTheme, ThemeProvider, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const HomePage = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
                // width="100vw"
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'left',
                    justifyContent: 'center',
                    padding:'0',
                    margin:'0',
                    gap: '5vw',
                    minWidth: '100vw',
                    
                }}
            >
                <Grid container sx={{width:'100vw' }}>
                    <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' }, position: 'relative' , height:'100vh', width:'50vw'}}>
                        <Box
                            component="img"
                            src="../public/office.jpg"
                            alt="Office"
                            sx={{
                                width: '40vw',
                                height: '100vh',
                                objectFit: 'cover',
                                
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '2rem',
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%' }}
                        >
                            <Typography
                                variant="h2"
                                component="h1"
                                gutterBottom
                                sx={{ color: 'primary.main', fontWeight: 'bold', marginBottom: '2rem' }}
                            >
                                Welcome Back to the Office
                            </Typography>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component={Link}
                                    to="/register"
                                    
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    sx={{
                                        textTransform: 'none',
                                        padding: '1rem 2rem',
                                        fontSize: '1.2rem',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    Register
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    component={Link}
                                    to="/login"
                                    
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    sx={{
                                        textTransform: 'none',
                                        padding: '1rem 2rem',
                                        fontSize: '1.2rem',
                                    }}
                                >
                                    Login
                                </Button>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default HomePage;
