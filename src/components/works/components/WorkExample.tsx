import { FC } from "react";
import {
  BlurWrapper,
  Example,
  ExampleDescr,
  ExampleDescrContainer,
  ExampleFooter,
  ExampleHeader,
  ExampleIsFinished,
  ExampleLink,
  FinishedIcon,
  IconContainer,
  LinksContainer,
  NotFinishedIcon,
} from "../styles/MyWorks.styles";
import { StackI, WorkExampleI } from "../../../data/dataTypes";
import { BsGithub } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const WorkExample: FC<WorkExampleI> = (props) => {
  return (
    <Example picture={props.work.picture}>
      <ExampleHeader>{props.work.name}</ExampleHeader>
      <ExampleDescrContainer>
        {props.work.stack.map((stack, idx) => {
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
              key={idx}
            >
              <Icon key={stack} style={{ height: "100%", width: "30px" }} />
            </IconContainer>
          ) : null;
        })}
      </ExampleDescrContainer>
      <ExampleDescr>{props.work.description}</ExampleDescr>
      <ExampleFooter>
        <LinksContainer>
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
        <ExampleIsFinished
          finished={props.work.finished}
          statusText={props.isFinished}
        >
          {props.work.finished ? <FinishedIcon /> : <NotFinishedIcon />}
        </ExampleIsFinished>
      </ExampleFooter>
      <BlurWrapper />
    </Example>
  );
};

export default WorkExample;
