import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavLinkClick = () => {
        setIsNavOpen(false); // close on link click
        const navCollapse = document.querySelector('.navbar-collapse');
        if (navCollapse.classList.contains('show')) {
            navCollapse.classList.remove('show');
        }
    };

    const handleTogglerClick = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">

                <a className="navbar-brand d-flex align-items-center" href="#home">
                    <img src="/favicon.ico" alt="logo" style={{ width: '2rem', marginRight: '0.5rem' }} />
                    MyPortfolio
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isNavOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={handleTogglerClick}
                >
                    {isNavOpen ? (
                        <span style={{ fontSize: '1.5rem', color: 'white' }}>&times;</span>
                    ) : (
                        <span className="navbar-toggler-icon"></span>
                    )}
                </button>

                <div className="collapse navbar-collapse justify-content-center justify-content-lg-end" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#home" onClick={handleNavLinkClick}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={handleNavLinkClick}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={handleNavLinkClick}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project" onClick={handleNavLinkClick}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume" download onClick={handleNavLinkClick}>
                                Get My Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
