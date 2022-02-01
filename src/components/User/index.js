import * as S from "./styles";
import { user } from "../../assets/img";
import Title from "../Title";

const User = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ImgUser src={user} alt="Foto do usuário" />
        <S.Name>Olá, Dandara!</S.Name>
        <S.Email>dandara.fsilva@hotmail.com</S.Email>
        <Title pdtop="40px">
          Feed de <span>Insights</span>
        </Title>
      </S.Content>
    </S.Container>
  );
};

export default User;
