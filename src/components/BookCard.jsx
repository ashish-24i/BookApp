import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src={book.image} alt={book.title} className="rounded-lg mb-4 w-full h-60 object-cover" />
      <h4 className="text-xl font-bold">{book.title}</h4>
      <p className="text-gray-600">by {book.author}</p>
      <Link to={`/details/${book.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
}
