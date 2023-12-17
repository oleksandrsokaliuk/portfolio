import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFiletypeHtml } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux, TbBrandReactNative } from "react-icons/tb";
import {
  SiExpress,
  SiMongoose,
  SiNestjs,
  SiNextdotjs,
  SiSocketdotio,
  SiStyledcomponents,
} from "react-icons/si";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./../styles/styles.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { useAppSelector } from "../../../redux/hooks";
import { languageSelector } from "../../../redux/languageSlice";
import WorkExample from "./WorkExample";
import { StackI } from "../../../data/dataTypes";
import { SwiperSld } from "../styles/MyWorks.styles";

export default function SwiperWorks() {
  const [showIconName, setShowIconName] = useState<boolean>(false);
  const [isExampleChecked, setIsExampleChecked] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<StackI[]>([]);
  const selectedLanguage = useAppSelector(languageSelector);
  const { header, filterItems, works, isFinished } = selectedLanguage.myWorks;
  const iconCreator = (stack: StackI) => {
    switch (stack) {
      case StackI.HTML:
        return BsFiletypeHtml;
      case StackI.CSS:
        return DiCss3;
      case StackI.JAVASCRIPT:
        return BiLogoJavascript;
      case StackI.TYPESCRIPT:
        return BiLogoTypescript;
      case StackI.REACT:
        return FaReact;
      case StackI.REDUX:
        return TbBrandRedux;
      case StackI.NEXT:
        return SiNextdotjs;
      case StackI.NEST:
        return SiNestjs;
      case StackI.REACTNATIVE:
        return TbBrandReactNative;
      case StackI.STYLEDCOMPONENTS:
        return SiStyledcomponents;
      case StackI.EXPRESS:
        return SiExpress;
      case StackI.MONGOOSE:
        return SiMongoose;
      case StackI.WEBSOCKET:
        return SiSocketdotio;
    }
  };
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {works.map((work, idx) => (
          <SwiperSld>
            <WorkExample
              work={work}
              iconCreator={iconCreator}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              isExampleChecked={isExampleChecked}
              setIsExampleChecked={setIsExampleChecked}
              isFinished={isFinished}
              index={idx}
            />
          </SwiperSld>
        ))}
      </Swiper>
    </>
  );
}