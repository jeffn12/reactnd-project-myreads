import React from "react";
import PropTypes from "prop-types";

/*
 *   ShelfSelector - functional component for choosing which shelf a book belongs on
 *
 */

const ShelfSelector = (props) => {
  // Parse the shelf name to camel case for comparison
  const getShelfName = () => {
    let shelfName =
      props.shelf.charAt(0).toLowerCase() +
      props.shelf.slice(1).replace(/ /g, "");
    return shelfName === "searchResults:" ? "none" : shelfName;
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={getShelfName()}
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