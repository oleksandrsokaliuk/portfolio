import styled from "styled-components";
import { motion } from "framer-motion";

interface LangSwitcherItemI {
  selected: boolean;
}

export const LangSwitcherContainer = styled.div`
  position: absolute;
  top: 0%;
  right: 6%;
  width: 23%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 770px) {
    width: 40%;
  }
`;

export const LangSwitcherItem = styled(motion.p)<LangSwitcherItemI>`
  text-align: center;
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  text-transform: uppercase;
  color: ${(props) =>
    props.selected
      ? props.theme.light.exceptionalColour
      : props.theme.light.paragraph};
`;
