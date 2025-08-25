# 📚 BookApp - Online Library System

This is a React-based **Online Library System** built using **Vite, React Router, and Redux Toolkit**.  
It allows users to browse books by category, search, view details, and add new books.

---

## 🚀 Features
- **Home Page**
  - Welcome message
  - List of book categories (Fiction, Sci-Fi, Biography, etc.)
  - Popular books section with links to details
  - Navigation bar (`Home`, `Browse Books`, `Add Book`)

- **Browse Books**
  - List of all books
  - Search by title or author
  - Filter books by category (dynamic route `/books/:category`)
  - Each book has a **View Details** link

- **Book Details**
  - Shows title, author, description, rating
  - Back button to Browse page
  - Dynamic route `/details/:id`

- **Add Book**
  - Form to add new book
  - Validation (all fields required)
  - Uses Redux to update book list
  - Redirects to Browse page after submission

- **404 Page**
  - Custom “Page Not Found” with a Home link

---

## 🛠️ Tech Stack
- React (Vite)
- React Router v6
- Redux Toolkit (for state management)
- Plain CSS & inline styles (no Tailwind)

---
------------------------------------------------------------------------------------------------------------------------------
## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/ashish-24i/BookApp.git
cd BookApp

--------------------------------------------------------------------------------------------------------

2. Install dependencies
npm install

------------------------------------------------------------------------------------------------------------
3. Start development server
npm run dev

-------------------------------------------------------------------------------------------------------------
Then open the URL shown in terminal (usually http://localhost:5173).
------------------------------------------------------------------------------------------------------------
Project Structure:-

src/
 ├── App.jsx
 ├── main.jsx
 ├── index.css
 └── components/
      ├── Navbar.jsx
      ├── Home.jsx
      ├── BrowseBooks.jsx
      ├── BookDetails.jsx
      ├── AddBook.jsx
      ├── NotFound.jsx
      └── booksSlice.js

 How to Use:------------------------------

Go to Home Page → explore categories & popular books.

Click Browse Books → search or filter by category.

Click View Details → see full info of a book.

Go to Add Book → fill the form → new book appears in Browse.

Try a wrong URL → see 404 Page.

-------------------------------------------------------

Author:- Ashish Kumar Singh



