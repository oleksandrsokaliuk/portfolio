import { FC, useRef } from "react";
import ButtonCV from "./ButtonCV";
import { languageSelector } from "../../../redux/languageSlice";
import { useAppSelector } from "../../../redux/hooks";
import {
  InfoContainer,
  InfoHeader,
  InfoItemContainer,
  InfoItemDescription,
  InfoItemHeader,
  ItemsContainer,
} from "../styles/Info.styles";
import { useInView } from "framer-motion";

const Info: FC = () => {
  const infoRef = useRef(null);
  const isInfoInView = useInView(infoRef);
  const languageState = useAppSelector(languageSelector);
  const { name, birthDate, county, city, nationality } = languageState.aboutMe;

  return (
    <InfoContainer
      ref={infoRef}
      style={{
        transform: isInfoInView ? "none" : "translateX(-600px)",
        opacity: isInfoInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <ItemsContainer>
        <InfoItemContainer>
          <InfoItemHeader>{name.title}</InfoItemHeader>
          <InfoItemDescription>{name.description}</InfoItemDescription>
        </InfoItemContainer>
        <InfoItemContainer>
          <InfoItemHeader>{birthDate.title}</InfoItemHeader>
          <InfoItemDescription>{birthDate.description}</InfoItemDescription>
        </InfoItemContainer>
        <InfoItemContainer>
          <InfoItemHeader>{county.title}</InfoItemHeader>
          <InfoItemDescription>{county.description}</InfoItemDescription>
        </InfoItemContainer>
        <InfoItemContainer>
          <InfoItemHeader>{city.title}</InfoItemHeader>
          <InfoItemDescription>{city.description}</InfoItemDescription>
        </InfoItemContainer>
        <InfoItemContainer>
          <InfoItemHeader>{nationality.title}</InfoItemHeader>
          <InfoItemDescription>{nationality.description}</InfoItemDescription>
        </InfoItemContainer>
      </ItemsContainer>
      <ButtonCV />
    </InfoContainer>
  );
};

export default Info;
