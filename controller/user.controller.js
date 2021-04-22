const userService  = require('../service/user.service');
const logger = require('../logger/api.logger');

class UserController {

    async getAll() {
        return await userService.getAll();
    }

    async createLibrary(user) {
        return await userService.create(user);
    }

    async updateUser(user) {
        return await userService.update(user);
    }

    async deleteUser(libId) {
        return await userService.delete(libId);
    }
    
}
module.exports = new UserController();