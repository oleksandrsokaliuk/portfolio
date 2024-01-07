import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import styled, { keyframes } from "styled-components";
import { screenSizes } from "../../../generalStyles/GlobalStyles";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export const IntroContainer = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 2% 0 10% 0;
  flex-direction: column;
  background-color: ${(props) => props.theme.light.secondaryBG};
  scroll-snap-align: start;
  height: 100vh;
  position: relative;
  @media (max-width: ${screenSizes.l}) {
    padding: 5% 0;
  }
  @media (max-width: ${screenSizes.s}) {
  }
`;

export const IntroHeader = styled.div`
  align-self: center;
  justify-content: center;
  width: 90%;
  height: 70vh;
  display: flex;
  flex: 6;
  margin-top: 5%;
  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    /* height: auto; */
    /* margin-top: 20%; */
  }
`;

export const TextHeaderContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: ${screenSizes.l}) {
    width: 100%;
    text-align: center;
    row-gap: 20%;
    height: 0;
    transform: translateY(-150px);
    z-index: 1000;
  }
  @media (max-width: ${screenSizes.s}) {
  }
`;

export const IntroTextHeader = styled(motion.h1)`
  margin: 0;
  padding: 0;
  position: relative;
  left: -40px;
  color: ${(props) => props.theme.light.header};
  z-index: 1000;
  align-self: stretch;
  flex-shrink: 0;
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 85px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 15.3px;
  text-transform: uppercase;
  /* @media (max-width: 770px) {
    font-size: 40px;
  } */
  @media (max-width: ${screenSizes.l}) {
    font-size: 45px;
    letter-spacing: 8px;
    left: auto;
    top: -150%;
  }

  @media (min-width: ${screenSizes.l}) and (max-width: 1200px) {
    text-align: center;
    font-size: 4rem;
  }
  @media (max-width: ${screenSizes.s}) {
  }
  @media (max-width: ${screenSizes.l}) {
    font-size: 2.4rem;
  }
`;

export const IntroTextSubHeader = styled(motion.h2)`
  margin: 0;
  padding: 0;
  position: relative;
  left: -40px;
  color: ${(props) => props.theme.light.header};
  z-index: 1000;
  align-self: stretch;
  flex-shrink: 0;
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 45px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 15.3px;
  text-transform: uppercase;
  @media (max-width: ${screenSizes.l}) {
    padding: 5% 0;
    font-size: 1.9rem;
    left: auto;
    letter-spacing: 8px;
    top: -150%;
  }
  @media (min-width: ${screenSizes.l}) and (max-width: 1200px) {
    text-align: center;
  }
  @media (max-width: ${screenSizes.s}) {
  }
`;

const iconShaking = keyframes`
  5% {
    transform: translateY(-20px);
  }
  10% {
    transform: translateY(0);
  }
  15% {
    transform: translateY(-20px);
  }
  20% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-20px);
  }
  30% {
    transform: translateY(0px);
  }
`;

export const ScrollIcon = styled(MdKeyboardDoubleArrowDown)`
  height: 100%;
  width: 100%;
  fill: ${(props) => props.theme.light.mainBG};
  animation: ${iconShaking} 5s infinite;
`;

export const ScrollButtonContainer = styled(motion.div)`
  width: 50px;
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  right: 3%;
  /* @media (max-width: 992px) {
    right: auto;
    align-self: center;
    bottom: 5%;
    width: 15px;
  } */
  @media (max-width: ${screenSizes.l}) {
    flex: 1;
    position: static;
    align-self: center;
  }
  @media (max-width: ${screenSizes.s}) {
  }
`;

// export const ScrollIcon = styled(FiArrowDown)`
//   width: inherit;
// `;

export const ScrollA = styled.a`
  width: inherit;
  word-wrap: break-word;
  color: ${(props) => props.theme.light.mainBG};
  text-align: center;
  font-family: ${(props) => props.theme.light.secondaryFont};
  /* font-size: 16px; */
  display: block;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  @media (max-width: 992px) {
    font-size: 1.3em;
    margin-top: -5%;
  }
`;
