import { FC, useEffect, useRef, useState } from "react";
import { SkillsI } from "../../../data/dataTypes";
import {
  SkillContainer,
  SkillDescrContainer,
  SkillLevel,
  SkillProgressBar,
  SkillProgressCurrent,
  SkillTitle,
} from "../styles/Skill.styles";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

const Skill: FC<SkillsI> = ({ title, level, langLevel, langProgress }) => {
  const countUpRef = useRef(null);
  const isCountUpInView = useInView(countUpRef);
  const [startCountUp, setStartCountUp] = useState(false);
  useEffect(() => {
    if (isCountUpInView && !startCountUp) {
      setStartCountUp(true);
    }
  }, [isCountUpInView, startCountUp]);
  return (
    <SkillContainer ref={countUpRef}>
      <SkillDescrContainer>
        <SkillTitle>{title}</SkillTitle>
        {level ? (
          <SkillLevel>
            {" "}
            {startCountUp && (
              <CountUp end={level} suffix="%" duration={3} useEasing={true} />
            )}
          </SkillLevel>
        ) : (
          langLevel && <SkillLevel>{langLevel}</SkillLevel>
        )}
      </SkillDescrContainer>
      <SkillProgressBar progress={level ? level : langProgress}>
        <SkillProgressCurrent
          progress={level ? level : langProgress}
          initial={{ width: "0%" }}
          whileInView={{ width: level ? `${level}%` : `${langProgress}%` }}
          transition={{ ease: "easeIn", duration: 3 }}
        ></SkillProgressCurrent>
      </SkillProgressBar>
    </SkillContainer>
  );
};

// width: ${(props) => props.progress}%;

export default Skill;
