import React, { Component } from "react";
import PropTypes from "prop-types";
// Components
import BookShelf from "./BookShelf";

/*
 *   BookCase Class - component that represents the book shelf.  The bookcase holds multiple shelves.
 */

export class BookCase extends Component {
  static propTypes = {
    shelves: PropTypes.array.isRequired
  };

  getBooks = (shelf) =>
    this.props.books.filter(
      (book) =>
        shelf.replace(/ /g, "").toLowerCase() === book.shelf.toLowerCase()
    );

  render() {
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div>
            {this.props.shelves.map((shelf) => (
              <BookShelf
                shelfName={shelf}
                books={this.getBooks(shelf)}
                key={shelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default BookCase;
