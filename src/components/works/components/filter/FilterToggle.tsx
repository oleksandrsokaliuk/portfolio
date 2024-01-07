import * as React from "react";
import { motion } from "framer-motion";
import { FilterChildrenProps } from "./Filter";

const Path = (props) => (
  <motion.path
    fill="black"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const FilterToggle: React.FC<FilterChildrenProps> = ({
  toggle,
  isShown,
}) => (
  <button
    onClick={toggle}
    className="filter-button"
    style={isShown ? { zIndex: 12 } : { zIndex: 0 }}
  >
    <svg viewBox="0 0 23 23" width="23" height="23">
      <Path
        variants={{
          closed: {
            d: "M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.99 1.99 0 0 0 .18-2.09Z",
          },
          open: { d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" },
        }}
      />
    </svg>
  </button>
);
