import * as S from "./styles";

const Button = ({ children }) => {
  return (
    <S.Container>
      <S.Button>{children}</S.Button>
    </S.Container>
  );
};

export default Button;
