import * as S from "./styles";
import { user } from "../../assets/img";

const User = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ImgUser src={user} alt="Foto do usuário" />
        <S.Name>Olá, Dandara!</S.Name>
        <S.Email>dandara.fsilva@hotmail.com</S.Email>
      </S.Content>
    </S.Container>
  );
};

export default User;
