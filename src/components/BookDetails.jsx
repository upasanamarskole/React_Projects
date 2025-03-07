function BookDetails({ book, onClose }) {
  const {
    title = "No Title Available",
    authors = ["Unknown Author"],
    imageLinks = {},
    description = "No Description Available",
    publishedDate = "No Published Date Available",
  } = book;
  const thumbnail = imageLinks.thumbnail || "https://placehold.co/180x280";
  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
          </div>
          <div className="modal-body">
            <img src={thumbnail} alt={title} className="img-fluid mb-3" />
            <p>
              <strong>Authors: </strong>
              {authors}
            </p>
            <p>
              <strong>Published date:</strong>
              {publishedDate}
            </p>
            <p>
              <strong>Description:</strong>
              {description}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookDetails;
