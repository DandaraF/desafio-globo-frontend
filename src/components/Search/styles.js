import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 0 36px 0 16px;
  height: 56px;
  width: 100%;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.background.default};
  box-shadow: 0 0 1px 2px
    ${({ theme }) => theme.palette.background.tertiary.tertiary_3}20;
  outline: none;
  ::placeholder {
    font-weight: 400;
    font-style: italic;
    color: ${(props) => props.theme.palette.text.primary}8;
  }
`;

export const Button = styled.button`
  width: auto;
  height: 100%;
  border-style: none;
  background-color: ${(props) => props.theme.palette.background.default};
  margin-left: -32px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  opacity: 40%;
`;
