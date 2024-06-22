



function FilterComponent({ searchTerm, selectedCategories, onSearchTermChange, onCategoryChange }) {
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    onSearchTermChange(newSearchTerm);
  };

  const handleCategoryChange = (category) => {
    // Toggles the selected category
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    onCategoryChange(updatedCategories);
  };

  return (
    <div className="filter-component">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={handleSearchChange}
      />

    
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Electronics')}
            onChange={() => handleCategoryChange('Electronics')}
          />
          Electronics
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Clothing')}
            onChange={() => handleCategoryChange('Clothing')}
          />
          Clothing
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Books')}
            onChange={() => handleCategoryChange('Books')}
          />
          Books
        </label>
        
      </div>
    </div>
  );
}

export default FilterComponent;
