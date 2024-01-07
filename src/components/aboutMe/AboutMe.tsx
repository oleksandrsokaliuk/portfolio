import { FC, useRef } from "react";
import aboutMePhoto from "../../assets/aboutMePhoto.png";
import {
  AboutMeContainer,
  AboutMeImage,
  AboutMeImageContainer,
  InnerContainer,
} from "./styles/AboutMe.styles";
import { InfoHeader } from "./styles/Info.styles";
import { useAppSelector } from "../../redux/hooks";
import { languageSelector } from "../../redux/languageSlice";
import ButtonCV from "./subComponents/ButtonCV";
import CubeSwiper from "./subComponents/CubeSwiper";

const AboutMe: FC = () => {
  const imgRef = useRef(null);
  const languageState = useAppSelector(languageSelector);
  const { whoAmI } = languageState.aboutMe;
  return (
    <AboutMeContainer>
      <InnerContainer>
        <InfoHeader>{whoAmI}</InfoHeader>
        <CubeSwiper />
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
