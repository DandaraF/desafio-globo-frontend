import * as S from "./styles";

const Title = ({ children, fontsize, color, weight, ...other }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Text fontsize={fontsize} color={color} weight={weight} {...other}>
          {children}
        </S.Text>
      </S.Content>
    </S.Container>
  );
};

export default Title;
