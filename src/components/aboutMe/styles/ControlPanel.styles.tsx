import styled from "styled-components";
import { motion } from "framer-motion";

interface CircleIconI {
  activeSlide: number;
  slide: number;
}

export const ControlContainer = styled.div`
  position: absolute;
  left: 10px;
  /* top: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30%;
  width: 25px;
  gap: 30px;
  /* flex: 1; */
  z-index: 500;
  /* padding: 0 30%; */
  @media (max-width: 992px) {
    position: inherit;
    flex-direction: row;
  }
`;

export const ControlButton = styled(motion.button)`
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => props.theme.light.mainBG};
`;

export const ControlSVG = styled(motion.svg)``;

export const CircleIcon = styled(motion.circle)<CircleIconI>`
  /* height: 400px;
  width: 100px; */
  height: 100%;
  cursor: pointer;

  fill: ${(props) =>
    props.activeSlide === props.slide
      ? props.theme.light.exceptionalColour
      : props.theme.light.header};
`;
