import styled from "styled-components";
import { motion } from "framer-motion";

interface InterestContainerProps {
  image: string;
  index?: number;
  bg?: string;
}

export const InterestContainer = styled(motion.div)<InterestContainerProps>`
  position: absolute;
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.index};
  background-image: ${(props) => `url(${props.bg})`};
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  /* opacity: 0; */
  // opacity изменить на 1 когда скролл проходит
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
