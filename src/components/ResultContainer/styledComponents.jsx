import styled from "styled-components";
import { Colors } from "../../styles";

export const LeftContainer = styled.div`
  display: flex;
  width: 50%;
  border-radius: 40px;
  background: linear-gradient(135deg, hsl(252, 100%, 67%), hsl(241, 81%, 54%));
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 250px;

  @media (max-width: 375px) {
    flex-direction: column;
    width: 100%;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    135deg,
    hsla(256, 72%, 46%, 1),
    hsla(241, 72%, 46%, 0)
  );
  @media (max-width: 375px) {
    width: 150px;
    height: 150px;
  }
`;

export const Title = styled.p`
  color: hsl(${Colors.LIGHT_LAVENDER});
  font-size: 18px;
  font-weight: 800;
`;

export const GreatText = styled.p`
  color: hsl(${Colors.WHITE_COLOR});
  font-size: 26px;
  font-weight: 800;
  margin: 20px;
  @media (max-width: 375px) {
    margin: 10px;
    margin-bottom: 0px;
  }
`;

export const DescriptionText = styled.p`
  color: hsl(${Colors.LIGHT_LAVENDER});
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;

export const MainNumber = styled.span`
  color: hsl(${Colors.WHITE_COLOR});
  font-size: 40px;
  font-weight: 800;
`;

export const SubNumber = styled.span`
  color: hsl(${Colors.LIGHT_LAVENDER});
  font-size: 18px;
  display: block;
`;
