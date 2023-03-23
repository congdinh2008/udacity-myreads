import Book from "./Book";

const BookShelf = ({
  shelfId,
  title,
  items = [],
  moveToShelf,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <section
      className="book-shelf"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, shelfId)}
    >
      <h2>{title}</h2>
      <div className="shelf">
        {items &&
          items.length > 0 &&
          items.map((item) => {
            return (
              <Book
                key={item.id}
                item={item}
                moveToShelf={moveToShelf}
                onDragStart={(e) => handleDragStart(e, item)}
              />
            );
          })}
      </div>
    </section>
  );
};

export default BookShelf;
