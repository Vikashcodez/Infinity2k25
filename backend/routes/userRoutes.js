const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Stage1 = require("../models/stage1Model");
const Stage2 = require("../models/stage2Model");

const router = express.Router();

// ✅ Get all users (Now includes `isBlocked` status)
router.get("/users", async (req, res) => {
    try {
        const users = await User.find({}, "name username isBlocked"); // Include `isBlocked`
        res.json(users);
    } catch (error) {
        console.error("❌ Error fetching users:", error);
        res.status(500).json({ error: "Error fetching users" });
    }
});

// ✅ Create New User (Signup)
router.post("/users", async (req, res) => {
    const { name, username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, username, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        console.error("❌ Error creating user:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// ✅ User Login (FIXED: Blocked users can't log in)
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });

        // ❌ User not found or wrong password
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        // 🚨 Blocked User Check
        if (user.isBlocked) {
            return res.json({ success: false, message: "User is blocked from logging in" });
        }

        // ✅ Generate JWT
        const token = jwt.sign(
            { userId: user._id, name: user.name },
            process.env.JWT_SECRET || "default_secret",
            { expiresIn: "1h" }
        );

        res.json({ success: true, token, name: user.name });
    } catch (error) {
        console.error("❌ Error logging in:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// ✅ Toggle Block/Unblock User API (PATCH Request)
router.patch("/users/:id/block", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Toggle `isBlocked` state
        user.isBlocked = !user.isBlocked;
        await user.save();

        res.json({ success: true, message: `User ${user.isBlocked ? "blocked" : "unblocked"} successfully!` });
    } catch (error) {
        console.error("❌ Error blocking/unblocking user:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Fetch User's Stage 1 & Stage 2 Details (FIXED)
router.get("/users/:id/stage/:stageNumber", async (req, res) => {
    try {
        const { id, stageNumber } = req.params;
        console.log(`🔹 Fetching Stage ${stageNumber} data for user: ${id}`);

        let stageData;

        if (stageNumber === "1") {
            stageData = await Stage1.findOne({ userId: id });
        } else if (stageNumber === "2") {
            stageData = await Stage2.findOne({ userId: id });
        } else {
            return res.status(400).json({ error: "Invalid stage number" });
        }

        if (!stageData) {
            return res.status(404).json({ error: `Stage ${stageNumber} details not found` });
        }

        res.json(stageData);
    } catch (error) {
        console.error("❌ Error fetching stage details:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
