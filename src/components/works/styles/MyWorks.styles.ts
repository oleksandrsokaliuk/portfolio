import styled from "styled-components";
import { StackI, WorkExampleI } from "../../../data/dataTypes";
import ReactSwipe from "react-swipe";
import { SwiperSlide } from "swiper/react";

interface ExampleI {
  picture: string;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  /* justify-content: space-around; */
  gap: 2%;
  height: 100vh;
  background-color: ${(props) => props.theme.light.thirdBG};
  scroll-snap-align: start;
  align-items: center;
  position: relative;
  /* padding: 3% 10%; */
  @media (max-width: 992px) {
    border-radius: 0;
    padding: 80px 10px;
  }
`;

export const Header = styled.h2`
  color: ${(props) => props.theme.light.mainBG};
  text-align: center;
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 15.64px;
  margin: 0;
  text-transform: uppercase;
  /* flex: 1 1 30px; */
  flex: 0 0 20px;
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
  color: #888787;
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

/// swiper

export const ExamplesContainer = styled.div`
  /* display: flex;
  width: 100%;
  height: 50%;
  gap: 5%;
  flex-wrap: wrap;
  justify-content: center;
  flex: 6 6 400px; */
  /* position: relative; */
  /* max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex; */
`;

export const SwiperContainer = styled.div`
  position: relative;
  /* width: 100%; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 5 0 auto;
`;

export const Swiper = styled(ReactSwipe)`
  /* max-width: 100%; */
  overflow: hidden;
  height: 100%;
  /* border-radius: 80px; */
  box-shadow: 1px -2px 17px rgba(255, 255, 255, 0.5);
  flex: 1 0 500px;
  /* position: relative; */
  & > div {
    height: 100%;
    /* float: left;
    width: 100%;
    position: relative; */
  }
`;

export const SwiperBtnsContainer = styled.div`
  flex: 1 0 50px;
`;

export const SwiperBtn = styled.button``;

export const Example = styled.div<ExampleI>`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding: 30px;
  height: 100%;
  width: 100%;
  background: ${(props) => `url(${props.picture})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  color: ${(props) => props.theme.light.mainBG};
  transition: border-radius 0.4s ease-in-out, background-color 0.2s ease-in,
    box-shadow 0.6s ease-out;
  z-index: 3;
  &:hover {
    color: ${(props) => props.theme.light.header};
    background: ${(props) => props.theme.light.mainBG};
    box-shadow: 0 0 42px rgba(0, 0, 0, 1);
  }
`;

export const ExampleSubContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: ${(props) => props.theme.light.header};
  display: flex;
  flex-direction: column;
  border-radius: 20%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const ExampleHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  z-index: 7;
`;

export const ExampleDescrContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex: 1 0 50px;
  z-index: 7;
`;

export const ExampleDescr = styled.p`
  flex: 4 2 200px;
  font-size: 1.4rem;
  padding: 20px 0;
  z-index: 7;
`;

interface ExampleIsFinishedI {
  finished: boolean;
  statusText: {
    finished: string;
    notFinished: string;
  };
}

export const ExampleIsFinished = styled.div<ExampleIsFinishedI>`
  flex: 0 0 40px;
  width: auto;
  padding: 5px 20px;
  background: #41a148;
  margin-bottom: 20px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  transition: all 0.5s ease;
  position: relative;
  z-index: 7;
  color: ${(props) => props.theme.light.header};
  &::after {
    content: ${(props) =>
      props.finished
        ? props.statusText.finished
        : props.statusText.notFinished};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 100%;
    z-index: 2;
  }
  &:hover::after {
    left: 0;
  }
`;

export const ExampleCheckedParagraph = styled.p``;

export const ExampleLink = styled.a`
  font-size: 1.5rem;
  color: inherit;
  text-decoration: none;
  transition: 1s;
  &:hover {
    transform: rotate(25deg);
  }
`;

export const IconContainer = styled.div<IconI>`
  color: ${(props) =>
    props.picked ? props.theme.light.exceptionalColour : "inherit"};
  cursor: pointer;
  transition: 1s;
  height: 100%;
`;

export const LinksContainer = styled.div`
  flex: 0 0 40px;
  display: flex;
  gap: 20px;
  z-index: 7;
`;

export const BlurWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: 5;
  border-radius: 10px;
`;
