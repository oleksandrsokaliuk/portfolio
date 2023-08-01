import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutMeContainer = styled(motion.div)`
  width: 100vw;
  /* height: 190vh; */
  display: flex;
  margin-top: -2vh;
  position: relative;
`;

export const InfoInterestsContainer = styled(motion.div)`
  /* display: flex; */
  width: 50%;
  margin-left: 10%;
  height: 200vh;
  /* align-self: center; */
  /* flex-direction: column; */
  /* gap: 15%; */
`;

export const AboutMeImage = styled(motion.img)`
  position: absolute;
  /* right: 15%; */
  height: 90vh;
  width: auto;
  margin-top: 5%;
  margin-right: 10%;
  margin-bottom: -2%;
`;
