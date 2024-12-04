import React, { useState } from "react";
import axios from "axios";
import "./Search.css"; // Assuming the CSS file for styling

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.get("http://localhost:8081/ingredients/search", {
                params: { query, size: 1, page: 0 },
            });

            console.log("Search result data:", response.data);
            setResults(response.data.results || []); // Ensure the `results` key is mapped correctly
        } catch (err) {
            console.error("Error during search request:", err);
            setError("Failed to fetch search results. Please try again later.");
        }
    };

    return (
        <div className="search-container">
            <h1>Product Search</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="input-field"
                    required
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <div className="results-container">
                {results.length > 0 ? (
                    results.map((item, index) => (
                        <div key={index} className="result-item">
                            <h3>{item.title}</h3>
                            {item.discounted_price && (
                                <p>
                                    <strong>Discounted Price:</strong> {item.currency} {item.discounted_price.toFixed(2)}
                                </p>
                            )}
                            {item.normal_price && (
                                <p>
                                    <strong>Normal Price:</strong> {item.currency} {item.normal_price.toFixed(2)}
                                </p>
                            )}
                            {item.unit_price_description && (
                                <p>
                                    <strong>Unit Price:</strong> {item.unit_price_description}
                                </p>
                            )}
                            {item.sales_unit_size && (
                                <p>
                                    <strong>Sales Unit Size:</strong> {item.sales_unit_size}
                                </p>
                            )}
                            {item.bonus_description ? (
                                <p>
                                    <strong>Bonus:</strong> {item.bonus_description}
                                </p>
                            ) : (
                                <p>
                                    <strong>Bonus:</strong> None
                                </p>
                            )}
                            <p>
                                <strong>Available Online:</strong> {item.available_online ? "Yes" : "No"}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No results found. Try refining your search.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
