import styled from "styled-components";
import { motion } from "framer-motion";

interface InterestContainerProps {
  image: string;
  index?: number;
  bg?: string;
}

export const InterestContainer = styled(motion.div)<InterestContainerProps>`
  position: absolute;
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.index};
  /* background-image: ${(props) => `url(${props.bg})`};
  background-size: contain; */
  /* background-repeat: no-repeat;
   */
  left: ${(props) => `${props.index && props.index * 5}%`};
  top: ${(props) => `${props.index && props.index * 2}%`};
  border: 1px solid black;
  background-color: white;
  border-radius: 20%;
  cursor: pointer;
  transition: 0.7s;
  box-shadow: -6px -4px 14px 6px rgba(0, 0, 0, 0.84);
`;

export const Title = styled.h3`
  z-index: 25;
`;
export const Description = styled.p`
  z-index: 25;
`;

export const BGImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 25;
`;

export const InterestsSliderContainer = styled(motion.div)`
  height: 100%;
  flex: 3;
`;
