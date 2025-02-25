import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        college: '',
        department: '',
        year: '',
        email: '',
        phone: '',
        teamSize: '0',
        teamMembers: [],
        image: null
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTeamSizeChange = (e) => {
        const size = e.target.value;
        setFormData({
            ...formData,
            teamSize: size,
            teamMembers: Array.from({ length: parseInt(size) }, () => '')
        });
    };

    const handleTeamMemberChange = (index, value) => {
        const updatedTeam = [...formData.teamMembers];
        updatedTeam[index] = value;
        setFormData({ ...formData, teamMembers: updatedTeam });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('name', formData.name);
        form.append('college', formData.college);
        form.append('department', formData.department);
        form.append('year', formData.year);
        form.append('email', formData.email);
        form.append('phone', formData.phone);
        form.append('teamSize', formData.teamSize);
        formData.teamMembers.forEach((member, index) => {
            form.append(`teamMembers[${index}]`, member);
        });
        form.append('image', formData.image);

        try {
            const res = await axios.post('http://localhost:5000/api/register/Work1', form, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Registration successful!');
            console.log(res.data);
        } catch (err) {
            console.error('Error submitting form:', err);
            alert('Registration failed!');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">Event Registration</h2>
                <input name="name" onChange={handleChange} placeholder="Name" className="block p-2 border mb-2 w-full" required />
                <input name="college" onChange={handleChange} placeholder="College Name" className="block p-2 border mb-2 w-full" required />
                <input name="department" onChange={handleChange} placeholder="Department" className="block p-2 border mb-2 w-full" required />
                <input name="year" onChange={handleChange} placeholder="Year" className="block p-2 border mb-2 w-full" required />
                <input name="email" type="email" onChange={handleChange} placeholder="Email" className="block p-2 border mb-2 w-full" required />
                <input name="phone" onChange={handleChange} placeholder="Phone Number" className="block p-2 border mb-2 w-full" required />
                
                <label className="block mt-2">Team Size:</label>
                <select name="teamSize" onChange={handleTeamSizeChange} className="block p-2 border mb-2 w-full">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                {formData.teamMembers.map((_, index) => (
                    <input key={index} type="text" placeholder={`Team Member ${index + 1}`} className="block p-2 border mb-2 w-full"
                        onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                    />
                ))}

                <label className="block mt-2">Upload Image:</label>
                <input type="file" onChange={handleImageChange} className="block p-2 border mb-2 w-full" required />

                <button type="submit" className="bg-blue-600 text-white p-2 w-full">Register</button>
            </form>
        </div>
    );
};

export default Register;
