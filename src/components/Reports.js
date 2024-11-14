import React from 'react';

const Reports = ({ books }) => {
  // Count books by genre
  const booksByGenre = books.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
  }, {});

  // Count books by year
  const booksByYear = books.reduce((acc, book) => {
    const year = book.startDate.getFullYear();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Reading Reports</h2>

      <h3>Books by Genre</h3>
      {Object.keys(booksByGenre).length === 0 ? (
        <p>No data available</p>
      ) : (
        <ul>
          {Object.entries(booksByGenre).map(([genre, count]) => (
            <li key={genre}>
              {genre}: {count} books
            </li>
          ))}
        </ul>
      )}

      <h3>Books by Year</h3>
      {Object.keys(booksByYear).length === 0 ? (
        <p>No data available</p>
      ) : (
        <ul>
          {Object.entries(booksByYear).map(([year, count]) => (
            <li key={year}>
              {year}: {count} books
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reports;
