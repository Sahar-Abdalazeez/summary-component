import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const RightContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  padding: 3% 6%;
  display: flex;
  flex-direction: column;
  min-width: 240px;
  @media (min-width: 375px) and (max-width: 510px) {
    padding: 2% 2%;
  }
  @media (max-width: 375px) {
    width: 100%;
    flex-direction: column;
    padding: 1% 6%;
    min-width: 200px;
  }
`;

export const SummaryTitle = styled.h2`
  color: hsl(${Colors.DARK_GRAY_BLUE});
`;

export const SummaryCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContinueBtn = styled.button`
  background-color: hsl(${Colors.DARK_GRAY_BLUE});
  height: 55px;
  width: 100%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  &:hover {
    border: none;
    background-color: red;
    background: linear-gradient(
      180deg,
      hsla(256, 72%, 46%, 1),
      hsla(241, 72%, 46%, 1)
    );
  }

  &:focus {
    outline: none; /* Ensures no blue outline on focus */
    box-shadow: none; /* Removes any box-shadow if applied */
  }
`;

export const ContinueText = styled.p`
  color: hsl(${Colors.WHITE_COLOR});
  font-size: 18px;
`;
