const FileAsset  = require('../model/fileasset.model');
const logger = require('../logger/api.logger');
const { connect, disconnect } = require('../config/db.config');
var md5 = require('md5');

var ip = require("ip");
//const { default: ConfigServer } = require('../../config');
const host = ip.address();
//const baseUrl =  host + ":8080/api/files/find/";

class FileAssetRepository {
    
    constructor() {
        connect();
    }

    async getFileAsset() {
        const tasks = await FileAsset.find({});
        console.log('tasks:::', tasks);
        return tasks;
    }

    async getByType(filetype) {
        const files = await FileAsset.find({filetype:filetype});
        console.log('tasks:::', files);
        return files;
    }

    async createFileAsset(file) {
        let data = {};
        try {
            // let domain = (new URL(file.url));
            // let path = domain.pathname
            // console.log("PATH------><------PATH:", path);
            // file.url = path;
            data = await FileAsset.create(file);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateFileAsset(file) {
        let data = {};
        try {
            data = await FileAsset.updateOne(file);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteFileAsset(fileId) {
        let data = {};
        try {
            data = await FileAsset.deleteOne({_id : fileId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
}
module.exports = new FileAssetRepository();