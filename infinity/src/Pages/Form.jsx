import React, { useState } from 'react';
import './Events.css';

function Form({ type, event }) {
    const max = 3, min = 1; // define min and max size
    const [names, setNames] = useState([""]);
    const [emails, setEmails] = useState([""]);
    const [message, setMessage] = useState("");

    const handleAddName = () => {
        setNames([...names, ""]); 
    };

    const handleAddEmail = () => {
        setEmails([...emails, ""]); 
    };

    const handleChangeName = (index, event) => {
        const newNames = [...names];
        newNames[index] = event.target.value;
        setNames(newNames);
    };

    const handleChangeEmail = (index, event) => {
        const newEmails = [...emails];
        newEmails[index] = event.target.value;
        setEmails(newEmails);
    };

    const handleAdd = () => {
        if (names.length < max) {
            handleAddName();
            handleAddEmail();
        }
    };

    const handleRemove = () => {
        if (names.length > min) {
            setNames(names.slice(0, -1));
            setEmails(emails.slice(0, -1));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const participants = names.map((name, index) => ({
            name: name.trim(),
            email: emails[index]?.trim()
        }));

        const formData = {
            participants,
            event
        };

        try {
            const response = await fetch('http://localhost:15000/Register', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            setMessage("Successfully Registered!");
            setNames([""]); 
            setEmails([""]);
        } catch (error) {
            console.error(error);
            setMessage("Registration Failed. Try again.");
        }
    };

    if (type === 'i') {
        return (
            <div className='container-2'>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value={names[0]} onChange={(e) => handleChangeName(0, e)} required />
                    <label>Email:</label>
                    <input type="email" value={emails[0]} onChange={(e) => handleChangeEmail(0, e)} required />
                    <input type="hidden" value={event} />
                    <input type="submit" value="Register" className='button' />
                </form>
                <p>{message}</p>
            </div>
        );
    }

    return (
        <div className='container-2'>
            <div className='buttons'>
                <button onClick={handleAdd} className="button">Add Member</button>
                <button onClick={handleRemove} className="button">Remove Member</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='members'>
                    {names.map((name, index) => (
                        <div key={index} className='member'>
                            <label>Name:</label>
                            <input type="text" value={name} onChange={(e) => handleChangeName(index, e)} required />
                            <label>Email:</label>
                            <input type="email" value={emails[index]} onChange={(e) => handleChangeEmail(index, e)} required />
                        </div>
                    ))}
                </div>
                <input type="hidden" value={event} />
                <input type="submit" value="Register" className='button' />
            </form>
            <p>{message}</p>
        </div>
    );
}

export default Form;
