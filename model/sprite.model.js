const mongoose = require("mongoose");
const constumeSchema = mongoose.Schema({
  name: {type: String},
  assetId: { type: String },
  bitmapResolution: { type: Number },
  md5ext: { type: String },
  dataFormat: { type: String },
  rotationCenterX: Number,
  rotationCenterY: Number,
  base64: String
});

const soundSchema = mongoose.Schema({
  assetId: {type: String},
  name: {type: String},
  dataFormat: {type: String},
  format: {type: String},
  rate: {type: Number},
  sampleCount: {type: Number},
  md5ext: {type: String},
  base64:{type:String}
});
const spriteSchema = mongoose.Schema({
  name: {type: String, required: true},
  tags: {type: [String], required: false},
  costumes:{ type: [constumeSchema]},
  sounds: {type: [soundSchema]},
  variables:{type: Object,required:false},
  isStage: {type: Boolean,required:true},
  blocks: {type: Object,required:false},
});



module.exports = Sprite = mongoose.model("Sprite", spriteSchema);
