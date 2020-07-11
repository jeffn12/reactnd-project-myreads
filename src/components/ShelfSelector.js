import React from "react";
import PropTypes from "prop-types";

/*
 *   ShelfSelector - functional component for choosing which shelf a book belongs on
 *    -it takes in a shelf name to highlight the appropriate option
 *
 */

const ShelfSelector = (props) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={props.shelf}
        onChange={(e) => props.updateBook(e.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfSelector.propTypes = {
  shelf: PropTypes.string.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default ShelfSelector;
