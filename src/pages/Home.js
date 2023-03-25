import BookShelf from "../components/BookShelf";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getAll, update } from "../utils/BooksAPI";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getAll().then((data) => {
      setBooks(data);
    });
  };

  const moveToShelf = (item, shelf) => {
    update(item, shelf).then(() => {
      getData();
    });
  };

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("id", item.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, shelf) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const draggedItem = books.find(book=> book.id === id);
    if (draggedItem) {
      moveToShelf(draggedItem, shelf);
    }
  };

  return (
    <main className="container categories">
      <BookShelf
        shelfId={"currentlyReading"}
        title={"Currently Reading"}
        items={books.filter((x) => x.shelf === "currentlyReading")}
        moveToShelf={moveToShelf}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
      <BookShelf
        shelfId={"wantToRead"}
        title={"Want to Read"}
        items={books.filter((x) => x.shelf === "wantToRead")}
        moveToShelf={moveToShelf}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        />
      <BookShelf
        shelfId={"read"}
        title={"Read"}
        items={books.filter((x) => x.shelf === "read")}
        moveToShelf={moveToShelf}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
      <div className="search">
        <Link to="/search">
          <AiOutlinePlus />
        </Link>
      </div>
    </main>
  );
};

export default Home;
