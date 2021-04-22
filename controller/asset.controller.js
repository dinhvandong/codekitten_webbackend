const assetService  = require('../service/asset.service');
const logger = require('../logger/api.logger');

class AssetController {

    async getAll() {
        return await assetService.getAll();
    }

    async getByType(type)
    {
        return await assetService.getByType(type);
    }

    async createAsset(asset) {
        return await assetService.create(asset);
    }

    async updateAsset(asset) {
        return await assetService.update(asset);
    }

    async deleteAsset(assetId) {
        return await assetService.delete(assetId);
    }

    async findAsset(assetId)
    {
        return await assetService.findOne(assetId);
    }
    
}
module.exports = new AssetController();