import React, { useState } from 'react';
import sneklogo from '../../assets/sneklogo.svg';
import moon from '../../assets/moon.f0a04b0d.svg';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={sneklogo} alt="Logo" />
        </a>
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Integrations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Brand</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <div className="buttons">
            <button className="switch-button">Get Snek</button>
            <button className="switch-button">Connect</button>
          </div>
        </div>
        <div className="round-image">
          <img src={moon} alt="Round Image" className="round-border" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
