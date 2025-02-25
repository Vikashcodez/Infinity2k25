const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        console.log("🔹 Checking Token:", req.headers.authorization); // Debugging

        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized - No Token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
        req.user = decoded;
        next();
    } catch (error) {
        console.error("❌ Invalid Token:", error);
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};
