import { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { languageSelector } from "../../../redux/languageSlice";
import {
  IoCall,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import {
  CallIcon,
  CallToActionContainer,
  CallToActionDescr,
  CallToActionDescrContainer,
  CallToActionHeader,
  ContactDataContainer,
  Container,
  Github,
  IconA,
  Instagram,
  LinkedIn,
  MailIcon,
  PhoneEmail,
  PhoneEmailContainer,
  SocialNetworksContainer,
} from "../styles/ContactData.styles";

const ContactData: FC = () => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { header, callToAction } = selectedLanguage.feedBack;
  return (
    <Container>
      <CallToActionContainer>
        <CallToActionHeader>{header}</CallToActionHeader>
        <CallToActionDescrContainer>
          <CallToActionDescr>{callToAction.ask}</CallToActionDescr>
          <CallToActionDescr style={{ fontWeight: "700" }}>
            {callToAction.hi}
          </CallToActionDescr>
        </CallToActionDescrContainer>
      </CallToActionContainer>
      <ContactDataContainer>
        <PhoneEmailContainer>
          <CallIcon />
          <PhoneEmail>+49 160 933443030 </PhoneEmail>
        </PhoneEmailContainer>
        <PhoneEmailContainer>
          <MailIcon />
          <PhoneEmail>sokaliuk.developer@gmail.com </PhoneEmail>
        </PhoneEmailContainer>
      </ContactDataContainer>
      <SocialNetworksContainer>
        <IconA
          href="https://www.linkedin.com/in/oleksandr-sokaliuk-b7b9b0244"
          target="_blank"
        >
          <LinkedIn />
        </IconA>
        <IconA href="https://www.instagram.com/alex_sokal/" target="_blank">
          <Instagram />
        </IconA>
        <IconA href="https://github.com/oleksandrsokaliuk" target="_blank">
          <Github />
        </IconA>
      </SocialNetworksContainer>
    </Container>
  );
};

export default ContactData;
