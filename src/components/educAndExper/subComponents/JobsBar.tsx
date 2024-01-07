import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const JobsBar: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div style={{ height: "100%", width: "20%" }} ref={ref}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 321"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={isInView && { pathLength: 1 }}
          transition={{ duration: 3, ease: "linear" }}
          d="M10 400 L10 100"
          stroke="#888787"
          strokeWidth="2"
        />
        <motion.line
          initial={{ y1: 100, y2: 100 }}
          animate={isInView && { y1: 10, y2: 100 }}
          transition={{ duration: 1, delay: 3, ease: "linear" }}
          x1="10"
          x2="10"
          stroke="#0238ED"
          strokeWidth="2"
        />
        <motion.circle
          initial={{ r: 0 }}
          animate={isInView && { r: 10 }}
          transition={{ duration: 0.4, delay: 3.8 }}
          cx="10"
          cy="10"
          r="10"
          fill="#0238ED"
        />
        <motion.circle
          initial={{ r: 0 }}
          animate={isInView && { r: 10 }}
          transition={{ duration: 0.4, delay: 2.8 }}
          cx="10"
          cy="90"
          r="10"
          fill="#888787"
        />
        <motion.circle
          initial={{ r: 0 }}
          animate={isInView && { r: 10 }}
          transition={{ duration: 0.4, delay: 1.8 }}
          cx="10"
          cy="170"
          fill="#888787"
        />
        <motion.circle
          initial={{ r: 0 }}
          animate={isInView && { r: 10 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          cx="10"
          cy="250"
          r="10"
          fill="#888787"
        />
      </svg>
    </div>
  );
};

export default JobsBar;
