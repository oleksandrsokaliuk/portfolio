import { motion } from "framer-motion";
import styled from "styled-components";

export const MainPhotoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  @media (max-width: 992px) {
    width: 80vw;
    height: 60vh;
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
  height: 510px;
  width: 336px;
  bottom: 0;
  z-index: 6;
  @media (max-width: 992px) {
    height: 100%;
    width: auto;
  }
`;
