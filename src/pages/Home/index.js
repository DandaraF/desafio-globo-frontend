import * as S from "./styles";
import { Header, Feed, Search } from "../../components";

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Feed />
      </S.Content>
      <S.Search>
        <Search plaholder="Pesquise por termos ou categorias..." />
      </S.Search>
    </S.Container>
  );
};

export default Home;
