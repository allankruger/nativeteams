import { Container, Logo } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
    </Container>
  );
};

export default Header;
