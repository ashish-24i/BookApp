import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Navbar from "./NavBar";

export default function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState("");
  const books = useSelector((state) => state.books);

  const filtered = books.filter((book) => {
    const matchesCategory = category ? book.category.toLowerCase() === category.toLowerCase() : true;
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Browse Books</h1>

      {/* Search Bar */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
      </div>

      {/* Book List */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", marginTop: "30px" }}>
        {filtered.map((book) => (
          <div key={book.id} style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", width: "200px" }}>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p><b>{book.category}</b></p>
            <Link to={`/details/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
