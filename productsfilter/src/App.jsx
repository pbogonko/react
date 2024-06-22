import  { useState } from 'react';
import './App.css'


import FilterComponent from './components/filter/filterComponent';
import ProductListComponent from './components/filter/productsList';
import products from './components/filter/products';

function App() {
  // State for search term and selected categories
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Callback function to update search term
  const handleSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  const handleCategoryChange = (selected) => {
    setSelectedCategories(selected);
  };

  return (
    <div className="App">
      <h2>E-Commerce app</h2>
      <FilterComponent
        searchTerm={searchTerm}
        selectedCategories={selectedCategories}
        onSearchTermChange={handleSearchTermChange}
        onCategoryChange={handleCategoryChange}
      />
      <ProductListComponent
        searchTerm={searchTerm}
        selectedCategories={selectedCategories}
        products={products} 
      />
    </div>
  );
}

export default App;

