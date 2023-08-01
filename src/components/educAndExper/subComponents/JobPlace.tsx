import { FC } from "react";
import { ExperienceI } from "../../../data/dataTypes";
import {
  JobItemContainer,
  JobItemDescription,
  JobItemTitle,
} from "../styles/JobPlace.styles";

const JobPlace: FC<ExperienceI> = ({ name, nameDescr, where, duration }) => {
  return (
    <JobItemContainer>
      <JobItemTitle>{name}</JobItemTitle>
      {nameDescr && <JobItemDescription>{nameDescr}</JobItemDescription>}
      <JobItemDescription>{where}</JobItemDescription>
      <JobItemDescription>{duration}</JobItemDescription>
    </JobItemContainer>
  );
};

export default JobPlace;
