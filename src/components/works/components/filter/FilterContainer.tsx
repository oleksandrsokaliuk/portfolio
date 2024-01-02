import * as React from "react";
import { motion } from "framer-motion";
import { FilterItem } from "./FilterItem";
import { FilterChildrenProps } from "./Filter";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const FilterContainer: React.FC<FilterChildrenProps> = ({ isShown }) => {
  return (
    <motion.ul
      variants={variants}
      className="filter-ul"
      style={isShown ? { zIndex: 11 } : { zIndex: 0 }}
    >
      {itemIds.map((i) => (
        <FilterItem i={i} key={i} />
      ))}
    </motion.ul>
  );
};

const itemIds = [0, 1, 2, 3, 4];
