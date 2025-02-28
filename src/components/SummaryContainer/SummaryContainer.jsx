import {
  RightContainer,
  SummaryTitle,
  SummaryCardsContainer,
  ContinueBtn,
  ContinueText,
} from "./styledComponents";
import { SummaryCard } from "../SummaryCard";
import data from "../../data.json";
export const SummaryContainer = () => {
  return (
    <RightContainer>
      <SummaryTitle>Summary</SummaryTitle>
      <SummaryCardsContainer>
        {data.map((item, index) => {
          return (
            <SummaryCard
              category={item?.category}
              score={item?.score}
              icon={item?.icon}
            />
          );
        })}
      </SummaryCardsContainer>
      <ContinueBtn>
        <ContinueText>Continue</ContinueText>
      </ContinueBtn>
    </RightContainer>
  );
};
