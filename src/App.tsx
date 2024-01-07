import GlobalStyle from "./generalStyles/GlobalStyles";
import { Suspense } from "react";
import Loading from "./components/loading/Loading";
import AppContainer from "./components/AppContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <>
        <Suspense fallback={<Loading />}>
          <AppContainer />
        </Suspense>
      </>
    </>
  );
}

export default App;
