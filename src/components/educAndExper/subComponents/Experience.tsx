import { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { languageSelector } from "../../../redux/languageSlice";
import Skill from "./../subComponents/Skill";
import RunningLine, { LineDirection } from "./../subComponents/RunningLine";
import { SemanticInvisHeader } from "../../../generalStyles/GlobalStyles";
import {
  SkillsGeneralContainer,
  SkillsLanguageContainer,
  SkillsProgrammingContainer,
} from "../styles/Experience.styles";

const Experience: FC = () => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { languagesSkills, programmingSkills, title } = selectedLanguage.skills;
  return (
    <section
      style={{ scrollSnapAlign: "start", height: "100vh", width: "100vw" }}
    >
      <SemanticInvisHeader>{title}</SemanticInvisHeader>
      <RunningLine
        direction={LineDirection.LEFT}
        text={` ${title} • ${title} • ${title} • ${title} • ${title} • ${title} •`}
      />
      <SkillsGeneralContainer>
        <SkillsProgrammingContainer>
          {Object.values(programmingSkills).map((skill, idx) => (
            <Skill title={skill.title} level={skill.level} key={idx} />
          ))}
        </SkillsProgrammingContainer>
        <SkillsLanguageContainer>
          {Object.values(languagesSkills).map((skill, idx) => (
            <Skill
              title={skill.title}
              langProgress={skill.level}
              langLevel={skill.langLevel}
              key={idx}
            />
          ))}
        </SkillsLanguageContainer>
      </SkillsGeneralContainer>
    </section>
  );
};

export default Experience;
