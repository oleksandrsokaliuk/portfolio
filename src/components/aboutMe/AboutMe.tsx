import { FC, useRef, useState } from "react";
import aboutMePhoto from "../../assets/aboutMePhoto.png";
import InterestsSlider from "./subComponents/InterestsSlider";
import Info from "./subComponents/Info";
import {
  AboutMeContainer,
  AboutMeImage,
  InfoInterestsContainer,
} from "./styles/AboutMe.styles";
import { useInView } from "framer-motion";
import { InfoHeader } from "./styles/Info.styles";
import { useAppSelector } from "../../redux/hooks";
import { languageSelector } from "../../redux/languageSlice";

const AboutMe: FC = () => {
  const imgRef = useRef(null);
  const isImgInView = useInView(imgRef);
  const languageState = useAppSelector(languageSelector);
  const { whoAmI } = languageState.aboutMe;
  return (
    <AboutMeContainer>
      <InfoInterestsContainer>
        <InfoHeader>{whoAmI}</InfoHeader>
        <Info />
        <InterestsSlider />
      </InfoInterestsContainer>
      <AboutMeImage
        ref={imgRef}
        style={{
          position: "sticky",
          top: "10%",
          right: 0,
          transform: isImgInView ? "scale(1)" : "scale(0.8)",
          opacity: isImgInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        src={aboutMePhoto}
        alt="Oleksandr Sokaliuk"
      />
    </AboutMeContainer>
  );
};

export default AboutMe;
