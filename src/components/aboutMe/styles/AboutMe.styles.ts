import styled from "styled-components";
import { motion } from "framer-motion";
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
  @media (max-width: ${screenSizes.l}) {
    flex-direction: column;
    overflow: hidden;
    padding: 5% 0 0 0;
  }
  @media (min-width: 1800px) {
    max-width: 1500px;
  }
`;

export const InnerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1 1 40%;
  height: 100%;
  align-items: center;
  padding: 50px 0;
  @media (max-width: ${screenSizes.s}) {
    padding: 0;
    gap: 10px;
  }

  @media (max-width: 992px) {
    flex: 1 1 10%;
    align-items: center;
    align-self: center;
  }
`;

export const AboutMeImageContainer = styled.div`
  align-self: flex-end;
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex: 1 0 50%;
  @media (max-width: 1300px) {
    align-self: center;
  }
`;

export const AboutMeImage = styled(motion.img)`
  filter: drop-shadow(0px 4px 40px #00061b) blur(0.2em);
  object-fit: contain;
  object-position: top;
  width: 100%;
  max-height: 100%;
  @media (max-width: ${screenSizes.l}) {
    filter: none;
  }
  @media (min-width: ${screenSizes.xl}) {
    height: auto;
  }

  &:hover {
    filter: none;
  }
`;
