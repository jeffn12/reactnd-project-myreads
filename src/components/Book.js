import React from "react";
import PropTypes from "prop-types";
// Components
import ShelfSelector from "./ShelfSelector";

/*
 *   Book - functional component that represents an individual book
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
            backgroundImage: `url(${props.url})`
          }}
        />
        <ShelfSelector
          shelf={props.shelf}
          updateBook={(newShelf) => props.updateBook(props, newShelf)}
        />
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.author}</div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default Book;
