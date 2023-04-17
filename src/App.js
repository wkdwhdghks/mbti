import { useState } from "react";
import FoodList from "./components/FoodList";
import MockItems from "./mock.json";

export default function App() {
  const [items, setItems] = useState(MockItems);
  const [sort, setSort] = useState("createdAt");
  const sortItems = items.sort((a, b) => b[sort] - a[sort]);

  const handleChangeNewest = () => setSort("createdAt");

  const handleChangeCalories = () => setSort("calorie");

  const handleDeleteItem = (id) => {
    const del = items.filter((item) => item.id !== id);
    setItems(del);
  };

  return (
    <div>
      <div>
        <button onClick={handleChangeNewest}>최신순</button>
        <button onClick={handleChangeCalories}>칼로리순</button>
      </div>
      <FoodList items={sortItems} onDelete={handleDeleteItem} />
    </div>
  );
}
