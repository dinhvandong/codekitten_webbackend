var express = require('express');
const fileAssetController = require('../controller/fileasset.controller');

const saveFileAssetController = require('../controller/save_fileassets.controller');

var router = express.Router();

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var ip = require("ip");
const host = ip.address();
const baseUrl =  host + ":8080/api/files/";

router.get('/fileasset/getAll', (req, res) => 
{
    fileAssetController.getAll().then(data => res.json(data));
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