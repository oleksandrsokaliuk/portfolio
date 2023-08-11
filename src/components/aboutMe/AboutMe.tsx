import { FC, useEffect, useRef, useState } from "react";
import aboutMePhoto from "../../assets/aboutMePhoto.png";
import InterestsSlider from "./subComponents/InterestsSlider";
import Info from "./subComponents/Info";
import {
  AboutMeContainer,
  AboutMeImage,
  InfoInterestsContainer,
  InnerContainer,
} from "./styles/AboutMe.styles";
import {
  AnimatePresence,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { InfoHeader } from "./styles/Info.styles";
import { useAppSelector } from "../../redux/hooks";
import { languageSelector } from "../../redux/languageSlice";
import ButtonCV from "./subComponents/ButtonCV";
import ControlPanel from "./subComponents/ControlPanel";

const AboutMe: FC = () => {
  const imgRef = useRef(null);
  const isImgInView = useInView(imgRef);
  const languageState = useAppSelector(languageSelector);
  const { whoAmI } = languageState.aboutMe;
  const [activeSlide, setActiveSlide] = useState(0);
  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 1 ? 0 : 1));
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
  };
  return (
    <AboutMeContainer>
      <InnerContainer>
        <InfoHeader>{whoAmI}</InfoHeader>
        <InfoInterestsContainer id="aboutme">
          <AnimatePresence>
            {activeSlide === 0 ? <Info /> : <InterestsSlider />}
          </AnimatePresence>
        </InfoInterestsContainer>
        <ControlPanel
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
          activeSlide={activeSlide}
        />
        <ButtonCV />
      </InnerContainer>
      <AboutMeImage ref={imgRef} src={aboutMePhoto} alt="Oleksandr Sokaliuk" />
    </AboutMeContainer>
  );
};

export default AboutMe;
