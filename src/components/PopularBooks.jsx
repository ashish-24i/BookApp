import React from "react";
import BookCard from "./BookCard";

export default function PopularBooks() {
  const books = [
    { id: 1, title: "The Silent Forest", author: "Emily Carter", image: "https://picsum.photos/200/300?random=1" },
    { id: 2, title: "Into the Stars", author: "Alex Brown", image: "https://picsum.photos/200/300?random=2" },
    { id: 3, title: "The Lost Kingdom", author: "Sarah Johnson", image: "https://picsum.photos/200/300?random=3" },
  ];

  return (
    <section className="px-10 py-8">
      <h3 className="text-2xl font-semibold mb-6">Popular Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </section>
  );
}
