import { motion } from "framer-motion";
import styled from "styled-components";

export const TitleHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NewComer = styled(motion.p)`
  color: ${(props) => props.theme.light.header};
  text-align: center;
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 2.7em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-variant: small-caps;
  margin: 0;
  text-transform: uppercase;
`;
export const Motivated = styled(motion.p)`
  color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 3em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-variant: small-caps;
  margin: 0;
`;
export const Lawyer = styled(motion.p)`
  color: ${(props) => props.theme.light.header};
  text-align: center;
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 1.5em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 10% 0;
`;

export const EducationContainer = styled.div`
  display: flex;
  height: 90vh;
  justify-content: space-around;
`;

export const JobsContainer = styled.div`
  display: flex;
  height: 60%;
  align-self: center;
  /* justify-self: center; */
  width: 40%;
  gap: 5%;
`;

export const JobsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SkillsGeneralContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  margin: 0 10% 10%;
  gap: 10%;
`;

export const SkillsProgrammingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
`;

export const SkillsLanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  height: 50%;
`;
