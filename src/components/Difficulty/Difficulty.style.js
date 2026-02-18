import styled from "styled-components";

export const Wrapper = styled.div`
  width: 170px;
  height: 70px;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
`;

export const Label = styled.span`
  margin-left: 5px;
`;

export const BadgeList = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Badge = styled.span`
  font-size: 13px;
  border-radius: 5px;
  padding: 5px;


  background-color: moccasin;
  color: black;

  
  ${({ $isActive, $type }) =>
    $isActive &&
    `
    color: white;
    ${$type === "easy" && "background-color: #2ed573;"}
    ${$type === "medium" && "background-color: #ffa502;"}
    ${$type === "hard" && "background-color: #ff4757;"}
  `}
`;
