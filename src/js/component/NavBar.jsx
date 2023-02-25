import React from "react";


function NavBar () {
    return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
            <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white">Contact</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    );
};

export default NavBar;