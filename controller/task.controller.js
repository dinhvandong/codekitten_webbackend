const taskService  = require('../service/task.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getTasks() {
       // logger.info('Controller: getTasks')
        console.log('Controller: getTasks');
        return await taskService.getTasks();
    }

    async createTask(task) {
        console.log("Controller: createTask:"+ task.title);
        return await taskService.createTask(task);
    }

    async updateTask(task) {
        logger.info('Controller: updateTask', task);
        return await taskService.updateTask(task);
    }

    async deleteTask(taskId) {
        logger.info('Controller: deleteTask', taskId);
        return await taskService.deleteTask(taskId);
    }
}
module.exports = new TodoController();