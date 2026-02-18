import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 25px;
  list-style: none;
  padding: 20px;
`;

export const Card = styled.li`
  border-radius: 15px;
  padding: 20px;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fff;
`;

export const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
`;

export const DetailsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #f1f2f6;
  border-radius: 30px;
`;

export const InfoSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
`;
