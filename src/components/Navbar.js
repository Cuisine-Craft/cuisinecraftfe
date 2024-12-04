import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">CuisineCraft</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
