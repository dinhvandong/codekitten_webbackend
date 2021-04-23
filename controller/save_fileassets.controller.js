const logger = require('../logger/api.logger');
const uploadFile = require("../middleware/upload");
const FileAsset  = require('../model/fileasset.model');
var ip = require("ip");
const { ConfigServer } = require('../config_server');
console.dir ( ip.address() );
const saveFileAsset = async (req, res) => {
const host = ip.address();
//const baseUrl =  host + ":8080/api/files/find/";

const { connect, disconnect } = require('../config/db.config');
    connect();
    var baseUrl =  ConfigServer.host + "/api/files/find/";

    try 
    {
      console.log("AAAAA00");
     
      await uploadFile(req, res);
      //console.log("AAAAA1:", req2)
      //console.log("AAAAA2:", res2)

      if (req.file == undefined) 
      {
        return res.status(400).send({ message: "Please upload a file!" });
      }
      const name = req.body.name;
      const desc = req.body.desc;
      const createdTime = new Date();
      const  path = req.file.path.split("/")[1];

      const url = baseUrl +  path;
      //const url =  path;
      console.log("URL:::", url);

      const filetype = req.body.filetype;
      const fileextend = req.body.fileextend;
      var fileasset  = new FileAsset();
      fileasset.name = name;
      fileasset.desc = desc;
      fileasset.createdTime = createdTime;
      fileasset.path = path;
      fileasset.url = url;
      fileasset.filetype = filetype;
      fileasset.fileextend = fileextend;
      let json = JSON.stringify(fileasset);
      console.log("AAAAA3")
      console.log("Json:", json);
      console.log("fileasset", req.body.name);
      let data = {};
      try 
      {
        console.log("project1");
          data = await FileAsset.create(fileasset);
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
          message: `Could not upload the file: ${req.file.name}. ${err}`,
        });
    }
  };

module.exports = {
    saveFileAsset
  };
  