import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    college: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const file = formData.file;
    if (!file) {
      alert("Please upload a payment screenshot.");
      setLoading(false);
      return;
    }
  
    // Create a safe filename using timestamp and original filename
    const timestamp = Date.now();
    const safeFileName = `${timestamp}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = `payments/${safeFileName}`;
    
    console.log("Uploading file:", filePath);
  
    // Upload the file
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('payments')
      .upload(filePath, file);
  
    if (uploadError) {
      console.error("Upload Error:", uploadError.message);
      alert(`File upload failed! Reason: ${uploadError.message}`);
      setLoading(false);
      return;
    }
  
    // Get the public URL for the uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from('payments')
      .getPublicUrl(filePath);

    console.log("File Uploaded Successfully. Public URL:", publicUrl);
  
    // Insert the record with the public URL
    const { error } = await supabase.from("Event1").insert([{ 
      name: formData.name, 
      phone: formData.phone, 
      email: formData.email, 
      college: formData.college, 
      file: publicUrl  // Store the public URL instead of just the path
    }]);
  
    if (error) {
      console.error("Database Insert Error:", error.message);
      alert(`Registration failed! Reason: ${error.message}`);
    } else {
      alert('Registration successful!');
      // Clear form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        college: "",
        file: null
      });
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
    }
  
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white shadow-md rounded-md">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="college"
        placeholder="College"
        value={formData.college}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        required
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegistrationForm;