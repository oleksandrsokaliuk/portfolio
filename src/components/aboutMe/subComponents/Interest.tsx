import { FC } from "react";
import {
  Description,
  InterestContainer,
  Title,
} from "../styles/Interest.styles";

export interface InterestProps {
  title: string;
  description: string;
  team?: string;
  league?: string;
  position?: string;
  genres?: string;
  favGames?: string;
  image: string;
  putInterestBack?: () => void;
  index?: number;
  bg?: string;
}

const Interest: FC<InterestProps> = ({
  title,
  description,
  team,
  league,
  position,
  genres,
  favGames,
  image,
  index,
  putInterestBack,
  bg,
}) => {
  return (
    <InterestContainer
      image={image}
      drag
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
      onDragEnd={putInterestBack}
      index={index}
      bg={bg}
    >
      <Title>{title}</Title>
      {/* <Description>{description}</Description> */}
      {/* {team && <Description>{team}</Description>}
      {league && <Description>{league}</Description>}
      {position && <Description>{position}</Description>}
      {genres && <Description>{genres}</Description>}
      {favGames && <Description>{favGames}</Description>} */}
    </InterestContainer>
  );
};

export default Interest;
