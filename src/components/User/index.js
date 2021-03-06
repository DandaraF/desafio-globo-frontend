import * as S from "./styles";
import { user } from "../../assets/img";

const User = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Border>
          <S.ImgUser src={user} alt="Foto do usuário" />
        </S.Border>
      </S.Content>
    </S.Container>
  );
};

export default User;
