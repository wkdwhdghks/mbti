export default function FoodListItme({ item }) {
  return (
    <div>
      <img src={item.imgUrl} alt={item.title} />
      {item.title}
      {item.content}
    </div>
  );
}
