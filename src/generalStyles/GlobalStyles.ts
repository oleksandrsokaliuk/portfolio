import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    background-color: ${(props) => props.theme.light.mainBG};
  }
`;

export const AppContainer = styled.div`
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  @media (max-width: 600px) {
    max-width: 600px;
  }
  @media (max-width: 768px) {
    max-width: 768px;
  }
  @media (max-width: 992px) {
    max-width: 992px;
  }
  @media (min-width: 1200px) {
    min-width: 1200px;
  }
`;

export default GlobalStyle;
