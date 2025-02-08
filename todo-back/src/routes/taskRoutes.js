const express = require('express');
const {TaskController} = require('../controllers/TasksControllers');

const router = express.Router();

router.get('/tasks', TaskController.getAllTasks);
router.post('/tasks', TaskController.createTask);


module.exports = router;