import { FC, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { languageSelector } from "../../redux/languageSlice";
import { Container, Header } from "./styles/MyWorks.styles";
import SwiperWorks from "./components/Swiper";
import Filter from "./components/filter/Filter";
import { StackI } from "../../data/dataTypes";

const MyWorks: FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<StackI[]>([
    StackI.HTML,
    StackI.CSS,
    StackI.JAVASCRIPT,
    StackI.TYPESCRIPT,
    StackI.REACT,
    StackI.STYLEDCOMPONENTS,
    StackI.REACTNATIVE,
    StackI.REDUX,
    StackI.NEXT,
    StackI.NEST,
    StackI.EXPRESS,
    StackI.MONGOOSE,
    StackI.WEBSOCKET,
  ]);
  const selectedLanguage = useAppSelector(languageSelector);
  const { header } = selectedLanguage.myWorks;

  return (
    <Container>
      <Header>{header}</Header>
      <Filter
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
      <SwiperWorks
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
    </Container>
  );
};

export default MyWorks;
