import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const CardContainer = styled.div`
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${(props) => `hsla(${props.textColor}, 0.1)`};
  @media (min-width: 375px) and (max-width: 510px) {
    padding: 8px;
  }

  @media (max-width: 375px) {
    min-width: 200px;
  }
`;

export const Category = styled.span`
  margin-left: 12px;
  font-size: 16px;
  color: hsl(${(props) => props.textColor});
  font-weight: 600;
  @media (min-width: 375px) and (max-width: 500px) {
    margin-left: 6px;
  }
`;

export const Score = styled.span`
  margin-left: auto;
  color: hsl(${Colors.DARK_GRAY_BLUE});
  font-weight: 800;
  font-size: 16px;
  margin-right: 6px;
  @media (min-width: 375px) and (max-width: 500px) {
    margin-right: 2px;
  }
`;

export const Total = styled.span`
  color: hsla(${Colors.DARK_GRAY_BLUE}, 0.6);
  font-weight: 800;
  font-size: 16px;
`;
