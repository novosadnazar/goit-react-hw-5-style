
import style from "./Difficulty.module.css";
export const Difficulty = ({ level }) => {
  return (
    <div className={style.wrapper}>
      <span className={style.label}>Difficulty</span>
      <div className={style.badgeList}>
        <span className={`${style.badge} ${level === 0 ? style.easyActive : ""}`}>Easy</span>
        <span className={`${style.badge} ${level === 1 ? style.mediumActive : ""}`}>Medium</span>
        <span className={`${style.badge} ${level === 2 ? style.hardActive : ""}`}>Hard</span>
      </div>
    </div>
  );
};