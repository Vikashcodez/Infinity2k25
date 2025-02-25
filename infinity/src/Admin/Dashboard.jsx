import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ Load API base URL from .env

    const events = [
        "Hack4good", "Work1","Work2","InfyHunt","TechTacToe","TechnoThrone","TechTriathlon", "PuzzleBit", "Dsaflag", "Escaperoom","Aipictonary",
    "Decryptorsassemble","Dramatec"
    ];

    const [counts, setCounts] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [newUser, setNewUser] = useState({ name: "", username: "", password: "" });

    useEffect(() => {
        fetchCounts();
    }, []);

    // Fetch registration counts
    const fetchCounts = async () => {
        try {
            const results = await Promise.all(
                events.map(async (event) => {
                    const res = await axios.get(`${API_BASE_URL}/api/registrations/${event}`); // ✅ Use env URL
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
        }
    };

    // Handle Form Input
    const handleInputChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    // Add User to Database
    const handleAddUser = async () => {
        try {
            await axios.post(`${API_BASE_URL}/api/users`, newUser); // ✅ Use env URL
            alert("User added successfully!");
            setShowModal(false);
            setNewUser({ name: "", username: "", password: "" });
        } catch (error) {
            console.error("Error adding user:", error);
            alert("Failed to add user.");
        }
    };

    return (
        <div className="min-h-screen  text-white p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <div>
                    {/* Hackathon Button - Redirects to New Page */}
                    <button
                        onClick={() => navigate("/hackathon-users")}
                        className="bg-green-600 px-4 py-2 rounded shadow hover:bg-green-700 mr-4"
                    >
                        Hackathon
                    </button>
                    {/* Add User Button */}
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-blue-600 px-4 py-2 rounded shadow hover:bg-blue-700"
                    >
                        Add User
                    </button>
                </div>
            </div>

            {/* Event Registration Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {events.map((event, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(`/users/${event}`)}
                        className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 flex flex-col items-center"
                    >
                        <h2 className="text-xl font-semibold mb-2">{event} Registrations</h2>
                        <span className="text-4xl font-bold text-blue-400">
                            {counts[event] !== undefined ? counts[event] : "--"}
                        </span>
                    </div>
                ))}
            </div>

            {/* Add User Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Add New User</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={newUser.name}
                            onChange={handleInputChange}
                            className="w-full p-2 mb-3 border border-gray-600 rounded bg-gray-900 text-white"
                        />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={newUser.username}
                            onChange={handleInputChange}
                            className="w-full p-2 mb-3 border border-gray-600 rounded bg-gray-900 text-white"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={newUser.password}
                            onChange={handleInputChange}
                            className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-900 text-white"
                        />
                        <div className="flex justify-between">
                            <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-600 rounded shadow hover:bg-gray-700">Cancel</button>
                            <button onClick={handleAddUser} className="px-4 py-2 bg-blue-600 rounded shadow hover:bg-blue-700">Add User</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
