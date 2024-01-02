import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { FilterToggle } from "./FilterToggle";
import { FilterContainer } from "./FilterContainer";
import "./filter.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export interface FilterChildrenProps {
  isShown: boolean;
  toggle?: () => void;
}

const Filter = () => {
  const [isAnimationStarted, setIsAnimationStarted] =
    React.useState<boolean>(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isShown, setIsShown] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (isAnimationStarted && isOpen) {
      setIsShown(true);
      // console.log("StartAndShown");
    }
    if (!isAnimationStarted && !isOpen) {
      setIsShown(false);
      // console.log("NOTStartNOTShown");
      // console.log({ isOpen: isOpen });
    }
    // console.log({ isAnimationStarted: isAnimationStarted });
    // console.log({ isOpen: isOpen });
    // console.log({ isShown: isShown });
  }, [isOpen, isAnimationStarted]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="filter-container"
      onAnimationStart={() => {
        // console.log("animationstarted");
        setIsAnimationStarted(true);
      }}
      onAnimationComplete={() => setIsAnimationStarted(false)}
    >
      <motion.div
        className="background"
        variants={sidebar}
        style={isShown ? { zIndex: 10 } : { zIndex: 0 }}
      />
      <FilterContainer isShown={isShown} />
      <FilterToggle toggle={() => toggleOpen()} isShown={isShown} />
    </motion.div>
  );
};

export default Filter;
