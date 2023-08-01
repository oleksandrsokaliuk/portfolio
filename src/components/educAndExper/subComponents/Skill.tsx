import { FC } from "react";
import { SkillsI } from "../../../data/dataTypes";
import {
  SkillContainer,
  SkillDescrContainer,
  SkillLevel,
  SkillProgressBar,
  SkillTitle,
} from "../styles/Skill.styles";

const Skill: FC<SkillsI> = ({ title, level, langLevel, langProgress }) => {
  return (
    <SkillContainer>
      <SkillDescrContainer>
        <SkillTitle>{title}</SkillTitle>
        {level ? (
          <SkillLevel>{`${level} %`}</SkillLevel>
        ) : (
          langLevel && <SkillLevel>{langLevel}</SkillLevel>
        )}
      </SkillDescrContainer>
      <SkillProgressBar
        progress={level ? level : langProgress}
      ></SkillProgressBar>
    </SkillContainer>
  );
};

export default Skill;
