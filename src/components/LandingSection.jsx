import React from "react";

export default function LandingSection() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Biography"];

  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold mb-4">Welcome to the Book App</h2>
      <p className="text-lg mb-6">Explore your favorite books and discover new categories!</p>
      <div className="flex justify-center gap-6 flex-wrap">
        {categories.map((cat, index) => (
          <span key={index} className="px-4 py-2 bg-blue-100 rounded-lg shadow-md">
            {cat}
          </span>
        ))}
      </div>
    </section>
  );
}
