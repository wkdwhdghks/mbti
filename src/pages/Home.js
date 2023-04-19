import { Link } from "react-router-dom";
import mock from "../mock.json";
import { useState } from "react";

export default function Home() {
  const { results } = mock;
  const [filter, setFilter] = useState(null);

  return (
    <div>
      <h1>MBTI별 좋아하는 컬러</h1>
      <div>
        <Link to="/new">+ 새 컬러 등록하기</Link>
        {filter && (
          <div onClick={() => setFilter(null)}>
            {filter}
            <img src="/images/_x.svg" alt="필터 삭제" />
          </div>
        )}
        <ul>
          {results.map((item) => (
            <li key={item.id} onClick={() => setFilter(item.mbti)}>
              {item.id} {item.mbti} --- {item.colorCode}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
