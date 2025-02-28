import styled from "styled-components";
import { Colors } from "../styles";

export const Container = styled.div`
  background-color: hsl(${Colors.WHITE_COLOR});
  width: 735px;
  display: flex;
  border-radius: 40px;
  overflow: hidden;
  flex-direction: row;

  @media (max-width: 375px) {
    flex-direction: column;
    border-radius: 0px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }
`;
