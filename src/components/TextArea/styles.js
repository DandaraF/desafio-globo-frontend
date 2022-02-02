import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 6px;
`;

export const TextArea = styled.textarea`
  font-weight: 300;
  font-size: 0.9rem;
  height: ${(props) => props.height};
  border: none;
  resize: none;
  outline: none;
  color: ${({ theme }) => theme.palette.text.tertiary.tertiary_3};
  ::placeholder {
    font-size: 0.7x;
    font-style: italic;
    letter-spacing: -1px;
    color: ${({ theme }) => theme.palette.background.secondary}40;
  }
`;
