import { FiMail } from "react-icons/fi";
import {
  IoCall,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import styled from "styled-components";

export const Container = styled.div`
  height: 75%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
`;

export const CallToActionContainer = styled.div`
  height: 30%;
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
`;

export const CallToActionDescrContainer = styled.div``;

export const CallToActionDescr = styled.p`
  color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 5.52px;
  text-transform: uppercase;
`;

export const ContactDataContainer = styled.div`
  height: 30%;
`;

export const PhoneEmailContainer = styled.div`
  display: flex;
  gap: 5%;
`;

export const PhoneEmail = styled.p`
  color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
`;

export const SocialNetworksContainer = styled.div`
  height: 10%;
  width: 40%;
  display: flex;
  align-items: center;
  gap: 10%;
`;

export const CallIcon = styled(IoCall)`
  color: ${(props) => props.theme.light.header};
  height: 100%;
  width: 5%;
`;

export const MailIcon = styled(FiMail)`
  color: ${(props) => props.theme.light.header};
  height: 100%;
  width: 5%;
`;

export const LinkedIn = styled(IoLogoLinkedin)`
  color: ${(props) => props.theme.light.exceptionalColour};
  height: 100%;
  width: 20%;
  cursor: pointer;
`;

export const Instagram = styled(IoLogoInstagram)`
  color: ${(props) => props.theme.light.exceptionalColour};
  height: 100%;
  width: 20%;
  cursor: pointer;
`;

export const Github = styled(IoLogoGithub)`
  color: ${(props) => props.theme.light.exceptionalColour};
  height: 100%;
  width: 20%;
  cursor: pointer;
`;
