import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoContainer = styled(motion.div)`
  color: ${(props) => props.theme.light.header};
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  height: 100vh;
`;

export const InfoHeader = styled.h2`
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 3em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 13.8px;
  text-transform: uppercase;
  color: ${(props) => props.theme.light.header};
  position: absolute;
  bottom: 85%;
`;

export const InfoItemContainer = styled.div`
  display: flex;
  /* gap: 10px; */
  /* height: 8vh; */
  margin-top: -15px;
`;

export const InfoItemHeader = styled.p`
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1.2em;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  &::after {
    content: ":";
  }
`;

export const InfoItemDescription = styled.p`
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1.2em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
`;

export const ItemsContainer = styled.div``;
