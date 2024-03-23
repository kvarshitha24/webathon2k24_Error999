import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
    const navigate=useNavigate()

    // Function to handle logout
    const handleLogout = () => {
        // Remove token from local storage
        localStorage.removeItem('loggedInUser');
        // Redirect to the home page or any other desired page after logout
        navigate('/');
    };

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('loggedInUser'));

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">PrepQuest</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ms-2 me-5">
                        <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item  me-5">
                        <Link className="nav-link text-white" to="/Upload">Upload</Link>
                    </li>
                    {userData ? (
                        // If user is logged in, show Profile and Logout links
                        <>
                            <li className="nav-item  me-5">
                                <Link className="nav-link text-white" to="/Profile">Profile</Link>
                            </li>
                            <li className="nav-item  me-3">
                                <button className="nav-link text-white btn btn-link" onClick={handleLogout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        // If user is not logged in, show Login link
                        <li className="nav-item ms-2 me-5">
                            <Link className="nav-link text-white" to="/Login">Login</Link>
                        </li>
                    )}
                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
