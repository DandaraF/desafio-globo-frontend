import * as S from "./styles";
import { arrow } from "../../assets/img";
import { TextArea, Hr, Label, Text, Title } from "../../components";

const Register = () => {
  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Header>
          <S.ItemHeader>
            <S.Img src={arrow} alt="voltar" />
          </S.ItemHeader>
          <S.ItemHeader>
            <Title width="100px">
              CRIAR <strong>INSIGHT</strong>
            </Title>
          </S.ItemHeader>
          <S.ItemHeader />
        </S.Header>
      </S.ContainerHeader>

      <S.ContainerContent>
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
            <Text
              mgbottom="24px"
              text="limite de caracteres: "
              maxLength="400"
            />
          </S.Item>
          <S.Item>
            <Label>CATEGORIA</Label>
            <TextArea plaholder="Adicione uma categoria (opcional)..." />
            <Hr />
          </S.Item>
        </S.Content>
      </S.ContainerContent>
    </S.Container>
  );
};

export default Register;
