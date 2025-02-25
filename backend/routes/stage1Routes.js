const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Stage1 = require("../models/stage1Model");

// ✅ Save Stage 1 Data
router.post("/", authMiddleware, async (req, res) => {
    try {
        console.log("🔹 Received Stage 1 Request:", req.body);

        const { email, problemStatement, description, link } = req.body;

        if (!email || !problemStatement || !description || !link) {
            return res.status(400).json({ success: false, message: "All fields are required!" });
        }

        const stage1 = new Stage1({
            userId: req.user.userId, // ✅ Ensure user ID is stored correctly
            email,
            problemStatement,
            description,
            link
        });

        await stage1.save();
        res.json({ success: true, message: "Stage 1 data saved successfully!" });
    } catch (error) {
        console.error("❌ Error saving Stage 1 data:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ✅ Fetch Stage 1 Data for a Specific User
router.get("/:userId", authMiddleware, async (req, res) => {
    try {
        const { userId } = req.params;
        console.log(`🔹 Fetching Stage 1 data for user: ${userId}`);

        const stage1Data = await Stage1.findOne({ userId });

        if (!stage1Data) {
            return res.status(404).json({ success: false, message: "Stage 1 data not found!" });
        }

        res.json({ success: true, data: stage1Data });
    } catch (error) {
        console.error("❌ Error fetching Stage 1 data:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

module.exports = router;
