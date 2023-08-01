import { FC, useRef } from "react";
import LanguageSwitcher from "./subComponents/LanguageSwitcher";
import { useAppSelector } from "../../redux/hooks";
import { languageSelector } from "../../redux/languageSlice";
import Photo from "./subComponents/Photo";
import {
  IntroContainer,
  IntroHeader,
  IntroTextHeader,
  IntroTextSubHeader,
  ScrollButtonContainer,
  ScrollIcon,
  ScrollP,
  TextHeaderContainer,
} from "./styles/Intro.styles";
import { MotionValue, useScroll, useTransform } from "framer-motion";

const Intro: FC = () => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { header, subHeader, scrollButton } = selectedLanguage.introduction;
  return (
    <IntroContainer
    // style={{ scrollSnapAlign: "start" }}
    >
      <IntroHeader>
        <Photo />
        <TextHeaderContainer>
          <IntroTextHeader>{header}</IntroTextHeader>
          <IntroTextSubHeader>{subHeader}</IntroTextSubHeader>
        </TextHeaderContainer>
      </IntroHeader>
      <LanguageSwitcher />
      <ScrollButtonContainer>
        {scrollButton.map((word) => (
          <ScrollP>{word}</ScrollP>
        ))}
        <ScrollIcon />
      </ScrollButtonContainer>
    </IntroContainer>
  );
};

export default Intro;
