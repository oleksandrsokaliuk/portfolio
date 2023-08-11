import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import styled from "styled-components";

export const IntroContainer = styled.div`
  width: 100vw;
  height: 110vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.light.secondaryBG};
  border-radius: 25% 25% 25% 25% / 0% 0% 5% 5%;
  position: relative;
  @media (max-width: 992px) {
    border-radius: 0;
    height: 100vh;
  }
`;

export const IntroHeader = styled.header`
  align-self: center;
  justify-content: center;
  width: 90%;
  height: 70vh;
  display: flex;
  margin-top: 5%;
  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 20%;
  }
`;

export const TextHeaderContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 150%;
  @media (max-width: 992px) {
    width: 100%;
    text-align: center;
    row-gap: 20%;
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
  @media (max-width: 992px) {
    font-size: 45px;
    letter-spacing: 8px;
    left: auto;
    top: -150%;
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
  @media (max-width: 992px) {
    font-size: 30px;
    left: auto;
    letter-spacing: 8px;
    top: -150%;
  }
`;

export const ScrollButtonContainer = styled(motion.div)`
  width: 10px;
  cursor: pointer;
  position: absolute;
  bottom: 15%;
  right: 3%;
  @media (max-width: 992px) {
    right: auto;
    align-self: center;
    bottom: 5%;
    width: 15px;
  }
`;

export const ScrollIcon = styled(FiArrowDown)`
  width: inherit;
`;

export const ScrollA = styled.a`
  width: inherit;
  word-wrap: break-word;
  color: ${(props) => props.theme.light.mainBG};
  text-align: center;
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  @media (max-width: 992px) {
    font-size: 1.3em;
    margin-top: -5%;
  }
`;
