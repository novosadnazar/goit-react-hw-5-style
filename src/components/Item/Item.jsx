import style from "./Item.module.css";
import { IoTime } from "react-icons/io5";
import { GiPieChart } from "react-icons/gi";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { Difficulty } from "../Difficulty/Difficulty";

export const Item = ({ menu }) => {
  return (
    <ul className={style.list}>
      {menu.map(
        ({ title, time, servings, calories, difficulty, image }, index) => {
          return (
            <li
              key={index}
              className={`${style.card} ${
                difficulty === 2 ? style.hardCard : ""
              }`}
            >
              <img src={image} alt={title} className={style.image} />
              <h2 className={style.title}>{title}</h2>

              <div className={style.details}>
                <div className={style.box}>
                  <span className={style.span}>
                    <IoTime /> {time}
                  </span>
                  <span className={style.span}>
                    <GiPieChart /> {servings}
                  </span>
                  <span className={style.span}>
                    <LuChartColumnIncreasing /> {calories}
                  </span>
                </div>
              </div>
              <Difficulty level={difficulty} />
            </li>
          );
        }
      )}
    </ul>
  );
};
