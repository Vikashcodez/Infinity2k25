import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ Use environment variable

const Dashboard = () => {
    const navigate = useNavigate();
    const events = [
        "Hack4good", "Work1","Work2","InfyHunt","TechTacToe","TechnoThrone","TechTriathlon", "PuzzleBit", "Dsaflag", "Escaperoom","Aipictonary",
    "Decryptorsassemble","Dramatec"
    ];

    const [counts, setCounts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCounts();
    }, []);

    // Fetch registration counts
    const fetchCounts = async () => {
        try {
            const results = await Promise.all(
                events.map(async (event) => {
                    const res = await axios.get(`${API_BASE_URL}/api/registrations/${event}`);
                    return { event, count: res.data.length };
                })
            );
            const countsMap = results.reduce((acc, { event, count }) => {
                acc[event] = count;
                return acc;
            }, {});
            setCounts(countsMap);
        } catch (error) {
            console.error("Error fetching registration counts:", error);
        } finally {
            setLoading(false);
        }
    };

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("userName");
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="min-h-screen  text-white p-6">
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

            {loading ? (
                <p className="text-center text-lg">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(`/user/${event}`)}
                            className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 flex flex-col items-center"
                        >
                            <h2 className="text-xl font-semibold mb-2">{event} Registrations</h2>
                            <span className="text-4xl font-bold text-blue-400">
                                {counts[event] !== undefined ? counts[event] : "--"}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
