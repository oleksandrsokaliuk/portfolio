import React, { FC, useEffect, useState } from "react";
import mainPhoto from "../../../assets/photo.png";
import {
  MainPhoto,
  MainPhotoContainer,
  PhotoBackground,
} from "../styles/Photo.styles";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";

const Photo: FC = () => {
  const { scrollYProgress } = useScroll();
  const [hookedYPostion, setHookedYPosition] = React.useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });
  return (
    <MainPhotoContainer>
      <MainPhoto
        src={mainPhoto}
        alt="Oleksandr Sokaliuk"
        style={{ y: hookedYPostion * 5000 }}
      />
      <PhotoBackground></PhotoBackground>
    </MainPhotoContainer>
  );
};

export default Photo;
