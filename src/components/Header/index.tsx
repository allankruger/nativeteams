import { Container, Logo } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
    </Container>
  );
};
