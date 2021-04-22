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

    // async createFileAsset(file) {
    //     return await fileassetService.create(file);
    // }

    async updateFileAsset(file) {
        return await fileassetService.update(file);
    }

    async deleteFileAsset(fileId) {
        return await fileassetService.delete(fileId);
    }

    // async findByAssetAndSpriteId(spriteId, assetId)
    // {

    //     return await fileassetService.findBySpriteAndAssetId(spriteId, assetId);
        
    // }
}
module.exports = new FileAssetController();