import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.palette.background.primary};
`;

export const Content = styled.div`
  flex: 1 0 auto;
`;

export const Search = styled.div`
  flex-shrink: 0;
  padding: 16px;
`;
