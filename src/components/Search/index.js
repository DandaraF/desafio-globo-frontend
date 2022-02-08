import { search } from "../../assets/img";
import * as S from "./styles";

const Search = ({ plaholder }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Input type="text" placeholder={plaholder} />
        <S.Button type="submit">
          <S.Img src={search} alt="Pesquisar" />
        </S.Button>
      </S.Content>
    </S.Container>
  );
};

export default Search;
