const { connect, disconnect } = require('../config/db.config');
const Library  = require('../model/library.model');
const logger = require('../logger/api.logger');

class LibraryRepository {
    constructor() {
        connect();
    }
    async getAll() {
        const libs = await Library.find({});
        console.log('libs:::', libs);
        return libs;
    }
    async create(lib) {
        let data = {};
        try {
            data = await Library.create(lib);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }
    async update(lib) {
        let data = {};
        try {
            data = await Library.updateOne(lib);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }
    async delete(libId) {
        let data = {};
        try {
            data = await Library.deleteOne({_id : libId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
}
module.exports = new LibraryRepository();