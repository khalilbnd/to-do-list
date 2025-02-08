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

    static async updateTask(req, res) {
        try {
            const taskId = req.params.id;
            const { title, description, isCompleted } = req.body;
            const updatedTask = await TaskService.updateTask(taskId, { title, description, isCompleted });
            if (!updatedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteTask(req, res) {
        try {
            const taskId = req.params.id;
            const deletedTask = await TaskService.deleteTask(taskId);
            if (!deletedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteMultipleTasks(req, res) {
        try {
            const { ids } = req.body;
            const deletedTasks = await TaskService.deleteMultipleTasks(ids);
            res.status(204).json(deletedTasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getTasksStatistics(req, res) {
        try {
            const statistics = await TaskService.getTasksStatistics();
            res.status(200).json(statistics);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


}

module.exports = { TaskController };