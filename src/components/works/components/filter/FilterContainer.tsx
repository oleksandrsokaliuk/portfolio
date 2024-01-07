import * as React from "react";
import { motion } from "framer-motion";
import { FilterItems } from "./FilterItems";
import { FilterChildrenProps } from "./Filter";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const FilterContainer: React.FC<FilterChildrenProps> = ({
  isShown,
  setSelectedFilters,
  selectedFilters,
}) => {
  return (
    <motion.ul
      variants={variants}
      className="filter-ul"
      style={isShown ? { zIndex: 11, opacity: 1 } : { zIndex: 0, opacity: 0 }}
    >
      <FilterItems
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
    </motion.ul>
  );
};
