import styled from "styled-components";
import { StackI } from "../../../data/dataTypes";

interface ExampleI {
  picture: string;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2%;
  height: 100vh;
  background-color: ${(props) => props.theme.light.thirdBG};
  scroll-snap-align: start;
  align-items: center;
  padding: 3% 10%;
  @media (max-width: 992px) {
    border-radius: 0;
  }
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
  flex: 1 1 30px;
`;

export const FilterContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: nowrap;
  gap: 5%;
  justify-content: center;
  row-gap: 1em;
  flex: 0 1 20px;
`;

interface IconI {
  picked: boolean | undefined;
  stack?: string;
}

export const OneFilterParagraphContainer = styled.div<IconI>`
  flex: 1 1 content;
  cursor: pointer;
  color: ${(props) =>
    props.picked
      ? props.theme.light.exceptionalColour
      : props.theme.light.mainBG};
  transform: ${(props) => (props.picked ? "scale(1.1)" : "scale(1)")};
  position: relative;
  transition: 1s;
  overflow-y: hidden;

  &::before {
    content: "${(props) => props.stack}";
    color: ${(props) =>
      props.picked
        ? props.theme.light.exceptionalColour
        : props.theme.light.mainBG};
    position: absolute;
    right: -40%;
    top: -100%;

    /* width: auto; */
    /* height: 100%; */
    /* font-size: 1.1em; */
    /* background-color: ${(props) => props.theme.light.secondaryBG}; */
    transition: 0.5s;
    text-align: center;
    display: none;

    /* flex: 1; */
  }
  &:hover:before {
    top: 0;
    /* left: 10%; */
    display: flex;
  }
  &:hover {
    color: transparent;
    /* width: 200px; */
    flex: 1 1 1;
    overflow: visible;
  }
`;

export const FileredAllButton = styled.button<IconI>`
  color: ${(props) =>
    props.picked
      ? props.theme.light.exceptionalColour
      : props.theme.light.mainBG};
  transform: ${(props) => (props.picked ? "scale(1.2)" : "scale(1)")};
  width: 100%;
  height: 100%;
  font-size: 1em;
  background: transparent;
  border: none;
  cursor: pointer;
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
  width: 100%;
  height: 50%;
  gap: 5%;
  flex-wrap: wrap;
  justify-content: center;
  flex: 6 6 400px;
`;

export const Example = styled.div<ExampleI>`
  /* width: 19%;
  height: 38%; */
  background: gray;
  /* box-shadow: 0px 4px 10px 0px rgba(0, 6, 27, 0.5); */
  border-radius: 10%;
  color: ${(props) => props.theme.light.secondaryBG};
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
  padding: 2%;
  &:hover {
    backdrop-filter: blur(90%);
    background: ${(props) => `url(${props.picture})`};
    background-position: center;
    background-size: cover;
    color: ${(props) => props.theme.light.header};
    background-color: rgb(0, 0, 0, 0.8);
    background-blend-mode: multiply;
  }
`;

export const ExampleSubContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  height: 80%;
  color: ${(props) => props.theme.light.header};
  display: flex;
  flex-direction: column;
  padding: 10%;
  border-radius: 20%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const ExampleHeader = styled.h2`
  margin: 0;
  text-align: center;
  flex: 1;
  text-transform: uppercase;
`;

export const ExampleDescrContainer = styled.div`
  flex: 1;
`;

export const ExampleDescr = styled.p`
  margin: 0;
  font-size: 1em;
  flex: 2;
`;

export const ExampleIsFinished = styled.div`
  flex: 2;
  margin: 0;
  font-size: 1em;
  display: flex;
`;

export const ExampleCheckedParagraph = styled.p`
  margin: 0;
  font-size: 0.7em;
  align-self: center;
`;

export const ExampleLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: 1s;
  &:hover {
    transform: rotate(25deg);
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  gap: 10%;
  justify-content: center;
  flex: 2;
  text-decoration: none;
  flex-wrap: wrap;
`;

export const IconContainer = styled.div<IconI>`
  color: ${(props) =>
    props.picked ? props.theme.light.exceptionalColour : "inherit"};
  cursor: pointer;
  font-size: 1.5em;
  transition: 1s;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.6em;
`;
