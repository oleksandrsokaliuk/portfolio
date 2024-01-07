import { FC, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { languageSelector } from "../../redux/languageSlice";
import {
  Container,
  Example,
  ExampleCheckedParagraph,
  ExampleDescr,
  ExampleDescrContainer,
  ExampleHeader,
  ExampleIsFinished,
  ExampleLink,
  ExampleSubContainer,
  ExamplesContainer,
  FileredAllButton,
  FilterContainer,
  Header,
  IconContainer,
  LinksContainer,
  OneFilterParagraphContainer,
  Swiper,
  SwiperBtn,
  SwiperBtnsContainer,
  SwiperContainer,
} from "./styles/MyWorks.styles";

import WorkExample from "./components/WorkExample";
import ReactSwipe from "react-swipe";
import SwiperWorks from "./components/Swiper";
import Filter from "./components/filter/Filter";
import { StackI } from "../../data/dataTypes";

const MyWorks: FC = () => {
  const [showIconName, setShowIconName] = useState<boolean>(false);
  const [isExampleChecked, setIsExampleChecked] = useState<boolean>(false);
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
  const { header, filterItems, works, isFinished } = selectedLanguage.myWorks;
  // let reactSwipeEl;

  return (
    <Container>
      <Header>{header}</Header>
      {/* <FilterContainer>
        <OneFilterParagraphContainer
          picked={selectedFilters.length === 13}
          onClick={() => {
            setSelectedFilters((prevState) => {
              if (prevState.length >= 0 && prevState.length < 13) {
                return [
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
                ];
              } else {
                return [];
              }
            });
          }}
        >
          <FileredAllButton picked={selectedFilters.length === 13}>
            All
          </FileredAllButton>
        </OneFilterParagraphContainer>
        {filterItems.map((item) => {
          const Icon = iconCreator(item as StackI);
          return Icon ? (
            <OneFilterParagraphContainer
              picked={
                selectedFilters.find((element) => element === item) !==
                undefined
              }
              stack={item}
              onClick={() => {
                if (!selectedFilters.includes(item as StackI)) {
                  setSelectedFilters((prevState) => [
                    ...prevState,
                    item as StackI,
                  ]);
                } else {
                  setSelectedFilters((prevState) => {
                    const withoutElement = prevState.filter(
                      (element) => element !== item
                    );
                    return withoutElement;
                  });
                }
              }}
            >
              <Icon key={item} style={{ width: "100%", height: "100%" }} />
            </OneFilterParagraphContainer>
          ) : null;
        })}
      </FilterContainer> */}
      <Filter
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
      {/* <SwiperContainer>
        <Swiper
          swipeOptions={{
            continuous: true,
            // auto: 5000,
            speed: 2000,
          }}
          ref={(el) => (reactSwipeEl = el)}
        >
          {works.map((work) => (
            <WorkExample
              work={work}
              iconCreator={iconCreator}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              isExampleChecked={isExampleChecked}
              setIsExampleChecked={setIsExampleChecked}
              isFinished={isFinished}
            />
          ))}
        </Swiper>

        <SwiperBtnsContainer>
          <SwiperBtn onClick={() => reactSwipeEl.prev()}>Previous</SwiperBtn>
          <SwiperBtn onClick={() => reactSwipeEl.next()}>Next</SwiperBtn>
        </SwiperBtnsContainer>
      </SwiperContainer> */}
      <SwiperWorks
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
    </Container>
  );
};

export default MyWorks;
