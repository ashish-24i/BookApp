import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./NavBar";

export default function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id === Number(id));

  if (!book) return <h2 style={{ textAlign: "center" }}>Book not found</h2>;

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>{book.title}</h1>
      <p style={{ textAlign: "center" }}>by {book.author}</p>
      <p style={{ textAlign: "center", marginTop: "10px" }}>{book.description}</p>
      <p style={{ textAlign: "center" }}>⭐ {book.rating}</p>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/browse">⬅ Back to Browse</Link>
      </div>
    </div>
  );
}
