import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 8px;
  gap: 3px;
`;
export const Caracteres = styled.div`
  display: flex;
  justify-content: right;
  width: 45px;
`;

export const Text = styled.p`
  min-width: 20px;
  text-align: right;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.text.primary}80;
  font-style: italic;
  margin-bottom: ${(props) => props.msdgbottom};
`;
