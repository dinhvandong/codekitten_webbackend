const { connect, disconnect } = require('../config/db.config');
const Project  = require('../model/project.model');
const logger = require('../logger/api.logger');
var ip = require("ip");
const { ConfigServer } = require('../../config');
console.dir ( ip.address() );
const host = ip.address();
class ProjectRepository {
    
    constructor() 
    {
        connect();
    }

    async getAll() 
    {
        const projects = await Project.find({});
        return projects;
    }

    async getAllByUser(userId)
    {
        const projects = await Project.find({userId: userId});
        return projects;
    }

    async create(project) 
    {
        let data = {};
        try 
        {
            data = await Project.create(project);
        } catch(err) 
        {
            logger.error('Error::' + err);
        }
        return data;
    }

    async update(project) 
    {
        let data = {};
        try 
        {
            data = await Project.updateOne(project);
        } catch(err) 
        {
            logger.error('Error::' + err);
        }
        return data;
    }

    async delete(projectId) 
    {
        let data = {};
        try 
        {
            data = await Project.deleteOne({_id : projectId});
        } catch(err) 
        {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}
module.exports = new ProjectRepository();