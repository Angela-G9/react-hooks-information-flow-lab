// src/__tests__/ShoppingList.test.js
import { render, screen } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

const testData = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Carrot", category: "Vegetables" },
  { id: 3, name: "Milk", category: "Dairy" },
];

test("displays all items when initially rendered", () => {
  render(<ShoppingList items={testData} selectedCategory="All" />);
  const itemElements = screen.getAllByRole("listitem");
  expect(itemElements).toHaveLength(testData.length);
});
