import React, { Component } from "react";
import PropTypes from "prop-types";
//Components
import Book from "./Book.js";

/*
 *   BookShelf Class - component that represents a shelf in the bookcase.  A shelf holds the books that are associated with its category
 */

export class BookShelf extends Component {
  static propTypes = {
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <Book
                title={book.title}
                author={book.author}
                url={book.url}
                shelf={this.props.shelfName}
                key={book.title}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
