import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const Content = styled.div`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.background.secondary}10;
  box-shadow: 0 2px 0 0 ${({ theme }) => theme.palette.background.secondary}20;
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
`;
