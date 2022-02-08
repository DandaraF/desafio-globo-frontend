import * as S from "./styles";
import { Header, Card, Tag, Title, Loading, Text } from "../../components";

const Home = () => {
  return (
    <S.Container>
      <S.Content>
        <Header />
        <S.Feed>
          <Title>
            Feed de <strong>Insights</strong>
          </Title>
          <S.Cards>
            <Card text="FLamengo consegue boa vitória fora de casa na estréia da Copa Libertadores 2021."></Card>
            <Card text="Primeira partida de um grupo difícil exigiu que o time carioca virasse o placar em dois momentos do jogo.">
              <Tag text="temporada" />
            </Card>
            <Card text="O flamengo não conseguia vencer um time na Argentina há mais de 40 anos.">
              <Tag text="histórico" />
            </Card>
            <Card text="Arrascaeta fez a diferença e garantiu a vitória para o time rúbro-negro.">
              <Tag text="jogador" />
            </Card>
          </S.Cards>
          <S.Loading>
            <Loading />
            <Text>Toque para exibir mais insights</Text>
          </S.Loading>
        </S.Feed>
      </S.Content>
    </S.Container>
  );
};

export default Home;
