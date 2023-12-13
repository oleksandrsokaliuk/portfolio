import React from "react";
import ReactDOM from "react-dom";
import ReactSwipe from "react-swipe";
import "./../styles/swiper.css";
import { InterestSwiperItem } from "../styles/InterestsSwiper.styles";
import { FcPrevious } from "react-icons/fc";

const InterestsSwiper = () => {
  let reactSwipeEl;

  return (
    <div className="swiper-cont">
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          continuous: true,
          auto: 5000,
          speed: 2000,
        }}
        ref={(el) => (reactSwipeEl = el)}
      >
        <InterestSwiperItem>
          <img
            src="https://images.pexels.com/photos/102448/pexels-photo-102448.jpeg?cs=srgb&dl=pexels-torsten-dettlaff-102448.jpg&fm=jpg"
            alt="football"
          />
        </InterestSwiperItem>
        <InterestSwiperItem>
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/i-stock-1287493837-1.jpg?c=16x9&q=w_800,c_fill"
            alt="video games"
          />
        </InterestSwiperItem>
        <InterestSwiperItem>
          <img
            src="https://www.fluentu.com/blog/german/wp-content/uploads/sites/5/2023/07/German-textbook-on-desk.jpg"
            alt="language"
          />
        </InterestSwiperItem>
      </ReactSwipe>
      <div className="btn-container">
        <button onClick={() => reactSwipeEl.prev()}>
          <FcPrevious />
        </button>
        <button className="btn-second" onClick={() => reactSwipeEl.next()}>
          <FcPrevious />
        </button>
      </div>
    </div>
  );
};

export default InterestsSwiper;
