import React from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const AuthForm = ({ type, handleSubmit, handleChange, formData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        {type === 'login' ? 'Login' : 'Register'}
      </Typography>
      <form onSubmit={handleSubmit}>
        {type === 'register' && (
          <>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </>
        )}
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {type === 'login' ? 'Login' : 'Register'}
        </Button>
      </form>
    </motion.div>
  );
};

export default AuthForm;
