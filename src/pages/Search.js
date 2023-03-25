import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search, update, getAll } from "../utils/BooksAPI";
import BookShelf from "../components/BookShelf";
import { FaArrowLeft } from "react-icons/fa";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchBooks([]);
    } else {
      search(searchQuery, 10).then((data) => {
        if (Array.isArray(data)) {
          getAll().then(myBooks => {
            if(Array.isArray(myBooks)){
              data.map((item) => {
                const existedBook = myBooks.find((b) => b.id === item.id);
                item.shelf =
                  existedBook && existedBook.shelf ? existedBook.shelf : "none";
                return item;
              });
              setSearchBooks(data);
            } else{
              setSearchBooks(data);
            }
          });
        } else {
          setSearchBooks([]);
        }
      });
    }
  }, [searchQuery]);

  const changeSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  const moveToShelf = (item, shelf) => {
    update(item, shelf);
  };

  return (
    <section className="search-section">
      <div className="form-search">
        <Link to="/" className="btn btn-back">
          <FaArrowLeft />
        </Link>
        <input
          type="text"
          placeholder="Search by title, author or ISBN"
          onChange={changeSearchQuery}
          value={searchQuery}
        />
      </div>
      <div className="search-books">
        <BookShelf
          title={"Result"}
          items={searchBooks}
          moveToShelf={moveToShelf}
        />
      </div>
    </section>
  );
};

export default Search;
