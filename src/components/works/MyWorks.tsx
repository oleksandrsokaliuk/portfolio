import { FC, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { languageSelector } from "../../redux/languageSlice";
import {
  Container,
  Example,
  ExamplesContainer,
  FileredAllButton,
  FilterContainer,
  FilterParagraph,
  Header,
  OneFilterParagraphContainer,
} from "./styles/MyWorks.styles";
import { StackI } from "../../data/dataTypes";
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

const MyWorks: FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<StackI[]>([]);
  const selectedLanguage = useAppSelector(languageSelector);
  const { header, filterItems, works } = selectedLanguage.myWorks;

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
    <Container>
      <Header>{header}</Header>
      <FilterContainer>
        <OneFilterParagraphContainer
          picked={selectedFilters.length === 13}
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
          <FileredAllButton picked={selectedFilters.length === 13}>
            All
          </FileredAllButton>
        </OneFilterParagraphContainer>
        {filterItems.map((item) => {
          const Icon = iconCreator(item as StackI);
          return Icon ? (
            <OneFilterParagraphContainer
              picked={
                selectedFilters.find((element) => element === item) !==
                undefined
              }
            >
              <Icon
                key={item}
                style={{ width: "100%", height: "100%" }}
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
              />
            </OneFilterParagraphContainer>
          ) : null;
        })}
      </FilterContainer>
      <ExamplesContainer>
        {works.map((work) => (
          <Example picture={work.picture}>
            <h2>{work.name}</h2>
            <div>
              <>
                {work.stack.map((stack) => {
                  const Icon = iconCreator(stack);
                  return Icon ? <Icon key={stack} /> : null;
                })}
              </>
            </div>
            <p>{work.description}</p>
            <p>{work.finished ? "Finished" : "Not Finished"}</p>
            <a href={work.githubFront} target="_blank">
              Git hub link
            </a>
            {work.githubBack && (
              <a href={work.githubBack} target="_blank">
                Git hub backend link
              </a>
            )}
            {work.link && (
              <a href={work.link} target="_blank">
                Page link
              </a>
            )}
          </Example>
        ))}
      </ExamplesContainer>
    </Container>
  );
};

export default MyWorks;
