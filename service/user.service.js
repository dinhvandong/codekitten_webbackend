const userRepository  = require('../repository/user.repository');

class UserService {
    
    constructor() {}

    async getAll() {
        return await userRepository.getAll();
    }

    async create(user) {
        return await userRepository.create(user);
    }

    async update(user) {
        return await userRepository.update(user);
    }

    async delete(userId) {
        return await userRepository.delete(userId);
    }

}

module.exports = new UserService();