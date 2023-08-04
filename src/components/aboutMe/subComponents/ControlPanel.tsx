import { FC } from "react";
import {
  CircleIcon,
  ControlButton,
  ControlContainer,
} from "../styles/ControlPanel.styles";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";

interface ControlPanelI {
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
  activeSlide: number;
}

const ControlPanel: FC<ControlPanelI> = ({
  handleNextSlide,
  handlePrevSlide,
  activeSlide,
}) => {
  return (
    <ControlContainer>
      <motion.svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        width="10%"
      >
        <CircleIcon
          cx="100"
          cy="100"
          r="100"
          onClick={handleNextSlide}
          activeSlide={activeSlide}
          slide={0}
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        width="10%"
      >
        <CircleIcon
          cx="100"
          cy="100"
          r="100"
          onClick={handlePrevSlide}
          activeSlide={activeSlide}
          slide={1}
        />
      </motion.svg>
    </ControlContainer>
  );
};

export default ControlPanel;
