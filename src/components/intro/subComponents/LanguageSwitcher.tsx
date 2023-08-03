import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Language } from "../../../data/dataTypes";
import { changeLanguage, languageSelector } from "../../../redux/languageSlice";
import {
  LangSwitcherContainer,
  LangSwitcherItem,
} from "../styles/LanguageSwitcher.styles";

const LanguageSwitcher: FC = () => {
  const languages = [Language.ENGLISH, Language.GERMAN, Language.UKRAINIAN];
  const dispatch = useAppDispatch();
  const selectedLanguage = useAppSelector(languageSelector);
  const appLanguage = selectedLanguage.language;
  return (
    <LangSwitcherContainer>
      {languages.map((language) => (
        <LangSwitcherItem
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
  );
};

export default LanguageSwitcher;
