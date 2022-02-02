import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  padding-top: 8px;
  text-align: right;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.text.primary}80;
  font-style: italic;
  margin-bottom: ${(props) => props.mgbottom};
`;
