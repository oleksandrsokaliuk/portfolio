import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Marquee from "react-fast-marquee";

export const LineContainerHeader = styled.div`
  margin: 30px auto;
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  max-width: 60%;
`;

const textTransition = keyframes`from{
  transform: translateX(100%);
}

to{
  transform: translateX(-100%);
}`;

export const LineContainer = styled.div`
  width: 100%;
  animation: ${textTransition} 5s infinite linear;
`;

export const LineText = styled.h3`
  text-transform: lowercase;
  white-space: nowrap;
  width: 100%;
  font-family: Noto Serif;
  font-size: 75px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 13.8px;
  color: #e6e6e6;
`;

export const LineContainerHeaderTest = styled(Marquee)`
  margin: 0;
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  max-width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  overflow-y: hidden;
`;

export const LineContainerTest = styled.div`
  max-width: 100%;
  min-height: 70px;
  display: flex;
  color: #e6e6e6;
`;

export const LineTextTest = styled.h3`
  text-transform: lowercase;
  white-space: nowrap;
  height: 100%;
  width: 50%;
  font-family: Noto Serif;
  font-size: 4.5em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 13.8px;
  padding: 0;
  margin: 0;
`;

export const LineContainerHeaderFramer = styled.div`
  margin: 30px auto;
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  /* max-width: 100%; */
  height: 10vh;
  display: flex;
  align-items: center;
  position: sticky;
  top: 20px;
`;

export const LineContainerFramer = styled(motion.div)`
  width: 100%;
  min-height: 70px;
  display: flex;
  color: #e6e6e6;
`;

export const LineTextFramer = styled.span`
  text-transform: lowercase;
  white-space: nowrap;
  height: 100%;
  width: 50%;
  font-family: Noto Serif;
  font-size: 75px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 13.8px;
`;
