import * as S from "./styles";

const TextArea = ({
  plaholder,
  onChange,
  maxLength,
  name,
  value,
  height,
  ...other
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.TextArea
          placeholder={plaholder}
          onChange={onChange}
          maxLength={maxLength}
          name={name}
          value={value}
          height={height}
          {...other}
        />
      </S.Content>
    </S.Container>
  );
};

export default TextArea;
