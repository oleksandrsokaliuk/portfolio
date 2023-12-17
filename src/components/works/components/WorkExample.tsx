import { FC, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { languageSelector } from "../../../redux/languageSlice";
import {
  Container,
  Example,
  ExampleCheckedParagraph,
  ExampleDescr,
  ExampleDescrContainer,
  ExampleHeader,
  ExampleIsFinished,
  ExampleLink,
  ExampleSubContainer,
  ExamplesContainer,
  FileredAllButton,
  FilterContainer,
  Header,
  IconContainer,
  IconsDiv,
  LinksContainer,
  OneFilterParagraphContainer,
} from "../styles/MyWorks.styles";
import { StackI, WorkExampleI, WorksI } from "../../../data/dataTypes";
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

const WorkExample: FC<WorkExampleI> = (props) => {
  return (
    <Example picture={props.work.picture}>
      <ExampleHeader>{props.work.name}</ExampleHeader>
      <ExampleDescrContainer>
        <IconsDiv>
          {props.work.stack.map((stack) => {
            const Icon = props.iconCreator(stack);
            return Icon ? (
              <IconContainer
                picked={props.selectedFilters.includes(stack)}
                onClick={() => {
                  if (!props.selectedFilters.includes(stack as StackI)) {
                    props.setSelectedFilters((prevState) => [
                      ...prevState,
                      stack as StackI,
                    ]);
                  } else {
                    props.setSelectedFilters((prevState) => {
                      const withoutElement = prevState.filter(
                        (element) => element !== stack
                      );
                      return withoutElement;
                    });
                  }
                }}
              >
                <Icon key={stack} />
              </IconContainer>
            ) : null;
          })}
        </IconsDiv>
      </ExampleDescrContainer>
      <ExampleDescr>{props.work.description}</ExampleDescr>

      <LinksContainer>
        <ExampleIsFinished
          onMouseEnter={() => props.setIsExampleChecked(true)}
          onMouseLeave={() => props.setIsExampleChecked(false)}
        >
          {props.work.finished ? <TiTick /> : <ImCross />}
          {props.isExampleChecked &&
            (props.work.finished ? (
              <ExampleCheckedParagraph>
                {" "}
                {props.isFinished.finished}
              </ExampleCheckedParagraph>
            ) : (
              <ExampleCheckedParagraph>
                {props.isFinished.notFinished}
              </ExampleCheckedParagraph>
            ))}
        </ExampleIsFinished>
        <ExampleLink href={props.work.githubFront} target="_blank">
          <FiGithub />
        </ExampleLink>
        {props.work.githubBack && (
          <ExampleLink href={props.work.githubBack} target="_blank">
            <BsGithub />
          </ExampleLink>
        )}
        {props.work.link && (
          <ExampleLink href={props.work.link} target="_blank">
            <MdWeb />
          </ExampleLink>
        )}
      </LinksContainer>
    </Example>
  );
};

export default WorkExample;
