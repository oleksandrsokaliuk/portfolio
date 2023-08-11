import { FC, useRef } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { languageSelector } from "../../../redux/languageSlice";
import JobPlace from "./../subComponents/JobPlace";
import RunningLine, { LineDirection } from "./../subComponents/RunningLine";
import {
  EducationContainer,
  JobsContainer,
  JobsListContainer,
  Lawyer,
  Motivated,
  NewComer,
  TitleHeader,
} from "../styles/Education.styles";
import jobBar from "./../../../assets/jobs-bar.svg";
import JobsBar from "./JobsBar";
import { useInView } from "framer-motion";
// import { JobsBar } from "../styles/JobPlace.styles";

const Education: FC = () => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { newComer, motivated, lawyer } = selectedLanguage.edAndExp.header;
  const { experience } = selectedLanguage.edAndExp;
  const { programmingSkills } = selectedLanguage.skills;
  console.log(Object.values(programmingSkills));
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div style={{ scrollSnapAlign: "start" }}>
      <RunningLine
        direction={LineDirection.RIGHT}
        text="education and experience • education and experience • education and experience •"
      />
      <EducationContainer>
        <TitleHeader>
          <NewComer initial={{ x: 600 }} animate={{ x: 0 }}>
            {newComer}
          </NewComer>
          <Motivated initial={{ x: -600 }} animate={{ x: 0 }}>
            {motivated}
          </Motivated>
          <Lawyer ref={ref} initial={{ x: 600 }} animate={{ x: 0 }}>
            {lawyer}
          </Lawyer>
        </TitleHeader>
        <JobsContainer>
          <JobsBar />
          <JobsListContainer>
            {Object.values(experience).map((place) => (
              <JobPlace
                name={place.name}
                nameDescr={place.nameDescr}
                where={place.where}
                duration={place.duration}
              />
            ))}
          </JobsListContainer>
        </JobsContainer>
      </EducationContainer>
    </div>
  );
};

export default Education;
