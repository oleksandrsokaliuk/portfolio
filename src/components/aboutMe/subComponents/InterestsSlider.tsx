import React, { FC, useEffect, useRef, useState } from "react";
import Interest, { InterestProps } from "./Interest";
import footballBG from "../../../assets/football.svg";
import musicBG from "../../../assets/music.svg";
import videogamesBG from "../../../assets/videogames.svg";
import languagesBG from "../../../assets/languages.svg";
import { InterestsSliderContainer } from "../styles/Interest.styles";
import { useAppSelector } from "../../../redux/hooks";
import { languageSelector } from "../../../redux/languageSlice";
import { useInView } from "framer-motion";

interface InterestsSliderI {
  appears?: boolean;
}

const InterestsSlider: FC<InterestsSliderI> = ({ appears }) => {
  // const interestsRef = useRef(null);
  // const isInterestsInView = useInView(interestsRef);
  const selectedLanguage = useAppSelector(languageSelector);
  const allInterests = [
    {
      title: selectedLanguage.interests.football.header,
      description: selectedLanguage.interests.football.description,
      team: selectedLanguage.interests.football.team,
      league: selectedLanguage.interests.football.league,
      position: selectedLanguage.interests.football.position,
      image: "images",
      index: 4,
      bg: footballBG,
    },
    {
      title: selectedLanguage.interests.music.header,
      description: selectedLanguage.interests.music.description,
      genres: selectedLanguage.interests.music.genres,
      image: "images",
      index: 3,
      bg: musicBG,
    },
    {
      title: selectedLanguage.interests.videoGames.header,
      description: selectedLanguage.interests.videoGames.description,
      genres: selectedLanguage.interests.videoGames.genres,
      favGames: selectedLanguage.interests.videoGames.favGames,
      image: "images",
      index: 2,
      bg: videogamesBG,
    },
    {
      title: selectedLanguage.interests.languages.header,
      description: selectedLanguage.interests.languages.description,
      image: "images",
      index: 1,
      bg: languagesBG,
    },
  ];

  const [interests, setInterests] = useState<InterestProps[]>(allInterests);
  useEffect(() => {
    setInterests(allInterests);
  }, [selectedLanguage]);

  const putInterestBack = () => {
    const interestsCopy = [...interests];
    interestsCopy.forEach(
      (interest) =>
        (interest.index =
          interest.index !== 4 ? interest.index && interest.index + 1 : 1)
    );
    setInterests(interestsCopy);
  };
  return (
    <InterestsSliderContainer
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 1000 }}
    >
      {interests.map((interest) => (
        <Interest
          title={interest.title}
          description={interest.description}
          image={interest.image}
          putInterestBack={putInterestBack}
          index={interest.index}
          bg={interest.bg}
          team={interest.team}
          league={interest.league}
          position={interest.position}
          genres={interest.genres}
          favGames={interest.favGames}
        />
      ))}
    </InterestsSliderContainer>
  );
};

export default InterestsSlider;
