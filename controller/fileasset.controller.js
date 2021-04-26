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

    async getFilename(url)
    {
       if (url)
       {
          var m = url.toString().match(/.*\/(.+?)\./);
          if (m && m.length > 1)
          {
             return await m[1];
          }
       }
       return await "";
    };
    async findByMd5Code(md5Code)
    {
        console.log("findbymd5_1", md5Code);
        return await fileassetService.findByMd5Code(md5Code);
    }
    async deleteFileAsset(fileId) {
        return await fileassetService.delete(fileId);
    }

    
}
module.exports = new FileAssetController();