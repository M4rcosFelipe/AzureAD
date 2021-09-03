import { Background } from "./styles";
import { MainContainer } from "@components";

const MainLayout = ({ children }) => {
  return (
    <Background>
      <MainContainer>{children}</MainContainer>
    </Background>
  );
};

export default MainLayout;
