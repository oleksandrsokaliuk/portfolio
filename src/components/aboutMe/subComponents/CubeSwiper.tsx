import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./../styles/cube-swiper.css";

import footballBG from "./../../../assets/aboutme-football.webp";
import learningBG from "./../../../assets/aboutme-learning.webp";
import codingBG from "./../../../assets/aboutme-programming.webp";

import { EffectCube, Pagination } from "swiper/modules";
import Info from "./Info";
import SwiperItem from "./SwiperItem";
import { useAppSelector } from "../../../redux/hooks";
import { languageSelector } from "../../../redux/languageSlice";

export default function CubeSwiper() {
  const languageState = useAppSelector(languageSelector);
  const { coding, football, learning } = languageState.interests;
  return (
    <div className="cube-container">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        loop={true}
        pagination={false}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Info />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem
            header={football.header}
            team={football.team}
            league={football.league}
            picture={footballBG}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem header={learning.header} picture={learningBG} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem header={coding.header} picture={codingBG} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
