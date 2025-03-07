import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleOnSubmit(event) {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  }
  return (
    <form className="d-flex" onSubmit={handleOnSubmit}>
      <input
        className="form-control"
        type="text"
        value={searchTerm}
        placeholder="Search for Books"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}
export default SearchBar;
