import { useState } from "react";
import * as S from "./styles";
import { arrow } from "../../assets/img";
import {
  TextArea,
  Hr,
  Label,
  LimiterCaracter,
  Title,
  Button,
} from "../../components";

const Register = () => {
  const [counter, setCounter] = useState(0);
  // const [values, setValues] = useState([]);

  function limiterCaracter(e) {
    setCounter(e.target.value.length);
  }
  // function onChange(value) {
  //   setValues({ ...values, insight: insight, category: category });
  // }

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
              onChange={(e) => {
                limiterCaracter(e);
                // onChange(e.target.value);
              }}
              maxLength="400"
              name="Insight"
              height="176px"
              // value={values.insight}
            />
            <Hr />
            <LimiterCaracter
              mgbottom="24px"
              text={`limite de caracteres:`}
              caracter={counter}
            />
          </S.Item>
          <S.Item>
            <Label>CATEGORIA</Label>
            <TextArea
              plaholder="Adicione uma categoria (opcional)..."
              onChange={(e) => {
                // onChange(e.target.value);
              }}
              name="category"
              // value={values.category}
            />
            <Hr />
          </S.Item>
        </S.Content>
      </S.ContainerContent>
      <S.ContainerButton>
        <Button>PUBLICAR</Button>
      </S.ContainerButton>
    </S.Container>
  );
};

export default Register;
