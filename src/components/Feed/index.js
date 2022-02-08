import * as S from "./styles";

import Tag from "../Tag";
import Text from "../Text";
import Card from "../Card";
import Title from "../Title";
import Loading from "../Loading";

const Feed = () => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

export default Feed;
