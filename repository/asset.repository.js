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
        // var temp = asset;
        // var base64 = "";
        // const imageToBase64 = require('image-to-base64');
        // try {
        //  await   imageToBase64("./backdrop/bg_x.jpg") // Path to the image
        // .then(
        //     (response) => {
        //         base64 = response;

                
        //        // console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
        //     }
        // )
        // .catch(
        //     (error) => {
        //         console.log(error); // Logs an error if there was one
        //     }
        // )
        // } catch (error) {      
        // }
        // temp.assetId = md5(asset.name);
        // temp.base64 = asset.base64;
        // temp.md5ext = temp.assetId + "."+ temp.dataFormat;
        try {
           // data = await Asset.create(temp);
           let domain = (new URL(asset.base64));
           let path = domain.pathname
           console.log("PATH------><------PATH:", path);
           asset.base64 = path;
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
            data = await Asset.deleteOne({assetId : assetId});
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