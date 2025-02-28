import {
    Circle,
    LeftContainer,
    Title,
    GreatText,
    MainNumber,
    SubNumber,
    DescriptionText,
  } from "./styledComponents";
  import data from "../../data.json";

export const ResultContainer = () => {
  const totalScore = data.reduce((sum, item) => sum + item.score, 0);

 
  return (
    <LeftContainer>
      <Title>Your Result</Title>
      <Circle>
        <MainNumber>
        {Math.floor( totalScore/data?.length) }<SubNumber>of 100</SubNumber>
        </MainNumber>
      </Circle>
      <GreatText>Great</GreatText>
      <DescriptionText>
        Your scored higher than 65% of <br /> the people who have taken <br />{" "}
        these tests
      </DescriptionText>
    </LeftContainer>
  );
};
