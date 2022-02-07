import * as S from "./styles";
import { Header, Card, Tag } from "../../components";

const Home = () => {
  return (
    <S.Container>
      <S.Content>
        <Header />
        <Card text="Arrascaeta fez a diferença e garantiu a vitória para o time rúbro-negro.">
          <Tag text="jogador" />
        </Card>
      </S.Content>
    </S.Container>
  );
};

export default Home;
