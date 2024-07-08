const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    assignedTo: { type: String, required: true},
    deadline: { type: String, required: true },
    comments: [{ 
        user: { type: String, required: true  }, 
        comment: { type: String, required: true } 
    }]
});

module.exports = mongoose.model('Task', taskSchema);
