import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Get API base URL from Vite env
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const { username, password } = credentials;
        console.log("Logging in with:", username, password);

        // ✅ Admin Login
        if (username === "admin" && password === "123") {
            localStorage.setItem("isAdmin", "true");
            localStorage.setItem("userName", "Admin");
            localStorage.setItem("userToken", "admin_token"); // Store token
            window.dispatchEvent(new Event("storage")); // Notify Navbar
            navigate('/dashboard');
            return;
        }

        // ✅ Hack4Good User Login
        if (username === "hack4good" && password === "123") {
            localStorage.setItem("isAdmin", "false");
            localStorage.setItem("userName", "Hack4Good");
            localStorage.setItem("userToken", "hack_token"); // Store token
            window.dispatchEvent(new Event("storage")); // Notify Navbar
            navigate('/hack-dashboard');
            return;
        }

        // ✅ Tech User Login
        if (username === "tech" && password === "123") {
            localStorage.setItem("isAdmin", "false");
            localStorage.setItem("userName", "Tech");
            localStorage.setItem("userToken", "tech_token"); // Store token
            window.dispatchEvent(new Event("storage")); // Notify Navbar
            navigate('/tech-dashboard');
            return;
        }

        // ✅ Normal User Login (API Call)
        try {
            console.log("Sending login request to:", API_BASE_URL);
            const res = await axios.post(`${API_BASE_URL}/api/login`, credentials);
            console.log("API Response:", res.data);

            if (!res.data.success) {
                setError(res.data.message || "Invalid username or password.");
                return;
            }

            if (res.data.isBlocked) {
                setError("You are blocked. Contact the administrator.");
                return;
            }

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("isAdmin", "false");
            localStorage.setItem("userName", res.data.name);
            localStorage.setItem("userToken", res.data.token); // ✅ Store token
            window.dispatchEvent(new Event("storage")); // ✅ Notify Navbar
            navigate('/user-dashboard');
        } catch (err) {
            console.error("Login error:", err.response?.data || err.message);
            setError("Server error. Please try again later.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form onSubmit={handleSubmit} className="p-6 bg-gray-800 rounded-lg shadow-md w-96 text-white">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                <input
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                    className="block p-3 bg-gray-700 border border-gray-600 rounded w-full mb-3"
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    className="block p-3 bg-gray-700 border border-gray-600 rounded w-full mb-3"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
