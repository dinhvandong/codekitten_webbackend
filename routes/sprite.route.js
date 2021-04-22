var express = require("express");
const spriteController = require("../controller/sprite.controller");
var router = express.Router();
const fetch = require("node-fetch");
//-----------------------------------END--------------------------------

router.get("/sprite/getAll", (req, res) => {
  spriteController.getAll().then((data) => res.json(data));
});

router.post("/sprite/create", (req, res) => {
  console.log("AAAAAA" + JSON.stringify(req.body));

  //tags
  console.log(req.body);

  spriteController.createSprite(req.body).then((data) => res.json(data));
});

router.put("/sprite/update", (req, res) => {
  spriteController.updateSprite(req.body.task).then((data) => res.json(data));
});

router.delete("/sprite/:id", (req, res) => {
  spriteController.deleteSprite(req.params.id).then((data) => res.json(data));
});
var Promise = require('promise');

async function saveImage(data, name, res) {
  const fs = require("fs");
  var bitmap = new Buffer.from(data, "base64");
  let name2 = name + ".png";
  try {
    if(fs.existsSync('file.txt')) {
        console.log("The file exists.");
    } else {
        fs.writeFileSync(name2, bitmap);
        console.log('The file does not exist.');
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

router.get("/sprite/:spriteId/asset/:assetId", async (req, res) => {
  // spriteController.deleteSprite(req.params.id).then(data => res.json(data));
  console.log("sprite:", req.params.spriteId);
  console.log("asset:", req.params.assetId);
  var sprite = await spriteController
    .findByAssetAndSpriteId(req.params.spriteId, req.params.assetId)
    .then((data) => {
      saveImage(data.base64+"", data.assetId, res);
    });  
});
module.exports = router;
