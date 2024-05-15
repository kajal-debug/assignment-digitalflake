const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    StateName: { type: String, required: true },
    StateCode: { type:Number , required: true },
    status: { type: String, required: true }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
