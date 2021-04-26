const mongoose = require('mongoose');
const schema = mongoose.Schema
({
	name: {type: String, required:true},
	desc: {type:String,required:true},
	path: {type:String,required:true},
	md5code:{type:String,required:true},
	createdTime: {type:Date, required: true},
	url: {type:String,required:true},
    filetype:{type:String,required:true}, //image/sound
	fileextend:{type:String,required:true}
})
module.exports = FileAsset = mongoose.model("FileAsset", schema)