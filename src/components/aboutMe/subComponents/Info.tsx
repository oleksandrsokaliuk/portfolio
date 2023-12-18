import { FC, useEffect, useRef } from "react";
import ButtonCV from "./ButtonCV";
import { languageSelector } from "../../../redux/languageSlice";
import { useAppSelector } from "../../../redux/hooks";
import {
  DragIcon,
  DragIconContainer,
  DragIconText,
  InfoContainer,
  InfoHeader,
  InfoItemContainer,
  InfoItemDescription,
  InfoItemHeader,
  ItemsContainer,
} from "../styles/Info.styles";
import { AnimatePresence, useInView } from "framer-motion";
import { FaArrowsLeftRight } from "react-icons/fa6";

interface InfoI {
  appears?: boolean;
}

const Info: FC<InfoI> = ({ appears }) => {
  const languageState = useAppSelector(languageSelector);
  const { name, birthDate, county, city, nationality } = languageState.aboutMe;
  return (
    <InfoContainer
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -1000 }}
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
        {/* <InfoItemContainer>
          <InfoItemHeader>{nationality.title}</InfoItemHeader>
          <InfoItemDescription>{nationality.description}</InfoItemDescription>
        </InfoItemContainer> */}
      </ItemsContainer>
    </InfoContainer>
  );
};

export default Info;
