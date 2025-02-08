const { Task } = require('../entities/Tasks');
const {AppDataSource} = require('../data-source')
class TaskRepository {
    // Récupérer toutes les tâches
    static async findAll() {
        return await AppDataSource.getRepository(Task).find();
    }

    // Créer une nouvelle tâche
    static async create(taskData) {
        const taskRepository = AppDataSource.getRepository(Task);
        const newTask = taskRepository.create(taskData); // Crée une nouvelle instance de Task
        return await taskRepository.save(newTask); // Sauvegarde la tâche dans la base de données
    }

}

module.exports = {TaskRepository}