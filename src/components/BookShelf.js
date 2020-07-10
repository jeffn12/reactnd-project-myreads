import React, { Component } from "react";

import Book from "./Book.js";

/*
 *   BookShelf Class - component that represents a shelf in the bookcase.  A shelf holds the books that are associated with its category
 */

export class BookShelf extends Component {
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
