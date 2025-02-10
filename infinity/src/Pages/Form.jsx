import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Form() {
    const query = new URLSearchParams(useLocation().search);
    const event = query.get('event');

    const [members, setMembers] = useState([{ id: 1, name: '', email: '' }]);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(""); 

    var max=3,min=1 // define max and min 
    // Replace with your actual ImgBB API Key
    const IMGBB_API_KEY = "735c7c4573006a1488d0ebbcd20fa89b";

    const handleChange = (id, field, value) => {
        setMembers(members.map(member => 
            member.id === id ? { ...member, [field]: value } : member
        ));
    };

    const handleAdd = () => {
        if(members.length<=max)
        setMembers([...members, { id: members.length + 1, name: '', email: '' }]);
    };
    const handleRemove= ()=>{
        if(members.length>min){
        var newMembers=[...members];
        newMembers.pop();
        setMembers(newMembers);
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const uploadImageToImgBB = async () => {
        if (!image) return null;

        const formData = new FormData();
        formData.append("key", IMGBB_API_KEY);
        formData.append("image", image);

        try {
            const response = await fetch("https://api.imgbb.com/1/upload", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            return data.data.url; // Extract the image URL
        } catch (error) {
            console.error("Image Upload Error:", error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const uploadedImageUrl = await uploadImageToImgBB();
        if (!uploadedImageUrl) {
            alert("Image upload failed. Try again.");
            return;
        }

        setImageUrl(uploadedImageUrl);

        const requestBody = {
            participants: members.map(({ name, email }) => ({ name, email })),
            event: event,
            url: uploadedImageUrl
        };

        console.log("Final Request Body:", requestBody); // Debugging

        try {
            const response = await fetch("http://localhost:15000/Register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            const data = await response.json();
            console.log(data);
            document.getElementById('details').innerHTML=`${data.message}`;
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <h2 className="text-2xl font-bold mb-4">Register for {event}</h2>
            <form className="p-6" onSubmit={handleSubmit}>
                <div id="team" className="space-y-4">
                    {members.map((member) => (
                        <div key={member.id} className="flex flex-row items-center" id='member'>
                            <label className="text-white">Name:</label>
                            <input 
                                type="text" 
                                value={member.name}
                                onChange={(e) => handleChange(member.id, 'name', e.target.value)}
                                required
                                className="mt-1 p-2 w-64 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                            />
                            <label className="text-white mt-2">Email Id:</label>
                            <input 
                                type="text" 
                                value={member.email}
                                onChange={(e) => handleChange(member.id, 'email', e.target.value)}
                                required
                                className="mt-1 p-2 w-64 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                            />
                        </div>
                    ))}
                </div>

                {/* Image Upload */}
                <div className="mt-4">
                    <label className="text-white">Upload Payment Screenshot:</label>
                    <input 
                        type="file" 
                        onChange={handleImageChange}
                        className="mt-2 p-2 w-64 text-white"
                        id='file-button'
                    />
                </div>

                <button 
                    type="button" 
                    onClick={handleAdd} 
                    className="mt-4 border border-blue-500 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none"
                >
                    Add Member
                </button>
                <button
                className="mt-4 border border-red-500 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none ml-6"
                onClick={handleRemove}> Remove Member </button>
                <button 
                    type="submit" 
                    className="mt-4 border border-green-500 hover:bg-green-500 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none ml-10"
                >
                    Submit
                </button>
                <p id="details"></p>
            </form>
        </div>
    );
}

export default Form;
