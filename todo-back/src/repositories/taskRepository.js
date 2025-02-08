const { Task } = require('../entities/Tasks');
const { AppDataSource } = require('../data-source');
const { In } = require('typeorm');
class TaskRepository {
    // Récupérer toutes les tâches
    static async findAll() {
        return await AppDataSource.getRepository(Task).find({ where: { isDeleted: false } });
    }

    // Créer une nouvelle tâche
    static async create(taskData) {
        const taskRepository = AppDataSource.getRepository(Task);
        const newTask = taskRepository.create(taskData);
        return await taskRepository.save(newTask);
    }

    static async findById(taskId) {
        return await AppDataSource.getRepository(Task).findOneBy({ id: taskId, isDeleted: false });
    }

    static async update(taskId, taskData) {
        const taskRepository = AppDataSource.getRepository(Task);
        const task = await taskRepository.findOneBy({ id: taskId });
        if (!task || task.isDeleted) return null;
        taskRepository.merge(task, {...taskData, isUpdated: true });
        return await taskRepository.save(task);
    }

    static async delete(taskId) {
        const taskRepository = AppDataSource.getRepository(Task);
        const task = await taskRepository.findOneBy({ id: taskId });
        
        if (!task || task.isDeleted) return null;
        taskRepository.merge(task, { isDeleted: true });
        return await taskRepository.save(task);
    }

    static async deleteMultiple(taskIds) {
        const taskRepository = AppDataSource.getRepository(Task);
        const tasks = await taskRepository.findBy({ id: In(taskIds) });
        if (!tasks.length) return null;
        tasks.forEach(task => taskRepository.merge(task, { isDeleted: true }));
        return await taskRepository.save(tasks);
    }

    static async getStatistics() {
        const taskRepository = AppDataSource.getRepository(Task);
        const totalTasks = await taskRepository.find({ where: { isDeleted: false } });
        const updatedTasks = await taskRepository.find({ where: { isUpdated: true } });
        const deletedTasks = await taskRepository.find({ where: { isDeleted: true } });
        return { totalTasks: totalTasks.length, updatedTasks: updatedTasks.length, deletedTasks: deletedTasks.length };
    }

}

module.exports = { TaskRepository }