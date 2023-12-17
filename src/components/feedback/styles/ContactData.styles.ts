import { FiMail } from "react-icons/fi";
import {
  IoCall,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import styled from "styled-components";
import { screenSizes } from "../../../generalStyles/GlobalStyles";

export const Container = styled.div`
  /* height: 75%;
  width: 100%; */
  height: 100%;
  padding: 10% 20px 10% 50px;
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  @media (max-width: ${screenSizes.l}) {
    padding: 35% 20px 35% 50px;
  }
  @media (max-width: ${screenSizes.s}) {
    /* padding: 2% 10px 2% 10px; */
    padding: 5% 10px 5% 10px;
    align-items: center;
    gap: 40px;
  }
`;

export const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CallToActionHeader = styled.h3`
  color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 3em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 15.64px;
  text-transform: uppercase;
  margin: 0;
  @media (max-width: ${screenSizes.s}) {
    text-align: center;
    font-size: 1.7rem;
  }
`;

export const CallToActionDescrContainer = styled.div`
  display: block;
  @media (max-width: ${screenSizes.s}) {
    display: none;
  }
`;

export const CallToActionDescr = styled.p`
  color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1.5em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 5.52px;
  text-transform: uppercase;
`;

export const ContactDataContainer = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  gap: 10%;
`;

export const PhoneEmailContainer = styled.div`
  display: flex;
  gap: 5%;
`;

export const PhoneEmail = styled.p`
  color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1.2em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: lowercase;
  margin: 0;
`;

export const SocialNetworksContainer = styled.div`
  /* height: 10%; */
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10%;
  @media (max-width: ${screenSizes.s}) {
    justify-content: center;
  }
`;

export const CallIcon = styled(IoCall)`
  color: ${(props) => props.theme.light.header};
  height: 100%;
  width: 20px;
`;

export const MailIcon = styled(FiMail)`
  color: ${(props) => props.theme.light.header};
  height: 100%;
  width: 20px;
  @media (max-width: ${screenSizes.s}) {
    width: 40px;
  }
`;

export const LinkedIn = styled(IoLogoLinkedin)`
  color: ${(props) => props.theme.light.exceptionalColour};
  height: 100%;
  width: 100%;
  &:hover {
    color: ${(props) => props.theme.light.header};
  }
`;

export const Instagram = styled(IoLogoInstagram)`
  color: ${(props) => props.theme.light.exceptionalColour};
  height: 100%;
  width: 100%;
  &:hover {
    color: ${(props) => props.theme.light.header};
  }
`;

export const Github = styled(IoLogoGithub)`
  color: ${(props) => props.theme.light.exceptionalColour};
  height: 100%;
  width: 100%;
  &:hover {
    color: ${(props) => props.theme.light.header};
  }
`;

export const IconA = styled.a`
  height: 100%;
  width: 20%;
  cursor: pointer;
`;
