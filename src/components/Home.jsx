import React from "react";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";

export default function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Biography"];
  const popularBooks = [
    { id: 1, title: "The Silent Forest", author: "Emily Carter" },
    { id: 2, title: "Into the Stars", author: "Alex Brown" },
    { id: 3, title: "The Lost Kingdom", author: "Sarah Johnson" },
  ];

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Welcome to the Online Library 📚</h1>

      {/* Categories */}
      <h2 style={{ marginTop: "20px", textAlign: "center" }}>Categories</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "10px" }}>
        {categories.map((cat, idx) => (
          <Link key={idx} to={`/books/${cat}`} style={{ padding: "8px 12px", border: "1px solid #333", borderRadius: "5px" }}>
            {cat}
          </Link>
        ))}
      </div>

      {/* Popular Books */}
      <h2 style={{ marginTop: "30px", textAlign: "center" }}>Popular Books</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "15px" }}>
        {popularBooks.map(book => (
          <div key={book.id} style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px" }}>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <Link to={`/details/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
