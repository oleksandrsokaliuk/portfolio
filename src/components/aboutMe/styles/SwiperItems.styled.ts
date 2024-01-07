import styled from "styled-components";
import { screenSizes } from "../../../generalStyles/GlobalStyles";

interface ContainerI {
  picture: string;
}

export const Container = styled.div<ContainerI>`
  background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.picture});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  @media (max-width: 380px) {
    height: 200px;
    width: 200px;
  }
  @media (min-width: 400px) {
    width: 450px;
    height: 450px;
  }
`;

export const Header = styled.h3`
  color: ${(props) => props.theme.light.header};
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: ${screenSizes.m}) {
    font-size: 1.7rem;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.light.paragraph};
  font-size: 1.4rem;
  text-align: center;
  @media (max-width: ${screenSizes.m}) {
    font-size: 0.8rem;
  }
`;
