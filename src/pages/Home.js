import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../lib/axios";
import ColorSurvey from "../components/ColorSurvey";
import styles from "./Home.module.css";

export default function Home() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(null);

  async function handleLoad(mbti) {
    const res = await axios.get("/color-surveys/", {
      params: { mbti, limit: 20 },
    });
    const nextItems = res.data.results;
    setItems(nextItems);
  }

  useEffect(() => {
    handleLoad(filter);
  }, [filter]);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <h1 className={styles.heading}>
            MBTI별
            <br />
            <span className={styles.accent}>좋아하는 컬러</span>
          </h1>
          <div>
            {filter && (
              <div className={styles.filter} onClick={() => setFilter(null)}>
                {filter}
                <img
                  className={styles.removeIcon}
                  src="/images/_x.svg"
                  alt="필터 삭제"
                />
              </div>
            )}
          </div>
        </header>
      </div>
      <main className={styles.content}>
        <Link className={styles.addItem} to="/new">
          + 새 컬러 등록하기
        </Link>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.id}>
              <ColorSurvey value={item} onClick={() => setFilter(item.mbti)} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
