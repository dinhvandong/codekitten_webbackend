const mongoose = require('mongoose');
const schema = mongoose.Schema({
	title: {type: String, required:true},
	content: {type:String,required:true}
})
module.exports = Task = mongoose.model("Task", schema)