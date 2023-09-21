export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((x) => x.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? "You packed everything, Ready to go 🌍"
        : `💼 You have ${numItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}
    </footer>
  );
}
