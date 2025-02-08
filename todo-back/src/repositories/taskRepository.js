const { Task } = require('../entities/Tasks');
const { AppDataSource } = require('../data-source')
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

}

module.exports = { TaskRepository }