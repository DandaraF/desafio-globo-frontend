import * as S from "./styles";

const Tag = ({ text }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Text>{text}</S.Text>
      </S.Content>
    </S.Container>
  );
};

export default Tag;
