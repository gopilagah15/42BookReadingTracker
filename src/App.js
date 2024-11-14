import React, { useState } from 'react'; 
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Reports from './components/Reports';

const App = () => {
  const [books, setBooks] = useState([]);

  // Add a book to the list
  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="App">
      <h1>Book Reading Tracker</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} />
      <Reports books={books} />
    </div>
  );
};

export default App;
