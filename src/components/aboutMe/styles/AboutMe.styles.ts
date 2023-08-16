import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutMeContainer = styled(motion.div)`
  width: 100vw;
  display: flex;
  position: relative;
  height: 100vh;
  align-items: center;
  overflow: hidden;
  /* padding-top: 10%; */
  @media (max-width: 992px) {
    flex-direction: column;
    width: inherit;
    overflow: hidden;
  }
`;

export const InnerContainer = styled(motion.div)`
  width: 50vw;
  margin-left: 10%;
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  @media (max-width: 992px) {
    width: 80vw;
    /* margin-left: 0; */
    flex: 1 1 10%;
    align-items: center;
    align-self: center;
  }
`;

export const InfoInterestsContainer = styled(motion.div)`
  display: flex;
  width: 50vw;
  position: relative;
  height: 100%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const AboutMeImage = styled(motion.img)`
  position: absolute;
  height: 120%;
  width: auto;
  bottom: 0;
  right: 5%;
  filter: drop-shadow(0px 4px 40px #00061b) blur(0.2em);
  &:hover {
    filter: blur(0);
  }
  @media (max-width: 992px) {
    position: relative;
    align-self: center;
    flex: 1 1 10%;
    height: auto;
    bottom: auto;
    right: auto;
    filter: drop-shadow(0 0 5px ${(props) => props.theme.light.header});
  }
`;
