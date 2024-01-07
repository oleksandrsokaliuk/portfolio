import { FC } from "react";
import { Container, Description, Header } from "../styles/SwiperItems.styled";

interface SwiperItemProps {
  header: string;
  team?: string;
  league?: string;
  picture: string;
}

const SwiperItem: FC<SwiperItemProps> = ({ header, team, league, picture }) => {
  return (
    <Container picture={picture}>
      <Header>{header}</Header>
      {team && <Description>{team}</Description>}
      {league && <Description>{league}</Description>}
    </Container>
  );
};

export default SwiperItem;
