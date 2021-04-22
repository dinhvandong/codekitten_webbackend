const { ObjectId } = require("bson");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const assetSchema = Schema({
 // _id: { type: mongoose.Schema.Types.ObjectId},
    //, unique: true, min: 1 },
  name: { type: String, require: true },
  assetId: { type: String, require: true },
  bitmapResolution: { type: Number, require: true },
  md5ext: { type: String, require: true },
  dataFormat: { type: String, require: true },
  tags: { type: [String], required: false },
  rotationCenterX: { type: Number, require: true },
  rotationCenterY: { type: Number, require: true },
  base64: { type: String, require: true },
  type: { type: String, require: true },
});

module.exports = Asset = mongoose.model("Asset", assetSchema);

//export default Asset = model("Asset", assetSchema);
