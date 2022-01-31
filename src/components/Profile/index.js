import * as S from "./styles";
import { logo, user, add } from "../../assets/img";

const Profile = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo src={logo} alt="Logo" />
        <S.ImgUser src={user} alt="Foto do usuário" />
        <S.More src={add} alt="Icone de adicionar" />
      </S.Content>
    </S.Container>
  );
};

export default Profile;
