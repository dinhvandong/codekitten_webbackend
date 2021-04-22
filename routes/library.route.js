var express = require('express');
const libraryController = require('../controller/library.controller');
var router = express.Router();

router.get('/library/getAll', (req, res) => 
{
    libraryController.getAll().then(data => res.json(data));
});

router.post('/library/create', (req, res) => 
{
    console.log("AAAAAA"+ req.body.title);
    libraryController.createLibrary(req.body).then(data => res.json(data));
});

router.put('/library/update', (req, res) => 
{
    libraryController.updateLibrary(req.body.task).then(data => res.json(data));
});

router.delete('/library/:id', (req, res) => 
{
    libraryController.deleteLibrary(req.params.id).then(data => res.json(data));
});
module.exports = router;