import React, { useState } from "react";

const ShoppingList = ({ items = [] }) => {  // Default to an empty array
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on the selected category
  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;

  return (
    <div>
      <select
        role="combobox"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>

      <div className="Items">
        {/* Ensure filteredItems is an array before using .map() */}
        {Array.isArray(filteredItems) && filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))
        ) : (
          <p>No items to display</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
