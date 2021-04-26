const fileassetRepository = require("../repository/fileasset.repository");

class FileAssetService 
{
    constructor() 
    {   
    }
    async getAll() 
    {
        return await fileassetRepository.getFileAsset();
    }
    async getAllByType(type)
    {
        return await fileassetRepository.getByType(type);
    }
    async create(file)
    {
        return await fileassetRepository.create(file);
    }

    async findByMd5Code(md5Code)
    {
        console.log("findbymd5_2", md5Code);
        return await fileassetRepository.findByMd5Code(md5Code);
    }
    async update(file)
    {
        return await fileassetRepository.update(file);
    }
    async delete(fileId)
    {
        return await fileassetRepository.deleteFileAsset(fileId);
    }
    async findById(fileId) 
    {
        return await fileassetRepository.findById(fileId);
    }
}

module.exports = new FileAssetService();
