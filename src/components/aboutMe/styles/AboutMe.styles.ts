import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutMeContainer = styled(motion.div)`
  width: 100vw;
  display: flex;
  margin-top: -2vh;
  position: relative;
  height: 300vh;
`;

export const InnerContainer = styled(motion.div)`
  width: 50vw;
  margin-left: 10%;
  margin-top: 15%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* overflow: hidden; */
  position: sticky;
  top: 10%;
`;

export const InfoInterestsContainer = styled(motion.div)`
  display: flex;
  width: 50vw;
  margin: 10% 0;
  flex-wrap: nowrap;
  overflow: hidden;
`;

export const AboutMeImage = styled(motion.img)`
  position: absolute;
  height: 90vh;
  width: auto;
  margin-top: 5%;
  margin-right: 10%;
  margin-bottom: -2%;
`;
