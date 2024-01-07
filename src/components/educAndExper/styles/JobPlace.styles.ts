import { motion } from "framer-motion";
import styled from "styled-components";

export const JobItemContainer = styled(motion.li)`
  display: flex;
  flex-direction: column;
  height: 125px;
  opacity: 0;
`;

export const JobItemTitle = styled(motion.h4)`
  color: ${(props) => props.theme.light.thirdBG};
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 1.3em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  width: 100%;
`;

export const JobItemDescription = styled(motion.p)`
  color: ${(props) => props.theme.light.paragraph};
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 0.7em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
`;

export const JobsBar = styled(motion.img)`
  height: 95%;
`;
