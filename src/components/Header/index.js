import * as S from "./styles";
import Profile from "../Profile";
import Title from "../Title";

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Profile />
        <Title>
          Feed de <span>Insights</span>
        </Title>
      </S.Content>
    </S.Container>
  );
};

export default Header;
