import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: "blue",
      color: "white",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>📚 Book App</h2>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/browse" style={{ color: "white", textDecoration: "none" }}>Browse Books</Link></li>
        <li><Link to="/add" style={{ color: "white", textDecoration: "none" }}>Add Book</Link></li>
      </ul>
    </nav>
  );
}
