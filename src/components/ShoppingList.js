// src/components/ShoppingList.js
import React from 'react';

function ShoppingList({ items = [], selectedCategory }) {
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <ul className="Items">
      {itemsToDisplay.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span className="category">{item.category}</span>
          <button>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
