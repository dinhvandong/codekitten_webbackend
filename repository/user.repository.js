const { connect, disconnect } = require('../config/ua');
const User  = require('../model/user.model');
const logger = require('../logger/api.logger');

class UserRepository {
    constructor() {
        connect();
    }
    async getAll() {
        const users = await User.find({});
        console.log('libs:::', users);
        return users;
    }
    async create(user) {
        let data = {};
        try {
            data = await User.create(user);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }
    async update(user) {
        let data = {};
        try {
            data = await User.updateOne(user);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }
    async delete(userId) {
        let data = {};
        try {
            data = await User.deleteOne({_id : userId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
}
module.exports = new UserRepository();