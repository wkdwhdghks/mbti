import { useState } from "react";
import FoodList from "./components/FoodList";
import items from "./mock.json";

export default function App() {
  const [sort, setSort] = useState("createdAt");
  const sortItems = items.sort((a, b) => b[sort] - a[sort]);

  const handleChangeNewest = () => {
    setSort("createdAt");
  };

  const handleChangeCalories = () => {
    setSort("calorie");
  };

  return (
    <div>
      <div>
        <button onClick={handleChangeNewest}>최신순</button>
        <button onClick={handleChangeCalories}>칼로리순</button>
      </div>
      <FoodList items={sortItems} />
    </div>
  );
}
