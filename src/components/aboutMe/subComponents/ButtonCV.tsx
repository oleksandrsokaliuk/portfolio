import { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { languageSelector } from "../../../redux/languageSlice";
import { CVDownloadButton, CVDownloadIcon } from "../styles/Info.styles";

const ButtonCV: FC = () => {
  const languageState = useAppSelector(languageSelector);
  return (
    <CVDownloadButton href={languageState.cv} download={languageState.cvName}>
      {languageState.aboutMe.cvButton}
      <CVDownloadIcon />
    </CVDownloadButton>
  );
};

export default ButtonCV;
