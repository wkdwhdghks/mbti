import { Link } from "react-router-dom";
import { useState } from "react";
import MBTISelect from "../components/MBTISelect";
import generateColorCode from "../lib/generateColorCode";

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

  function handleRandomClick() {
    const nextColorCode = generateColorCode();
    handleChange("colorCode", nextColorCode);
  }

  function handleColorCodeBlur() {
    const isValidColorCode = /^#[a-f0-9]{6}$/i.test(formValue.colorCode);
    if (!isValidColorCode) {
      handleChange("colorCode", "#000000");
    }
  }

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
      <img src="/images/repeat.svg" alt="랜덤" onClick={handleRandomClick} />
      <input
        value={formValue.colorCode}
        onBlur={handleColorCodeBlur}
        onChange={(e) => handleChange("colorCode", e.target.value)}
      />
      <button>컬러 등록</button>
    </div>
  );
}
