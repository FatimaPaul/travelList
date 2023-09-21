export default function Item({ item, onDelete, onCheckbox }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onCheckbox(item.id)}
      />
      <div style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span>{item.quantity} </span>
        <span>{item.description}</span>
      </div>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
