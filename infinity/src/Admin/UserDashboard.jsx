import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stage1Form from "./Stage1Form";
import Stage2Form from "./Stage2Form";

const UserDashboard = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [currentStage, setCurrentStage] = useState(null); // Track which form is open

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        const storedName = localStorage.getItem("userName");
        setUserName(storedName || "User");
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">Hello, {userName}!</h1>

            {!currentStage ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div
                        onClick={() => setCurrentStage("stage1")}
                        className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 flex flex-col items-center"
                    >
                        <h2 className="text-xl font-semibold">Stage 1</h2>
                    </div>
                    <div
                        onClick={() => setCurrentStage("stage2")}
                        className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 flex flex-col items-center"
                    >
                        <h2 className="text-xl font-semibold">Stage 2</h2>
                    </div>
                </div>
            ) : currentStage === "stage1" ? (
                <Stage1Form onClose={() => setCurrentStage(null)} />
            ) : (
                <Stage2Form onClose={() => setCurrentStage(null)} />
            )}
        </div>
    );
};

export default UserDashboard;
