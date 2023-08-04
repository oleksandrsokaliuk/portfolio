import React, { FC, useEffect, useRef, useState } from "react";
import mainPhoto from "../../../assets/photo.png";
import {
  MainPhoto,
  MainPhotoContainer,
  PhotoBackground,
} from "../styles/Photo.styles";
import {
  AnimatePresence,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { IntroI } from "../Intro";

const Photo: FC<IntroI> = ({ scrollPosition }) => {
  // const { scrollYProgress } = useScroll();
  // const [hookedYPostion, setHookedYPosition] = React.useState(0);
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(latest);
  //   setHookedYPosition(latest);
  // });

  return (
    <MainPhotoContainer>
      <MainPhoto
        src={mainPhoto}
        alt="Oleksandr Sokaliuk"
        style={{ y: scrollPosition * 5000 }}
        initial={{ scale: 0, x: 200 }}
        animate={{ scale: 1, x: 0 }}
        // transition={{ duration: 1 }}
      />
      <PhotoBackground></PhotoBackground>
    </MainPhotoContainer>
  );
};

export default Photo;
