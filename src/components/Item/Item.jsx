import { IoTime } from "react-icons/io5";
import { GiPieChart } from "react-icons/gi";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { Difficulty } from "../Difficulty/Difficulty";

import {
  List,
  Card,
  CardImage,
  Title,
  DetailsBox,
  InfoSpan,
} from "./Item.style";

export const Item = ({ menu }) => {
  return (
    <List>
      {menu.map(
        ({ title, time, servings, calories, difficulty, image }, index) => {
          return (
            <Card key={index} $difficulty={difficulty}>
              <CardImage src={image} alt={title} />
              <Title>{title}</Title>

              <DetailsBox>
                <InfoSpan>
                  <IoTime /> {time}
                </InfoSpan>
                <InfoSpan>
                  <GiPieChart /> {servings}
                </InfoSpan>
                <InfoSpan>
                  <LuChartColumnIncreasing /> {calories}
                </InfoSpan>
              </DetailsBox>

              <Difficulty level={difficulty} />
            </Card>
          );
        }
      )}
    </List>
  );
};