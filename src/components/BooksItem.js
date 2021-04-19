export const BooksItem = ({ data }) => {
  const {
    title,
    language,
    authors,
    imageLinks,
    publishedDate,
    previewLink,
  } = data.volumeInfo;
  return (
    <div className="col-sm-6 shadow-lg p-3 mb-5 bg-white rounded">
      <div className="card bg-secondary mb-3" style={{ width: 500 }}>
        <div className="row shadow-lg p-3 mb-5 text-center text-white ">
          <div className="card-body">
            <h3 className="card-body">{title}</h3>
          </div>

          <img
            style={{ width: 180 }}
            className="rounded mx-auto d-block"
            src={imageLinks && imageLinks.smallThumbnail}
          />
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Language: <span className="font-weight-bold">{language}</span>
          </li>
          <li className="list-group-item">
            Published date:{' '}
            <span className="font-weight-bold">{publishedDate}</span>
          </li>

          <li className="list-group-item">
            Authors: <span className="font-weight-bold">{authors}</span>
          </li>
          <li className="list-group-item">
            <a className="link-info" href={previewLink}>
              Watch on Google Books
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
