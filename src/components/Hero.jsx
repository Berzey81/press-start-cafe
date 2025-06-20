import React from "react";
import "../styles/Hero.scss";

export default function Hero() {
  return (
    <section id="home" className="hero d-flex align-items-center text-light">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Press Start Café</h1>
        <p className="lead mb-4">
          Where retro games and fresh brews come together.
        </p>
        <a href="#menu" className="btn btn-warning btn-lg px-4">
          View Menu
        </a>
      </div>
    </section>
  );
}
