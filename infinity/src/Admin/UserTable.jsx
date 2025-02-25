import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as XLSX from "xlsx";
import { FaTrash } from "react-icons/fa";

const UserTable = () => {
    const { event } = useParams(); // Get event name from URL
    const [users, setUsers] = useState([]);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ Use Vite environment variable

    useEffect(() => {
        if (!event) return;

        axios.get(`${API_BASE_URL}/api/registrations/${event}`)
            .then(res => setUsers(res.data))
            .catch(err => console.log("Error fetching data:", err));
    }, [event]);

    // ✅ Export to Excel
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(users);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
        XLSX.writeFile(workbook, `${event}_registrations.xlsx`);
    };

    // ✅ Delete user function
    const deleteUser = async (userId) => {
        try {
            await axios.delete(`${API_BASE_URL}/api/registrations/${event}/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
        } catch (err) {
            console.log("Error deleting user:", err);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-white">{event} Registrations</h2>
            <button onClick={exportToExcel} className="mb-4 bg-green-500 text-white p-2 rounded">
                Export to Excel
            </button>
            <table className="w-full border-collapse border border-gray-300 text-white">
                <thead>
                    <tr className="">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">College</th>
                        <th className="border p-2">Department</th>
                        <th className="border p-2">Year</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Phone</th>
                        <th className="border p-2">Team Members</th>
                        <th className="border p-2">Image</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={index} className="border">
                                <td className="border p-2">{user.name}</td>
                                <td className="border p-2">{user.college}</td>
                                <td className="border p-2">{user.department}</td>
                                <td className="border p-2">{user.year}</td>
                                <td className="border p-2">{user.email}</td>
                                <td className="border p-2">{user.phone}</td>
                                <td className="border p-2">{user.teamMembers.join(", ")}</td>
                                <td className="border p-2">
                                    <img 
                                        src={`${API_BASE_URL}/${user.image}`} 
                                        alt="User" 
                                        className="h-12 w-12 rounded-full" 
                                    />
                                </td>
                                <td className="border p-2 text-center">
                                    <button onClick={() => deleteUser(user._id)} className="text-red-500 hover:text-red-700">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" className="text-center p-4">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
