const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
// const auth = require('../middleware/auth');

router.post('/create', async (req, res) => {
    const { name, description, priority, assignedTo, deadline } = req.body;
    try {
      const newTask = new Task({ name, description, priority, assignedTo, deadline });
      const savedTask = await newTask.save();
      res.json(savedTask);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  // Get all tasks
  router.get('/getAll', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  //Add a comment to a task
  router.post('/:taskId/comments', async (req, res) => {
    console.log("reached tasks.js")

    const { taskId } = req.params;
    const { comment, user } = req.body; // Assuming `userId` is the username or user ID

    try {
      console.log("reached tasks.js try block")
      const task = await Task.findById(taskId);
      console.log("taskid: " + taskId + " comment: " + comment + " user: " + user) 
      if (!task) {
        return res.status(404).send('Task not found');
      }
      task.comments.push({ comment, user });
      await task.save();
      res.json(task);
    } catch (err) {
      console.log("error in routes/task.js")
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;