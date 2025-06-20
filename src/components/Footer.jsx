import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">
          ⏰ Open Daily: 8am – 10pm | 🎮 Stay caffeinated. Keep gaming.
        </p>
        <p className="mb-1">
          ☕ Follow us on
          {" "}
          <a href="https://instagram.com" className="text-warning text-decoration-none" target="_blank" rel="noreferrer">
            Instagram
          </a>, 
          {" "}
          <a href="https://twitter.com" className="text-info text-decoration-none" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </p>
        <p className="mb-0 text-muted small">&copy; 2025 Press Start Café. All rights reserved.</p>
      </div>
    </footer>
  );
}
