import * as S from "./styles";

const Text = ({ text, maxLength, mgbottom }) => {
  return (
    <S.Container>
      <S.Text mgbottom={mgbottom}>
        {text}
        {maxLength}
      </S.Text>
    </S.Container>
  );
};

export default Text;
