const util = require("util");
const multer = require("multer");
const maxSize = 1000* 2000 * 1024 * 1024;
const path = require('path');

//import { dirname } from 'path';
//import path  from 'path';

//const __dirname = path.resolve();
const imagePath = path.join('./projects');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //dirname
    //cb(null, __basedir + "/resources");
    cb(null, imagePath);

  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).array("file",1000);
//single("file");
//array("file",1000);

//

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
