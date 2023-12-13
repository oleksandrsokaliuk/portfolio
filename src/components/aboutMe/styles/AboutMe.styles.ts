// import styled from "styled-components";
// import { motion } from "framer-motion";

// export const AboutMeContainer = styled(motion.section)`
//   min-width: 100%;
//   display: flex;
//   position: relative;
//   height: 100vh;
//   align-items: center;
//   overflow: hidden;
//   scroll-snap-align: "center";
//   @media (max-width: 992px) {
//     flex-direction: column;
//     /* width: inherit;   */
//     overflow: hidden;
//   }
// `;

// export const InnerContainer = styled(motion.div)`
//   /* width: 50vw; */
//   /* margin-left: 10%; */
//   /* height: 80vh; */
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   /* height: 80%; */
//   @media (max-width: 992px) {
//     /* width: 80vw; */
//     /* margin-left: 0; */
//     flex: 1 1 10%;
//     align-items: center;
//     align-self: center;
//   }
// `;

// export const InfoInterestsContainer = styled(motion.div)`
//   display: flex;
//   width: 50vw;
//   position: relative;
//   height: 100%;
//   @media (max-width: 992px) {
//     width: 100%;
//   }
// `;

// export const AboutMeImageContainer = styled.div``;

// export const AboutMeImage = styled(motion.img)`
//   position: absolute;
//   /* height: 120%; */
//   width: auto;
//   bottom: 0;
//   right: 5%;
//   filter: drop-shadow(0px 4px 40px #00061b) blur(0.2em);
//   &:hover {
//     filter: none;
//   }
//   @media (max-width: 992px) {
//     /* position: relative;
//     align-self: center;
//     flex: 1 1 10%;
//     height: auto;
//     bottom: auto;
//     right: auto; */
//     filter: blur(0);
//     filter: drop-shadow(0 0 5px ${(props) => props.theme.light.header});
//     bottom: 0;
//     right: 0;
//   }
//   @media only screen and (max-width: 1230px) {
//     display: none;
//   }
// `;

import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutMeContainer = styled(motion.section)`
  max-width: 1050px;
  margin: 0 auto;
  padding-left: 50px;
  display: flex;
  height: 100vh;
  align-items: center;
  position: relative;
  scroll-snap-align: "center";
  @media (max-width: 992px) {
    flex-direction: column;
    overflow: hidden;
    padding-left: 0;
  }
  @media (min-width: 1800px) {
    max-width: 1500px;
  }
`;

export const InnerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 992px) {
    flex: 1 1 10%;
    align-items: center;
    align-self: center;
  }
`;

export const InfoWrapper = styled.div`
  top: 0;
  left: -2px;
  position: absolute;
  /* background-color: lightgray; */
  background: rgba(0, 6, 27, 0.66);
  /* border-radius: 16px; */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.3px);
  -webkit-backdrop-filter: blur(11.3px);
  border: 1px solid rgba(0, 6, 27, 0.3);
  background: ${(props) => props.theme.light.mainBG};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: 0;
  transform-origin: 0;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 20px;
`;

export const InfoInterestsContainer = styled(motion.div)`
  max-width: 500px;
  position: relative;
  border-radius: 10px;
  -webkit-transform: preserve-3d;
  -ms-transform: preserve-3d;
  transform: preserve-3d;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #000;
  /* padding: 10px 20px 10px 40px; */
  &:hover ${InfoWrapper} {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }
  @media (max-width: 992px) {
    /* width: 100%; */
  }
`;

export const AboutMeImageContainer = styled.div`
  align-self: flex-end;
  height: 100%;
  display: flex;
  align-items: flex-end;
  @media (max-width: 992px) {
    align-self: center;
  }
`;

export const AboutMeImage = styled(motion.img)`
  filter: drop-shadow(0px 4px 40px #00061b) blur(0.2em);
  object-fit: contain;
  object-position: top;
  width: 100%;

  &:hover {
    filter: none;
  }
  /* @media (max-width: 992px) {
    filter: blur(0);
    filter: drop-shadow(0 0 5px ${(props) => props.theme.light.header});
    bottom: 0;
    right: 0;
  }
  @media only screen and (max-width: 1230px) {
    display: none;
  } */
`;
