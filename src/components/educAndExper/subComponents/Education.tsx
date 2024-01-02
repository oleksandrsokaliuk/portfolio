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
  SkillsSection,
  TitleHeader,
} from "../styles/Education.styles";
import JobsBar from "./JobsBar";
import { SemanticInvisHeader } from "../../../generalStyles/GlobalStyles";

const Education: FC = () => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { newComer, motivated, lawyer } = selectedLanguage.edAndExp.header;
  const { experience, runningLine } = selectedLanguage.edAndExp;
  const { programmingSkills } = selectedLanguage.skills;
  const ref = useRef(null);
  return (
    <SkillsSection>
      <SemanticInvisHeader>{runningLine}</SemanticInvisHeader>
      <RunningLine
        direction={LineDirection.LEFT}
        text={`${runningLine} • ${runningLine} • ${runningLine} • ${runningLine} • ${runningLine} • ${runningLine} •`}
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
            {Object.values(experience).map((place, idx) => {
              const reversedIdx = Object.values(experience).length - idx;
              return (
                <JobPlace
                  name={place.name}
                  nameDescr={place.nameDescr}
                  where={place.where}
                  duration={place.duration}
                  index={reversedIdx}
                />
              );
            })}
          </JobsListContainer>
        </JobsContainer>
      </EducationContainer>
    </SkillsSection>
  );
};

export default Education;
