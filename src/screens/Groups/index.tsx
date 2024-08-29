import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ScreenTitle } from "../../components/ScreenTitle";

export const Groups = () => {
  return (
    <Container>
      <Header />
      <ScreenTitle title="Teams" subtitle="play with your team" />
    </Container>
  );
};
