import * as S from "./styles";

const Label = ({ children }) => {
  return (
    <S.Container>
      <S.Label>{children}</S.Label>
    </S.Container>
  );
};

export default Label;
