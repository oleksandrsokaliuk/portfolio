import Intro from "./components/intro/Intro";
import AboutMe from "./components/aboutMe/AboutMe";
import EducAndExper from "./components/educAndExper/EducAndExper";
import MyWorks from "./components/works/MyWorks";
import Feedback from "./components/feedback/Feedback";
import GlobalStyle, { AppContainer } from "./generalStyles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <div style={{ scrollSnapAlign: "start" }}>
          <Intro />
        </div>
        <div style={{ scrollSnapAlign: "start" }}>
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
