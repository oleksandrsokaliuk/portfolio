import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  background-color: ${(props) => props.theme.light.thirdBG};
  /* justify-content: center; */
  align-items: center;
  border-radius: 25% 25% 25% 25% / 15% 15% 0% 0%;
  padding: 10% 0;
`;

export const Header = styled.h2`
  color: ${(props) => props.theme.light.mainBG};
  text-align: center;
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 5em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 15.64px;
  margin: 0;
  text-transform: uppercase;
`;

export const FilterContainer = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  justify-content: center;
  row-gap: 1em;
`;

export const OneFilterParagraphContainer = styled.div`
  width: 20%;
`;

export const FilterParagraph = styled.p`
  color: var(--pictures-background, #888787);
  text-align: center;
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1.4em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: lowercase;
  margin: 0;
  cursor: pointer;
`;

export const ExamplesContainer = styled.div`
  display: flex;
  width: 80%;
  height: 50%;
  gap: 5%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Example = styled.div`
  width: 22%;
  height: 45%;
  background-color: #d9d9d9;
  box-shadow: 0px 4px 10px 0px rgba(0, 6, 27, 0.5);
`;
