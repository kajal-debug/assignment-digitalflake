const express = require('express');
const router = express.Router();
const {body , validationResult} = require('express-validator');
const mongoose = require('mongoose');
const Task = require('../Schema/Task');
const City = require('../Schema/City');
 const authenticate = require('../middlewares/authenticate');

// Create a new task 
router.post('/tasks', [
    body('StateName').notEmpty().withMessage('StateName is Required'),
    body('StateCode').notEmpty().withMessage('StateCode is Required'),
    body('status').notEmpty().withMessage('status is Required'),
] ,async (request , response) => {
    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(401).json({errors : errors.array()})
    }
    try {
        let {StateName,status,StateCode} = request.body;
        console.log(StateName,status,StateCode,"StateName,status,StateCode")
        // check if the user is exists
        let task = await Task.findOne({StateName : StateName});
        if(task){
            return response.status(401).json({errors : [{msg : 'Task is Already Exists'}]});
        }

        task = new Task({StateName,status,StateCode});
        task = await task.save();
        response.status(200).json({msg : 'Task Created  Successfully',task:task});
    }
    catch (error) {
        console.error(error);
        response.status(500).json({errors : [{msg : error.message}]});
    }
});

// Get all task using authenticate 

router.get('/tasksDetails', async (request, response) => {
    try {
        // Ensure the user is authenticated before accessing tasks
        // Your authentication logic here...

        // Fetch tasks
        const tasks = await Task.find();

        if (tasks.length === 0) {
            return response.status(404).json({ msg: 'No tasks found' });
        }

        // Return tasks
        response.status(200).json({ msg: 'Tasks', tasks: tasks });
    } catch (error) {
        console.error(error);
        response.status(500).json({ errors: [{ msg: 'Internal server error' }] });
    }
});

router.put('/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id.split(':').join('');
        const task = await Task.findById(id);
          console.log("task",task)
        if (task) {
            // If task is found, update its properties based on request body
            task.StateName = req.body.StateName || task.StateName;
            task.StateCode = req.body.StateCode || task.StateCode;
            task.status = req.body.status || task.status;

            // Save the updated task
            const updatedTask = await task.save();

            res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.post('/city', [
    body('CityName').notEmpty().withMessage('CityName is Required'),
    body('CityCode').notEmpty().withMessage('CityCode is Required'),
    body('status').notEmpty().withMessage('status is Required'),
    body('state').notEmpty().withMessage('state is Required')
], async (request, response) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(401).json({ errors: errors.array() });
    }

    try {
        const { CityName, CityCode, status, state } = request.body;

        // Check if the state exists in StateTable
        let existingState = await Task.find({StateName: state});
        if (!existingState) {
            return response.status(401).json({ errors: [{ msg: 'State does not exist' }] });
        }

        // Check if the city already exists
        let existingCity = await City.findOne({ CityName: CityName });
        if (existingCity) {
            return response.status(401).json({ errors: [{ msg: 'City already exists' }] });
        }

        let city = new City({ CityName, CityCode, status, state });
        city = await city.save();
        response.status(200).json({ msg: 'City created successfully', city: city });
    } catch (error) {
        console.error(error);
        response.status(500).json({ errors: [{ msg: error.message }] });
    }
});


router.get('/cityDetails', async (request, response) => {
    try {
        // Ensure the user is authenticated before accessing tasks
        // Your authentication logic here...

        // Fetch tasks
        const tasks = await City.find();

        if (tasks.length === 0) {
            return response.status(404).json({ msg: 'No City  found' });
        }

        // Return tasks
        response.status(200).json({ msg: 'City', tasks: tasks });
    } catch (error) {
        console.error(error);
        response.status(500).json({ errors: [{ msg: 'Internal server error' }] });
    }
});




module.exports = router;