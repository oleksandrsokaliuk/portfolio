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
          <IntroTextHeader
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
          >
            {header}
          </IntroTextHeader>
          <IntroTextSubHeader
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
          >
            {subHeader}
          </IntroTextSubHeader>
        </TextHeaderContainer>
      </IntroHeader>
      <LanguageSwitcher />
      <ScrollButtonContainer
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.4 },
        }}
      >
        {scrollButton.map((word) => (
          <ScrollP>{word}</ScrollP>
        ))}
        <ScrollIcon />
      </ScrollButtonContainer>
    </IntroContainer>
  );
};

export default Intro;
