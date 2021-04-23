const fileassetService  = require('../service/fileasset.service');
const logger = require('../logger/api.logger');
class FileAssetController {
    async getAll() {
        return await fileassetService.getAll();
    }
    async getAllByType(filetype)
    {
        return await fileassetService.getAllByType(filetype);
    }
    async updateFileAsset(file) {
        return await fileassetService.update(file);
    }
    async deleteFileAsset(fileId) {
        return await fileassetService.delete(fileId);
    }
}
module.exports = new FileAssetController();