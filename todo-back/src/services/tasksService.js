// src/services/TaskService.js
const { TaskRepository } = require('../repositories/taskRepository');

class TaskService {
    static async getAllTasks() {
        return await TaskRepository.findAll();
    }

    static async createTask(taskData) {
        return await TaskRepository.create(taskData);
    }


}

module.exports = { TaskService };