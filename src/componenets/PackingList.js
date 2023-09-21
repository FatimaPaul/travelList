import { useState } from "react";
import Item from "./Item";

export default function PackageList({
  onClearList,
  totalItems,
  onDeleteItem,
  onCheckbox,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  // Normal
  if (sortBy === "input") {
    sortedItems = totalItems;
  }

  // alphabetical order
  if (sortBy === "description") {
    sortedItems = totalItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  // packed items
  if (sortBy === "packed") {
    sortedItems = totalItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onCheckbox={onCheckbox}
            onDelete={onDeleteItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
