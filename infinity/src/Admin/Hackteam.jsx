import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

const Dashboard = () => {
    const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const [hackathonCount, setHackathonCount] = useState(0);
    const [users, setUsers] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showUserModal, setShowUserModal] = useState(false);
    const [newUser, setNewUser] = useState({ name: "", username: "", password: "" });

    useEffect(() => {
        fetchHackathonCount();
    }, []);

    const fetchHackathonCount = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/api/registrations/Hack4good`);
            setHackathonCount(res.data.length);
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching hackathon registration count:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("userName");
        localStorage.removeItem("token");
        navigate("/login");
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(users);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
        XLSX.writeFile(workbook, "Hackathon_Registrations.xlsx");
    };

    const handleInputChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleAddUser = async () => {
        if (!newUser.name || !newUser.username || !newUser.password) {
            alert("Please fill all fields.");
            return;
        }
        try {
            await axios.post(`${API_BASE_URL}/api/users`, newUser);
            alert("User added successfully!");
            setShowUserModal(false);
            setNewUser({ name: "", username: "", password: "" });
        } catch (error) {
            console.error("Error adding user:", error);
            alert("Failed to add user.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <div className="flex gap-4">
                    <button onClick={() => setShowUserModal(true)} className="bg-blue-600 px-4 py-2 rounded shadow hover:bg-blue-700">
                        Add User
                    </button>
                    <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded shadow hover:bg-red-700">
                        Logout
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div
                    onClick={() => setShowPopup(true)}
                    className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 flex flex-col items-center"
                >
                    <h2 className="text-xl font-semibold mb-2">Hackathon Registrations</h2>
                    <span className="text-4xl font-bold text-blue-400">{hackathonCount !== undefined ? hackathonCount : "--"}</span>
                </div>

                <div
                    onClick={() => navigate("/hackathon-user")}
                    className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 flex flex-col items-center"
                >
                    <h2 className="text-xl font-semibold mb-2">Hackathon Users</h2>
                    <span className="text-4xl font-bold text-green-400">👤</span>
                </div>
            </div>

            {/* Hackathon Registration Popup */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative w-4/5 max-h-[80vh] overflow-y-auto">
                        <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-white text-xl">✖</button>
                        <h2 className="text-2xl font-bold mb-4">Hackathon Registrations</h2>
                        <button onClick={exportToExcel} className="mb-4 bg-green-500 text-white p-2 rounded">Export to Excel</button>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-700">
                                    <th className="border p-2">Name</th>
                                    <th className="border p-2">College</th>
                                    <th className="border p-2">Email</th>
                                    <th className="border p-2">Phone</th>
                                    <th className="border p-2">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user, index) => (
                                        <tr key={index} className="border">
                                            <td className="border p-2">{user.name}</td>
                                            <td className="border p-2">{user.college}</td>
                                            <td className="border p-2">{user.email}</td>
                                            <td className="border p-2">{user.phone}</td>
                                            <td className="border p-2">
                                                <button onClick={() => setSelectedImage(`${API_BASE_URL}/${user.image}`)}>
                                                    <img src={`${API_BASE_URL}/${user.image}`} alt="User" className="h-12 w-12 rounded-full cursor-pointer" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center p-4">No data available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Image Preview Popup */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg relative">
                        <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">✖</button>
                        <img src={selectedImage} alt="Preview" className="max-w-full max-h-[80vh] rounded-lg" />
                    </div>
                </div>
            )}

            {/* Add User Modal */}
            {showUserModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Add New User</h2>
                        <input type="text" name="name" placeholder="Full Name" value={newUser.name} onChange={handleInputChange} className="w-full p-2 mb-3 bg-gray-900 border border-gray-600 text-white rounded"/>
                        <input type="text" name="username" placeholder="Username" value={newUser.username} onChange={handleInputChange} className="w-full p-2 mb-3 bg-gray-900 border border-gray-600 text-white rounded"/>
                        <input type="password" name="password" placeholder="Password" value={newUser.password} onChange={handleInputChange} className="w-full p-2 mb-4 bg-gray-900 border border-gray-600 text-white rounded"/>
                        <button onClick={handleAddUser} className="bg-blue-600 px-4 py-2 rounded shadow hover:bg-blue-700 w-full">Add User</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
