import React from "react";
import { Link } from "wouter";
import "../stylesheets/Logo.css";

export default function Logo() {
  return (
    <div className="logoContainer">
      <figcaption className="logoContainer__fig">
        <Link to="/Giphy-App-v2">
          <img src="../public/Logo.png" alt="Page Logo" title="Home" />
        </Link>
      </figcaption>
    </div>
  );
}
