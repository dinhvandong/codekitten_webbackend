const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const taskController = require('./controller/task.controller')
var libraryRoute = require('./routes/library.route');
var spriteRoute = require('./routes/sprite.route');
var assetRoute = require('./routes/asset.route');

var fileAssetRoute = require('./routes/fileasset.route');
var fileRoute = require('./routes/file.route');
var projectRoute = require('./routes/project.route');
//
var cors = require('cors')
const app = express();
app.use(cors());
const port = process.env.PORT || 8080;
app.use(express.json()) // new
app.use(bodyParser.json());
//app.use('/api', libraryRoute);
app.use('/api', spriteRoute);
app.use('/api', assetRoute);
app.use('/api', fileRoute);
app.use('/api', projectRoute);
app.use('/api', fileAssetRoute);

var md5 = require('md5');

const  getBase64FromUrl = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = function() {
      const base64data = reader.result;   
      resolve(base64data);
    }
  });
}


async function createFile(){
    let response = await fetch('https://www.transparentpng.com/thumb/animation/human-animation-png-5.png');
    let data = await response.blob();
    let metadata = {
      type: 'image/jpeg'
    };
   var file = new File(['fijRKjhudDjiokDhg1524164151'],
                     './human.png', 
                     {type:'image/jpg'});
    return file;
  }
// app.get('/api/tasks', (req, res) => { 
//     //taskController.getTasks().then(data => res.json(data));   
//     // res.end(url);

//    // var file =   createFile();

// //    var file = new File(['fijRKjhudDjiokDhg1524164151'],
// //                      '/human.png', 
// //                      {type:'image/png'});

//     var filePath = "./"; // Or format the path using the `id` rest param
//     var fileName = "human.png"; // The default name the browser will use                                
//     const file = `${__dirname}/human.png`;
//     res.download(file); // Set disposition and send it.
//     //res.download(filePath, fileName); // Set disposition and send it.
// });

// app.get('/api/getbase64', (req, res) => {
//         //taskController.getTasks().then(data => res.json(data));   
//         // res.end(url);
//         // var file =   createFil e();
//         //    var file = new File(['fijRKjhudDjiokDhg1524164151'],
//         //                      '/human.png', 
//         //                      {type:'image/png'});
//         var filePath = "./"; // Or format the path using the `id` rest param
//         var fileName = "human.png"; // The default name the browser will use                                
//         const file = `${__dirname}/human.png`;
//         //res.download(file); // Set disposition and send it.
//         //res.download(filePath, fileName); // Set disposition and send it.
//         var base64str = base64_encode(fileName);
//         res.end(base64str);
// });
var fs = require('fs');
// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
// app.post('/api/task', (req, res) => {
//     console.log("AAAAAA"+ req.body.title);
//     taskController.createTask(req.body).then(data => res.json(data));
// });

// app.put('/api/task', (req, res) => {
//     taskController.updateTask(req.body.task).then(data => res.json(data));
// });

// app.delete('/api/task/:id', (req, res) => {
//     taskController.deleteTask(req.params.id).then(data => res.json(data));
// });

// app.get('/', (req, res) => {
//     res.send(`<h1>API Works !!!</h1>`)
// });
app.listen(port, () => {


   

    // let name2 = md5("vua_nhan_3d");
    // console.log("name2",name2);


    // let name3 = md5("sutu_nhan_3d");
    // console.log("name3",name3);

    // let name4 = md5("tranh_tinh");
    // console.log("name4",name4);

    // let name5 = md5("vo_thien");
    // console.log("name5",name5);


    console.log(`Server listening on the port  ${port}`);
})