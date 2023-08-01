import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { languageSelector } from "../../redux/languageSlice";
import {
  Container,
  Example,
  ExamplesContainer,
  FilterContainer,
  FilterParagraph,
  Header,
  OneFilterParagraphContainer,
} from "./styles/MyWorks.styles";

const MyWorks: FC = () => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { header, filterItems } = selectedLanguage.myWorks;
  const worksExample = {
    first: { item: 1 },
    second: { item: 2 },
    third: { item: 3 },
    fourth: { item: 4 },
    fifth: { item: 5 },
    sixth: { item: 6 },
  };
  return (
    <Container>
      <Header>{header}</Header>
      <FilterContainer>
        {filterItems.map((item) => (
          <OneFilterParagraphContainer>
            <FilterParagraph>{item}</FilterParagraph>
          </OneFilterParagraphContainer>
        ))}
      </FilterContainer>
      <ExamplesContainer>
        {Object.values(worksExample).map((item) => (
          <Example>{item.item}</Example>
        ))}
      </ExamplesContainer>
    </Container>
  );
};

export default MyWorks;
