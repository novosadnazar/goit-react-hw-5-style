
import { Wrapper, Label, BadgeList, Badge } from "../Difficulty/Difficulty.style";

export const Difficulty = ({ level }) => {
  return (
    <Wrapper>
      <Label>Difficulty</Label>
      <BadgeList>
        <Badge $isActive={level === 0} $type="easy">
          Easy
        </Badge>
        <Badge $isActive={level === 1} $type="medium">
          Medium
        </Badge>
        <Badge $isActive={level === 2} $type="hard">
          Hard
        </Badge>
      </BadgeList>
    </Wrapper>
  );
};