var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const counterSchema = new Schema({
  id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

counterSchema.index({ id: 1, seq: 1 }, { unique: true });

const counterModel = mongoose.model("counter", counterSchema);

