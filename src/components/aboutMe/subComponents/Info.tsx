import { FC, useEffect, useRef } from "react";
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
import { AnimatePresence, useInView } from "framer-motion";

interface InfoI {
  appears: boolean;
}

const Info: FC<InfoI> = ({ appears }) => {
  const infoRef = useRef(null);
  const isInfoInView = useInView(infoRef);
  const languageState = useAppSelector(languageSelector);
  const { name, birthDate, county, city, nationality } = languageState.aboutMe;
  useEffect(() => {
    console.log(appears);
  }, [appears]);
  return (
    <AnimatePresence>
      <InfoContainer
        ref={infoRef}
        // initial={{ x: 600 }}
        // animate={appears && { x: 0 }}
        // transition={{ ease: "easeOut", duration: 2 }}
        style={{
          transform: appears ? "none" : "translateX(-600px)",
          opacity: appears ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        // exit={{ x: -600 }}
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
    </AnimatePresence>
  );
};

export default Info;
