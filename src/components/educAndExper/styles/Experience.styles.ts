import { motion } from "framer-motion";
import styled from "styled-components";

export const SkillsGeneralContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80vh;
  margin: 1% 10% 0 10%;
  gap: 10%;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const SkillsProgrammingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  @media (max-width: 992px) {
    flex: 1 1 auto;
    height: auto;
    width: auto;
  }
`;

export const SkillsLanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  height: 50%;
  @media (max-width: 992px) {
    flex: 1 1 auto;
    height: auto;
    width: auto;
  }
`;