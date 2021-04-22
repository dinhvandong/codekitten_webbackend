const projectRepository  = require('../repository/project.repository');
class ProjectService {
    constructor() {}
    
    async getAll() {
        return await projectRepository.getAll();
    }
    async getAllByUser(userId) {
        return await projectRepository.getAllByUser(userId);
    }
    async create(project) {
        return await projectRepository.create(project);
    }
    async update(project) {
        return await projectRepository.update(project);
    }
    async delete(projectId) {
        return await projectRepository.delete(projectId);
    }
}

module.exports = new ProjectService();