import { FC } from "react";
import {
  CircleIcon,
  ControlButton,
  ControlContainer,
  ControlSVG,
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
      <ControlSVG
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
        // width="10%"
        width="100%"
      >
        <CircleIcon
          cx="50%"
          cy="50%"
          r="120"
          onClick={handleNextSlide}
          activeSlide={activeSlide}
          slide={0}
        />
      </ControlSVG>
      <ControlSVG
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
        // width="10%"
        width="100%"
      >
        <CircleIcon
          cx="50%"
          cy="50%"
          r="120"
          onClick={handlePrevSlide}
          activeSlide={activeSlide}
          slide={1}
        />
      </ControlSVG>
    </ControlContainer>
  );
};

export default ControlPanel;
