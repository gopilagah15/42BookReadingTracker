import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Books Logged</h2>
      {books.length === 0 ? (
        <p>No books logged yet.</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author} <br />
              Genre: {book.genre} <br />
              Start: {book.startDate.toDateString()} - End: {book.endDate.toDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
