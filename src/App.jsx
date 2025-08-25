import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BrowseBooks from "./components/BrowseBooks";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<BrowseBooks />} />
      <Route path="/books/:category" element={<BrowseBooks />} />
      <Route path="/details/:id" element={<BookDetails />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
