import FoodListItme from "./FoodListItme";
import "./FoodList.css";

export default function FoodList({ items, onDelete }) {
  return (
    <ul className="FoodList">
      {items.map((item) => (
        <li key={item.id}>
          <FoodListItme item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
