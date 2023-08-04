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
  // const [infoAppearance, setInfoAppearance] = useState<boolean>(false);
  // const [interestsAppearance, setInterestsAppearance] =
  //   useState<boolean>(false);
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"],
  // });
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(latest);
  //   if (latest >= 0.5 && latest < 0.9) {
  //     setInfoAppearance(true);
  //   } else {
  //     setInfoAppearance(false);
  //   }
  //   if (latest >= 0.1 && latest < 0.5) {
  //     setInterestsAppearance(true);
  //   } else {
  //     setInterestsAppearance(false);
  //   }
  // });
  // useEffect(() => {
  //   console.log(scrollYProgress);
  // }, [scrollYProgress]);
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
          <ControlPanel
            handleNextSlide={handleNextSlide}
            handlePrevSlide={handlePrevSlide}
            activeSlide={activeSlide}
          />
        </InfoInterestsContainer>
        <ButtonCV />
      </InnerContainer>
      <AboutMeImage
        ref={imgRef}
        // style={{
        //   right: 0,
        //   transform: isImgInView ? "scale(1)" : "scale(0.8)",
        //   opacity: isImgInView ? 1 : 0,
        //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        // }}
        src={aboutMePhoto}
        alt="Oleksandr Sokaliuk"
      />
    </AboutMeContainer>
  );
};

export default AboutMe;
