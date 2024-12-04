import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; // Import CSS file for styling

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        passwordhash: "",
        phonenumber: "",
        email: "",
        address: "",
        role: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/user", formData);
            alert("User registered successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className="register-container">
            <h1 className="title">CuisineCraft</h1>
            <h2 className="subtitle">Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </label>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="passwordhash"
                        value={formData.passwordhash}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="text"
                        name="phonenumber"
                        value={formData.phonenumber}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="input-field"
                    />
                </label>
                <label>
                    Role:
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="input-field"
                    >
                        <option value="">Select Role</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </label>
                <button type="submit" className="register-button">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
