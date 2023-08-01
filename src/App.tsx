import Intro from "./components/intro/Intro";
import AboutMe from "./components/aboutMe/AboutMe";
import EducAndExper from "./components/educAndExper/EducAndExper";
import MyWorks from "./components/works/MyWorks";
import Feedback from "./components/feedback/Feedback";
import GlobalStyle from "./generalStyles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Intro />
      <AboutMe />
      <EducAndExper />
      <MyWorks />
      <Feedback />
    </>
  );
}

export default App;
