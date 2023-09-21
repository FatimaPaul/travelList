import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(newItem) {
    setItems((i) => [...i, newItem]);
  }

  function handleDelete(id) {
    setItems((i) => i.filter((y) => y.id !== id));
  }

  function handleCheckbox(id) {
    setItems((i) =>
      i.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addOnItems={handleItems} />
      <PackageList
        totalItems={items}
        onDeleteItem={handleDelete}
        onCheckbox={handleCheckbox}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
