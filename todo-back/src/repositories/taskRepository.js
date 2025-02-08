const { Task } = require('../entities/Tasks');
const { AppDataSource } = require('../data-source');
const { In } = require('typeorm');
class TaskRepository {
    // Récupérer toutes les tâches
    static async findAll() {
        return await AppDataSource.getRepository(Task).find();
    }

    // Créer une nouvelle tâche
    static async create(taskData) {
        const taskRepository = AppDataSource.getRepository(Task);
        const newTask = taskRepository.create(taskData);
        return await taskRepository.save(newTask);
    }

    static async findById(taskId) {
        return await AppDataSource.getRepository(Task).findOneBy({ id: taskId });
    }

    static async update(taskId, taskData) {
        const taskRepository = AppDataSource.getRepository(Task);
        const task = await taskRepository.findOneBy({ id: taskId });
        if (!task) return null;
        taskRepository.merge(task, taskData);
        return await taskRepository.save(task);
    }

    static async delete(taskId) {
        const taskRepository = AppDataSource.getRepository(Task);
        const task = await taskRepository.findOneBy({ id: taskId });
        if (!task) return null;
        return await taskRepository.remove(task);
    }

    static async deleteMultiple(taskIds) {
        const taskRepository = AppDataSource.getRepository(Task);
        const tasks = await taskRepository.findBy({ id: In(taskIds) });
        if (!tasks.length) return null;
        return await taskRepository.remove(tasks);
    }

}

module.exports = { TaskRepository }