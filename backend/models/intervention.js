const mongoose = require("mongoose");

const interventionSchema = new mongoose.Schema({
  interventionId: {
    type: Number,
  },
  Date: {
    require: true,
    type: String,
  },
  Type: {
    require: true,
    type: String,
  },
  Description: {
    type: String,
  },
  garageId: {
    type: String,
  },
  demandesId: {
    require: true,
    type: Number,
  },
});

module.exports = mongoose.model("intervention", interventionSchema);
