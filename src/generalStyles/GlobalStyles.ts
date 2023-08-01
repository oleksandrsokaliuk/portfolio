import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    background-color: ${(props) => props.theme.light.mainBG};

  }
`;

export default GlobalStyle;
