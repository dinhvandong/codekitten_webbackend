const libRepository  = require('../repository/library.repository');

class LibraryService {

    constructor() {}

    async getAll() {
        return await libRepository.getAll();
    }

    async create(lib) {
        return await libRepository.create(lib);
    }

    async update(lib) {
        return await libRepository.update(lib);
    }

    async delete(libId) {
        return await libRepository.delete(libId);
    }

}

module.exports = new LibraryService();