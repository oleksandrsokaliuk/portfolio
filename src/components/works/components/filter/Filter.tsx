import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { FilterToggle } from "./FilterToggle";
import { FilterContainer } from "./FilterContainer";
import "./filter.css";
import { StackI } from "../../../../data/dataTypes";

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
  setSelectedFilters?: React.Dispatch<React.SetStateAction<StackI[]>>;
  selectedFilters?: StackI[];
}

export interface FilterI {
  setSelectedFilters: React.Dispatch<React.SetStateAction<StackI[]>>;
  selectedFilters: StackI[];
}

const Filter: React.FC<FilterI> = ({ setSelectedFilters, selectedFilters }) => {
  const [isAnimationStarted, setIsAnimationStarted] =
    React.useState<boolean>(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isShown, setIsShown] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (!isAnimationStarted && isOpen) {
      setIsShown(true);
    }
    if (!isAnimationStarted && !isOpen) {
      setIsShown(false);
    }
  }, [isOpen, isAnimationStarted]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="filter-container"
    >
      <motion.div
        className="background"
        variants={sidebar}
        style={isShown ? { zIndex: 10 } : { zIndex: 0 }}
        onAnimationStart={() => {
          setIsAnimationStarted(true);
        }}
        onAnimationComplete={() => setIsAnimationStarted(false)}
      />
      <FilterContainer
        isShown={isShown}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
      <FilterToggle toggle={() => toggleOpen()} isShown={isShown} />
    </motion.div>
  );
};

export default Filter;
