// src/controllers/TaskController.js
const { TaskService } = require('../services/tasksService');

class TaskController {
    static async getAllTasks(req, res) {
        try {
            const tasks = await TaskService.getAllTasks();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


    static async createTask(req, res) {
        try {
            const { title, description } = req.body;
            const newTask = await TaskService.createTask({ title, description });
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getTaskById(req, res) {
        try {
            const taskId = req.params.id;
            const task = await TaskService.getTaskById(taskId);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


}

module.exports = { TaskController };