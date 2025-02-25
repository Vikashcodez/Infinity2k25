import { useEffect, useState } from "react";
import axios from "axios";

const HackathonUsers = () => {
    const [users, setUsers] = useState(null); // ✅ Default to `null` for proper loading check
    const [selectedUser, setSelectedUser] = useState(null);
    const [stage, setStage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true); // ✅ Added loading state

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ Use Vite environment variable

    useEffect(() => {
        fetchUsers();
    }, []);

    // ✅ Fetch all users safely
    const fetchUsers = async () => {
        try {
            setLoading(true); // ✅ Start loading before API call
            const res = await axios.get(`${API_BASE_URL}/api/users`);
            console.log("API Response:", res.data);

            if (Array.isArray(res.data)) {
                setUsers(res.data); // ✅ Set only if response is an array
            } else {
                console.error("Invalid API Response:", res.data);
                setUsers([]); // ✅ Default to empty array to avoid errors
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            setUsers([]); // ✅ Prevent app crash
        } finally {
            setLoading(false); // ✅ Stop loading
        }
    };

    // ✅ Fetch User Stage Data safely
    const handleViewDetails = async (user, stageNumber) => {
        try {
            console.log(`Fetching Stage ${stageNumber} details for`, user);
            const res = await axios.get(`${API_BASE_URL}/api/users/${user._id}/stage/${stageNumber}`);

            if (!res.data || Object.keys(res.data).length === 0) {
                alert(`No data available for Stage ${stageNumber}.`);
                return;
            }

            console.log("Stage Data:", res.data);
            setSelectedUser(res.data);
            setStage(stageNumber);
            setShowModal(true);
        } catch (error) {
            console.error("Error fetching user details:", error);
            alert("Failed to fetch stage details.");
        }
    };

    return (
        <div className="min-h-screen text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Hackathon Users</h1>

            {loading ? ( // ✅ Show loading state
                <p className="text-center text-lg">Loading...</p>
            ) : users && users.length > 0 ? ( // ✅ Safe check before rendering
                <div className="bg-gray-800 p-6 rounded-lg overflow-x-auto">
                    <h2 className="text-2xl font-bold mb-4">All Users</h2>
                    <table className="w-full border border-gray-700">
                        <thead>
                            <tr className="bg-gray-700 text-white">
                                <th className="p-3 border">Name</th>
                                <th className="p-3 border">Username</th>
                                <th className="p-3 border">Stage 1</th>
                                <th className="p-3 border">Stage 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="text-center border border-gray-700 hover:bg-gray-700">
                                    <td className="p-3 border">{user.name || "No Name"}</td>
                                    <td className="p-3 border">{user.username}</td>

                                    {/* Stage 1 Button */}
                                    <td className="p-3 border">
                                        <button 
                                            onClick={() => handleViewDetails(user, 1)} 
                                            className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700"
                                        >
                                            Stage 1
                                        </button>
                                    </td>

                                    {/* Stage 2 Button */}
                                    <td className="p-3 border">
                                        <button 
                                            onClick={() => handleViewDetails(user, 2)} 
                                            className="px-3 py-1 bg-green-600 rounded hover:bg-green-700"
                                        >
                                            Stage 2
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-lg p-4">No users found.</p> // ✅ Prevent blank screen
            )}

            {/* ✅ Modal for Stage Details */}
            {showModal && selectedUser && (
                <div 
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={() => setShowModal(false)} // ✅ Clicking outside closes the modal
                >
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 relative" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-xl font-bold mb-4">Stage {stage} Details</h2>
                        <p><strong>Email:</strong> {selectedUser.email || "N/A"}</p>
                        <p><strong>Problem Statement:</strong> {selectedUser.problemStatement || "N/A"}</p>
                        <p><strong>Description:</strong> {selectedUser.description || "N/A"}</p>
                        <p><strong>Link:</strong> 
                            {selectedUser.link ? (
                                <a href={selectedUser.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Submission</a>
                            ) : "N/A"}
                        </p>
                        <button 
                            onClick={() => setShowModal(false)}
                            className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HackathonUsers;
