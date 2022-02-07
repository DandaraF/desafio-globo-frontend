import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  gap: 24px;
  box-shadow: 1px 4px 6px 2px
    ${({ theme }) => theme.palette.background.secondary}10;
  background-color: ${(props) => props.theme.palette.background.default};
`;

export const Text = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: 500;
`;
