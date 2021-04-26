const uploadFile = require("../middleware/upload");
const fs = require("fs");
var ip = require("ip");
console.dir ( ip.address() );
const fileassetService  = require('../service/fileasset.service');

const host = ip.address();
//const baseUrl =  ConfigServer.host+ "/api/files/";


const path = require('path');
const { default: ConfigServer } = require("../config_server");
const upload = async (req, res) => {
  try 
  {
    await uploadFile(req, res);
    if (req.file == undefined) 
    {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.p,
    });
  } catch (err) 
  {
    console.log(err);
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};
const getListFiles = (req, res) => {
  const baseUrl =  ConfigServer.host+ + "/api/files/find";

  const directoryPath = "./resources";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });
    res.status(200).send(fileInfos);
  });
};

const find = (req, res) => {
  const fileName = req.params.name;
  // const directoryPath =  "./resources/";
  const __dirname = path.resolve(path.dirname('')); 
  const directoryPath = __dirname + "/resources/";
  const filepath = directoryPath + fileName;
  res.sendFile(filepath);
}

const findMd5 = async (req, res) => {
  const md5code = req.params.md5code;
  const data =  await fileassetService.findByMd5Code(md5code);
  const url = data + "";
  console.log("URL_MD5", url);
  var fileName = url.split('/').pop();

  const __dirname = path.resolve(path.dirname('')); 
  const directoryPath = __dirname + "/resources/";
  const filepath = directoryPath + fileName;
  res.sendFile(filepath);
}

const download = (req, res) => {
  const fileName = req.params.name;
 // const directoryPath =  "./resources/";
 const __dirname = path.resolve(path.dirname('')); 

 const directoryPath = __dirname + "/resources/";



  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });


  



};

module.exports = {
  upload,
  getListFiles,
  download,
  find, findMd5
};
