const Book = ({ item, moveToShelf, onDragStart }) => {
  return (
    <div
      className="book-overview"
      draggable="true"
      onDragStart={onDragStart}
    >
      <div className="book-info">
        <img
          src={item.imageLinks ? item.imageLinks.thumbnail : ""}
          alt={item.title}
        ></img>
      </div>
      <div className="actions">
        <select
          onChange={(e) => {
            moveToShelf(item, e.target.value);
          }}
          defaultValue={item.shelf}
        >
          <option value="" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
  );
};

export default Book;
