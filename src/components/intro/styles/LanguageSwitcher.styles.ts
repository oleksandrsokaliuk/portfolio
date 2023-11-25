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
  position: absolute;
  list-style-type: none;
  top: 2%;
  right: 11%;
  width: 20%;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${screenSizes.l}) {
    width: 70%;
    position: relative;
    display: ${(props) => (props.isSwitcherExtended ? "flex" : "none")};
  }
`;

export const SwitcherMainContainer = styled.div`
  display: flex;
  width: 95%;
  height: 40%;
  @media (max-width: ${screenSizes.l}) {
    display: flex;
    flex-direction: row-reverse;
    align-self: flex-end;
    margin: 5%;
  }
  @media (max-width: ${screenSizes.s}) {
    height: 5%;
  }
`;

export const LangSwitcherItem = styled(motion.li)<LangSwitcherItemI>`
  text-align: center;
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  text-transform: uppercase;
  margin: 0;
  color: ${(props) =>
    props.selected
      ? props.theme.light.exceptionalColour
      : props.theme.light.paragraph};
  @media (max-width: ${screenSizes.l}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${screenSizes.s}) {
  }
`;

export const LanguageIcon = styled(IoGlobeOutline)`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.light.paragraph};
  @media (max-width: ${screenSizes.l}) {
  }
  @media (max-width: ${screenSizes.s}) {
  }
`;
