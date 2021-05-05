var express = require('express');
const projectController = require('../controller/project.controller');

const saveProjectController = require('../controller/saveproject.controller');

var router = express.Router();

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var ip = require("ip");
const host = ip.address();
//const baseUrl =  ConfigServer.host+ + "/api/files/find";

router.get('/project/getAll', (req, res) => 
{
    projectController.getAll().then(data => res.json(data));
});

router.get('/project/getAll/:id', (req, res) => 
{
    projectController.getAllByUser(req.params.id).then(data => res.json(data));
});

router.post("/project/create", saveProjectController.saveProject);


//router.post('/project/create', upload.single('file'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    //console.log("file:", req.file.filename);
    //console.log("body", req.body.name);
        // const projectId = "32132132198098kehqkskdfslansbewqk3321";
        // const projectName = req.body.name;
        // const projectDesc = req.body.projectDesc;
        // console.log("NAME:", projectName);
        // console.log("DESC:", projectDesc)

        // const linkdownload = baseUrl + "nametest.sb3";
        // const createdDate = new Date();
        // const disable = false;
        // const icon = "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/DK_scratch_02_w3npmw.jpg";
        // const userId = "abcerq302913812380912";

        // var project  = new Project();
        // project.name = projectName;
        // project.projectId = projectId;
        // project.desc = projectDesc;
        // project.linkdownload = linkdownload;
        // project.createdTime = createdDate;
        // project.disable = false;
        // project.icon = icon;
        // project.userId = userId;
        // let json = JSON.stringify(project);
        // console.log("Json:", json);
        // console.log("project0", req.body.name);
        // let data = {};
        // projectController.createProject(project);
 // })
// router.post('/project/create', (req, res) => 
// {
//     console.log("AAAAAA"+ req.body.title);
//     projectController.createProject(req.body).then(data => res.json(data));
// });

router.put('/project/update', (req, res) => 
{
    projectController.updateProject(req.body.task).then(data => res.json(data));
});

router.get('/project/delete/:id', (req, res) => 
{
    projectController.deleteProject(req.params.id).then(data => res.json(data));
});
module.exports = router;