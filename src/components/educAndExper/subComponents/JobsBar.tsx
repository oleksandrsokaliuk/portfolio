import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const JobsBar: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div style={{ height: "100%", width: "20%" }} ref={ref}>
      <svg
        // width="20"
        // height="321"
        width="100%"
        height="85%"
        viewBox="0 0 20 321"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          initial={{ r: 0 }}
          animate={isInView && { r: 10 }}
          transition={{ duration: 0.4 }}
          cx="10"
          cy="215"
          // r="10"
          fill="#888787"
        />
        <motion.circle
          initial={{ r: 0 }}
          animate={isInView && { r: 10 }}
          transition={{ duration: 0.4 }}
          cx="10"
          cy="311"
          r="10"
          fill="#888787"
        />
        <motion.circle
          initial={{ r: 0 }}
          animate={isInView && { r: 10 }}
          transition={{ duration: 0.4 }}
          cx="10"
          cy="10"
          r="10"
          fill="#0238ED"
        />
        <path d="M10 117L10 311" stroke="#888787" stroke-width="2" />
        <motion.line
          initial={{ y1: 0, y2: 0 }}
          animate={isInView && { y1: 116, y2: 7 }}
          transition={{ duration: 2 }}
          x1="10"
          // y1="7"
          x2="10"
          // y2="116"
          stroke="#0238ED"
          stroke-width="2"
        />
        <motion.circle
          initial={{ r: 0 }}
          animate={isInView && { r: 10 }}
          transition={{ duration: 0.4 }}
          cx="10"
          cy="123"
          r="10"
          fill="#888787"
        />
      </svg>
    </div>
  );
};

export default JobsBar;
