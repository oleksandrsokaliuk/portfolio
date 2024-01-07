import {
  AppMainContainer,
  MainContainer,
} from "./../generalStyles/GlobalStyles";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Intro = React.lazy(() => import("./intro/Intro"));
const AboutMe = React.lazy(() => import("./aboutMe/AboutMe"));
const EducAndExper = React.lazy(() => import("./educAndExper/EducAndExper"));
const MyWorks = React.lazy(() => import("./works/MyWorks"));
const Feedback = React.lazy(() => import("./feedback/Feedback"));

function AppContainer() {
  const AppRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: AppRef });
  const [hookedYPostion, setHookedYPosition] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHookedYPosition(scrollYProgress.get());
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });

  return (
    <AppMainContainer ref={AppRef}>
      <Intro scrollPosition={hookedYPostion} />
      <MainContainer id="aboutme">
        <AboutMe />
        <EducAndExper />
        <MyWorks />
      </MainContainer>
      <Feedback />
    </AppMainContainer>
  );
}

export default AppContainer;
