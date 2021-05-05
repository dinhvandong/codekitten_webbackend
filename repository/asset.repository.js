const Asset  = require('../model/asset.model');
const logger = require('../logger/api.logger');
const { connect, disconnect } = require('../config/db.config');
var md5 = require('md5');

class AssetRepository {

    constructor() {
        connect();
    }
    async getAll() {
        const assets = await Asset.find({});
        var list = [];

        var i ;
        for(i = 0;i< assets.length;i++)
        {
            var a = assets[i];
            a.base64 = "";
            list.push(a);
        }

        return list;
    }

    async getByType(spriteType)
    {
        const assets = await Asset.find({type: spriteType});
        var list = [];

        var i ;
        for(i = 0;i< assets.length;i++)
        {
            var a = assets[i];
          //  a.base64 = "";
            list.push(a);
        }

        return list;   
     }

    async create(asset) {
        let data = {};
        try {
        //    let domain = (new URL(asset.base64));
        //    let path = domain.pathname
        //    console.log("PATH------><------PATH:", path);
        //    asset.base64 = path;
           data = await Asset.create(asset);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async update(asset) {
        let data = {};
        try {
            data = await Asset.updateOne(asset);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async delete(assetId) {
        let data = {};
        try {
            data = await Asset.deleteOne({_id : assetId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

    async findOne(assetId)
    {
        let data = {};
        try {
            data = await Asset.findOne({assetId: assetId});
            
        } catch (error) {
            
        }
        return data;
    }
}

module.exports = new AssetRepository();