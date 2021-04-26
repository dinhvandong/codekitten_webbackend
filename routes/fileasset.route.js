var express = require('express');
const fileAssetController = require('../controller/fileasset.controller');

const saveFileAssetController = require('../controller/save_fileassets.controller');

var router = express.Router();

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var ip = require("ip");
const host = ip.address();
const baseUrl =  host + ":8080/api/files/";
const path = require('path');


router.get('/fileasset/getAll', (req, res) => 
{
    fileAssetController.getAll().then(data => res.json(data));
});


router.get('/fileasset/findByMd5/:md5code', (req, res) => 
{
    console.log("findmd5_0", req.params.md5code);
    //    // res.sendFile(filepath);

   // res.sendFile()

   // fileAssetController.findByMd5Code(req.params.md5code).then(data => res.sendFile(data.url));

   const data = fileAssetController.findByMd5Code(req.params.md5code);

   const url = data.url;
   console.log("FileName", url);

   const fileName =  fileAssetController.getFilename(url);

   const __dirname = path.resolve(path.dirname('')); 
   const directoryPath = __dirname + "/resources/";
   const filepath = directoryPath + fileName;
   res.sendFile(filepath);

    //fileAssetController.findByMd5Code(req.params.md5code).then(data => res.json(data));
});





router.get('/fileasset/getAllByType/:filetype', (req, res) => 
{
    fileAssetController.getAllByType(req.params.filetype).then(data => res.json(data));
});

router.get('/fileasset/getAll/:id', (req, res) => 
{
    fileAssetController.getAll(req.params.id).then(data => res.json(data));
});

router.post("/fileasset/create", saveFileAssetController.saveFileAsset);

router.put('/fileasset/update', (req, res) => 
{
    fileAssetController.updateFileAsset(req.body.task).then(data => res.json(data));
});

router.delete('/fileasset/:id', (req, res) => 
{
    fileAssetController.deleteFileAsset(req.params.id).then(data => res.json(data));
});

module.exports = router;