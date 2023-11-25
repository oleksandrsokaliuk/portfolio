import React, { FC, useEffect, useRef } from "react";
import LanguageSwitcher from "./subComponents/LanguageSwitcher";
import { useAppSelector } from "../../redux/hooks";
import { languageSelector } from "../../redux/languageSlice";
import Photo from "./subComponents/Photo";
import {
  IntroContainer,
  IntroHeader,
  IntroTextHeader,
  IntroTextSubHeader,
  ScrollA,
  ScrollButtonContainer,
  ScrollIcon,
  TextHeaderContainer,
} from "./styles/Intro.styles";
import {
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ThemeI } from "../../generalStyles/theme";

export interface IntroI {
  scrollPosition: number;
}

const Intro: FC<IntroI> = ({ scrollPosition }) => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { header, subHeader, scrollButton } = selectedLanguage.introduction;
  return (
    <IntroContainer>
      <LanguageSwitcher />
      <IntroHeader>
        <Photo scrollPosition={scrollPosition} />
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
          <ScrollA href="#aboutme">{word}</ScrollA>
        ))}
        <ScrollIcon />
      </ScrollButtonContainer>
    </IntroContainer>
  );
};

export default Intro;
