import Intro from "./components/intro/Intro";
import AboutMe from "./components/aboutMe/AboutMe";
import EducAndExper from "./components/educAndExper/EducAndExper";
import MyWorks from "./components/works/MyWorks";
import Feedback from "./components/feedback/Feedback";
import GlobalStyle, {
  AppContainer,
  MainContainer,
} from "./generalStyles/GlobalStyles";
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
      <>
        {/* <MobileVersionTestContainer>
          <MobileVersionTestHeader>
            Mobile version of the app is under construction
          </MobileVersionTestHeader>
        </MobileVersionTestContainer> */}
        <AppContainer ref={AppRef}>
          <Intro scrollPosition={hookedYPostion} />
          <MainContainer>
            <AboutMe />
            <EducAndExper />
            <MyWorks />
          </MainContainer>
          <Feedback />
        </AppContainer>
      </>
    </>
  );
}

export default App;
