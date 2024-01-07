import styled from "styled-components";
import { StackI, WorkExampleI } from "../../../data/dataTypes";
import ReactSwipe from "react-swipe";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { screenSizes } from "../../../generalStyles/GlobalStyles";

interface ExampleI {
  picture: string;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
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
    padding: 80px 0 120px 0;
  }
  @media (max-width: ${screenSizes.l}) {
    padding: 120px 0 200px 0;
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
  /* width: 80%;
  display: flex;
  flex-wrap: nowrap;
  gap: 5%;
  justify-content: center;
  row-gap: 1em;
  flex: 0 1 20px; */
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  left: 0;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  z-index: 100000;
  background: green;
`;

interface IconI {
  picked: boolean | undefined;
  stack?: string;
}

export const OneFilterParagraphContainer = styled(motion.li)<IconI>`
  color: ${(props) =>
    props.picked
      ? props.theme.light.exceptionalColour
      : props.theme.light.mainBG};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const FileredAllButton = styled.button<IconI>`
  color: ${(props) =>
    props.picked
      ? props.theme.light.exceptionalColour
      : props.theme.light.mainBG};
  transform: ${(props) => (props.picked ? "scale(1.2)" : "scale(1)")};
  width: 100%;
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
  flex-wrap: nowrap;
  row-gap: 0;
  column-gap: 10px;
  z-index: 7;
  margin-top: 30px;
  flex: 0;
`;

export const ExampleDescr = styled.p`
  flex: 4 2 200px;
  font-size: 1.4rem;
  padding: 20px 0;
  z-index: 7;
  display: none;
`;

export const FinishedIcon = styled(TiTick)``;
export const NotFinishedIcon = styled(ImCross)``;

interface ExampleIsFinishedI {
  finished: boolean;
  statusText: {
    finished: string;
    notFinished: string;
  };
}

export const ExampleIsFinished = styled.div<ExampleIsFinishedI>`
  /* flex: 0 0 40px; */
  /* width: auto; */
  padding: 5px 50px;
  background: ${(props) => (props.finished ? "#41a148" : "#FF1611")};
  margin-bottom: 20px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  transition: all 0.5s ease;
  position: relative;
  z-index: 7;
  color: ${(props) => props.theme.light.header};
  display: none;
  overflow: hidden;
  &::after {
    content: ${(props) => {
      // console.log({ statusText: typeof props.statusText.finished });
      return props.finished
        ? `"${props.statusText.finished}"`
        : `"${props.statusText.notFinished}"`;
    }};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.7rem;
  }
  &:hover::after {
    left: 0;
  }
  &:hover ${FinishedIcon} {
    opacity: 0;
  }
  &:hover ${NotFinishedIcon} {
    opacity: 0;
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
  display: none;
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

export const ExampleFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Example = styled(motion.div)<ExampleI>`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  &:hover ${ExampleDescr} {
    display: block;
  }
  &:hover ${ExampleIsFinished}, &:hover ${LinksContainer} {
    display: flex;
  }

  & ${ExampleDescrContainer} {
  }

  & ${ExampleHeader} {
  }

  /* @media (max-width: ${screenSizes.s}) {
    width: 80%;
    margin: 0 auto;
  } */
`;

export const SwiperSld = styled(SwiperSlide)``;
