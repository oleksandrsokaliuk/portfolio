import styled from "styled-components";
import { motion } from "framer-motion";
import { InfoContainer } from "./Info.styles";
import { screenSizes } from "../../../generalStyles/GlobalStyles";

export const AboutMeContainer = styled(motion.section)`
  max-width: 1050px;
  margin: 0 auto;
  padding-left: 50px;
  display: flex;
  height: 100vh;
  align-items: center;
  position: relative;
  scroll-snap-align: "center";
  @media (max-width: 1300px) {
    flex-direction: column;
    overflow: hidden;
    padding: 10% 0 0;
  }
  @media (min-width: 1800px) {
    max-width: 1500px;
  }
`;

export const InnerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 992px) {
    flex: 1 1 10%;
    align-items: center;
    align-self: center;
  }
`;

export const InfoWrapper = styled.div`
  top: 0;
  position: absolute;
  /* background-color: lightgray; */
  background: rgba(0, 6, 27, 0.66);
  /* border-radius: 16px; */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.3px);
  -webkit-backdrop-filter: blur(11.3px);
  border: 1px solid rgba(0, 6, 27, 0.3);
  background: ${(props) => props.theme.light.mainBG};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: left;
  transform-origin: left;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 20px;
`;

export const InfoInterestsContainer = styled(motion.div)`
  width: 500px;
  position: relative;
  border-radius: 10px;
  transform: preserve-3d;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  padding-left: 30px;

  /* padding: 10px 20px 10px 40px; */
  &:hover ${InfoWrapper} {
    transition: all 0.5s;
    transform: rotatex(-95deg);
    transform-origin: top;
  }
  &:hover ${InfoContainer} {
    opacity: 0;
    display: none;
  }
  @media (max-width: 1200px) {
    & ${InfoWrapper} {
      transform-origin: top;
    }
    &:hover ${InfoWrapper} {
      transform-origin: top;
      transform: rotatex(-95deg);
    }
  }

  @media (max-width: 992px) {
    padding-left: 0;
  }
`;

export const AboutMeImageContainer = styled.div`
  align-self: flex-end;
  height: 100%;
  display: flex;
  align-items: flex-end;
  @media (max-width: 1300px) {
    align-self: center;
  }
`;

export const AboutMeImage = styled(motion.img)`
  filter: drop-shadow(0px 4px 40px #00061b) blur(0.2em);
  object-fit: contain;
  object-position: top;
  width: 100%;
  @media (max-width: ${screenSizes.l}) {
    filter: none;
  }

  &:hover {
    filter: none;
  }
  /* @media (max-width: 992px) {
    filter: blur(0);
    filter: drop-shadow(0 0 5px ${(props) => props.theme.light.header});
    bottom: 0;
    right: 0;
  }
  @media only screen and (max-width: 1230px) {
    display: none;
  } */
`;
