import styled from "styled-components";
import { motion } from "framer-motion";
import { IoGlobeOutline } from "react-icons/io5";
import { screenSizes } from "../../../generalStyles/GlobalStyles";

interface LangSwitcherItemI {
  selected: boolean;
}

interface LangSwitcherContainerI {
  isSwitcherExtended: boolean;
}

// export const LanguageMainContainer = styled.div`
//   display: flex;
//   position: absolute;
//   top: 2%;
//   right: 5%;
//   width: 90%;
//   justify-content: flex-end;
// `;

export const LangSwitcherContainer = styled(motion.ul)<LangSwitcherContainerI>`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${screenSizes.l}) {
    flex: 3;
    display: ${(props) => (props.isSwitcherExtended ? "flex" : "none")};
  }
`;

export const SwitcherMainContainer = styled.div`
  position: absolute;
  width: 90%;
  margin: 0 5%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${screenSizes.l}) {
    justify-content: flex-start;
    display: flex;
    flex: 1;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media (max-width: ${screenSizes.s}) {
  }
`;

export const LangSwitcherItem = styled(motion.li)<LangSwitcherItemI>`
  text-align: center;
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0 20px;
  cursor: pointer;
  text-transform: uppercase;
  margin: 0;
  color: ${(props) =>
    props.selected
      ? props.theme.light.exceptionalColour
      : props.theme.light.paragraph};
  @media (max-width: ${screenSizes.l}) {
    padding: 0;
  }
  @media (max-width: ${screenSizes.s}) {
  }
`;

export const LanguageIcon = styled(IoGlobeOutline)<LangSwitcherContainerI>`
  color: ${(props) => props.theme.light.paragraph};
  display: none;
  flex: 1;
  align-self: center;
  height: 2rem;
  @media (max-width: ${screenSizes.l}) {
    display: block;
    flex: none;
    height: 2rem;
    width: 2rem;
    display: ${(props) => (props.isSwitcherExtended ? "none" : "block")};
  }
  @media (max-width: ${screenSizes.s}) {
  }
`;
