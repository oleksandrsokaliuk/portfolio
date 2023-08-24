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
  @media (max-width: 992px) {
    font-size: 2em;
  }
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
  @media (max-width: 992px) {
    font-size: 2.2em;
  }
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
  @media (max-width: 992px) {
    font-size: 1.1em;
  }
`;

export const EducationContainer = styled.div`
  display: flex;
  height: 90vh;
  justify-content: space-around;
  @media (max-width: 992px) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    gap: 2%;
  }
`;

export const JobsContainer = styled.div`
  display: flex;
  height: 60%;
  align-self: center;
  width: 40%;
  gap: 5%;
  @media (max-width: 992px) {
    width: 100%;
    gap: 10%;
  }
`;

export const JobsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
