function BookCard({ book, onSeeMore }) {
  const {
    title = "No Title Available",
    authors = ["Unknown Author"],
    imageLinks = {},
    description = "No Description Available",
    publishedDate = "No Published Date Available",
  } = book.volumeInfo;
  const thumbnail = imageLinks.thumbnail || "https://placehold.co/180x280";
  return (
    <div className="col-md-4 col-lg-3 mt-4">
      <div className="card">
        <img className="card-img-top" src={thumbnail} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{authors.join(", ")}</p>
          <button onClick={() => onSeeMore(book)} className="btn btn-primary">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
