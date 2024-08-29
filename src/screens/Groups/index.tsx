import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ScreenTitle } from "../../components/ScreenTitle";
import { TeamCard } from "../../components/TeamCard";

export const Groups = () => {
  return (
    <Container>
      <Header />
      <ScreenTitle title="Teams" subtitle="play with your team" />
      <TeamCard title="Team 1" />
      <TeamCard title="Team 2" />
      <TeamCard title="Team 3" />
      <TeamCard title="Team 4" />
      <TeamCard title="Team 5" />
    </Container>
  );
};
