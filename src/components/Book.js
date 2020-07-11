import React from "react";
import PropTypes from "prop-types";
// Components
import ShelfSelector from "./ShelfSelector";

/*
 *   Book - functional component that represents an individual book
 *    -expects a book object and handles validation and information parsing within component
 */

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              props.book.imageLinks // If no thumbnail is provided, use stock image
                ? props.book.imageLinks.thumbnail
                : "No_Cover.jpg"
            })`
          }}
        />
        <ShelfSelector
          shelf={
            props.book.shelf // Use the shelf if given, otherwise search the library for it
              ? props.book.shelf
              : props.getCurrentShelf(props.book)
          }
          updateBook={(newShelf) => props.updateBook(props.book, newShelf)}
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">
        {props.book.authors ? props.book.authors.join(", ") : ""}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired,
  getCurrentShelf: PropTypes.func.isRequired
};

export default Book;
