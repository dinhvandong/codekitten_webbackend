const projectService  = require('../service/project.service');


class ProjectController {

    async getAll() {
        return await projectService.getAll();
    }

    async getAllByUser(userId) {
        return await projectService.getAllByUser(userId);
    }

    async createProject(project) {
        return await projectService.create(project);
    }

    async updateProject(project) {
        return await projectService.update(project);
    }

    async deleteProject(projectId) {
        return await projectService.delete(projectId);
    }
    
}
module.exports =  new ProjectController();
