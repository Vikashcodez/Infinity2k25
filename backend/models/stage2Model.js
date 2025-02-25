const mongoose = require("mongoose");

const Stage2Schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    email: { type: String, required: true },
    problemStatement: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Stage2", Stage2Schema);
