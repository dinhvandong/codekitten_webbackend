const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const schema = mongoose.Schema({
	name: 			{type: String,	required:true},
	icons: 			{type:String,	required:true},
    iconRawURL: 	{type:String,	required:true},
    insetIconURL: 	{type:String,	required:true},
    collaborator: 	{type:String,	required:true},
	description: 	{type:String,	required:true},
	extensionId: 	{type:String,	required:true},
	featured: 		{type:String,	required:true},
	key: 			{type:String,	required:true},
	isPlaying: 		{type:Boolean,	required:true},
	disable: 		{type:Boolean,	required:true}
})
module.exports = Library = mongoose.model("Library", schema)