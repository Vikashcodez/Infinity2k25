const mongoose = require("mongoose");

const Stage1Schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    email: { type: String, required: true },
    problemStatement: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Stage1", Stage1Schema);
