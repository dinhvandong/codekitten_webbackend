const { connect, disconnect } = require('../config/db.config');
const Sprite  = require('../model/sprite.model');
const Asset  = require('../model/asset.model');

const assetRepository  = require('../repository/asset.repository');

const logger = require('../logger/api.logger');
var md5 = require('md5');
class SpriteRepository { 
    constructor() {
        connect();
    }
    async getAll() {
        const sprites = await Sprite.find({});
        var i;
        var list = [];
        for(i = 0;i< sprites.length;i++)
        {
            var s = sprites[i];
            var listCostumes = s.costumes;
            var listSounds = s.sounds;
            var j ;

            for(j=0;j< listSounds.length;j++)
            {

               // s.sounds[j] = [];
            }
            s.sounds = [];

            list.push(s);
        }
        return list;
    }
    async  convertsvgbase64(path) {
        const svg64 = require('svg64');
        // Import `readFileSync` from the file system module
        const { readFileSync } = require('fs');
        // Read your SVG file's contents
        const svg = readFileSync(path, 'utf-8');

        // This is your SVG in base64 representation
        const base64fromSVG = svg64(svg);

        return base64fromSVG;
        
    }
    async create(sprite) 
    {

        console.log("SpriteXX:", JSON.stringify(sprite));
        var temp = sprite;

        var x , y;

        for(x = 0;x< sprite.costumes.length;x++)
        {

            // let tempId = md5(sprite.name + x );
            // sprite.costumes[x].assetId = tempId;
            // sprite.costumes[x].name = sprite.name + x;
            // sprite.costumes[x].md5ext = tempId + "."+ sprite.costumes[x].dataFormat;

        }

        sprite.sounds = [];
        for(y = 0;y< sprite.sounds.length;y++)
        {
            // sprite.sounds[y].assetId = "83a9787d4cb6f3b7632b4ddfebf74367";
            // sprite.sounds[y].name = "pop";
            // sprite.sounds[y].dataFormat = "wav";
            // sprite.sounds[y].format = "";
            // sprite.sounds[y].rate = 44100;
            // sprite.sounds[y].sampleCount = 1032;
            // sprite.sounds[y].md5ext ="83a9787d4cb6f3b7632b4ddfebf74367.wav";
           // sprite.sounds[y].base64 ="";

        }

        // let base64 = "";
        // const imageToBase64 = require('image-to-base64');
        // try {
        //     imageToBase64("./svgtopng/nv_26.png") // Path to the image
        // .then(
        //     (response) => {
        //         base64 = response;
        //         //console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
        //     }
        // )
        // .catch(
        //     (error) => {
        //         console.log(error); // Logs an error if there was one
        //     }
        // )
        // } catch (error) {
            
        // } 
        let data = {};
        try 
        {
            data = await Sprite.create(sprite);
            let costumes = data.costumes;
            var listCostumes = [];
            var i;
            for(i = 0;i< costumes.length;i++)
            {

                console.log("costume:", JSON.stringify(costumes[i]));
                var asset={}; 
                asset.tags = sprite.tags;
                asset.assetId = (costumes[i].assetId);
                asset.name = sprite.name;
                // + "-"+(i+1);
                asset.bitmapResolution = costumes[i].bitmapResolution;
                asset.md5ext = (costumes[i].md5ext);
                //(costumes[i].assetId) + "." + costumes[i].dataFormat;
                asset.dataFormat = costumes[i].dataFormat;
                asset.rotationCenterX = costumes[i].rotationCenterX;
                asset.rotationCenterY = costumes[i].rotationCenterY;
                asset.base64 = costumes[i].base64;
                asset.type = "sprite";
                await  Asset.create(asset);
            }

        } catch(err) {
            logger.error('Errorxxxxx::' + err);
        }  
        return data;
    }
    async update(sprite) 
    {
        let data = {};
        try {
            data = await Sprite.updateOne(sprite);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }
    async findById(spriteId)
    {
        let data = {};
        try {
            data = await Sprite.findById(spriteId);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }
    async findAssetById(spriteId, assetId)
    {
      //  console.log("Test", spriteId);
        let sprite = await Sprite.findById(spriteId);

        let sprites = await Sprite.find({});
        var data = {}; 
        var i ,j;
        for (i=0;i< sprites.length;i++)
        {
            for( j = 0;j< sprites[i].costumes.length;j++ )
            {
                if(sprites[i].costumes[j].assetId== assetId)
                {
                    data = sprites[i].costumes[j];
                    return data;
                }
            }
        }
        // var arrayCostumes = [];
        // var data = {}; 
        // try {
        //     arrayCostumes = sprite.costumes;
        //     var i ;
        //     var j;


        //     for (i=0;i< arrayCostumes.length;i++)
        //     {
        //         if(arrayCostumes[i].assetId== assetId)
        //         {
        //             data = arrayCostumes[i];
        //             return data;
        //         }
        //     }            
        // } catch(err) {
        //     logger.error('Error::' + err);
        // }
        return data;
    }
    async delete(spriteId) {
        let data = {};
        try {
            data = await Sprite.deleteOne({_id : spriteId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
}
module.exports = new SpriteRepository();