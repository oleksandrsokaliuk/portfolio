import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { BiSolidDownload } from "react-icons/bi";
import { FaArrowsLeftRight } from "react-icons/fa6";

const dragIcon = keyframes`
20% {
  transform: translateX(-20px);
}
40% {
  opacity: 1;
  transform: translateX(20px);
}
60% {
  opacity: 1;
  transform: translateX(-20px);
}
80% {
  transform: translateX(20px);
}
`;

export const InfoContainer = styled(motion.div)`
  color: ${(props) => props.theme.light.header};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 3;
  gap: 20px;
  justify-content: space-around;
  /* align-items: center; */
  @media (max-width: 992px) {
    flex-direction: row;
    /* padding-bottom: 10%; */
  }
  &:after {
    content: "<- Drag ->";
    position: absolute;
    bottom: -20%;
    left: 0;
    width: 100%;
    /* height: 2rem; */
    opacity: 0;
    font-size: 1.3rem;
    z-index: 100000000;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: ${(props) => props.theme.light.exceptionalColour}; */
    color: ${(props) => props.theme.light.secondaryBG};
  }
  &:hover::after {
    animation: ${dragIcon} 3s ease-in;
  }
`;

export const InfoHeader = styled.h2`
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 13.8px;
  text-transform: uppercase;
  color: ${(props) => props.theme.light.header};
  text-align: center;
  /* position: absolute;
  bottom: 85%; */
  /* height: 20vh; */
  margin: 0;
  padding: 0 20px;
  /* flex: 1; */
  @media (max-width: 992px) {
    font-size: 2em;
    text-align: center;
  }
`;

export const InfoItemContainer = styled.div`
  display: flex;
  /* margin-top: -15px; */
`;

export const InfoItemHeader = styled.p`
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1.8em;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  margin: 2% 0 0 0;
  text-transform: capitalize;
  &::after {
    content: ":";
  }
  @media (max-width: 992px) {
    font-size: 1.4em;
  }
`;

export const InfoItemDescription = styled.p`
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 2% 0 0 2%;
  text-transform: capitalize;
  @media (max-width: 992px) {
    font-size: 1.4em;
  }
`;

export const CVDownloadButton = styled.a`
  color: ${(props) => props.theme.light.header};
  text-align: center;
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3.72px;
  border-radius: 36px;
  background: ${(props) => props.theme.light.exceptionalColour};
  align-self: center;
  margin-top: 2%;
  padding: 2% 6%;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 992px) {
    width: 100%;
    align-self: center;
    margin-top: 0;
  }
`;

export const CVDownloadIcon = styled(BiSolidDownload)`
  align-self: center;
  vertical-align: middle;
`;

export const ItemsContainer = styled.div``;

export const DragIconContainer = styled.div`
  /* position: absolute; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DragIconText = styled.p``;

export const DragIcon = styled(FaArrowsLeftRight)`
  font-size: 3rem;
  stroke-width: 0px;
`;
