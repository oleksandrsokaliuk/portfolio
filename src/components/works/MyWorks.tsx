import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { languageSelector } from "../../redux/languageSlice";
import {
  Container,
  Example,
  ExamplesContainer,
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
      default:
        console.log("Sorry, no icon");
    }
  };
  return (
    <Container>
      <Header>{header}</Header>
      <FilterContainer>
        {filterItems.map((item) => {
          const Icon = iconCreator(item as StackI);
          return Icon ? (
            <OneFilterParagraphContainer>
              <Icon key={item} />
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
