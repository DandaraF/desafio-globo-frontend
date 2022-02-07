import * as S from "./styles";

const Card = ({ text, children }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Text>{text}</S.Text>
        {children}
      </S.Content>
    </S.Container>
  );
};

export default Card;
