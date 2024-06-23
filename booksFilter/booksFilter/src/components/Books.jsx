
import { useEffect, useState } from 'react';
import { getAll, search, update } from './ApiComponent';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getAll().then(data => {
      setBooks(data);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    search(query).then(data => {
      setSearchResults(data);
    });
  };

  const handleUpdate = (book, shelf) => {
    update(book, shelf).then(updatedBook => {
      setBooks(books.map(b => (b.id === updatedBook.id ? updatedBook : b)));
    });
  };

  return (
    <div>
      <h2>Book search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books"
        />
        <button type="submit">Search</button>
      </form>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map(book => (
          <li key={book.id}>
            {book.title}
            <button onClick={() => handleUpdate(book, 'read')}>Mark as Read</button>
          </li>
        ))}
      </ul>
      <h2>All Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title}
            <button onClick={() => handleUpdate(book, 'read')}>Mark as Read</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
