import { FC } from "react";
import {
  LineContainerHeaderTest,
  LineContainerTest,
  LineTextTest,
} from "../styles/RunningLine.styles";

export enum LineDirection {
  LEFT,
  RIGHT,
}

interface RunningLineProps {
  direction: LineDirection;
  text: string;
}

const RunningLine: FC<RunningLineProps> = ({ direction, text }) => {
  return (
    <LineContainerHeaderTest
      pauseOnHover
      gradient
      gradientColor={[0, 6, 27]}
      direction={direction === LineDirection.LEFT ? "left" : "right"}
      style={{ overflow: "hidden" }}
    >
      <LineContainerTest>
        <LineTextTest>{text}</LineTextTest>
      </LineContainerTest>
    </LineContainerHeaderTest>
  );
};

export default RunningLine;
