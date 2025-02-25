import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ Use Vite environment variable

    const [hackathonCount, setHackathonCount] = useState(0);

    useEffect(() => {
        fetchHackathonCount();
    }, []);

    // ✅ Fetch Hackathon Registration Count
    const fetchHackathonCount = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/api/registrations/Hack4good`); // ✅ Fixed API URL
            setHackathonCount(res.data.length);
        } catch (error) {
            console.error("Error fetching hackathon registration count:", error);
        }
    };

    // ✅ Handle Logout
    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("userName");
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="bg-red-600 px-4 py-2 rounded shadow hover:bg-red-700"
                >
                    Logout
                </button>
            </div>

            {/* Two Cards: Hackathon & Hackathon Users */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Hackathon Registrations Card */}
                <div
                    onClick={() => navigate("/user/Hack")}
                    className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 flex flex-col items-center"
                >
                    <h2 className="text-xl font-semibold mb-2">Hackathon Registrations</h2>
                    <span className="text-4xl font-bold text-blue-400">
                        {hackathonCount !== undefined ? hackathonCount : "--"}
                    </span>
                </div>

                {/* Hackathon Users Card */}
                <div
                    onClick={() => navigate("/hackathon-user")}
                    className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 flex flex-col items-center"
                >
                    <h2 className="text-xl font-semibold mb-2">Hackathon Users</h2>
                    <span className="text-4xl font-bold text-green-400">👤</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
