require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Ensure the User model exists
const userRoutes = require('./routes/userRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const stage1Routes = require('./routes/stage1Routes');
const stage2Routes = require('./routes/stage2Routes');

const app = express();
app.use(cors());
app.use(express.json());

// Ensure `uploads` directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/eventDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use('/api', userRoutes);
app.use('/api', registrationRoutes);
app.use('/api/stage1', stage1Routes);
app.use('/api/stage2', stage2Routes);

// ✅ Fetch All Users (Now Includes `isBlocked` Status)
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({}, "username email isBlocked"); // Fetch blocked status
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Delete User API
app.delete('/api/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({ success: true, message: "User deleted successfully!" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Block/Unblock User API
app.patch('/api/users/:id/block', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        user.isBlocked = !user.isBlocked; // Toggle Block/Unblock
        await user.save();

        res.json({ success: true, message: `User ${user.isBlocked ? "blocked" : "unblocked"} successfully!` });
    } catch (error) {
        console.error("Error blocking/unblocking user:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Get Authenticated User Details
app.get('/api/user', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Extract token
        if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret"); // Verify JWT
        const user = await User.findById(decoded.userId, "username isBlocked"); // Fetch user from DB

        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        // Check if user is blocked
        if (user.isBlocked) {
            return res.status(403).json({ success: false, message: "User is blocked from login" });
        }

        res.json({ success: true, name: user.username });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
