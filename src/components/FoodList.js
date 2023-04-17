import FoodListItme from "./FoodListItme";
import "./FoodList.css";

export default function FoodList({ items, onDelete }) {
  return (
    <li className="FoodList">
      {items.map((item) => (
        <FoodListItme item={item} onDelete={onDelete} />
      ))}
    </li>
  );
}
