import { Link } from "react-router-dom";
import * as S from "./styles";
import { logo, add } from "../../assets/img";
import User from "../User";
import Contact from "../Contact";

const Profile = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Item padTop="12px">
          <S.Logo src={logo} alt="Logo" />
        </S.Item>
        <S.Item>
          <User />
          <Contact />
        </S.Item>
        <S.Item padTop="16px">
          <Link to="/cadastro">
            <S.More src={add} alt="Icone de adicionar" />
          </Link>
        </S.Item>
      </S.Content>
    </S.Container>
  );
};

export default Profile;
