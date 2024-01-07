import styled, { createGlobalStyle } from "styled-components";

interface ScreenSizesI {
  xl: string;
  l: string;
  s: string;
  m: string;
}

export const screenSizes: ScreenSizesI = {
  xl: "1280px",
  l: "1024px",
  s: "768px",
  m: "320px",
};

const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    
    width: 100vw;
    background-color: ${(props) => props.theme.light.mainBG};
  }

  html {
    @media (max-height: 680px) {
      font-size: 9px;
    }
  }
    `;

export const AppMainContainer = styled.div`
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  height: 100vh;
  max-width: 100vw;
  display: inherit;
`;

export const SemanticInvisHeader = styled.h2`
  position: absolute;
  top: -200%;
`;

export const MainContainer = styled.main`
  min-width: 100vw;
  overflow: hidden;
`;

export default GlobalStyle;
