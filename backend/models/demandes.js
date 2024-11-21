const mongoose = require("mongoose");

const demandesSchema = new mongoose.Schema({
  demandesId: {
    type: Number,
  },
  Date: {
    require: true,
    type: String,
  },
  Destination: {
    require: true,
    type: String,
  },
  Etat: {
    type: String,
  },
  Voiture: {
    require: true,
    type: String,
  },
  userUid: {
    require: true,
    type: Number,
  },
  chauffeurUid: {
    type: Number,
  },
  cammionsId: {
    type: Number,
  },
  valid: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model("demandes", demandesSchema);
