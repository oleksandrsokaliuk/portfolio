import { motion } from "framer-motion";
import styled from "styled-components";
import { screenSizes } from "../../../generalStyles/GlobalStyles";

export const TitleHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${screenSizes.l}) {
    text-align: center;
  }
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
  margin: 0;
  @media (max-width: 992px) {
    font-size: 1.1em;
  }
  @media (min-width: ${screenSizes.xl}) {
    margin: 10% 0;
  }
`;

export const SkillsSection = styled.section`
  scroll-snap-align: start;
  max-height: 100vh;
  @media (max-width: ${screenSizes.s}) {
    padding-bottom: 10%;
  }
`;

export const EducationContainer = styled.div`
  display: flex;
  height: 90vh;
  justify-content: space-around;

  @media (max-width: ${screenSizes.l}) {
    gap: 50px;
    padding: 0 50px;
  }
  @media (max-width: ${screenSizes.s}) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    padding: 0;
  }
  @media (max-width: 380px) {
    font-size: 10px;
  }
`;

export const JobsContainer = styled.div`
  display: flex;
  height: 500px;
  align-self: center;
  width: 40%;
  gap: 5%;
  @media (max-width: 992px) {
    width: 100%;
    gap: 10%;
  }
  @media (min-width: ${screenSizes.s}) and (max-width: ${screenSizes.l}) {
    height: 550px;
  }

  @media (max-width: ${screenSizes.s}) {
    height: 450px;
  }
`;

export const JobsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
