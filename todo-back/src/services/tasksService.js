// src/services/TaskService.js
const { TaskRepository } = require('../repositories/taskRepository');

class TaskService {
    static async getAllTasks() {
        return await TaskRepository.findAll();
    }

    static async getTaskById(taskId) {
        return await TaskRepository.findById(taskId);
    }

    static async createTask(taskData) {
        return await TaskRepository.create(taskData);
    }

    static async updateTask(taskId, taskData) {
        return await TaskRepository.update(taskId, taskData);
    }

    static async deleteTask(taskId) {
        return await TaskRepository.delete(taskId);
    }

    static async deleteMultipleTasks(taskIds) {
        return await TaskRepository.deleteMultiple(taskIds);
    }

    static async getTasksStatistics() {
        return await TaskRepository.getStatistics();
    }



}

module.exports = { TaskService };