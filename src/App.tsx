import Intro from "./components/intro/Intro";
// import AboutMe from "./components/aboutMe/AboutMe";
// import EducAndExper from "./components/educAndExper/EducAndExper";
// import MyWorks from "./components/works/MyWorks";
// import Feedback from "./components/feedback/Feedback";
import GlobalStyle, {
  AppContainer,
  MainContainer,
} from "./generalStyles/GlobalStyles";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Loading from "./components/loading/Loading";

// const Intro = React.lazy(() => import("./components/intro/Intro"));
const AboutMe = React.lazy(() => import("./components/aboutMe/AboutMe"));
const EducAndExper = React.lazy(
  () => import("./components/educAndExper/EducAndExper")
);
const MyWorks = React.lazy(() => import("./components/works/MyWorks"));
const Feedback = React.lazy(() => import("./components/feedback/Feedback"));

function App() {
  const AppRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: AppRef });
  const [hookedYPostion, setHookedYPosition] = useState(0);
  // useEffect(() => {
  //   console.log({ scrollProgress: hookedYPostion });
  //   setHookedYPosition(scrollYProgress.get());
  //   console.log({ scrollProgress: hookedYPostion });
  // }, [hookedYPostion]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHookedYPosition(scrollYProgress.get());
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log({ latestScroll: latest * 100 });
    setHookedYPosition(latest);
  });

  return (
    <>
      <GlobalStyle />
      <>
        <Suspense fallback={<Loading />}>
          <AppContainer ref={AppRef}>
            <Intro scrollPosition={hookedYPostion} />
            <MainContainer>
              <AboutMe />
              <EducAndExper />
              <MyWorks />
            </MainContainer>
            <Feedback />
          </AppContainer>
        </Suspense>
      </>
    </>
  );
}

export default App;
