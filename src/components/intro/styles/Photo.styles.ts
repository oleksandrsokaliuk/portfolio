import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { screenSizes } from "../../../generalStyles/GlobalStyles";

const morph = keyframes`
0%, 100% {
  border-radius: 
  54% 21% 54% 20% / 37% 18% 46% 25%
}
20% {
  border-radius: 
    67% 43% 51% 35% /
    45% 46% 69% 35%;
}
34% {
  border-radius: 
    80% 64% 48% 53% /
    54% 68% 85% 42%;
}
67% {
  border-radius: 
  68% 31% 60% 28% /
    41% 63% 52% 28%;
}
`;

const morphBottom = keyframes`
0%, 100% {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}
20% {
  border-bottom-left-radius: 65%;
  border-bottom-right-radius: 58%;
}
34% {
  border-bottom-left-radius: 78%;
  border-bottom-right-radius: 82%;
}
67% {
  border-bottom-left-radius: 62%;
  border-bottom-right-radius: 57%;
}
`;

export const MainPhotoContainer = styled(motion.div)`
  position: relative;
  /* width: 100%; */
  min-width: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  /* border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%; */
  animation: ${morphBottom} 10s linear infinite;

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
  /* border-radius: 54% 21% 54% 20% / 37% 18% 46% 25%; */
  animation: ${morph} 10s linear infinite;
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
