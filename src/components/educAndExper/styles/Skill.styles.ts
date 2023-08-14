import { motion } from "framer-motion";
import styled from "styled-components";

interface SkillProgressBarI {
  progress: number | undefined;
}

export const SkillContainer = styled(motion.div)`
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SkillTitle = styled(motion.p)`
  color: ${(props) => props.theme.light.paragraph};
  text-align: center;
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
  @media (max-width: 992px) {
    font-size: 1em;
    flex: 2 1 auto;
  }
`;
export const SkillLevel = styled(motion.p)`
  color: ${(props) => props.theme.light.paragraph};
  text-align: right;
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
  position: absolute;
  right: 0;
  margin: 0;
  @media (max-width: 992px) {
    font-size: 1em;
    /* flex: 2 1 40px; */
  }
`;

export const SkillDescrContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 992px) {
    flex: 1 1 20px;
  }
`;

export const SkillProgressBar = styled(motion.div)<SkillProgressBarI>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.light.thirdBG};
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.light.exceptionalColour};
    width: ${(props) => props.progress}%;
    z-index: 1000;
    height: 100%;
  }
  @media (max-width: 992px) {
    flex: 1 1 15px;
  }
`;
