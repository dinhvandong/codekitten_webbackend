const util = require("util");
const multer = require("multer");
const maxSize = 2000 * 1024 * 1024;
const path = require('path');
const imagePath = path.join('./resources');
var md5 = require('md5');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("aaaa");

    cb(null, imagePath);
  },
  filename: (req, file, cb) => {
    console.log("bbb");

    //console.log(file.originalname);
    cb(null, md5(Date.now())  + path.extname(file.originalname));
    console.log("ccc");

   // cb(null, Date.now() + Date.now() + path.extname(file.originalname));
  },
});
let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");
//array("file",1000);
//single("file");
//array("file",1000);
//.single("file");
//.array("file",1000);
//single("file");
//array("file",1000);
//
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
