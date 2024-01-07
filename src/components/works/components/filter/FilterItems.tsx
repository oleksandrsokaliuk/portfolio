import * as React from "react";
import { StackI } from "../../../../data/dataTypes";
import { BsFiletypeHtml } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux, TbBrandReactNative } from "react-icons/tb";
import {
  SiNextdotjs,
  SiNestjs,
  SiStyledcomponents,
  SiExpress,
  SiMongoose,
  SiSocketdotio,
} from "react-icons/si";
import { useAppSelector } from "../../../../redux/hooks";
import { languageSelector } from "../../../../redux/languageSlice";
import { OneFilterParagraphContainer } from "../../styles/MyWorks.styles";
import { FilterI } from "./Filter";

export const FilterItems: React.FC<FilterI> = ({
  setSelectedFilters,
  selectedFilters,
}) => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { filterItems } = selectedLanguage.myWorks;
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
      {filterItems.map((item, idx) => {
        const Icon = iconCreator(item as StackI);
        return Icon ? (
          <div key={idx}>
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
              key={item}
            >
              <Icon style={{ width: "30px" }} />
              <div>{item}</div>
            </OneFilterParagraphContainer>
          </div>
        ) : null;
      })}
    </>
  );
};
