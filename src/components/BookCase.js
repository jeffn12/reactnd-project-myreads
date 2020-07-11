import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Components
import BookShelf from "./BookShelf";

/*
 *   BookCase Class - component that represents the book shelf.  The bookcase holds multiple shelves.
 */

const BookCase = (props) => {
  // Get the books in library that belong on a given shelf
  const getBooks = (shelf) =>
    props.books.filter(
      (book) =>
        shelf.replace(/ /g, "").toLowerCase() === book.shelf.toLowerCase()
    );

  return (
    <div className="list-books">
      <div className="list-books-content">
        <div>
          {props.shelves.map((shelf) => (
            <BookShelf
              shelfName={shelf}
              books={getBooks(shelf)}
              updateBook={props.updateBook}
              getCurrentShelf={(book) => props.getCurrentShelf(book)}
              key={shelf}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Search</button>
        </Link>
      </div>
    </div>
  );
};

BookCase.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default BookCase;
