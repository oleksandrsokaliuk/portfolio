import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutMeContainer = styled(motion.div)`
  width: 100vw;
  display: flex;
  position: relative;
  height: 100vh;
  padding-top: 10%;
`;

export const InnerContainer = styled(motion.div)`
  width: 50vw;
  margin-left: 10%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* overflow: hidden; */
  justify-content: space-between;
`;

export const InfoInterestsContainer = styled(motion.div)`
  display: flex;
  width: 50vw;
  /* height: 50vh; */
  /* margin: 10% 0;
  flex-wrap: nowrap; */
  /* flex-direction: column; */
  /* overflow: hidden; */
  position: relative;
  /* gap: 30%; */
  height: 100%;
`;

export const AboutMeImage = styled(motion.img)`
  position: absolute;
  height: 90%;
  width: auto;
  bottom: -2%;
  right: 5%;
`;
