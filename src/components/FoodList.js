import items from "../mock.json";
import FoodListItme from "./FoodListItme";

export default function FoodList() {
  return (
    <li>
      {items.map((item) => (
        <FoodListItme item={item} />
      ))}
    </li>
  );
}
