import * as S from "./styles";

const LimiterCaracter = ({ text, caracter, mgbottom }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Text mgbottom={mgbottom}>{text}</S.Text>
        <S.Caracteres>
          <S.Text>{caracter}</S.Text>
          <S.Text>/400</S.Text>
        </S.Caracteres>
      </S.Content>
    </S.Container>
  );
};

export default LimiterCaracter;
