const mongoose = require("mongoose");

const avisSchema = new mongoose.Schema({
  avisId: {
    type: Number,
  },
  text: {
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  emetteur: {
    type: String,
  },
});

module.exports = mongoose.model("avis", avisSchema);
