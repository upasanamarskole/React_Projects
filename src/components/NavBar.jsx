import SearchBar from "./SearchBar";

function NavBar({ onSearch }) {
  return (
    <div className="container md-4">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            BookShelf
          </a>
          <SearchBar onSearch={onSearch} />
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
