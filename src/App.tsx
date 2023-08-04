import Intro from "./components/intro/Intro";
import AboutMe from "./components/aboutMe/AboutMe";
import EducAndExper from "./components/educAndExper/EducAndExper";
import MyWorks from "./components/works/MyWorks";
import Feedback from "./components/feedback/Feedback";
import GlobalStyle, { AppContainer } from "./generalStyles/GlobalStyles";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

function App() {
  const AppRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: AppRef });
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest * 100);
    setHookedYPosition(latest);
  });
  return (
    <>
      <GlobalStyle />
      <AppContainer ref={AppRef}>
        <div style={{ scrollSnapAlign: "start" }}>
          <Intro scrollPosition={hookedYPostion} />
        </div>
        <div style={{ scrollSnapAlign: "center" }}>
          <AboutMe />
        </div>
        <div style={{ scrollSnapAlign: "start" }}>
          <EducAndExper />
        </div>
        <div style={{ scrollSnapAlign: "start" }}>
          <MyWorks />
        </div>
        <div style={{ scrollSnapAlign: "start" }}>
          <Feedback />
        </div>
      </AppContainer>
    </>
  );
}

export default App;
