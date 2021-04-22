const assetRepository  = require('../repository/asset.repository');

class AssetService {

    constructor() {}

    async getAll() {
        return await assetRepository.getAll();
    }

    async getByType(type)
    {
        return await assetRepository.getByType(type);
    }
    async create(asset) {
        return await assetRepository.create(asset);
    }

    async update(asset) {
        return await assetRepository.update(asset);
    }

    async delete(assetId) {
        return await assetRepository.delete(assetId);
    }

    async findOne(assetId) {
        return await assetRepository.findOne(assetId);
    }

}

module.exports = new AssetService();