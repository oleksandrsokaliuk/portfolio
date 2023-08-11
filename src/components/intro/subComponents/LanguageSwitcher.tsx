import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Language } from "../../../data/dataTypes";
import { changeLanguage, languageSelector } from "../../../redux/languageSlice";
import {
  LangSwitcherContainer,
  LangSwitcherItem,
  LanguageIcon,
  LanguageMainContainer,
} from "../styles/LanguageSwitcher.styles";

const LanguageSwitcher: FC = () => {
  const languages = [Language.ENGLISH, Language.GERMAN, Language.UKRAINIAN];
  const dispatch = useAppDispatch();
  const selectedLanguage = useAppSelector(languageSelector);
  const appLanguage = selectedLanguage.language;
  const [isSwitcherExtended, setIsSwitcherExtended] = useState<boolean>(false);
  return (
    <LanguageMainContainer>
      <LangSwitcherContainer isSwitcherExtended={isSwitcherExtended}>
        {languages.map((language) => (
          <LangSwitcherItem
            style={{ x: isSwitcherExtended ? 0 : 100 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [0, 1, 0.8, 1] }}
            onClick={() => {
              if (language === Language.ENGLISH) {
                dispatch(changeLanguage(language));
              } else if (language === Language.GERMAN) {
                dispatch(changeLanguage(language));
              } else if (language === Language.UKRAINIAN) {
                dispatch(changeLanguage(language));
              }
            }}
            selected={appLanguage === language}
          >
            {language}
          </LangSwitcherItem>
        ))}
      </LangSwitcherContainer>
      <LanguageIcon
        onClick={() => setIsSwitcherExtended((prevState) => !prevState)}
      />
    </LanguageMainContainer>
  );
};

export default LanguageSwitcher;
