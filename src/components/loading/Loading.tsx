import { FC } from "react";
import "./styles.css";

const Loading: FC = (props) => {
  return (
    <div className="loading-container">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Loading;
