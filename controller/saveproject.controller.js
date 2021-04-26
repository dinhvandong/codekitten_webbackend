const projectService  = require('../service/project.service');
const logger = require('../logger/api.logger');
const uploadFile = require("../middleware/upload");
const Project  = require('../model/project.model');
var ip = require("ip");
const { ConfigServer } = require('../config_server');
const host = ip.address();
//const baseUrl =  ConfigServer.host+ "/api/files/";
//host + 


console.dir ( ip.address() );
const saveProject = async (req, res) => {

const { connect, disconnect } = require('../config/db.config');
    connect();
    try 
    {

      const baseUrl =  ConfigServer.host  + "/api/files/find";

      console.log("AAAAA00");
      await uploadFile(req, res);

      console.log("AAAAA1")
      if (req.file == undefined) 
      {
        return res.status(400).send({ message: "Please upload a file!" });
      }
      const projectId = "32132132198098kehqkskdfslansbewqk3321";
      const projectName = req.body.name;
      const projectDesc = req.body.projectDesc;
      const linkdownload = baseUrl + req.file.originalname;
      const createdDate = new Date();
      const disable = false;
      const icon = "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/DK_scratch_02_w3npmw.jpg";
      const userId = "abcerq302913812380912";
      console.log("AAAAA2")

      var project  = new Project();
      project.name = projectName;
      project.projectId = projectId;
      project.desc = projectDesc;
      project.linkdownload = linkdownload;
      project.createdTime = createdDate;
      project.disable = false;
      project.icon = icon;
      project.userId = userId;
      let json = JSON.stringify(project);
      console.log("AAAAA3")

      console.log("Json:", json);
      console.log("project0", req.body.name);
      let data = {};
      try 
      {
        console.log("project1");
          data = await Project.create(project);
      } catch(err) 
      {
          logger.error('Error::' + err);
      }
       res.status(200).send(data);
    } catch (err) 
    {
        console.log(err);
        if (err.code == "LIMIT_FILE_SIZE") 
        {
          return res.status(500).send({
            message: "File size cannot be larger than 2MB!",
          });
        }
        res.status(500).send({
          message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
  };

module.exports = {
    saveProject
  };
  