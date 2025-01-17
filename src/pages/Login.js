import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/user/login", credentials);
            alert("Login successful!");
            localStorage.setItem("authToken", response.data.token);
            navigate("/search"); // Redirect to the search page
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please check your username and password.");
        }
    };

    return (
        <div className="login-container">
            <h1 className="title">CuisineCraft</h1>
            <h2 className="subtitle">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </label>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="privacy-policy-link">
                By logging in, you agree to our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
        </div>
    );
};

export default Login;
