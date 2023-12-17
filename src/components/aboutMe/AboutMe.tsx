import { FC, useEffect, useRef, useState } from "react";
import aboutMePhoto from "../../assets/aboutMePhoto.png";
import InterestsSlider from "./subComponents/InterestsSlider";
import Info from "./subComponents/Info";
import {
  AboutMeContainer,
  AboutMeImage,
  AboutMeImageContainer,
  InfoInterestsContainer,
  InfoWrapper,
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
import InterestsSwiper from "./subComponents/InterestsSwiper";

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
    <AboutMeContainer id="aboutme">
      <InnerContainer>
        <InfoHeader>{whoAmI}</InfoHeader>
        <InfoInterestsContainer>
          <InterestsSwiper />
          <InfoWrapper>
            <Info />
          </InfoWrapper>
          {/* </AnimatePresence> */}
        </InfoInterestsContainer>
        {/* <ControlPanel
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
          activeSlide={activeSlide}
        /> */}
        <ButtonCV />
      </InnerContainer>
      <AboutMeImageContainer>
        <AboutMeImage
          ref={imgRef}
          src={aboutMePhoto}
          alt="Oleksandr Sokaliuk"
        />
      </AboutMeImageContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
