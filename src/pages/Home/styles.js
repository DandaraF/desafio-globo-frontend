import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.palette.background.primary};
`;

export const Content = styled.div``;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 24px;
  margin-top: -135px;
`;
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Loading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
