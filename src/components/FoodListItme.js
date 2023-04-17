import "./FoodListItem.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export default function FoodListItme({ item, onDelete }) {
  const { id, imgUrl, title, calorie, content, createdAt } = item;

  const handleClick = () => onDelete(id);

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <div>{formatDate(createdAt)}</div>
      <button onClick={handleClick}>삭제</button>
    </div>
  );
}
