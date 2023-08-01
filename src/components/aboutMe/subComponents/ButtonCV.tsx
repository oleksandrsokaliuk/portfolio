import { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { languageSelector } from "../../../redux/languageSlice";
import { CVDownloadButton } from "../styles/Info.styles";

const ButtonCV: FC = () => {
  const languageState = useAppSelector(languageSelector);
  return <CVDownloadButton>{languageState.aboutMe.cvButton}</CVDownloadButton>;
};

export default ButtonCV;
