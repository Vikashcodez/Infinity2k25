const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Stage2 = require("../models/stage2Model");

router.post("/", authMiddleware, async (req, res) => {
    try {
        console.log("🔹 Received Stage 2 Request:", req.body);

        const { email, problemStatement, description, link } = req.body;

        if (!email || !problemStatement || !description || !link) {
            return res.status(400).json({ success: false, message: "All fields are required!" });
        }

        const stage2 = new Stage2({
            userId: req.user.userId,
            email,
            problemStatement,
            description,
            link
        });

        await stage2.save();
        res.json({ success: true, message: "Stage 2 data saved successfully!" });
    } catch (error) {
        console.error("❌ Error saving Stage 2 data:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

module.exports = router;
