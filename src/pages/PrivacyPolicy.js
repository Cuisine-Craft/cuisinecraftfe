import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <h1>Privacy Policy</h1>
            <p>Effective Date: 15-01-2025</p>
            <p>Last Updated: 15-01-2025</p>

            <h2>1. Data We Collect</h2>
            <p>
                When you use the login page, we collect the following data:
                <ul>
                    <li>Username: Used for identification and account management.</li>
                    <li>Password: Used for authentication. Passwords are securely hashed and not stored in plain text.</li>
                    <li>IP Address: Collected for security purposes, including fraud detection and prevention.</li>
                </ul>
            </p>

            <h2>2. Purpose of Data Collection</h2>
            <p>
                We collect and process your personal data for the following purposes:
                <ul>
                    <li>To authenticate your login and provide access to your account.</li>
                    <li>To maintain the security and functionality of our platform.</li>
                    <li>To detect and prevent unauthorized access or fraudulent activities.</li>
                </ul>
            </p>

            <h2>3. Legal Basis for Processing</h2>
            <p>
                Under the GDPR, we process your personal data based on:
                <ul>
                    <li>Contractual Necessity: To provide you with access to the platform as part of our agreement.</li>
                    <li>Legitimate Interest: To ensure the security of our systems and services.</li>
                </ul>
            </p>

            {/* Add the remaining sections similarly */}

            <h2>Contact Us</h2>
            <p>
                If you have any questions, please contact us at: <br />
                Email: ariel.clarence.t@gmail.com <br />
                Address: Willem de Zwijgestraat 3 <br />
                Phone: 0684318401
            </p>
        </div>
    );
};

export default PrivacyPolicy;
