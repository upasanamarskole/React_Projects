import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";

import useBooks from "./services/useBooks";
import { useState } from "react";
import BookDetails from "./components/BookDetails";

function App() {
  const { books, loading, setSearchTerm } = useBooks("fiction");
  const [selectedBook, setSelectedBook] = useState(null);
  function handleSearch(query) {
    setSearchTerm(query);
  }
  function handleSeeMore(book) {
    setSelectedBook(book.volumeInfo);
  }
  function handleCloseModal() {
    setSelectedBook(null);
  }
  return (
    <>
      <NavBar onSearch={handleSearch} />
      {loading ? (
        <div className="d-flex justify-content-center vh-100">
          <div className="spinner-border" role="status">
            <span className="visually-hidden ">Loading...</span>
          </div>
        </div>
      ) : (
        <BookList books={books} onSeeMore={handleSeeMore} />
      )}

      <Footer />
      {selectedBook && (
        <BookDetails book={selectedBook} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
