const libraryService  = require('../service/library.service');
const logger = require('../logger/api.logger');

class LibraryController {

    async getAll() {
        return await libraryService.getAll();
    }

    async createLibrary(lib) {
        return await libraryService.create(lib);
    }

    async updateLibrary(lib) {
        return await libraryService.update(lib);
    }

    async deleteLibrary(libId) {
        return await libraryService.delete(libId);
    }
    
}
module.exports = new LibraryController();