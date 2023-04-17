import FoodListItme from "./FoodListItme";

export default function FoodList({ items }) {
  return (
    <li>
      {items.map((item) => (
        <FoodListItme item={item} />
      ))}
    </li>
  );
}
