const mongoose = require("mongoose");

const cammionsSchema = new mongoose.Schema({
    cammionsId: {
        type: Number,
    },
    type: {
        require: true,
        type: String,
    },
    marque: {
        require: true,
        type: String,
    },
    matricule: {
        type: String,
    },
});

module.exports = mongoose.model("cammions", cammionsSchema);
