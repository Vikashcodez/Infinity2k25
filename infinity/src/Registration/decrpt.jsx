import { useState } from 'react';
import axios from 'axios';
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as SelectPrimitive from "@radix-ui/react-select";
import qr from '../assets/QR/decrpt.jpeg'

// Label Component

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    {...props}
  />
));
Label.displayName = "Label";

// Input Component
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

// Card Components
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className="rounded-lg border bg-card text-card-foreground shadow-sm"
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className="flex flex-col space-y-1.5 p-6"
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className="text-2xl font-semibold leading-none tracking-tight"
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className="p-6 pt-0" {...props} />
));
CardContent.displayName = "CardContent";

// Select Components
const Select = SelectPrimitive.Root;

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className="flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    {...props}
  >
    {children}
    <SelectPrimitive.Icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 opacity-50"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white text-gray-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectValue = SelectPrimitive.Value;

// Main Registration Form Component
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

    const handleTeamSizeChange = (value) => {
        setFormData({
            ...formData,
            teamSize: value,
            teamMembers: Array(parseInt(value)).fill('')
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
            const res = await axios.post(`${API_BASE_URL}/api/register/Decryptorsassemble`, form, {
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
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                        <CardTitle className="text-3xl font-bold"><p className='text-white'>Decryptors Assemble</p></CardTitle>
                        <p className="mt-2 text-blue-100"></p>
                    </CardHeader>
                    
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name"><p className='text-white'>Full Name</p></Label>
                                    <Input 
                                        id="name" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleChange} 
                                        placeholder="Enter your full name" 
                                        required 
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <Label htmlFor="college"><p className='text-white'>College Name</p></Label>
                                    <Input 
                                        id="college" 
                                        name="college" 
                                        value={formData.college}
                                        onChange={handleChange} 
                                        placeholder="Enter your college name" 
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="department"><p className='text-white'>Department</p></Label>
                                    <Input 
                                        id="department" 
                                        name="department" 
                                        value={formData.department}
                                        onChange={handleChange} 
                                        placeholder="Your department" 
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="year"><p className='text-white'>Year</p></Label>
                                    <Input 
                                        id="year" 
                                        name="year" 
                                        value={formData.year}
                                        onChange={handleChange} 
                                        placeholder="Current year" 
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email"><p className='text-white'>Email Address</p></Label>
                                    <Input 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                        value={formData.email}
                                        onChange={handleChange} 
                                        placeholder="your.email@example.com" 
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone"><p className='text-white'>Phone Number</p></Label>
                                    <Input 
                                        id="phone" 
                                        name="phone" 
                                        value={formData.phone}
                                        onChange={handleChange} 
                                        placeholder="Your phone number" 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="teamSize"><p className='text-white'>Team Size</p></Label>
                                    <Select 
                                        value={formData.teamSize}
                                        onValueChange={handleTeamSizeChange}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select team size" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="0">Individual</SelectItem>
                                            <SelectItem value="1">1 Member</SelectItem>
                                            <SelectItem value="2">2 Members</SelectItem>
                                            
                                        </SelectContent>
                                    </Select>
                                </div>

                                {formData.teamMembers.map((member, index) => (
                                    <div key={index} className="space-y-2">
                                        <Label htmlFor={`teamMember${index}`}>Team Member {index + 1}</Label>
                                        <Input
                                            id={`teamMember${index}`}
                                            value={member}
                                            placeholder={`Enter team member ${index + 1} name`}
                                            onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="uploadImage"><p className='text-white'>Upload payment Screenshot</p></Label>
                                    <Input 
                                        id="uploadImage" 
                                        type="file" 
                                        onChange={handleImageChange} 
                                        required 
                                    />
                                    <Label htmlFor="uploadImage"><p className='text-white'>Note Image size should below 900KB</p></Label>
                                </div>

                                <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-700">Registration Fee: ₹150 per team</h3>
                                    <img 
                                        src={qr}
                                        alt="Payment QR Code"
                                        className="w-64 h-64 border-2 border-gray-300 rounded-lg"
                                    />
                                    <p className="text-sm text-gray-600">Scan QR code to complete payment</p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
                            >
                                Complete Registration
                            </button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Register;