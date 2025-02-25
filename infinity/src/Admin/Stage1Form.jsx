import { useState } from "react";
import axios from "axios";

const Stage1Form = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: "",
        problemStatement: "",
        description: "",
        link: "",
    });

    const [message, setMessage] = useState("");
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ Use Vite environment variable

    const problems = [
        "Problem 1", "Problem 2", "Problem 3", "Problem 4", "Problem 5",
        "Problem 6", "Problem 7", "Problem 8", "Problem 9", "Problem 10"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                `${API_BASE_URL}/api/stage1`, // ✅ Use API URL from .env
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setMessage("Stage 1 submission successful!");
            setFormData({ email: "", problemStatement: "", description: "", link: "" });
        } catch (error) {
            setMessage("Error submitting. Please try again.");
        }
    };

    return (
        <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center mb-4">Stage 1 Submission</h2>
            {message && <p className="text-center text-green-500">{message}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 bg-gray-700 border border-gray-600 rounded w-full"
                />
                <select
                    name="problemStatement"
                    value={formData.problemStatement}
                    onChange={handleChange}
                    required
                    className="p-3 bg-gray-700 border border-gray-600 rounded w-full"
                >
                    <option value="">Select a Problem</option>
                    {problems.map((problem, index) => (
                        <option key={index} value={problem}>{problem}</option>
                    ))}
                </select>
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="p-3 bg-gray-700 border border-gray-600 rounded w-full"
                ></textarea>
                <input
                    type="text"
                    name="link"
                    placeholder="Submission Link"
                    value={formData.link}
                    onChange={handleChange}
                    required
                    className="p-3 bg-gray-700 border border-gray-600 rounded w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">
                    Submit
                </button>
            </form>
            <button onClick={onClose} className="mt-4 text-center text-red-400 hover:underline w-full">
                Back to Dashboard
            </button>
        </div>
    );
};

export default Stage1Form;
