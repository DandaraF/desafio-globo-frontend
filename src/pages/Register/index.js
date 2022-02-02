import * as S from "./styles";
import { TextArea, Hr, Label, Text } from "../../components";

const Register = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Item>
          <Label>INSIGHT</Label>
          <TextArea
            plaholder="Escreva aqui o seu insight..."
            label="INSIGHT"
            textLength="limite de caracteres"
            maxLength="400"
            height="176px"
          />
          <Hr />
          <Text mgbottom="24px" text="limite de caracteres: " maxLength="400" />
        </S.Item>
        <S.Item>
          <Label>CATEGORIA</Label>
          <TextArea plaholder="Adicione uma categoria (opcional)..." />
          <Hr />
        </S.Item>
      </S.Content>
    </S.Container>
  );
};

export default Register;
