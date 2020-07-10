import React from 'react';
import PropTypes from 'prop-types';

import ShelfSelector from './ShelfSelector';

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
        <ShelfSelector />
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.author}</div>
    </div>
  );
};

Book.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Book;
