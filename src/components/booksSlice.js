import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialBooks = [
  { id: 1, title: "The Silent Forest", author: "Emily Carter", category: "Fiction", description: "A mystery thriller.", rating: 4.5 },
  { id: 2, title: "Into the Stars", author: "Alex Brown", category: "Sci-Fi", description: "Exploring the galaxy.", rating: 4.7 },
  { id: 3, title: "The Lost Kingdom", author: "Sarah Johnson", category: "Biography", description: "A forgotten realm.", rating: 4.3 },
];

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push({ id: state.length + 1, ...action.payload });
    }
  }
});

export const { addBook } = booksSlice.actions;

const store = configureStore({
  reducer: {
    books: booksSlice.reducer
  }
});

export default store;
