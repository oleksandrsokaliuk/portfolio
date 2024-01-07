import React, { FC } from "react";
import mainPhoto from "../../../assets/photo.png";
import {
  MainPhoto,
  MainPhotoContainer,
  PhotoBackground,
} from "../styles/Photo.styles";
import { IntroI } from "../Intro";

const Photo: FC<IntroI> = ({ scrollPosition }) => {
  return (
    <MainPhotoContainer>
      <MainPhoto
        src={mainPhoto}
        alt="Oleksandr Sokaliuk"
        style={{ y: scrollPosition * 5000 }}
      />
      <PhotoBackground></PhotoBackground>
    </MainPhotoContainer>
  );
};

export default Photo;
