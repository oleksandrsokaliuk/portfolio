import * as React from "react";
import { motion } from "framer-motion";
import { StackI } from "../../../../data/dataTypes";
import { BsFiletypeHtml, BsGithub } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux, TbBrandReactNative } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import {
  SiNextdotjs,
  SiNestjs,
  SiStyledcomponents,
  SiExpress,
  SiMongoose,
  SiSocketdotio,
} from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { useAppSelector } from "../../../../redux/hooks";
import { languageSelector } from "../../../../redux/languageSlice";
import {
  FileredAllButton,
  OneFilterParagraphContainer,
} from "../../styles/MyWorks.styles";
import { FilterI } from "./Filter";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

interface FilterItemI {
  isOpen: boolean;
}

export const FilterItems: React.FC<FilterI> = ({
  setSelectedFilters,
  selectedFilters,
}) => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { filterItems } = selectedLanguage.myWorks;
  // const [selectedFilters, setSelectedFilters] = React.useState<StackI[]>([]);
  const iconCreator = (stack: StackI) => {
    switch (stack) {
      case StackI.HTML:
        return BsFiletypeHtml;
      case StackI.CSS:
        return DiCss3;
      case StackI.JAVASCRIPT:
        return BiLogoJavascript;
      case StackI.TYPESCRIPT:
        return BiLogoTypescript;
      case StackI.REACT:
        return FaReact;
      case StackI.REDUX:
        return TbBrandRedux;
      case StackI.NEXT:
        return SiNextdotjs;
      case StackI.NEST:
        return SiNestjs;
      case StackI.REACTNATIVE:
        return TbBrandReactNative;
      case StackI.STYLEDCOMPONENTS:
        return SiStyledcomponents;
      case StackI.EXPRESS:
        return SiExpress;
      case StackI.MONGOOSE:
        return SiMongoose;
      case StackI.WEBSOCKET:
        return SiSocketdotio;
    }
  };
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <>
      <OneFilterParagraphContainer
        className="filter-item"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        picked={selectedFilters.length === 13}
        style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
        onClick={() => {
          setSelectedFilters((prevState) => {
            if (prevState.length >= 0 && prevState.length < 13) {
              return [
                StackI.HTML,
                StackI.CSS,
                StackI.JAVASCRIPT,
                StackI.TYPESCRIPT,
                StackI.REACT,
                StackI.STYLEDCOMPONENTS,
                StackI.REACTNATIVE,
                StackI.REDUX,
                StackI.NEXT,
                StackI.NEST,
                StackI.EXPRESS,
                StackI.MONGOOSE,
                StackI.WEBSOCKET,
              ];
            } else {
              return [];
            }
          });
        }}
      >
        ALL
      </OneFilterParagraphContainer>
      {filterItems.map((item) => {
        const Icon = iconCreator(item as StackI);
        return Icon ? (
          <>
            <OneFilterParagraphContainer
              className="filter-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              picked={
                selectedFilters.find((element) => element === item) !==
                undefined
              }
              stack={item}
              onClick={() => {
                if (!selectedFilters.includes(item as StackI)) {
                  setSelectedFilters((prevState) => [
                    ...prevState,
                    item as StackI,
                  ]);
                } else {
                  setSelectedFilters((prevState) => {
                    const withoutElement = prevState.filter(
                      (element) => element !== item
                    );
                    return withoutElement;
                  });
                }
              }}
            >
              <Icon key={item} style={{ width: "30px" }} />
              <div key={item}>{item}</div>
            </OneFilterParagraphContainer>
          </>
        ) : null;
      })}
    </>
  );
  // <motion.li
  //   className="filter-item"
  //   variants={variants}
  //   whileHover={{ scale: 1.1 }}
  //   whileTap={{ scale: 0.95 }}
  // >
  //   <div className="icon-placeholder" style={style} />
  //   <div className="text-placeholder" style={style} />
  // </motion.li>
};
