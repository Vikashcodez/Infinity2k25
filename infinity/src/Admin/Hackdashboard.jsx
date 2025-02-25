import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaBan, FaCheckCircle } from "react-icons/fa";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ Use environment variable

const HackathonUsers = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [stage, setStage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    // ✅ Fetch all users
    const fetchUsers = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/api/users`);
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // ✅ Fetch User Stage Data
    const handleViewDetails = async (user, stageNumber) => {
        try {
            const res = await axios.get(`${API_BASE_URL}/api/users/${user._id}/stage/${stageNumber}`);
            if (!res.data || Object.keys(res.data).length === 0) {
                alert(`No data available for Stage ${stageNumber}.`);
                return;
            }
            setSelectedUser(res.data);
            setStage(stageNumber);
            setShowModal(true);
        } catch (error) {
            console.error("Error fetching user details:", error);
            alert("Failed to fetch stage details.");
        }
    };

    // ✅ Delete User
    const handleDeleteUser = async (userId) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            await axios.delete(`${API_BASE_URL}/api/users/${userId}`);
            setUsers(users.filter(user => user._id !== userId)); // Remove user from UI
            alert("User deleted successfully.");
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Failed to delete user.");
        }
    };

    // ✅ Block/Unblock User
    const handleBlockUser = async (userId, isBlocked) => {
        try {
            const res = await axios.patch(`${API_BASE_URL}/api/users/${userId}/block`, {
                isBlocked: !isBlocked, // Toggle Block Status
            });

            setUsers(users.map(user =>
                user._id === userId ? { ...user, isBlocked: res.data.isBlocked } : user
            ));
            alert("User status updated.");
        } catch (error) {
            console.error("Error updating user status:", error);
            alert("Failed to update user status.");
        }
    };

    return (
        <div className="min-h-screen text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Hackathon Users</h1>
            <div className="bg-gray-800 p-6 rounded-lg overflow-x-auto">
                <h2 className="text-2xl font-bold mb-4">All Users</h2>
                
                {/* Table */}
                <table className="w-full border border-gray-700">
                    <thead>
                        <tr className="bg-gray-700 text-white">
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Username</th>
                            <th className="p-3 border">Stage 1</th>
                            <th className="p-3 border">Stage 2</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="text-center border border-gray-700 hover:bg-gray-700">
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

                                {/* Actions */}
                                <td className="p-3 border flex justify-center space-x-4">
                                    {/* Block / Unblock Icon */}
                                    <button 
                                        onClick={() => handleBlockUser(user._id, user.isBlocked)}
                                        className={`p-2 rounded ${user.isBlocked ? "bg-yellow-600 hover:bg-yellow-700" : "bg-red-600 hover:bg-red-700"}`}
                                        title={user.isBlocked ? "Unblock User" : "Block User"}
                                    >
                                        {user.isBlocked ? <FaCheckCircle /> : <FaBan />}
                                    </button>

                                    {/* Delete Icon */}
                                    <button 
                                        onClick={() => handleDeleteUser(user._id)}
                                        className="p-2 bg-red-600 rounded hover:bg-red-700"
                                        title="Delete User"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ✅ Modal for Stage Details */}
            {showModal && selectedUser && (
                <div 
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={() => setShowModal(false)} // Close when clicking outside
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
