const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");

router.post("/upload", controller.upload);
router.get("/files", controller.getListFiles);
router.get("/files/:name", controller.download);
router.get("/files/find/:name", controller.find);

var filepath = '~/path/to/file.png'

router.get('/path/for/site', function (req, res) {
    res.sendFile(filepath);
})

module.exports = router;