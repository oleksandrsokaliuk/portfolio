import styled from "styled-components";
import { motion } from "framer-motion";
import { BiSolidDownload } from "react-icons/bi";

export const InfoContainer = styled(motion.div)`
  color: ${(props) => props.theme.light.header};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* gap: 15px; */
  height: 80vh;
  width: 100%;
  /* overflow: hidden; */
`;

export const InfoHeader = styled.h2`
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 4em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 13.8px;
  text-transform: uppercase;
  color: ${(props) => props.theme.light.header};
  /* position: absolute;
  bottom: 85%; */
  height: 20vh;
  margin: 0;
`;

export const InfoItemContainer = styled.div`
  display: flex;
  /* margin-top: -15px; */
`;

export const InfoItemHeader = styled.p`
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1.7em;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  margin: 2% 0 0 0;
  &::after {
    content: ":";
  }
`;

export const InfoItemDescription = styled.p`
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1.7em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 2% 0 0 2%;
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
  align-self: flex-start;
  /* vertical-align: middle; */
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10%;
`;

export const CVDownloadIcon = styled(BiSolidDownload)`
  align-self: center;
  vertical-align: middle;
`;

export const ItemsContainer = styled.div``;
