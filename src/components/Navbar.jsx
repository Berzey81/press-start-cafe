import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          🎮 Press Start Café
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Menu</a>
            </li>
              <li className="nav-item">
              <a className="nav-link">Menu</a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
