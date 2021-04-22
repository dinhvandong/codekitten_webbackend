const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const schema = mongoose.Schema({
	name:{type: String,	required:true},
	projectId:{type:String,	required:false},
    userId:{type: String},
    icon:{type:String,	required:false},
    linkdownload:{type:String,	required:false},
	desc:{type:String,	required:false},
	disable:{type:Boolean,	required:false},
	createdTime:{type: Date, required:false}
})
module.exports = Project = mongoose.model("Project", schema)