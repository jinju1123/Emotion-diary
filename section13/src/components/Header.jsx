import "./Header.css";
import { memo } from "react";

const Header = () => {
  const date = new Date();
  const weekDay = ["일", "월", "화", "수", "목", "금", "토"];
  const today = weekDay[date.getDay()];

  return (
    <div className="Header">
      <h3>오늘은 🐿️</h3>
      <h1>
        {date.toLocaleDateString()} {today}
      </h1>
    </div>
  );
};

export default memo(Header);
