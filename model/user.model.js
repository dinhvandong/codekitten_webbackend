const { ObjectId } = require("bson");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const userSchema = Schema
({
  name:     { type: String, require: true },
  schoolId: { type: Number, require: true },
  phone:    { type: String, require: true },
  email:    { type: Number, require: true },
  address:  { type: String, require: true },
  avatar:   { type: String, require: true },
  delete:   { type:Boolean,	require: true },
});

module.exports = User = mongoose.model("User", userSchema);