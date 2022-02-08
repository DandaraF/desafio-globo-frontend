import * as S from "./styles";

const Text = ({ children }) => {
  return (
    <S.Container>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
};

export default Text;
