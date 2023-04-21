import { Link } from "react-router-dom";
import MBTISelect from "../components/MBTISelect";
import { useState } from "react";

export default function New() {
  const [formValue, setFormValue] = useState({
    mbti: "ESTJ",
    colorCode: "#000000",
  });

  const handleChange = (name, value) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>새 컬러 등록하기</h1>
      <Link to="/">
        <img src="/images/_x.svg" alt="취소" />
      </Link>
      <h2>MBTI</h2>

      <MBTISelect
        value={formValue.mbti}
        onChange={(newMbti) => handleChange("mbti", newMbti)}
      />

      <h2>컬러</h2>
      <img src="/images/repeat.svg" alt="랜덤" />
      <input
        value={formValue.colorCode}
        onChange={(e) => handleChange("colorCode", e.target.value)}
      />
      <button>컬러 등록</button>
    </div>
  );
}
