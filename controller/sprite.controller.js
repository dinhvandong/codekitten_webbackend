const spriteService  = require('../service/sprite.service');
const logger = require('../logger/api.logger');

class SpriteController {

    async getAll() {
        return await spriteService.getAll();
    }

    async createSprite(sprite) {
        return await spriteService.create(sprite);
    }

    async updateSprite(sprite) {
        return await spriteService.update(sprite);
    }

    async deleteSprite(spriteId) {
        return await spriteService.delete(spriteId);
    }

    async findByAssetAndSpriteId(spriteId, assetId)
    {

        return await spriteService.findBySpriteAndAssetId(spriteId, assetId);
        
    }
}
module.exports = new SpriteController();