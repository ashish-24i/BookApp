import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./booksSlice";
import Navbar from "./NavBar";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !category || !description || !rating) {
      alert("All fields are required!");
      return;
    }
    dispatch(addBook({ title, author, category, description, rating }));
    navigate("/browse");
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Add a Book</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ padding: "8px", margin: "5px" }} />
        <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} style={{ padding: "8px", margin: "5px" }} />
        <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: "8px", margin: "5px" }} />
        <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ padding: "8px", margin: "5px" }} />
        <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} style={{ padding: "8px", margin: "5px" }} />
        <button type="submit" style={{ padding: "10px 15px", marginTop: "10px" }}>Add Book</button>
      </form>
    </div>
  );
}
