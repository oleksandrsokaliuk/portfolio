import { motion } from "framer-motion";
import styled from "styled-components";
import { screenSizes } from "../../../generalStyles/GlobalStyles";

export const MainPhotoContainer = styled(motion.div)`
  position: relative;
  /* width: 100%; */
  min-width: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;

  @media (max-width: 1200px) {
    min-width: 80vw;
    height: 60vh;
  }
  @media (min-width: ${screenSizes.l}) and (max-width: 1200px) {
    min-width: 60vw;
  }

  @media (min-width: 1400px) {
    flex: 3 0 40%;
  }
`;

export const PhotoBackground = styled.div`
  background-color: rgba(0, 6, 27);
  height: 60vh;
  width: 100%;
  position: absolute;
  bottom: -2%;
  z-index: 5;
  border-radius: 54% 21% 54% 20% / 37% 18% 46% 25%;
  @media (max-width: 992px) {
    height: 85%;
  }
`;

export const MainPhoto = styled(motion.img)`
  /* position: absolute; */
  height: 100%;
  width: auto;
  bottom: 0;
  z-index: 6;
  @media (max-width: 992px) {
    height: 100%;
    width: auto;
  }
`;
