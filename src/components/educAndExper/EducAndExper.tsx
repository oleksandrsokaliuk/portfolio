import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { languageSelector } from "../../redux/languageSlice";
import JobPlace from "./subComponents/JobPlace";
import Skill from "./subComponents/Skill";
import RunningLine, { LineDirection } from "./subComponents/RunningLine";
import Education from "./subComponents/Education";
import {
  SkillsGeneralContainer,
  SkillsLanguageContainer,
  SkillsProgrammingContainer,
} from "./styles/Education.styles";

const EducAndExper: FC = () => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { newComer, motivated, lawyer } = selectedLanguage.edAndExp.header;
  const { experience } = selectedLanguage.edAndExp;
  const { languagesSkills, programmingSkills, title } = selectedLanguage.skills;
  console.log(Object.values(programmingSkills));
  return (
    <>
      <Education />
      <div
        style={{ scrollSnapAlign: "start", height: "100vh", width: "100vw" }}
      >
        <div style={{ overflow: "hidden" }}>
          <RunningLine
            direction={LineDirection.LEFT}
            text="skills • skills • skills • skills •"
          />
        </div>
        <SkillsGeneralContainer>
          <SkillsProgrammingContainer>
            {Object.values(programmingSkills).map((skill) => (
              <Skill title={skill.title} level={skill.level} />
            ))}
          </SkillsProgrammingContainer>
          <SkillsLanguageContainer>
            {Object.values(languagesSkills).map((skill) => (
              <Skill
                title={skill.title}
                langProgress={skill.level}
                langLevel={skill.langLevel}
              />
            ))}
          </SkillsLanguageContainer>
        </SkillsGeneralContainer>
      </div>
    </>
  );
};

export default EducAndExper;
