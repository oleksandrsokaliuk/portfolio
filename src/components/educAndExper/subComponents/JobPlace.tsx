import { FC, useRef } from "react";
import { ExperienceI } from "../../../data/dataTypes";
import {
  BarItemContainer,
  JobItemContainer,
  JobItemDescription,
  JobItemTitle,
} from "../styles/JobPlace.styles";
import { useInView } from "framer-motion";

const JobPlace: FC<ExperienceI> = ({
  name,
  nameDescr,
  where,
  duration,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <JobItemContainer
      ref={ref}
      index={index}
      initial={{ opacity: 0 }}
      animate={isInView && { opacity: 1 }}
      transition={{ duration: 0.4, ease: "linear", delay: index }}
    >
      <JobItemTitle>{name}</JobItemTitle>
      {nameDescr && <JobItemDescription>{nameDescr}</JobItemDescription>}
      <JobItemDescription>{where}</JobItemDescription>
      <JobItemDescription>{duration}</JobItemDescription>
    </JobItemContainer>
  );
};

export default JobPlace;
