import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      genre,
      startDate,
      endDate,
    };
    addBook(book);
    setTitle('');
    setAuthor('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log a New Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <label>Start Date:</label>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <label>End Date:</label>
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
