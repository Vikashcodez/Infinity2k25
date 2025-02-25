const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const {
    Hack4good,
    Work1,
    Work2,
    InfyHunt,
    TechTacToe,
    TechnoThrone,
    TechTriathlon,
    PuzzleBit,
    Dsaflag,
    Escaperoom,
    Aipictonary,
    Decryptorsassemble,
    Dramatec
} = require("../models/Registration");

// Store models in a dynamic object for easy access
const eventModels = {
    Hack4good,
    Work1,
    Work2,
    InfyHunt,
    TechTacToe,
    TechnoThrone,
    TechTriathlon,
    PuzzleBit,
    Dsaflag,
    Escaperoom,
    Aipictonary,
    Decryptorsassemble,
    Dramatec
};

// Multer Configuration for Image Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// Middleware to validate event names
const validateEventName = (req, res, next) => {
    const { event } = req.params;
    if (!eventModels[event]) {
        return res.status(400).json({ error: "Invalid event name" });
    }
    req.eventModel = eventModels[event]; // Attach model to request
    next();
};

// 🟢 Register a user for an event
router.post("/register/:event", validateEventName, upload.single("image"), async (req, res) => {
    try {
        const { name, college, department, year, email, phone, teamSize, teamMembers } = req.body;
        if (!name || !college || !email || !phone) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const team = Array.isArray(teamMembers) ? teamMembers : (teamMembers ? [teamMembers] : []);

        const newRegistration = new req.eventModel({
            name,
            college,
            department,
            year,
            email,
            phone,
            teamSize,
            teamMembers: team,
            image: req.file ? `uploads/${req.file.filename}` : null
        });

        await newRegistration.save();
        res.status(201).json({ message: `${req.params.event} registration successful!` });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// 🟢 Fetch all registrations for an event
router.get("/registrations/:event", validateEventName, async (req, res) => {
    try {
        const registrations = await req.eventModel.find();
        res.json(registrations);
    } catch (error) {
        console.error("Fetching Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// 🟢 Delete a registration by ID for a specific event
router.delete("/registrations/:event/:id", validateEventName, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRegistration = await req.eventModel.findByIdAndDelete(id);

        if (!deletedRegistration) {
            return res.status(404).json({ error: "Registration not found" });
        }

        res.json({ message: "Registration deleted successfully!" });
    } catch (error) {
        console.error("Delete Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
