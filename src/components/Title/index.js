import * as S from "./styles";

const Title = ({ children, fontsize, color, weight, pdtop, ...other }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Text
          fontsize={fontsize}
          color={color}
          weight={weight}
          pdtop={pdtop}
          {...other}
        >
          {children}
        </S.Text>
      </S.Content>
    </S.Container>
  );
};

export default Title;
