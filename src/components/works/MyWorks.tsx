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
import { StackI } from "../../data/dataTypes";
import { BsFiletypeHtml, BsGithub } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux, TbBrandReactNative } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

import {
  SiNextdotjs,
  SiNestjs,
  SiStyledcomponents,
  SiExpress,
  SiMongoose,
  SiSocketdotio,
} from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import WorkExample from "./components/WorkExample";
import ReactSwipe from "react-swipe";
import SwiperWorks from "./components/Swiper";

const MyWorks: FC = () => {
  const [showIconName, setShowIconName] = useState<boolean>(false);
  const [isExampleChecked, setIsExampleChecked] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<StackI[]>([]);
  const selectedLanguage = useAppSelector(languageSelector);
  const { header, filterItems, works, isFinished } = selectedLanguage.myWorks;
  let reactSwipeEl;

  const iconCreator = (stack: StackI) => {
    switch (stack) {
      case StackI.HTML:
        return BsFiletypeHtml;
      case StackI.CSS:
        return DiCss3;
      case StackI.JAVASCRIPT:
        return BiLogoJavascript;
      case StackI.TYPESCRIPT:
        return BiLogoTypescript;
      case StackI.REACT:
        return FaReact;
      case StackI.REDUX:
        return TbBrandRedux;
      case StackI.NEXT:
        return SiNextdotjs;
      case StackI.NEST:
        return SiNestjs;
      case StackI.REACTNATIVE:
        return TbBrandReactNative;
      case StackI.STYLEDCOMPONENTS:
        return SiStyledcomponents;
      case StackI.EXPRESS:
        return SiExpress;
      case StackI.MONGOOSE:
        return SiMongoose;
      case StackI.WEBSOCKET:
        return SiSocketdotio;
    }
  };
  return (
    <Container>
      <Header>{header}</Header>
      <FilterContainer
        onMouseEnter={() => setShowIconName(true)}
        onMouseLeave={() => setShowIconName(false)}
      >
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
      </FilterContainer>
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
      <SwiperWorks />
    </Container>
  );
};

export default MyWorks;
