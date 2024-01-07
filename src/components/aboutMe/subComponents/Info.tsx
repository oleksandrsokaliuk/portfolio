import { languageSelector } from "../../../redux/languageSlice";
import { useAppSelector } from "../../../redux/hooks";
import {
  InfoContainer,
  InfoItemContainer,
  InfoItemDescription,
  InfoItemHeader,
  ItemsContainer,
} from "../styles/Info.styles";

const Info = () => {
  const languageState = useAppSelector(languageSelector);
  const { name, birthDate, county, city } = languageState.aboutMe;
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
      </ItemsContainer>
    </InfoContainer>
  );
};

export default Info;
