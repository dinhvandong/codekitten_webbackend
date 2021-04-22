const spriteRepository = require("../repository/sprite.repository");

class SpriteService 
{
    constructor() {}
    async getAll() 
    {
        return await spriteRepository.getAll();
    }

    async create(sprite)
    {
        return await spriteRepository.create(sprite);
    }

    async update(sprite)
    {
        return await spriteRepository.update(sprite);
    }

    async delete(spriteId)
    {
        return await spriteRepository.delete(spriteId);
    }

    async findById(spriteId) 
    {
        return await spriteRepository.findById(spriteId);
    }

    async findBySpriteAndAssetId(spriteId, assetId) 
    {
        return await spriteRepository.findAssetById(spriteId, assetId);
    }
}

module.exports = new SpriteService();
