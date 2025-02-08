const express = require('express');
const {TaskController} = require('../controllers/TasksControllers');

const router = express.Router();

router.get('/tasks', TaskController.getAllTasks);
router.get('/tasks/statistics', TaskController.getTasksStatistics);
router.post('/tasks', TaskController.createTask);
router.get('/tasks/:id', TaskController.getTaskById);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);
router.delete('/tasks', TaskController.deleteMultipleTasks);


module.exports = router;