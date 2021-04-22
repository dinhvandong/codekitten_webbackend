var express = require("express");
const assetController = require("../controller/asset.controller");
var router = express.Router();
const path = require('path');
require("../routes/Resize");
// xu ly upload file o day//////////////////////////////////////////////
var multer = require("multer");
const Resize = require("./Resize");
const { dirname } = require("path");
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

  var upload = multer({ storage: storage })

  router.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(files)
  })

  router.post('/post', upload.single('image'), async function (req, res) {
    // folder upload
    const imagePath = path.join(__dirname, './uploads');
    // call class Resize
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
        res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    
    return res.status(200).json({ name: filename });
});

// router.route("/asset/storedata").post(function (req, res, next) {
//   upload(req, res, function (err) {
//     if (err) {
//       console.log("Error Occured");
//       return;
//     }
//     //   var userDetail = new mongoOp.User({
//     //     'name':req.body.name,
//     //     'email':req.body.email,
//     //     'mobile':req.body.mobile,
//     //     'address':req.body.address
//     //   });

//     console.log(req.file);

//     res.end("Your File Uploaded");
//     console.log("Photo Uploaded");

//     // userDetail.save(function(err,result){

//     assetController.createAsset(req.body).then((data) => res.json(data));

//     if (err) {
//       return console.log(err);
//     }
//     console.log("saved to database");
//   });
// });

router.get("/asset/getAll", (req, res) => {
  assetController.getAll().then((data) => res.json(data));
});

router.get("/asset/getByType/:type", (req, res) => {
  assetController.getByType(req.params.type).then((data) => res.json(data));
});

router.post("/asset/create", (req, res) => {
  //console.log("AAAAAA" + req.body.title);
  assetController.createAsset(req.body).then((data) => res.json(data));
});

router.put("/asset/update", (req, res) => {
  assetController.updateAsset(req.body.task).then((data) => res.json(data));
});

router.delete("/asset/delete/:id", (req, res) => {
  assetController.deleteAsset(req.params.id).then((data) => res.json(data));
});

router.get("/asset/find/:id", (req, res) => {
  assetController.findAsset(req.params.id).then((data) => {
    try {
      console.log("base64xxx:", data.base64 + "");
      //saveImage(data.base64 + "", data.assetId, res);
      const fileName = path.basename(data.base64);

     // const file = `${__dirname}/upload-folder/dramaticpenguin.MOV`;
      // const fileName = data.name;
    // const directoryPath =  "./resources/";
      // const __dirname = path.resolve(path.dirname('')); 
      res.download("./resources/"+ fileName);

      // res.end(data.base64);
      //download( "./resources/"+ data.name);

     // const directoryPath = __dirname + "/resources/"+ fileName;

    } catch (error) {}
  });
});
async function saveImage(data, name, res) {
  const fs = require("fs");
  var bitmap = new Buffer.from(data, "base64");
  let name2 = name + ".jpg";
  try {
    if (fs.existsSync("file.txt")) {
      console.log("The file exists.");
    } else {
      fs.writeFileSync(name2, bitmap);
      console.log("The file does not exist.");
    }
  } catch (err) {
    console.error(err);
  }


  var filePath = "./"; // Or format the path using the `id` rest param
  var fileName = name2; // The default name the browser will use
  const file = filePath + fileName;
  // //`${__dirname}/human.png`;
  res.download(file); // Set disposition and send it.
}

module.exports = router;


