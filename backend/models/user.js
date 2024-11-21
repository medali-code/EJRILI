const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  uid: {
    type: Number,
  },
  emailVerified: {
    type: Boolean,
  },
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  cin: {
    type: String,
    required: false,
  },
  ville: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telephone: {
    type: String,

  },
  type: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  voiture: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
